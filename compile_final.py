import re

def get_post_area_images(idx):
    filepath = f'C:/Users/PC/Desktop/vdirectors/detail_pages/detail_{idx}.html'
    with open(filepath, 'rb') as f:
        raw = f.read()
    text = raw.decode('euc-kr', errors='replace')

    positions = [m.start() for m in re.finditer(r'id="post_area"', text)]

    if not positions:
        return []

    for pos in positions:
        area = text[pos:pos+3000]
        imgs = re.findall(r'src=["\'](/[^"\']+(?:\.jpg|\.jpeg|\.png|\.gif))["\']', area, re.IGNORECASE)
        portfolio_imgs = [img for img in imgs if 'u_image' in img]
        if portfolio_imgs:
            return portfolio_imgs
    return []

thumb_map = {
    182: "/bizdemo119798/component/board/board_7/u_image/182/521516551_1.jpg",
    181: "/bizdemo119798/component/board/board_7/u_image/181/1496415718_1.jpg",
    180: "/bizdemo119798/component/board/board_7/u_image/180/100310120_1.jpg",
    174: "/bizdemo119798/component/board/board_7/u_image/174/1110319375_1.jpg",
    173: "/bizdemo119798/component/board/board_7/u_image/173/1934484040_1.jpg",
    172: "/bizdemo119798/component/board/board_7/u_image/172/2134810075_1.jpg",
    171: "/bizdemo119798/component/board/board_7/u_image/171/494494025_1.jpg",
    170: "/bizdemo119798/component/board/board_7/u_image/170/890861822_1.jpg",
    179: "/bizdemo119798/component/board/board_7/u_image/179/164470414_EC9584ED81ACEC8DB8.png",
    165: "/bizdemo119798/component/board/board_7/u_image/165/92253979_EC8DB8EB84A4EC9DBC.png",
    164: "/bizdemo119798/component/board/board_7/u_image/164/1692045277_EAB7B8EBA6B0ED8CAC-EC8DB8EB84A4EC9DBC.png",
    163: "/bizdemo119798/component/board/board_7/u_image/163/1805616598_EC8DB8EB84A4EC9DBC.png",
    162: "/bizdemo119798/component/board/board_7/u_image/162/496906330_1.png",
    161: "/bizdemo119798/component/board/board_7/u_image/161/2028273371_1.png",
    160: "/bizdemo119798/component/board/board_7/u_image/160/1095700515_1.png",
    159: "/bizdemo119798/component/board/board_7/u_image/159/1429405485_1.png",
    158: "/bizdemo119798/component/board/board_7/u_image/158/700587165_cbs-sum.png",
    157: "/bizdemo119798/component/board/board_7/u_image/157/2136366121_ED9598EC9DB4ED9488-sum.png",
    156: "/bizdemo119798/component/board/board_7/u_image/156/1204875945_EC96B4ED948CEB9DBCEC9DB4EB939C-EBA8B8ED84B0EBA6ACEC96BCECA688-sum.png",
    149: "/bizdemo119798/component/board/board_7/u_image/149/541911719_sum.png",
    148: "/bizdemo119798/component/board/board_7/u_image/148/2120541308_sum.png",
    138: "/bizdemo119798/component/board/board_7/u_image/138/1048272738_video_thum18.gif",
    137: "/bizdemo119798/component/board/board_7/u_image/137/1758641115_video_thum17.gif",
    136: "/bizdemo119798/component/board/board_7/u_image/136/1252795166_video_thum16.gif",
    133: "/bizdemo119798/component/board/board_7/u_image/133/295077835_video_thum13.gif",
    132: "/bizdemo119798/component/board/board_7/u_image/132/1192885633_video_thum12.gif",
    131: "/bizdemo119798/component/board/board_7/u_image/131/466866653_video_thum11.gif",
    128: "/bizdemo119798/component/board/board_7/u_image/128/305852010_video_thum08.gif",
    126: "/bizdemo119798/component/board/board_7/u_image/126/1971000291_video_thum06.gif",
    125: "/bizdemo119798/component/board/board_7/u_image/125/581742924_video_thum05.gif",
    124: "/bizdemo119798/component/board/board_7/u_image/124/16681602_video_thum04.gif",
    123: "/bizdemo119798/component/board/board_7/u_image/123/532478342_video_thum03.gif",
    122: "/bizdemo119798/component/board/board_7/u_image/122/1157898799_video_thum02.gif",
    121: "/bizdemo119798/component/board/board_7/u_image/121/352637293_video_thum01.gif",
    120: "/bizdemo119798/component/board/board_7/u_image/120/928889623_KakaoTalk_20220422_111911692.png",
    119: "/bizdemo119798/component/board/board_7/u_image/119/756725572_KakaoTalk_20220414_130522220_01.jpg",
    117: "/bizdemo119798/component/board/board_7/u_image/117/1408459233_KakaoTalk_20220317_173643778.jpg",
    116: "/bizdemo119798/component/board/board_7/u_image/116/444326675_KakaoTalk_20220318_113515120.jpg",
    115: "/bizdemo119798/component/board/board_7/u_image/115/858429418_KakaoTalk_20220317_173635969.jpg",
    114: "/bizdemo119798/component/board/board_7/u_image/114/485636525_KakaoTalk_20220126_175918294.jpg",
    113: "/bizdemo119798/component/board/board_7/u_image/113/1930089095_KakaoTalk_20220118_095051640_01.png",
    112: "/bizdemo119798/component/board/board_7/u_image/112/8626501_EBAAA8EBAAA8ED8BB0.png",
    111: "/bizdemo119798/component/board/board_7/u_image/111/1553316910_KakaoTalk_20220215_135448667_01.png",
    110: "/bizdemo119798/component/board/board_7/u_image/110/945863499_KakaoTalk_20220113_105722409_01.jpg",
    109: "/bizdemo119798/component/board/board_7/u_image/109/791663820_KakaoTalk_20220117_163715900.jpg",
    108: "/bizdemo119798/component/board/board_7/u_image/108/2013017526_EBB2A0EC8AA4ED8AB8EC8694EBA3A8EC8598.png",
    107: "/bizdemo119798/component/board/board_7/u_image/107/1664456394_EBA3A8ED8BB4.png",
    106: "/bizdemo119798/component/board/board_7/u_image/106/798774877_2.png",
    105: "/bizdemo119798/component/board/board_7/u_image/105/878223160_sum.png",
    92:  "/bizdemo119798/component/board/board_7/u_image/92/1958631396_KakaoTalk_20220105_161104641.png",
    91:  "/bizdemo119798/component/board/board_7/u_image/91/946805304_KakaoTalk_20220106_101146661.png",
    90:  "/bizdemo119798/component/board/board_7/u_image/90/196753165_KakaoTalk_20220105_150024598.png",
    89:  "/bizdemo119798/component/board/board_7/u_image/89/1371803491_EBA788ECBC93EC97A0EBB0A9.png",
    88:  "/bizdemo119798/component/board/board_7/u_image/88/2067287123_KakaoTalk_20211220_171618450.png",
    98:  "/bizdemo119798/component/board/board_7/u_image/98/104055273_KakaoTalk_20211216_165234283_01.png",
    87:  "/bizdemo119798/component/board/board_7/u_image/87/752296663_KakaoTalk_20211216_170948120.png",
    97:  "/bizdemo119798/component/board/board_7/u_image/97/1055794613_KakaoTalk_20211213_143639659_01.png",
    96:  "/bizdemo119798/component/board/board_7/u_image/96/1334529274_KakaoTalk_20211213_114635653_01.png",
    95:  "/bizdemo119798/component/board/board_7/u_image/95/1259828021_KakaoTalk_20211213_132839695_01.png",
    94:  "/bizdemo119798/component/board/board_7/u_image/94/9277278_KakaoTalk_20211209_162206854.png",
    104: "/bizdemo119798/component/board/board_7/u_image/104/1609275448_KakaoTalk_20211207_160658699.png",
    93:  "/bizdemo119798/component/board/board_7/u_image/93/1353488556_KakaoTalk_20211207_172729601_01.png",
    103: "/bizdemo119798/component/board/board_7/u_image/103/80735794_KakaoTalk_20211201_150112543.png",
    102: "/bizdemo119798/component/board/board_7/u_image/102/1744608324_KakaoTalk_20211130_153903451_01.jpg",
    101: "/bizdemo119798/component/board/board_7/u_image/101/318446999_KakaoTalk_20211130_153903451.jpg",
    100: "/bizdemo119798/component/board/board_7/u_image/100/1390286663_KakaoTalk_20211130_154901026_02.png",
    99:  "/bizdemo119798/component/board/board_7/u_image/99/1247341156_KakaoTalk_20211221_131729086_01.png",
}

all_items = [
    (1, 182, "육대장"), (2, 181, "하릭"), (3, 180, "코시"), (4, 174, "요고프로즌"),
    (5, 173, "코코팡"), (6, 172, "바른보험"), (7, 171, "배차킹"), (8, 170, "BNI"),
    (9, 179, "ARK 아크"), (10, 165, "에이비씨랩스"), (11, 164, "그린팬"), (12, 163, "HAM"),
    (13, 162, "블레이자"), (14, 161, "에코바이오홀딩스"), (15, 160, "미풍양주"), (16, 159, "야무진형제들"),
    (17, 158, "CBS"), (18, 157, "하이픈 코퍼레이션"), (19, 156, "어플라이드 머터리얼즈"), (20, 149, "글라세움"),
    (21, 148, "인천국제공항"), (22, 138, "플레이보이"), (23, 137, "TED"), (24, 136, "CUBEME"),
    (25, 133, "딩고"), (26, 132, "애터미"), (27, 131, "브이라이브"), (28, 128, "멜론"),
    (29, 126, "비비고"), (30, 125, "설화수"), (31, 124, "네이버 바이브"), (32, 123, "네이버 웹툰"),
    (33, 122, "카카오페이지"), (34, 121, "카카오프렌즈"), (35, 120, "주간목장"), (36, 119, "펫사랑"),
    (37, 117, "펫츠앤"), (38, 116, "그린에너지"), (39, 115, "프로퍼컴퍼니"), (40, 114, "Your Vegan"),
    (41, 113, "농가의아침"), (42, 112, "모모티"), (43, 111, "DCN바이오"), (44, 110, "클린하라"),
    (45, 109, "웰스"), (46, 108, "베스트솔루션"), (47, 107, "루틴"), (48, 106, "대경에스코"),
    (49, 105, "연세대학교"), (50, 92, "리안컴퍼니"), (51, 91, "가디뷰이"), (52, 90, "라프로렐"),
    (53, 89, "Market M Bang"), (54, 88, "피플인아트"), (55, 98, "바램펫"), (56, 87, "신선닭갈비"),
    (57, 97, "꿀빠는시간"), (58, 96, "시간을들이다"), (59, 95, "AI인사이트"), (60, 94, "진해양봉"),
    (61, 104, "리빙안"), (62, 93, "벨라도르"), (63, 103, "(주)나무감정평가법인 경기지사"), (64, 102, "NST바이오"),
    (65, 101, "THELSTAR"), (66, 100, "육대장"), (67, 99, "MOMENTO"),
]

video_idxs = {138, 137, 136, 133, 132, 131, 128, 126, 125, 124, 123, 122, 121}

output_lines = []
for order, idx, title in all_items:
    thumb = thumb_map.get(idx, '')
    detail_imgs = get_post_area_images(idx)
    proper_detail = [img for img in detail_imgs if img.startswith('/bizdemo')]

    if idx in video_idxs:
        cat = 'video'
    else:
        cat = 'design'

    detail_urls = ",".join(f"https://vdirectors.com{img}" for img in proper_detail[:4])
    line = f"{order}|{idx}|{title}|https://vdirectors.com{thumb}|{detail_urls}|{cat}"
    output_lines.append(line)

with open('C:/Users/PC/Desktop/vdirectors/final_portfolio_data.txt', 'w', encoding='utf-8') as f:
    f.write("order|board_idx|title|thumb_url|detail_images|inferred_category\n")
    f.write('\n'.join(output_lines))

print(f"Wrote {len(output_lines)} items")
