"""
VDIRECTORS — 신규 포트폴리오 14개 업로드 + 시딩 스크립트
- Supabase Storage 'portfolio' 버킷에 이미지 업로드
- portfolio 테이블에 데이터 insert (sort_order 25~38)
"""

import os
import requests
import mimetypes

SUPABASE_URL  = 'https://zpyzgicyfkancewoxmbg.supabase.co'
SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpweXpnaWN5ZmthbmNld294bWJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0NjE5NTcsImV4cCI6MjA5MDAzNzk1N30.ZmOKjLWPga8AZ6nEvJUYh0c1QrqBmHaOCiIry3iEGiU'

HEADERS_AUTH = {
    'Authorization': f'Bearer {SUPABASE_ANON}',
    'apikey': SUPABASE_ANON,
}

IMG_DIR = os.path.join(os.path.dirname(__file__), '..', 'assets', 'portfolio', 'img')

NEW_ITEMS = [
    { 'sort_order': 25, 'name': '삼성증권',    'category': 'web',    'tags': ['웹사이트'],  'file': 'pt_new_156.png' },
    { 'sort_order': 26, 'name': '인천도시공사', 'category': 'web',    'tags': ['웹사이트'],  'file': 'pt_new_157.png' },
    { 'sort_order': 27, 'name': 'HAM',         'category': 'design', 'tags': ['디자인'],    'file': 'pt_new_163.png' },
    { 'sort_order': 28, 'name': '더그린',       'category': 'design', 'tags': ['디자인'],    'file': 'pt_new_164.png' },
    { 'sort_order': 29, 'name': '라이프뷰티아', 'category': 'design', 'tags': ['디자인'],    'file': 'pt_new_165.png' },
    { 'sort_order': 30, 'name': 'BNI',         'category': 'web',    'tags': ['웹사이트'],  'file': 'pt_new_170.png' },
    { 'sort_order': 31, 'name': '하트립',       'category': 'web',    'tags': ['웹사이트'],  'file': 'pt_new_171.png' },
    { 'sort_order': 32, 'name': '다른공간',     'category': 'design', 'tags': ['디자인'],    'file': 'pt_new_172.png' },
    { 'sort_order': 33, 'name': '렘디아',       'category': 'web',    'tags': ['웹사이트'],  'file': 'pt_new_173.png' },
    { 'sort_order': 34, 'name': '남성보약',     'category': 'design', 'tags': ['디자인'],    'file': 'pt_new_174.png' },
    { 'sort_order': 35, 'name': 'ARK',         'category': 'design', 'tags': ['디자인'],    'file': 'pt_new_179.png' },
    { 'sort_order': 36, 'name': '자심',         'category': 'design', 'tags': ['디자인'],    'file': 'pt_new_180.png' },
    { 'sort_order': 37, 'name': '하림',         'category': 'web',    'tags': ['웹사이트'],  'file': 'pt_new_181.png' },
    { 'sort_order': 38, 'name': '카카오뱅크',   'category': 'web',    'tags': ['웹사이트'],  'file': 'pt_new_182.png' },
]

def upload_image(file_name):
    file_path = os.path.normpath(os.path.join(IMG_DIR, file_name))
    if not os.path.exists(file_path):
        return None, f'파일 없음: {file_path}'

    mime = mimetypes.guess_type(file_path)[0] or 'image/png'
    storage_name = file_name  # Storage에 저장될 파일명

    with open(file_path, 'rb') as f:
        data = f.read()

    upload_url = f'{SUPABASE_URL}/storage/v1/object/portfolio/{storage_name}'
    headers = {**HEADERS_AUTH, 'Content-Type': mime, 'x-upsert': 'true'}
    res = requests.post(upload_url, headers=headers, data=data)

    if res.status_code in (200, 201):
        public_url = f'{SUPABASE_URL}/storage/v1/object/public/portfolio/{storage_name}'
        return public_url, None
    else:
        return None, f'업로드 실패 ({res.status_code}): {res.text}'

def insert_record(item, thumb_url):
    payload = {
        'sort_order':  item['sort_order'],
        'name':        item['name'],
        'category':    item['category'],
        'tags':        item['tags'],
        'thumb_url':   thumb_url,
        'detail_images': [],
    }
    headers = {
        **HEADERS_AUTH,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates',
    }
    res = requests.post(
        f'{SUPABASE_URL}/rest/v1/portfolio',
        headers=headers,
        json=payload
    )
    if res.status_code in (200, 201):
        return None
    else:
        return f'DB insert 실패 ({res.status_code}): {res.text}'

def main():
    print('=== VDIRECTORS 신규 포트폴리오 시딩 ===\n')
    success = 0
    fail = 0

    for item in NEW_ITEMS:
        print(f'[{item["sort_order"]}] {item["name"]} ... ', end='', flush=True)

        # 1. Storage 업로드
        thumb_url, err = upload_image(item['file'])
        if err:
            print(f'FAIL {err}')
            fail += 1
            continue

        # 2. DB insert
        err = insert_record(item, thumb_url)
        if err:
            print(f'FAIL {err}')
            fail += 1
            continue

        print(f'OK {thumb_url}')
        success += 1

    print(f'\n완료: 성공 {success}개 / 실패 {fail}개')

if __name__ == '__main__':
    main()
