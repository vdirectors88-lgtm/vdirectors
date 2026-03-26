const SUPABASE_URL = 'https://zpyzgicyfkancewoxmbg.supabase.co';
const SERVICE_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpweXpnaWN5ZmthbmNld294bWJnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDQ2MTk1NywiZXhwIjoyMDkwMDM3OTU3fQ.VC52H58cp7c-4WHRLvo6uHtoPtcvr09sBtbv3iPbonw';

const BASE = 'https://vdirectors.com/bizdemo119798/component/board/board_7/u_image/';
const u = (idx, file) => `${BASE}${idx}/${file}`;

const portfolioData = [
  { sort_order: 1,  name: '육대장',          category: 'design',    tags: ['패키지 디자인'],                        thumb_url: u(182,'521516551_1.jpg'),           detail_images: [u(182,'521516551_1.jpg'), u(182,'1256419415_2.jpg')] },
  { sort_order: 2,  name: 'HARIK',           category: 'design',    tags: ['패키지 디자인'],                        thumb_url: u(181,'1496415718_1.jpg'),          detail_images: [u(181,'1496415718_1.jpg'), u(181,'929201827_2.jpg')] },
  { sort_order: 3,  name: 'COSI',            category: 'design',    tags: ['브랜딩','패키지 디자인'],               thumb_url: u(180,'100310120_1.jpg'),           detail_images: [u(180,'100310120_1.jpg'), u(180,'1857943527_2.jpg')] },
  { sort_order: 4,  name: 'Yogo',            category: 'design',    tags: ['패키지 디자인'],                        thumb_url: u(174,'1110319375_1.jpg'),          detail_images: [u(174,'1110319375_1.jpg'), u(174,'933096778_2.jpg')] },
  { sort_order: 5,  name: 'KoKoPang',        category: 'design',    tags: ['패키지 디자인'],                        thumb_url: u(173,'1934484040_1.jpg'),          detail_images: [u(173,'1934484040_1.jpg'), u(173,'51352411_2.jpg')] },
  { sort_order: 6,  name: '바른보험',         category: 'design',    tags: ['시각 디자인'],                          thumb_url: u(172,'2134810075_1.jpg'),          detail_images: [u(172,'2134810075_1.jpg'), u(172,'741383796_2.jpg')] },
  { sort_order: 7,  name: '배차킹',           category: 'design',    tags: ['시각 디자인'],                          thumb_url: u(171,'494494025_1.jpg'),           detail_images: [u(171,'494494025_1.jpg'), u(171,'317454741_2.jpg')] },
  { sort_order: 8,  name: 'BNI',             category: 'video',     tags: ['기업홍보영상'],                          thumb_url: u(170,'890861822_1.jpg'),           detail_images: [u(170,'890861822_1.jpg'), u(170,'1879761838_3.jpg')] },
  { sort_order: 9,  name: 'ARK',             category: 'design',    tags: ['브랜딩','패키지 디자인'],               thumb_url: u(179,'164470414_EC9584ED81ACEC8DB8.png'), detail_images: [u(179,'164470414_EC9584ED81ACEC8DB8.png'), u(179,'362829291_EC9584ED81AC2.png')] },
  { sort_order: 10, name: 'ABCLABS',         category: 'web',       tags: ['웹사이트 제작'],                         thumb_url: u(165,'92253979_EC8DB8EB84A4EC9DBC.png'), detail_images: [u(165,'92253979_EC8DB8EB84A4EC9DBC.png'), u(165,'16387620_ED8FACED8AB8ED8FB4EBA6ACEC98A4.png')] },
  { sort_order: 11, name: 'GreenPan',        category: 'marketing', tags: ['SNS 마케팅','콘텐츠 제작'],             thumb_url: u(164,'1692045277_EAB7B8EBA6B0ED8CAC-EC8DB8EB84A4EC9DBC.png'), detail_images: [u(164,'1692045277_EAB7B8EBA6B0ED8CAC-EC8DB8EB84A4EC9DBC.png'), u(164,'1105533263_EAB7B8EBA6B0ED8CAC-ED8FACED8FB4.png')] },
  { sort_order: 12, name: 'HAM',             category: 'design',    tags: ['패키지 디자인'],                        thumb_url: u(163,'1805616598_EC8DB8EB84A4EC9DBC.png'), detail_images: [u(163,'1805616598_EC8DB8EB84A4EC9DBC.png'), u(163,'640434951_ED8FACED8FB4.png')] },
  { sort_order: 13, name: 'BLAZAR',          category: 'web',       tags: ['웹사이트 제작','마케팅'],               thumb_url: u(162,'496906330_1.png'),           detail_images: [u(162,'496906330_1.png'), u(162,'1868930469_2.png')] },
  { sort_order: 14, name: 'ECO Bio',         category: 'design',    tags: ['브랜딩','패키지 디자인'],               thumb_url: u(161,'2028273371_1.png'),          detail_images: [u(161,'2028273371_1.png'), u(161,'506208348_2.png')] },
  { sort_order: 15, name: '미풍양주',         category: 'design',    tags: ['패키지 디자인'],                        thumb_url: u(160,'1095700515_1.png'),          detail_images: [u(160,'1095700515_1.png'), u(160,'1794607289_2.png')] },
  { sort_order: 16, name: 'YAMOUZINE BROS',  category: 'design',    tags: ['패키지 디자인','브랜딩'],               thumb_url: u(159,'1429405485_1.png'),          detail_images: [u(159,'1429405485_1.png'), u(159,'1446255876_2.png')] },
  { sort_order: 17, name: 'CBS',             category: 'video',     tags: ['기업홍보영상','CM송 제작'],             thumb_url: u(158,'700587165_cbs-sum.png'),     detail_images: [u(158,'700587165_cbs-sum.png'), u(158,'905184949_cbs.png')] },
  { sort_order: 18, name: 'HYPHEN',          category: 'design',    tags: ['광고 영상','타이틀 디자인'],            thumb_url: u(157,'2136366121_ED9598EC9DB4ED9488-sum.png'), detail_images: [u(157,'2136366121_ED9598EC9DB4ED9488-sum.png'), u(157,'799797736_ED9598EC9DB4ED9488.png')] },
  { sort_order: 19, name: 'Applied Materials', category: 'design',  tags: ['어드바이저리 머터리얼','시각 디자인'], thumb_url: '', detail_images: [] },
  { sort_order: 20, name: '글라세움',         category: 'design',    tags: ['브랜딩'],                               thumb_url: u(149,'541911719_sum.png'),         detail_images: [u(149,'541911719_sum.png'), u(149,'374483901_1.png')] },
  { sort_order: 21, name: '인천국제공항',      category: 'design',    tags: ['시각 디자인'],                          thumb_url: u(148,'2120541308_sum.png'),        detail_images: [u(148,'2120541308_sum.png'), u(148,'14758300_1.jpg'), u(148,'1528587366_2.jpg')] },
  { sort_order: 22, name: '플레이보이',        category: 'video',     tags: ['영상 제작'],                            thumb_url: u(138,'1048272738_video_thum18.gif'), detail_images: [u(138,'1516195609_1.jpg'), u(138,'1139428077_2.jpg')] },
  { sort_order: 23, name: 'TED',             category: 'video',     tags: ['영상 제작'],                            thumb_url: u(137,'1758641115_video_thum17.gif'), detail_images: [u(137,'851447448_1.jpg'), u(137,'2021778391_2.jpg')] },
  { sort_order: 24, name: 'CUBEME',          category: 'video',     tags: ['영상 제작'],                            thumb_url: u(136,'1252795166_video_thum16.gif'), detail_images: [u(136,'1899042239_1.jpg'), u(136,'1125365496_2.jpg')] },
  { sort_order: 25, name: '딩고',             category: 'video',     tags: ['영상 제작'],                            thumb_url: u(133,'295077835_video_thum13.gif'), detail_images: [u(133,'153867032_1.jpg'), u(133,'1223547740_2.jpg')] },
  { sort_order: 26, name: '애터미',           category: 'video',     tags: ['영상 제작'],                            thumb_url: u(132,'1192885633_video_thum12.gif'), detail_images: [u(132,'1785252875_1.jpg')] },
  { sort_order: 27, name: '브이라이브',        category: 'video',     tags: ['영상 제작'],                            thumb_url: u(131,'466866653_video_thum11.gif'), detail_images: [u(131,'133192949_1.jpg')] },
  { sort_order: 28, name: '멜론',             category: 'video',     tags: ['영상 제작'],                            thumb_url: u(128,'305852010_video_thum08.gif'), detail_images: [u(128,'1620190831_1.jpg'), u(128,'1902693518_2.jpg')] },
  { sort_order: 29, name: '비비고',           category: 'video',     tags: ['영상 제작'],                            thumb_url: u(126,'1971000291_video_thum06.gif'), detail_images: [u(126,'2107191743_1.jpg'), u(126,'605573133_2.jpg')] },
  { sort_order: 30, name: '설화수',           category: 'video',     tags: ['영상 제작'],                            thumb_url: u(125,'581742924_video_thum05.gif'), detail_images: [u(125,'85406123_1.jpg'), u(125,'2110023966_2.jpg')] },
  { sort_order: 31, name: '네이버 바이브',     category: 'video',     tags: ['영상 제작'],                            thumb_url: u(124,'16681602_video_thum04.gif'), detail_images: [u(124,'875055382_1.jpg'), u(124,'419039996_2.jpg')] },
  { sort_order: 32, name: '네이버 웹툰',      category: 'video',     tags: ['영상 제작'],                            thumb_url: u(123,'532478342_video_thum03.gif'), detail_images: [u(123,'121253179_1.jpg'), u(123,'1249534730_2.jpg')] },
  { sort_order: 33, name: '카카오페이지',      category: 'video',     tags: ['영상 제작'],                            thumb_url: u(122,'1157898799_video_thum02.gif'), detail_images: [u(122,'1456860475_1.jpg'), u(122,'998354324_2.jpg')] },
  { sort_order: 34, name: '카카오프렌즈',      category: 'video',     tags: ['영상 제작'],                            thumb_url: u(121,'352637293_video_thum01.gif'), detail_images: [u(121,'1169063983_1.jpg'), u(121,'519501071_2.jpg')] },
  { sort_order: 35, name: '주간목장',         category: 'design',    tags: ['패키지 디자인'],                        thumb_url: u(120,'928889623_KakaoTalk_20220422_111911692.png'), detail_images: [u(120,'928889623_KakaoTalk_20220422_111911692.png'), u(120,'1872159272_KakaoTalk_20220422_111911692_01.png')] },
  { sort_order: 36, name: '펫사랑',           category: 'design',    tags: ['패키지 디자인'],                        thumb_url: u(119,'756725572_KakaoTalk_20220414_130522220_01.jpg'), detail_images: [u(119,'756725572_KakaoTalk_20220414_130522220_01.jpg'), u(119,'1121721622_KakaoTalk_20220414_130522220.jpg')] },
  { sort_order: 37, name: '펫츠앤',           category: 'design',    tags: ['패키지 디자인'],                        thumb_url: u(117,'1408459233_KakaoTalk_20220317_173643778.jpg'), detail_images: [u(117,'1408459233_KakaoTalk_20220317_173643778.jpg'), u(117,'805216672_ECB59CECA285.jpg')] },
  { sort_order: 38, name: '그린에너지',        category: 'design',    tags: ['시각 디자인'],                          thumb_url: u(116,'444326675_KakaoTalk_20220318_113515120.jpg'), detail_images: [u(116,'444326675_KakaoTalk_20220318_113515120.jpg'), u(116,'1716984583_KakaoTalk_20220318_113515120_01.jpg')] },
  { sort_order: 39, name: 'PROPER COMPANY',  category: 'design',    tags: ['홈쇼핑 운영','패키지 디자인'],          thumb_url: u(115,'858429418_KakaoTalk_20220317_173635969.jpg'), detail_images: [u(115,'858429418_KakaoTalk_20220317_173635969.jpg'), u(115,'2008263878_KakaoTalk_20220317_173635969_01.jpg')] },
  { sort_order: 40, name: 'Your Vegan',      category: 'design',    tags: ['패키지 디자인'],                        thumb_url: u(114,'485636525_KakaoTalk_20220126_175918294.jpg'), detail_images: [u(114,'485636525_KakaoTalk_20220126_175918294.jpg'), u(114,'857067683_KakaoTalk_20220126_175918294_01.jpg')] },
  { sort_order: 41, name: '농가의아침',        category: 'design',    tags: ['패키지 디자인'],                        thumb_url: u(113,'1930089095_KakaoTalk_20220118_095051640_01.png'), detail_images: [u(113,'1930089095_KakaoTalk_20220118_095051640_01.png'), u(113,'1415934570_KakaoTalk_20220118_095051640.png')] },
  { sort_order: 42, name: 'MOMENTO',         category: 'design',    tags: ['브랜딩','패키지 디자인'],               thumb_url: u(112,'8626501_EBAAA8EBAAA8ED8BB0.png'), detail_images: [u(112,'8626501_EBAAA8EBAAA8ED8BB0.png'), u(112,'1985687677_KakaoTalk_20220113_145819620.png')] },
  { sort_order: 43, name: 'DCN바이오',        category: 'design',    tags: ['시각 디자인'],                          thumb_url: u(111,'1553316910_KakaoTalk_20220215_135448667_01.png'), detail_images: [u(111,'1553316910_KakaoTalk_20220215_135448667_01.png'), u(111,'374201269_KakaoTalk_20220215_135448667.png')] },
  { sort_order: 44, name: 'CLEANHARA',       category: 'design',    tags: ['상품 기획','패키지 디자인'],            thumb_url: u(110,'945863499_KakaoTalk_20220113_105722409_01.jpg'), detail_images: [u(110,'945863499_KakaoTalk_20220113_105722409_01.jpg'), u(110,'62670203_KakaoTalk_20220113_105722409.png')] },
  { sort_order: 45, name: '웰스',             category: 'design',    tags: ['패키지 디자인'],                        thumb_url: u(109,'791663820_KakaoTalk_20220117_163715900.jpg'), detail_images: [u(109,'791663820_KakaoTalk_20220117_163715900.jpg'), u(109,'1396396568_ECB59CECA2853.jpg')] },
  { sort_order: 46, name: 'BESTSOLUTION',    category: 'web',       tags: ['상품 기획','홈페이지 제작'],            thumb_url: u(108,'2013017526_EBB2A0EC8AA4ED8AB8EC8694EBA3A8EC8598.png'), detail_images: [u(108,'2013017526_EBB2A0EC8AA4ED8AB8EC8694EBA3A8EC8598.png'), u(108,'174391149_KakaoTalk_20220113_145827007.png')] },
  { sort_order: 47, name: '루틴',             category: 'design',    tags: ['브랜딩'],                               thumb_url: u(107,'1664456394_EBA3A8ED8BB4.png'), detail_images: [u(107,'1664456394_EBA3A8ED8BB4.png'), u(107,'597462123_KakaoTalk_20220113_174437213.png')] },
  { sort_order: 48, name: 'DAEKYUNG ESCO',   category: 'design',    tags: ['홈쇼핑 운영','패키징'],                 thumb_url: u(106,'798774877_2.png'), detail_images: [u(106,'798774877_2.png'), u(106,'89253666_1.png'), u(106,'1624736872_2.png')] },
  { sort_order: 49, name: '연세대학교',        category: 'web',       tags: ['홈페이지 제작'],                        thumb_url: u(105,'878223160_sum.png'), detail_images: [u(105,'878223160_sum.png'), u(105,'983697142_EC97B0EC84B8EB8C80ED9599EAB590.png')] },
  { sort_order: 50, name: '리안컴퍼니',        category: 'design',    tags: ['브랜딩'],                               thumb_url: u(92,'1958631396_KakaoTalk_20220105_161104641.png'), detail_images: [u(92,'1958631396_KakaoTalk_20220105_161104641.png'), u(92,'1973166249_KakaoTalk_20220105_161104641_01.png')] },
  { sort_order: 51, name: 'SA',              category: 'design',    tags: ['브랜딩 전략','BI 개발'],                thumb_url: u(91,'946805304_KakaoTalk_20220106_101146661.png'), detail_images: [u(91,'946805304_KakaoTalk_20220106_101146661.png'), u(91,'1614750510_1.jpg'), u(91,'91718816_side.jpg'), u(91,'13367264_2.jpg')] },
  { sort_order: 52, name: 'LA FLORELLE',     category: 'design',    tags: ['패키지 디자인','브랜딩'],               thumb_url: u(90,'196753165_KakaoTalk_20220105_150024598.png'), detail_images: [u(90,'196753165_KakaoTalk_20220105_150024598.png'), u(90,'1790507498_KakaoTalk_20220105_150023272.png')] },
  { sort_order: 53, name: 'Market M Bang',   category: 'design',    tags: ['시각 디자인'],                          thumb_url: u(89,'1371803491_EBA788ECBC93EC97A0EBB0A9.png'), detail_images: [u(89,'1371803491_EBA788ECBC93EC97A0EBB0A9.png'), u(89,'1423987658_KakaoTalk_20211220_154051846_01.png')] },
  { sort_order: 54, name: '피플인아트',        category: 'design',    tags: ['브랜딩','패턴 디자인'],                 thumb_url: u(88,'2067287123_KakaoTalk_20211220_171618450.png'), detail_images: [u(88,'2067287123_KakaoTalk_20211220_171618450.png'), u(88,'1726996387_KakaoTalk_20211220_171618450_01.png')] },
  { sort_order: 55, name: 'VARRAM',          category: 'design',    tags: ['브랜딩','패키지 디자인'],               thumb_url: u(98,'104055273_KakaoTalk_20211216_165234283_01.png'), detail_images: [u(98,'104055273_KakaoTalk_20211216_165234283_01.png'), u(98,'447630289_1.jpg'), u(98,'408326411_2.jpg')] },
  { sort_order: 56, name: '신선닭갈비',        category: 'design',    tags: ['패키지 디자인'],                        thumb_url: u(87,'752296663_KakaoTalk_20211216_170948120.png'), detail_images: [u(87,'752296663_KakaoTalk_20211216_170948120.png'), u(87,'418079535_KakaoTalk_20211216_170948120_01.png')] },
  { sort_order: 57, name: '꿀빠는시간',        category: 'design',    tags: ['패키지 디자인'],                        thumb_url: u(97,'1055794613_KakaoTalk_20211213_143639659_01.png'), detail_images: [u(97,'1055794613_KakaoTalk_20211213_143639659_01.png'), u(97,'612361678_KakaoTalk_20211213_143639659.png')] },
  { sort_order: 58, name: '시간을들이다',      category: 'design',    tags: ['패키지 디자인'],                        thumb_url: u(96,'1334529274_KakaoTalk_20211213_114635653_01.png'), detail_images: [u(96,'1334529274_KakaoTalk_20211213_114635653_01.png'), u(96,'1331777861_KakaoTalk_20211213_114635653.png')] },
  { sort_order: 59, name: 'AIinsight',       category: 'web',       tags: ['웹사이트 제작','브랜딩','마케팅'],      thumb_url: u(95,'1259828021_KakaoTalk_20211213_132839695_01.png'), detail_images: [u(95,'1259828021_KakaoTalk_20211213_132839695_01.png'), u(95,'1216149041_KakaoTalk_20220317_173618716.png')] },
  { sort_order: 60, name: '진해양봉',         category: 'design',    tags: ['패키지 디자인','브랜딩'],               thumb_url: u(94,'9277278_KakaoTalk_20211209_162206854.png'), detail_images: [u(94,'9277278_KakaoTalk_20211209_162206854.png'), u(94,'193014864_KakaoTalk_20211209_162952607.png')] },
  { sort_order: 61, name: '리빙안',           category: 'design',    tags: ['브랜딩'],                               thumb_url: u(104,'1609275448_KakaoTalk_20211207_160658699.png'), detail_images: [u(104,'1609275448_KakaoTalk_20211207_160658699.png'), u(104,'2068127743_EBA6ACEBB999EC9588.png')] },
  { sort_order: 62, name: 'b belladörr',     category: 'design',    tags: ['브랜드 아이덴티티','패키지 디자인'],    thumb_url: u(93,'1353488556_KakaoTalk_20211207_172729601_01.png'), detail_images: [u(93,'1353488556_KakaoTalk_20211207_172729601_01.png'), u(93,'145101798_KakaoTalk_20211207_172729601.png')] },
  { sort_order: 63, name: '나무감정평가법인',  category: 'web',       tags: ['홈페이지 제작','SNS 마케팅'],           thumb_url: u(103,'80735794_KakaoTalk_20211201_150112543.png'), detail_images: [u(103,'80735794_KakaoTalk_20211201_150112543.png'), u(103,'1206120693_p1.png')] },
  { sort_order: 64, name: 'NST바이오',        category: 'design',    tags: ['시각 디자인'],                          thumb_url: u(102,'1744608324_KakaoTalk_20211130_153903451_01.jpg'), detail_images: [u(102,'1744608324_KakaoTalk_20211130_153903451_01.jpg'), u(102,'1284476982_KakaoTalk_20211202_102040658.png')] },
  { sort_order: 65, name: 'THELSTAR',        category: 'design',    tags: ['상품 개발','브랜드 네임','패키징 디자인'], thumb_url: u(101,'318446999_KakaoTalk_20211130_153903451.jpg'), detail_images: [u(101,'318446999_KakaoTalk_20211130_153903451.jpg'), u(101,'1170218026_0.png')] },
  { sort_order: 66, name: '육대장 홈페이지',  category: 'web',       tags: ['홈페이지 제작','패키지 디자인'],        thumb_url: u(100,'1390286663_KakaoTalk_20211130_154901026_02.png'), detail_images: [u(100,'1390286663_KakaoTalk_20211130_154901026_02.png'), u(100,'1019896476_KakaoTalk_20211202_102040658.png')] },
  { sort_order: 67, name: 'MOMENTO (패키지)', category: 'design',    tags: ['상품 개발','패키징'],                   thumb_url: u(99,'1247341156_KakaoTalk_20221221_131729086_01.png'), detail_images: [u(99,'1247341156_KakaoTalk_20221221_131729086_01.png'), u(99,'754700729_0123.png')] },
];

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=minimal',
};

async function seed() {
  console.log(`시딩 시작... 총 ${portfolioData.length}개\n`);
  let ok = 0, fail = 0;

  for (const item of portfolioData) {
    // 기존 항목 확인
    const checkRes = await fetch(
      `${SUPABASE_URL}/rest/v1/portfolio?select=id&sort_order=eq.${item.sort_order}`,
      { headers }
    );
    const existing = await checkRes.json();

    let res;
    if (existing && existing.length > 0) {
      res = await fetch(
        `${SUPABASE_URL}/rest/v1/portfolio?id=eq.${existing[0].id}`,
        { method: 'PATCH', headers, body: JSON.stringify(item) }
      );
    } else {
      res = await fetch(
        `${SUPABASE_URL}/rest/v1/portfolio`,
        { method: 'POST', headers, body: JSON.stringify(item) }
      );
    }

    if (res.ok) {
      console.log(`✅ [${item.sort_order}] ${item.name}`);
      ok++;
    } else {
      const err = await res.text();
      console.log(`❌ [${item.sort_order}] ${item.name} — ${err}`);
      fail++;
    }
  }

  console.log(`\n완료: ✅ ${ok}개 성공 / ❌ ${fail}개 실패`);
}

seed();
