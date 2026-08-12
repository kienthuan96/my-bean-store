export interface Product {
    id: string;
    name: string;
    priceRange: string;
    origin: string;
    shortDesc: string;
    fullDesc: string;
    specs: string[];
    uses: string[];
    images: string[];
}

export const PRODUCTS: Product[] = [
    {
        id: 'dau-xanh-troc-vo',
        name: 'Đậu Xanh Tróc Vỏ',
        priceRange: '46.000đ / kg',
        origin: 'Việt Nam',
        shortDesc: 'Đậu xanh đãi sạch vỏ, hạt vàng ươm, bùi thơm.',
        fullDesc: 'Đậu xanh đãi sạch vỏ chọn lọc, hạt vàng tươi, không lẫn tạp chất. Thích hợp làm nhân bánh, nấu chè, làm đậu xanh đánh.',
        specs: ['Đãi sạch vỏ, vàng tươi', 'Đóng gói: Từ bao 10kg trở lên'],
        uses: ['Làm nhân bánh trung thu, bánh chưng', 'Nấu chè đậu xanh đánh', 'Làm bánh xèo, chè trôi nước'],
        images: [
            '/products/dau-xanh-troc-vo.jpg',
            '/products/dau-xanh-troc-vo-1.jpg',
        ],
    },
    {
        id: 'dau-xanh-ca-co-vo',
        name: 'Đậu Xanh Cà Có Vỏ',
        priceRange: '45.000đ / kg',
        origin: 'Việt Nam',
        shortDesc: 'Đậu xanh cà vỡ đôi còn vỏ, nhanh mềm khi nấu.',
        fullDesc: 'Đậu xanh nguyên hạt được cà vỡ đôi nhưng giữ lại lớp vỏ bổ dưỡng. Dễ nấu nhừ, tiết kiệm thời gian hầm.',
        specs: ['Cà vỡ đôi còn vỏ', 'Đóng gói: Từ bao 10kg trở lên'],
        uses: ['Nấu xôi đậu xanh', 'Nấu chè, cháo dinh dưỡng', 'Làm nhân bánh gia đình'],
        images: [
            '/products/dau-xanh-ca-co-vo.jpg',
            '/products/dau-xanh-ca-co-vo-1.jpeg',
        ],
    },
    {
        id: 'dau-xanh-hat',
        name: 'Đậu Xanh Hạt (Nguyên Hạt)',
        priceRange: '40.000đ - 45.000đ / kg',
        origin: 'Việt Nam',
        shortDesc: 'Hạt mẩy, đều, phơi khô tự nhiên. Thích hợp ủ giá đỗ, nấu xôi.',
        fullDesc: 'Đậu xanh nguyên hạt mẩy tròn, bóng khỏe. Chuyên dùng cho xưởng giá đỗ sạch hoặc nấu chè nguyên hạt.',
        specs: ['Hạt mẩy tròn chọn lọc', 'Đóng gói: Từ bao 10kg trở lên'],
        uses: ['Ủ mầm làm giá đỗ sạch', 'Nấu chè đậu xanh nguyên hạt', 'Nấu xôi, làm bột ngũ cốc'],
        images: [
            '/products/dau-xanh-hat.png',
            '/products/dau-xanh-hat.jpg',
        ],
    },
    {
        id: 'dau-phong-rang',
        name: 'Đậu Phộng Rang',
        priceRange: '55.000đ - 60.000đ / kg',
        origin: 'Việt Nam',
        shortDesc: 'Đậu phộng hạt đều chọn lọc, chuyên dùng làm đậu rang tỏi ớt, rang muối.',
        fullDesc: 'Đậu phộng hạt chọn lọc kỹ, vỏ lụa đẹp, ruột chắc ngọt. Rất phù hợp cho các quán ăn, xưởng chế biến đậu phộng rang tỏi ớt, làm kẹo thốt nốt.',
        specs: ['Hạt to tròn đều', 'Đóng gói: Từ bao 10kg trở lên'],
        uses: ['Rang tỏi ớt, rang muối', 'Làm mắm đậu phộng, muối vừng', 'Làm kẹo cu đơ, kẹo thốt nốt'],
        images: [
            '/products/dau-phong-rang.jpeg',
            '/products/dau-phong-rang-1.jpeg'
        ],
    },
    {
        id: 'dau-phong-nau',
        name: 'Đậu Phộng Nấu',
        priceRange: '60.000đ - 65.000đ / kg',
        origin: 'Việt Nam',
        shortDesc: 'Đậu phộng hạt béo ngậy, chuyên nấu xôi, nấu chè, hầm giò lợn.',
        fullDesc: 'Đậu phộng tươi béo ngậy, hạt chắc, mau mềm khi hầm. Tuyệt vời cho các món xôi đậu phộng, giò heo hầm đậu phộng.',
        specs: ['Hạt béo chọn lọc', 'Đóng gói: Từ bao 10kg trở lên'],
        uses: ['Nấu xôi đậu phộng', 'Hầm giò heo, nấu cà ri', 'Nấu chè đậu phộng'],
        images: [
            '/products/dau-phong-nau.jpg',
        ],
    },
    {
        id: 'dau-den',
        name: 'Đậu Đen Xanh Lòng',
        priceRange: '52.000đ - 55.000đ / kg',
        origin: 'Việt Nam',
        shortDesc: 'Đậu đen xanh lòng chuẩn, vỏ mỏng, ruột xanh béo thơm.',
        fullDesc: 'Đậu đen xanh lòng hạt nhỏ vừa, vỏ đen bóng, cắn ra ruột màu xanh nhạt đặc trưng. Dùng nhiều trong Đông y, nấu chè giải nhiệt hoặc làm trà đậu đen rang.',
        specs: ['100% ruột xanh lòng', 'Đóng gói: Từ bao 10kg trở lên'],
        uses: ['Rang làm trà đậu đen giảm cân', 'Nấu chè đậu đen giải nhiệt', 'Ủ mầm làm ngũ cốc dinh dưỡng'],
        images: [
            '/products/dau-den-xanh-long.png',
            '/products/dau-den-xanh-long-1.png',
        ],
    },
    {
        id: 'dau-do',
        name: 'Đậu Đỏ Hạt Nhỏ',
        priceRange: '50.000đ / kg',
        origin: 'Việt Nam',
        shortDesc: 'Đậu đỏ hạt nhỏ, vị bùi béo, mau mềm khi nấu.',
        fullDesc: 'Đậu đỏ loại 1 hạt nhỏ bùi ngậy, mau nhừ khi nấu. Được ưa chuộng tại các quán chè, xưởng sản xuất nhân đậu đỏ làm bánh bao, bánh nướng.',
        specs: ['Hạt đỏ thẫm đều màu', 'Đóng gói: Từ bao 10kg trở lên'],
        uses: ['Nấu chè đậu đỏ', 'Làm nhân bánh trung thu, bánh bao', 'Nấu cháo dinh dưỡng'],
        images: [
            '/products/dau-do-hat-nho.png'
        ],
    },
    {
        id: 'dau-nanh',
        name: 'Đậu Nành (Đậu Tương)',
        priceRange: '28.000đ - 30.000đ / kg',
        origin: 'Việt Nam',
        shortDesc: 'Đậu nành hạt vàng mẩy, giàu đạm. Chuyên làm sữa, đậu hũ.',
        fullDesc: 'Đậu nành chọn lọc hạt mẩy vàng, giàu hàm lượng protein. Phù hợp cho lò làm đậu hũ, cơ sở sản xuất sữa đậu nành hoặc ép dầu.',
        specs: ['Không biến đổi gen (Non-GMO)', 'Đóng gói: Từ bao 10kg trở lên'],
        uses: ['Làm đậu hũ, tào phớ', 'Nấu sữa đậu nành', 'Làm tương, ủ mầm đậu nành'],
        images: [
            '/products/dau-nanh.jpg',
            '/products/dau-nanh-1.jpg'
        ],
    },
    {
        id: 'dau-trang-bi',
        name: 'Đậu Trắng Bi',
        priceRange: '40.000đ / kg',
        origin: 'Việt Nam',
        shortDesc: 'Đậu trắng hạt bi nhỏ đều, vỏ mỏng, dẻo bùi.',
        fullDesc: 'Đậu trắng bi hạt nhỏ xinh, vỏ mỏng, khi nấu rất mau chín dẻo bùi. Rất thích hợp nấu chè đậu trắng, làm mứt hoặc nấu xôi.',
        specs: ['Hạt nhỏ tròn đều', 'Đóng gói: Từ bao 10kg trở lên'],
        uses: ['Nấu chè đậu trắng', 'Làm mứt đậu ngày Tết', 'Nấu xôi, làm nhân bánh'],
        images: [
            '/products/dau-trang-bi.jpeg',
            '/products/dau-trang-bi-1.jpeg'
        ],
    },
    {
        id: 'dau-trang-lagu',
        name: 'Đậu Trắng Nấu Lagu',
        priceRange: '50.000đ / kg',
        origin: 'Việt Nam',
        shortDesc: 'Đậu trắng hạt to, hầm mau mềm dẻo, không bị nát.',
        fullDesc: 'Đậu trắng hạt to chọn lọc chuyên dụng nấu lagu, bò kho, rô-ti. Khi hầm lâu hạt thấm vị, bùi béo dẻo ngọt mà không bị vỡ nát.',
        specs: ['Hạt to chọn lọc', 'Đóng gói: Từ bao 10kg trở lên'],
        uses: ['Nấu lagu, bò kho, rô-ti', 'Hầm súp, nấu món Âu/Á', 'Nấu chè đậu trắng hạt to'],
        images: [
            '/products/dau-trang-lagu.jpg',
        ],
    },
    {
        id: 'me-den',
        name: 'Mè Đen (Vừng Đen)',
        priceRange: '125.000đ / kg',
        origin: 'Việt Nam',
        shortDesc: 'Mè đen nguyên hạt, giàu dinh dưỡng, mẩy đen bóng.',
        fullDesc: 'Mè đen thuần chủng hạt nhỏ bùi thơm, hàm lượng dầu cao. Dùng nhiều trong làm sữa hạt, nấu chè mè đen, làm muối vừng hoặc ép dầu mè.',
        specs: ['Mè thuần không nhuộm', 'Đóng gói: Từ bao 10kg trở lên'],
        uses: ['Nấu chè mè đen (chí mà phủ)', 'Làm sữa hạt mè đen dinh dưỡng', 'Làm muối vừng, rắc bánh quy/bánh mì'],
        images: [
            '/products/me-den.jpeg',
            '/products/me-den-1.jpeg'
        ],
    },
    {
        id: 'me-trang',
        name: 'Mè Trắng (Vừng Trắng)',
        priceRange: '60.000đ - 70.000đ / kg',
        origin: 'Việt Nam',
        shortDesc: 'Mè trắng chọn lọc, hạt mẩy đều, thơm bùi khi rang.',
        fullDesc: 'Mè trắng hạt đều màu, đã làm sạch bụi bẩn. Rất thích hợp làm gia vị rắc bánh, làm kẹo mè xửng, rang làm muối vừng hoặc ép dầu.',
        specs: ['Hạt trắng ngà tự nhiên', 'Đóng gói: Từ bao 10kg trở lên'],
        uses: ['Rang rắc bánh gấc, bánh mì, kẹo mè xửng', 'Làm muối vừng trắng', 'Ép dầu mè, làm nước xốt mè'],
        images: [
            '/products/me-trang.jpg',
            '/products/me-trang-1.jpeg'
        ],
    },
];