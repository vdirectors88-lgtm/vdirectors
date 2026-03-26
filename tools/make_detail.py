"""
VDIRECTORS — 포트폴리오 상세 이미지 생성기
모든 상세 이미지를 1600×900px 프레젠테이션 스타일로 통일
"""

from PIL import Image, ImageDraw, ImageFont
import os, sys

# ── 설정 ──────────────────────────────────────────────
CANVAS_W, CANVAS_H = 1600, 900
BG       = (13, 13, 13)        # #0D0D0D  다크 배경
ACCENT   = (255, 255, 255)     # 흰색 텍스트
SUBTLE   = (90, 90, 90)        # 서브텍스트
LINE_COL = (40, 40, 40)        # 구분선

IMG_PAD_X   = 140              # 이미지 좌우 여백
IMG_PAD_TOP = 80               # 이미지 상단 여백
INFO_H      = 110              # 하단 인포 영역 높이

FONT_DIR = "C:/Users/PC/AppData/Local/Microsoft/Windows/Fonts"
FONT_BOLD = os.path.join(FONT_DIR, "Pretendard-SemiBold.ttf")
FONT_REG  = os.path.join(FONT_DIR, "Pretendard-Light.ttf")

BASE = "C:/Users/PC/Desktop/vdirectors/assets/portfolio"

# ── 포트폴리오 데이터 ──────────────────────────────────
items = [
    {"id": "pt1",  "name": "MBC C&I",         "cat": "WEB / MARKETING",   "detail": ["detail/pt1/1.png"]},
    {"id": "pt2",  "name": "연세대학교",         "cat": "WEB",               "detail": ["detail/pt2/1.png"]},
    {"id": "pt3",  "name": "VARRAM",           "cat": "BRAND DESIGN",      "detail": ["detail/pt3/1.jpg"]},
    {"id": "pt4",  "name": "진해양봉",           "cat": "BRAND DESIGN",      "detail": ["detail/pt4/1.png"]},
    {"id": "pt6",  "name": "육대장",            "cat": "WEB / DESIGN",      "detail": ["detail/pt6/1.png"]},
    {"id": "pt7",  "name": "b belladörr",      "cat": "BRAND DESIGN",      "detail": ["detail/pt7/1.png"]},
    {"id": "pt8",  "name": "AIinsight",        "cat": "WEB / UI·UX",       "detail": ["detail/pt8/1.png"]},
    {"id": "pt9",  "name": "BESTSOLUTION",     "cat": "WEB",               "detail": ["detail/pt9/1.png"]},
    {"id": "pt12", "name": "나무감정평가법인",     "cat": "LOGO DESIGN",       "detail": ["detail/pt12/1.png"]},
    {"id": "pt13", "name": "피플인아트",          "cat": "BRAND DESIGN",      "detail": ["detail/pt13/1.png"]},
    {"id": "pt15", "name": "THELSTAR",         "cat": "BRAND DESIGN",      "detail": ["detail/pt15/1.png"]},
    {"id": "pt18", "name": "MOMENTO",          "cat": "BRAND DESIGN",      "detail": ["detail/pt18/1.png"]},
    {"id": "pt20", "name": "SA",               "cat": "LOGO DESIGN",       "detail": ["detail/pt20/1.jpg"]},
    {"id": "pt21", "name": "LA FLORELLE",      "cat": "BRAND DESIGN",      "detail": ["detail/pt21/1.png"]},
    {"id": "pt23", "name": "CLEANHARA",        "cat": "BRAND DESIGN",      "detail": ["detail/pt23/1.png"]},
    {"id": "pt24", "name": "DAEKYUNG ESCO",    "cat": "LOGO DESIGN",       "detail": ["detail/pt24/1.png"]},
    {"id": "pt28", "name": "KEMY",             "cat": "BRAND DESIGN",      "detail": []},
    {"id": "pt30", "name": "ABCLABS",          "cat": "WEB / LOGO DESIGN", "detail": ["detail/pt30/1.png"]},
    {"id": "pt31", "name": "PROPER COMPANY",   "cat": "BRAND DESIGN",      "detail": ["detail/pt31/1.jpg"]},
    {"id": "pt32", "name": "HYPHEN",           "cat": "LOGO DESIGN",       "detail": ["detail/pt32/1.png"]},
    {"id": "pt33", "name": "CBS",              "cat": "WEB",               "detail": ["detail/pt33/1.png", "detail/pt33/2.png"]},
    {"id": "pt34", "name": "ECO Bio",          "cat": "BRAND DESIGN",      "detail": ["detail/pt34/1.png"]},
    {"id": "pt35", "name": "BLAZAR",           "cat": "WEB",               "detail": ["detail/pt35/1.png"]},
    {"id": "pt37", "name": "YAMOUZINE BROS",   "cat": "BRAND DESIGN",      "detail": ["detail/pt37/1.png"]},
]

# ── 폰트 로드 ──────────────────────────────────────────
try:
    font_name = ImageFont.truetype(FONT_BOLD, 32)
    font_cat  = ImageFont.truetype(FONT_REG,  15)
    font_idx  = ImageFont.truetype(FONT_REG,  13)
except Exception as e:
    print(f"Font error: {e}")
    sys.exit(1)

# ── 단일 이미지 → 프레젠테이션 캔버스 ─────────────────────
def make_card(src_path, pt_id, name, cat, page_num, total_pages):
    src = Image.open(src_path).convert("RGBA")
    src_w, src_h = src.size

    # 이미지 영역 크기 계산
    area_w = CANVAS_W - IMG_PAD_X * 2
    area_h = CANVAS_H - IMG_PAD_TOP - INFO_H - 32  # 32 = 구분선~이미지 gap

    src_ratio  = src_w / src_h
    area_ratio = area_w / area_h

    # 캔버스 생성
    canvas = Image.new("RGBA", (CANVAS_W, CANVAS_H), BG + (255,))

    if src_ratio >= area_ratio * 0.55:
        # ── 가로형/정사각형: contain (여백 포함) ──
        ratio  = min(area_w / src_w, area_h / src_h)
        new_w  = int(src_w * ratio)
        new_h  = int(src_h * ratio)
        src_r  = src.resize((new_w, new_h), Image.LANCZOS)
        x = (CANVAS_W - new_w) // 2
        y = IMG_PAD_TOP + (area_h - new_h) // 2
        canvas.paste(src_r, (x, y), src_r)
    else:
        # ── 세로형(케이스 스터디 스크롤): cover crop — 상단에서 채움 ──
        # 폭 기준으로 area_w에 맞게 확대
        ratio  = area_w / src_w
        new_w  = area_w
        new_h  = int(src_h * ratio)
        src_r  = src.resize((new_w, new_h), Image.LANCZOS)

        # 세로는 상단부터 crop
        crop_start = 0
        crop_end   = crop_start + area_h
        if crop_end > new_h:
            crop_start = max(0, new_h - area_h)
            crop_end   = new_h
        cropped = src_r.crop((0, crop_start, new_w, crop_end))

        x = IMG_PAD_X
        y = IMG_PAD_TOP
        canvas.paste(cropped, (x, y), cropped)

    draw = ImageDraw.Draw(canvas)

    # 구분선
    line_y = CANVAS_H - INFO_H
    draw.line([(IMG_PAD_X, line_y), (CANVAS_W - IMG_PAD_X, line_y)], fill=LINE_COL, width=1)

    # 프로젝트명
    name_y = line_y + 28
    draw.text((IMG_PAD_X, name_y), name, font=font_name, fill=ACCENT)

    # 카테고리
    cat_y = name_y + 42
    draw.text((IMG_PAD_X, cat_y), cat, font=font_cat, fill=SUBTLE)

    # 페이지 카운터 (우하단)
    if total_pages > 1:
        counter = f"{page_num} / {total_pages}"
        bbox = draw.textbbox((0, 0), counter, font=font_cat)
        cw = bbox[2] - bbox[0]
        draw.text((CANVAS_W - IMG_PAD_X - cw, cat_y), counter, font=font_cat, fill=SUBTLE)

    return canvas.convert("RGB")

# ── KEMY: 썸네일 기반으로 카드 생성 ───────────────────────
def make_kemy_card():
    thumb_path = os.path.join(BASE, "img/pt28.png")
    if not os.path.exists(thumb_path):
        return None
    return make_card(thumb_path, "pt28", "KEMY", "BRAND DESIGN", 1, 1)

# ── 메인 처리 ─────────────────────────────────────────
out_dir = os.path.join(BASE, "detail_rendered")
os.makedirs(out_dir, exist_ok=True)

for item in items:
    pt  = item["id"]
    name = item["name"]
    cat  = item["cat"]

    if not item["detail"]:
        # KEMY: 썸네일 사용
        card = make_kemy_card()
        if card:
            out_path = os.path.join(out_dir, f"{pt}_1.jpg")
            card.save(out_path, "JPEG", quality=92)
            print(f"✓ {pt} ({name}) — thumb fallback")
        continue

    total = len(item["detail"])
    for i, rel_path in enumerate(item["detail"]):
        src_path = os.path.join(BASE, rel_path)
        if not os.path.exists(src_path):
            print(f"✗ {pt} [{i+1}] — file not found: {src_path}")
            continue
        card = make_card(src_path, pt, name, cat, i + 1, total)
        out_path = os.path.join(out_dir, f"{pt}_{i+1}.jpg")
        card.save(out_path, "JPEG", quality=92)
        print(f"✓ {pt} [{i+1}/{total}] ({name})")

print("\nDone! →", out_dir)
