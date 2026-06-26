// vh-data.js — Dữ liệu seed tĩnh của V-Heritage (không tham chiếu `this`).
// Được nạp qua <script src> trong app.dc.html rồi gộp vào Component bằng:
//   Object.assign(Component.prototype, VH_DATA)
// Sửa nội dung (hiện vật, bảo tàng, bài viết, đa ngôn ngữ...) ngay tại đây.
window.VH_DATA = {
  // Tài khoản demo
  DEMO_EMAIL: 'minhanh@email.com',
  DEMO_PASS: 'Heritage2024',

  venues: [
    { id: 1, name: 'Bảo tàng Lịch sử Quốc gia', city: 'Hà Nội', count: 48, seed: 'baotanglichsu', dist: 'Cách 1,2 km', x: '34%', y: '34%', wheelchair: true, floor: 'Tầng trệt' },
    { id: 2, name: 'Bảo tàng Mỹ thuật Việt Nam', city: 'Hà Nội', count: 32, seed: 'baotangmythuat', dist: 'Cách 2,8 km', x: '58%', y: '26%', wheelchair: true, floor: 'Tầng 2 — có thang máy' },
    { id: 3, name: 'Dinh Độc Lập', city: 'TP.HCM', count: 27, seed: 'dinhdoclap', dist: 'Cách 4,1 km', x: '24%', y: '56%', wheelchair: true, floor: 'Tầng trệt' },
    { id: 4, name: 'Khu di tích K9', city: 'Hà Nội', count: 15, seed: 'khuditichk9', dist: 'Cách 6,5 km', x: '70%', y: '50%', wheelchair: false, floor: 'Có bậc thang' },
    { id: 5, name: 'Thành cổ Quảng Trị', city: 'Quảng Trị', count: 21, seed: 'thanhcoquangtri', dist: 'Cách 9,0 km', x: '46%', y: '66%', wheelchair: true, floor: 'Lối phẳng' },
    { id: 6, name: 'Phố cổ Hội An', city: 'Quảng Nam', count: 56, seed: 'phocohoian', dist: 'Cách 11 km', x: '62%', y: '76%', wheelchair: true, floor: 'Lối phẳng' },
  ],

  artifacts: [
    { id: 1, name: 'Trống đồng Đông Sơn', era: '500 TCN', material: 'Đồng thau', venue: 1, seed: 'trongdong', views: '1.247', summary: 'Biểu tượng của nền văn minh Đông Sơn rực rỡ.', desc: 'Trống đồng Đông Sơn là biểu tượng của nền văn minh Đông Sơn rực rỡ. Mặt trống khắc hoa văn hình ngôi sao, chim Lạc và cảnh sinh hoạt — phản ánh đời sống tinh thần phong phú của người Việt cổ. Đây là hiện vật khảo cổ quan trọng bậc nhất, minh chứng cho kỹ thuật đúc đồng đỉnh cao cách đây hơn 2.500 năm.', shape: 'Hình trụ tròn, mặt trống phẳng đường kính khoảng 79cm, thân phình ở giữa và loe ra ở chân.' },
    { id: 2, name: 'Áo tứ thân', era: 'Thế kỷ XVIII', material: 'Lụa', venue: 2, seed: 'aotuthan', views: '842', summary: 'Trang phục truyền thống của phụ nữ Bắc Bộ.', desc: 'Trang phục truyền thống của phụ nữ Bắc Bộ, gồm bốn vạt áo tượng trưng cho tứ thân phụ mẫu. Thường mặc cùng yếm đào và khăn mỏ quạ trong các dịp lễ hội, thể hiện vẻ đẹp duyên dáng, kín đáo của người phụ nữ Việt xưa.', shape: 'Áo dài tới gối với bốn tà, hai tà trước buộc lại, màu nâu non và the thâm.' },
    { id: 3, name: 'Bình gốm triều Lý', era: 'Thế kỷ XI', material: 'Gốm sứ', venue: 1, seed: 'binhgomly', views: '623', summary: 'Đỉnh cao nghệ thuật gốm men ngọc thời Lý.', desc: 'Đỉnh cao của nghệ thuật gốm men ngọc thời Lý, với đường nét thanh thoát và lớp men xanh đặc trưng — minh chứng cho trình độ thủ công tinh xảo của Đại Việt.', shape: 'Bình cổ cao, thân bầu, men ngọc xanh lam phủ đều, hoa văn sen khắc chìm.' },
    { id: 4, name: 'Kiếm thời Lê', era: 'Thế kỷ XV', material: 'Sắt rèn', venue: 3, seed: 'kiemthole', views: '418', summary: 'Thanh kiếm rèn thủ công thời Hậu Lê.', desc: 'Thanh kiếm rèn thủ công thời Hậu Lê, gắn với những trang sử oai hùng chống ngoại xâm. Lưỡi kiếm khắc hoa văn rồng cuộn tinh tế.', shape: 'Lưỡi thẳng dài, chuôi bọc đồng chạm rồng, vỏ gỗ sơn then.' },
    { id: 5, name: 'Tranh Đông Hồ', era: 'Thế kỷ XIX', material: 'Giấy điệp', venue: 2, seed: 'tranhdongho', views: '991', summary: 'Dòng tranh dân gian in từ ván khắc gỗ.', desc: 'Dòng tranh dân gian in từ ván khắc gỗ trên giấy điệp, màu lấy từ thiên nhiên. Mỗi bức tranh gửi gắm ước vọng về cuộc sống ấm no, hạnh phúc.', shape: 'Tranh giấy hình chữ nhật, nền điệp óng ánh, màu đỏ vang, vàng hoè, xanh chàm.' },
    { id: 6, name: 'Tượng Phật A Di Đà', era: 'Thế kỷ XI', material: 'Đá sa thạch', venue: 5, seed: 'tuongphat', views: '1.508', summary: 'Kiệt tác điêu khắc thời Lý tại chùa Phật Tích.', desc: 'Kiệt tác điêu khắc thời Lý tại chùa Phật Tích, thể hiện sự an nhiên với từng nếp áo cà sa mềm mại tạc trên đá — đỉnh cao mỹ thuật Phật giáo Đại Việt.', shape: 'Tượng ngồi thiền trên đài sen, cao khoảng 1,8m, đá sa thạch xám.' },
    { id: 7, name: 'Cồng chiêng Tây Nguyên', era: 'Thế kỷ XX', material: 'Đồng', venue: 6, seed: 'congchieng', views: '1.102', summary: 'Di sản văn hóa phi vật thể được UNESCO công nhận.', desc: 'Không gian văn hóa cồng chiêng Tây Nguyên được UNESCO công nhận là Kiệt tác di sản truyền khẩu và phi vật thể của nhân loại.', shape: 'Bộ chiêng đồng tròn nhiều kích cỡ, mặt phẳng có núm hoặc không núm.' },
    { id: 8, name: 'Mũ quan triều Nguyễn', era: 'Thế kỷ XIX', material: 'Vàng, đá quý', venue: 3, seed: 'muquan', views: '736', summary: 'Mũ thượng triều của quan lại triều Nguyễn.', desc: 'Mũ thượng triều của quan lại triều Nguyễn, chế tác từ vàng và đá quý theo phẩm hàm — biểu trưng cho quyền uy và nghi lễ cung đình.', shape: 'Mũ cánh chuồn, khung kim loại mạ vàng, đính đá quý nhiều màu.' },
  ],

  guestbook: [
    { id: 1, text: 'Được nhìn tận mắt trống đồng thật — xúc động lắm 🇻🇳', author: 'Minh Anh', likes: 47, time: '2 giờ trước', premium: false },
    { id: 2, text: 'Cảm ơn V-Heritage đã giúp mình hiểu rõ hơn về lịch sử dân tộc', author: 'Tuấn', likes: 23, time: '1 ngày trước', premium: false },
    { id: 3, text: 'Incredible piece of history! AR made it come alive.', author: 'Sarah K.', likes: 18, time: '3 ngày trước', premium: false },
  ],

  achievements: [
    { id: 1, name: 'Người khám phá Thăng Long', icon: 'ti-building-castle', earned: true, blurb: 'Dấu chân đầu tiên giữa lòng Hà Nội ngàn năm.', cond: 'Thăm 3 bảo tàng tại Hà Nội', progress: 3, target: 3, date: '12/03/2026' },
    { id: 2, name: 'Lữ khách Hội An', icon: 'ti-lamp', earned: true, blurb: 'Lang thang phố Hội, chạm vào từng lớp thời gian.', cond: 'Scan 10 hiện vật tại Phố cổ Hội An', progress: 10, target: 10, date: '28/04/2026' },
    { id: 3, name: 'Nhà sử học Huế', icon: 'ti-book', earned: false, blurb: 'Lắng nghe triều Nguyễn kể chuyện cố đô.', cond: 'Nghe đủ 5 audio guide về triều Nguyễn', progress: 2, target: 5 },
    { id: 4, name: 'Người giữ lửa', icon: 'ti-flame', earned: false, blurb: 'Để lại dấu ấn tại những nơi lịch sử đi qua.', cond: 'Đăng 10 lời nhắn AR Guestbook', progress: 4, target: 10 },
    { id: 5, name: 'Nhà thám hiểm số', icon: 'ti-camera', earned: false, blurb: 'Bậc thầy nhận diện hiện vật bằng AR.', cond: 'Scan thành công 50 hiện vật bất kỳ', progress: 23, target: 50 },
    { id: 6, name: 'Người bảo tồn', icon: 'ti-shield-heart', earned: false, blurb: 'Xây dựng kho tàng di sản của riêng bạn.', cond: 'Tạo 5 bộ sưu tập riêng', progress: 1, target: 5 },
  ],

  articles: [
    { id: 1, seed: 'trongdong', tag: 'Lịch sử', title: 'Bí ẩn hoa văn trên trống đồng Đông Sơn', read: '5 phút đọc', date: '20/06', author: 'TS. Nguyễn Văn Huy', body: ['Trống đồng Đông Sơn là đỉnh cao của nghệ thuật đúc đồng Việt Nam cách đây hơn 2.500 năm. Mỗi hoa văn trên mặt trống đều mang ý nghĩa biểu tượng sâu sắc về vũ trụ quan và đời sống của người Việt cổ.', 'Ngôi sao nhiều cánh ở trung tâm tượng trưng cho mặt trời — vị thần tối cao trong tín ngưỡng nông nghiệp. Vòng quanh là hình ảnh chim Lạc bay ngược chiều kim đồng hồ, biểu trưng cho khát vọng tự do và cội nguồn dân tộc.', 'Những vành hoa văn hình học đồng tâm thể hiện trình độ toán học và thẩm mỹ tinh tế của cư dân Lạc Việt, đến nay vẫn khiến giới khảo cổ kinh ngạc.'] },
    { id: 2, seed: 'hoian', tag: 'Kiến trúc', title: 'Chùa Cầu Hội An — nơi giao thoa ba nền văn hóa', read: '4 phút đọc', date: '18/06', author: 'KTS. Lê Thành Vinh', body: ['Chùa Cầu (Lai Viễn Kiều) là biểu tượng của phố cổ Hội An, được thương nhân Nhật Bản xây dựng vào đầu thế kỷ 17.', 'Công trình kết hợp hài hòa kiến trúc Nhật, Hoa và Việt: mái ngói âm dương kiểu Việt, kết cấu gỗ kiểu Nhật, và các chi tiết trang trí mang đậm phong cách Hoa.', 'Trải qua hơn 400 năm, Chùa Cầu vẫn đứng vững như chứng nhân cho thời kỳ Hội An là thương cảng quốc tế sầm uất bậc nhất Đông Nam Á.'] },
    { id: 3, seed: 'hue', tag: 'Triều Nguyễn', title: 'Nhã nhạc cung đình Huế — âm thanh của vương triều', read: '6 phút đọc', date: '15/06', author: 'GS. Trần Văn Khê', body: ['Nhã nhạc cung đình Huế là loại hình âm nhạc bác học từng vang lên trong các đại lễ của triều Nguyễn, được UNESCO công nhận là Di sản văn hóa phi vật thể của nhân loại năm 2003.', 'Dàn nhạc gồm nhiều nhạc cụ truyền thống: đàn nguyệt, đàn tỳ bà, sáo, trống và chuông, hòa quyện tạo nên âm hưởng trang nghiêm và tinh tế.', 'Ngày nay, nhã nhạc được biểu diễn tại Đại Nội Huế, đưa du khách trở về không gian uy nghi của hoàng cung xưa.'] },
  ],

  destinations: [
    { name: 'Hoàng thành Thăng Long', city: 'Hà Nội', rating: '4.9', seed: 'thanglong', venueId: 1 },
    { name: 'Phố cổ Hội An', city: 'Quảng Nam', rating: '4.9', seed: 'phocohoian', venueId: 2 },
    { name: 'Quần thể di tích Cố đô Huế', city: 'Thừa Thiên Huế', rating: '4.8', seed: 'codohue', venueId: 1 },
    { name: 'Thánh địa Mỹ Sơn', city: 'Quảng Nam', rating: '4.7', seed: 'myson', venueId: 2 },
    { name: 'Vịnh Hạ Long', city: 'Quảng Ninh', rating: '4.8', seed: 'halong', venueId: 1 },
    { name: 'Thành nhà Hồ', city: 'Thanh Hóa', rating: '4.6', seed: 'thanhnhaho', venueId: 1 },
    { name: 'Văn Miếu Quốc Tử Giám', city: 'Hà Nội', rating: '4.7', seed: 'vanmieu', venueId: 1 },
    { name: 'Địa đạo Củ Chi', city: 'TP.HCM', rating: '4.6', seed: 'cuchi', venueId: 2 },
    { name: 'Cố đô Hoa Lư', city: 'Ninh Bình', rating: '4.5', seed: 'hoalu', venueId: 1 },
    { name: 'Dinh Độc Lập', city: 'TP.HCM', rating: '4.5', seed: 'dinhdoclap', venueId: 2 },
  ],

  audioLyrics: [
    { p: 0, text: 'Trống đồng Đông Sơn — kiệt tác của nền văn minh sông Hồng.' },
    { p: 9, text: 'Được đúc cách đây hơn 2.500 năm bằng kỹ thuật khuôn sáp tinh xảo.' },
    { p: 20, text: 'Mặt trống là ngôi sao nhiều cánh — biểu tượng của thần Mặt Trời.' },
    { p: 32, text: 'Quanh ngôi sao là đàn chim Lạc tung cánh, cội nguồn dân tộc Việt.' },
    { p: 45, text: 'Thân trống khắc cảnh giã gạo, đua thuyền, lễ hội mùa màng.' },
    { p: 58, text: 'Mỗi đường nét phản ánh đời sống nông nghiệp lúa nước trù phú.' },
    { p: 70, text: 'Tiếng trống từng vang trong các nghi lễ cầu mưa thuận gió hòa.' },
    { p: 82, text: 'Đến nay, trống đồng vẫn là niềm tự hào của văn hóa Việt Nam.' },
    { p: 93, text: 'Một di sản nối liền quá khứ và hiện tại, vọng mãi ngàn năm.' },
  ],

  NOTIF_SEED: [
    { id: 'n1', icon: 'ti-building-bank', color: 'var(--primary)', title: 'Bảo tàng Lịch sử Quốc gia vừa thêm 12 hiện vật mới về Triều Lý', sub: 'Bạn đã đăng ký quan tâm · 30 phút trước', read: false },
    { id: 'n2', icon: 'ti-heart', color: 'var(--error)', title: 'Minh Anh vừa thả tim lời nhắn AR Guestbook của bạn tại Trống đồng Đông Sơn', sub: '2 giờ trước', read: false },
    { id: 'n3', icon: 'ti-award', color: 'var(--cta)', title: 'Bạn vừa đạt huy hiệu Lữ khách Hội An — xem thành tích?', sub: '1 ngày trước', read: false },
    { id: 'n4', icon: 'ti-download', color: 'var(--success)', title: 'Gói dữ liệu Bảo tàng Mỹ thuật đã tải xong', sub: '1 ngày trước', read: true },
    { id: 'n5', icon: 'ti-shield-lock', color: 'var(--warning)', title: 'Đăng nhập mới từ Chrome trên Windows — không phải bạn?', sub: '2 ngày trước', read: true },
    { id: 'n6', icon: 'ti-ticket', color: 'var(--info)', title: 'Triển lãm đặc biệt: Hành trình gốm Việt — chỉ còn 3 ngày', sub: '3 ngày trước', read: true },
  ],

  devices: [
    { id: 'd1', name: 'iPhone 14 Pro', icon: 'ti-device-mobile', meta: 'Hà Nội · Đang hoạt động', current: true },
    { id: 'd2', name: 'iPad Air', icon: 'ti-device-ipad', meta: 'Hà Nội · 2 ngày trước', current: false },
    { id: 'd3', name: 'Chrome · Windows', icon: 'ti-device-desktop', meta: 'TP.HCM · 2 ngày trước · Thiết bị lạ', current: false },
  ],

  i18n: {
    vi: { home: 'Trang chủ', explore: 'Khám phá', library: 'Thư viện', profile: 'Hồ sơ', greet: 'Xin chào,', homeTitle: 'Khám phá di sản', homeSubtitle: 'Khám phá di sản hôm nay?', secDiscover: 'Đang chờ bạn khám phá', secFeatured: 'Di tích đặc sắc tuần này', secArt: 'Hiện vật nổi bật', offlineBanner: 'Chế độ offline — Đang dùng dữ liệu đã tải' },
    en: { home: 'Home', explore: 'Explore', library: 'Library', profile: 'Profile', greet: 'Hello,', homeTitle: 'Discover heritage', homeSubtitle: 'Explore heritage today?', secDiscover: 'Waiting to be discovered', secFeatured: 'Featured sites this week', secArt: 'Featured artifacts', offlineBanner: 'Offline mode — Using downloaded data' },
    cn: { home: '首页', explore: '探索', library: '收藏', profile: '我的', greet: '你好，', homeTitle: '探索文化遗产', homeSubtitle: '今天探索文化遗产吗？', secDiscover: '等待你的发现', secFeatured: '本周精选遗址', secArt: '精选文物', offlineBanner: '离线模式 — 使用已下载数据' },
  },

  walkSlides: [
    { icon: 'ti-sparkles', title: 'Mỗi hiện vật đều có câu chuyện chưa được kể. Bạn sẽ là người khám phá nó.' },
    { icon: 'ti-device-mobile', title: 'Giơ điện thoại lên. Lịch sử sẽ hiện ra trước mắt bạn.' },
    { icon: 'ti-headphones', title: 'Nghe di sản kể chuyện — bằng giọng nói của chính nó.' },
    { icon: 'ti-message-2-heart', title: 'Để lại dấu ấn của bạn tại những nơi lịch sử đã đi qua.' },
  ],

  langDefs: [
    { code: 'vi', flag: '🇻🇳', name: 'Tiếng Việt' },
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'cn', flag: '🇨🇳', name: '中文' },
  ],
};
