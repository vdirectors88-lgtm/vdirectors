"""
VDIRECTORS — Supabase 버킷 생성 + 이미지 업로드 + 데이터 시딩
"""
import os, json, requests, mimetypes

SUPABASE_URL     = "https://zpyzgicyfkancewoxmbg.supabase.co"
SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpweXpnaWN5ZmthbmNld294bWJnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDQ2MTk1NywiZXhwIjoyMDkwMDM3OTU3fQ.VC52H58cp7c-4WHRLvo6uHtoPtcvr09sBtbv3iPbonw"

HEADERS = {
    "apikey": SERVICE_ROLE_KEY,
    "Authorization": f"Bearer {SERVICE_ROLE_KEY}",
}

BASE = "C:/Users/PC/Desktop/vdirectors/assets/portfolio"

# ── 포트폴리오 데이터 ──────────────────────────────────────
PORTFOLIO = [
    {"id":"pt1",  "name":"MBC C&I",          "category":"web",    "tags":["홈페이지 개발","마케팅"]},
    {"id":"pt2",  "name":"연세대학교",          "category":"web",    "tags":["홈페이지 개발"]},
    {"id":"pt3",  "name":"VARRAM",            "category":"design", "tags":["브랜드 디자인","로고"]},
    {"id":"pt4",  "name":"진해양봉",            "category":"design", "tags":["브랜드 디자인","패키지"]},
    {"id":"pt6",  "name":"육대장",             "category":"web",    "tags":["홈페이지 개발","디자인"]},
    {"id":"pt7",  "name":"b belladörr",       "category":"design", "tags":["브랜드 디자인","로고"]},
    {"id":"pt8",  "name":"AIinsight",         "category":"web",    "tags":["홈페이지 개발","UI/UX"]},
    {"id":"pt9",  "name":"BESTSOLUTION",      "category":"web",    "tags":["홈페이지 개발"]},
    {"id":"pt12", "name":"나무감정평가법인",      "category":"design", "tags":["로고 디자인"]},
    {"id":"pt13", "name":"피플인아트",           "category":"design", "tags":["브랜드 디자인"]},
    {"id":"pt15", "name":"THELSTAR",          "category":"design", "tags":["브랜드 디자인","로고"]},
    {"id":"pt18", "name":"MOMENTO",           "category":"design", "tags":["브랜드 디자인"]},
    {"id":"pt20", "name":"SA",                "category":"design", "tags":["로고 디자인"]},
    {"id":"pt21", "name":"LA FLORELLE",       "category":"design", "tags":["브랜드 디자인","패키지"]},
    {"id":"pt23", "name":"CLEANHARA",         "category":"design", "tags":["브랜드 디자인"]},
    {"id":"pt24", "name":"DAEKYUNG ESCO",     "category":"design", "tags":["로고 디자인"]},
    {"id":"pt28", "name":"KEMY",              "category":"design", "tags":["브랜드 디자인","로고"]},
    {"id":"pt30", "name":"ABCLABS",           "category":"web",    "tags":["홈페이지 개발","로고 디자인"]},
    {"id":"pt31", "name":"PROPER COMPANY",    "category":"design", "tags":["브랜드 디자인"]},
    {"id":"pt32", "name":"HYPHEN",            "category":"design", "tags":["로고 디자인"]},
    {"id":"pt33", "name":"CBS",               "category":"web",    "tags":["홈페이지 개발"]},
    {"id":"pt34", "name":"ECO Bio",           "category":"design", "tags":["브랜드 디자인","로고"]},
    {"id":"pt35", "name":"BLAZAR",            "category":"web",    "tags":["홈페이지 개발"]},
    {"id":"pt37", "name":"YAMOUZINE BROS",    "category":"design", "tags":["브랜드 디자인"]},
]

def public_url(bucket, path):
    return f"{SUPABASE_URL}/storage/v1/object/public/{bucket}/{path}"

# ── 1. 버킷 생성 ──────────────────────────────────────────
def create_bucket(name):
    r = requests.post(
        f"{SUPABASE_URL}/storage/v1/bucket",
        headers={**HEADERS, "Content-Type": "application/json"},
        json={"id": name, "name": name, "public": True}
    )
    if r.status_code in (200, 201):
        print(f"[버킷] {name} 생성 완료")
    elif "already exists" in r.text:
        print(f"[버킷] {name} 이미 존재")
    else:
        print(f"[버킷] {name} 오류: {r.text}")

# ── 2. 파일 업로드 ─────────────────────────────────────────
def upload_file(bucket, storage_path, local_path):
    if not os.path.exists(local_path):
        print(f"  [스킵] 파일 없음: {local_path}")
        return None
    mime = mimetypes.guess_type(local_path)[0] or "application/octet-stream"
    with open(local_path, "rb") as f:
        r = requests.post(
            f"{SUPABASE_URL}/storage/v1/object/{bucket}/{storage_path}",
            headers={**HEADERS, "Content-Type": mime, "x-upsert": "true"},
            data=f
        )
    if r.status_code in (200, 201):
        return public_url(bucket, storage_path)
    else:
        print(f"  [오류] {storage_path}: {r.text[:80]}")
        return None

# ── 3. DB 시딩 ────────────────────────────────────────────
def insert_portfolio(rows):
    r = requests.post(
        f"{SUPABASE_URL}/rest/v1/portfolio",
        headers={**HEADERS, "Content-Type": "application/json", "Prefer": "return=minimal"},
        json=rows
    )
    if r.status_code in (200, 201):
        print(f"\n[DB] {len(rows)}개 시딩 완료")
    else:
        print(f"\n[DB] 시딩 오류: {r.text}")

# ── 메인 ──────────────────────────────────────────────────
print("=" * 50)
print("VDIRECTORS Supabase 셋업 시작")
print("=" * 50)

# 버킷 생성
create_bucket("portfolio-thumbs")
create_bucket("portfolio-detail")

# 이미지 업로드 + 데이터 준비
rows = []
for i, item in enumerate(PORTFOLIO):
    pt = item["id"]
    print(f"\n[{i+1}/{len(PORTFOLIO)}] {pt} — {item['name']}")

    # 썸네일 업로드
    thumb_local = f"{BASE}/img/{pt}.png"
    thumb_url = upload_file("portfolio-thumbs", f"{pt}.png", thumb_local)
    if thumb_url:
        print(f"  thumb: OK")

    # 상세 이미지 업로드 (detail_rendered)
    detail_urls = []
    n = 1
    while True:
        detail_local = f"{BASE}/detail_rendered/{pt}_{n}.jpg"
        if not os.path.exists(detail_local):
            break
        url = upload_file("portfolio-detail", f"{pt}_{n}.jpg", detail_local)
        if url:
            detail_urls.append(url)
            print(f"  detail {n}: OK")
        n += 1

    rows.append({
        "name":          item["name"],
        "category":      item["category"],
        "tags":          item["tags"],
        "thumb_url":     thumb_url,
        "detail_images": detail_urls,
        "sort_order":    i,
    })

# DB insert
insert_portfolio(rows)

print("\n" + "=" * 50)
print("완료!")
print("=" * 50)
