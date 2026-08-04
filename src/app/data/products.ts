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

export const PHONE_NUMBER = '0933650317';
export const ZALO_LINK = `https://zalo.me/${PHONE_NUMBER}`;

export const PRODUCTS: Product[] = [
    {
        id: 'dau-xanh',
        name: 'Đậu Xanh Hạt Mẩy',
        priceRange: '32.000đ - 45.000đ / kg',
        origin: 'Đắk Lắk ',
        shortDesc: 'Hạt mẩy, đều, phơi khô tự nhiên. Thích hợp làm bánh, nấu xôi, làm giá đỗ.',
        fullDesc: 'Đậu xanh được thu hoạch từ vụ mùa mới nhất, hạt tròn mẩy, phơi đủ nắng nên bảo quản được lâu mà không cần dùng hóa chất chống mối mọt. Rất phù hợp cho các lò làm bánh, xưởng sản xuất giá đỗ hoặc hộ gia đình nấu xôi, chè.',
        specs: ['Độ ẩm < 12%', 'Tỷ lệ hạt lép, vỡ < 1%', 'Tỷ lệ tạp chất < 0.5%', 'Đóng gói: Bao 10kg, 25kg, 50kg'],
        uses: ['Làm giá đỗ sạch', 'Nấu xôi, làm nhân bánh trung thu/bánh chưng', 'Nấu chè, làm bột ngũ cốc'],
        images: [
            'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
        ],
    },
    {
        id: 'dau-den',
        name: 'Đậu Đen Xanh Lòng',
        priceRange: '38.000đ - 52.000đ / kg',
        origin: 'Gia Lai',
        shortDesc: 'Đậu đen xanh lòng chuẩn quê, vỏ mỏng, ruột xanh béo thơm.',
        fullDesc: 'Đậu đen xanh lòng hạt nhỏ vừa, vỏ đen bóng, cắn ra ruột màu xanh nhạt đặc trưng. Khi nấu lên nước sánh, đậm vị, bùi béo. Dùng nhiều trong Đông y, nấu chè giải nhiệt hoặc làm trà đậu đen rang.',
        specs: ['100% ruột xanh lòng', 'Độ ẩm < 12%', 'Đóng gói: Bao 10kg, 25kg, 50kg'],
        uses: ['Rang làm trà đậu đen giảm cân', 'Nấu chè đậu đen giải nhiệt', 'Ủ mầm làm ngũ cốc dinh dưỡng'],
        images: [
            'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=800&q=80',
        ],
    },
    {
        id: 'dau-do',
        name: 'Đậu Đỏ Hạt Nhỏ',
        priceRange: '30.000đ - 42.000đ / kg',
        origin: 'Tây Nguyên',
        shortDesc: 'Đậu đỏ hạt nhỏ (đậu bánh trôi), vị bùi béo, mau mềm.',
        fullDesc: 'Đậu đỏ loại 1 hạt nhỏ bùi ngậy, mau nhừ khi nấu. Được ưa chuộng tại các quán chè, xưởng sản xuất nhân đậu đỏ làm bánh bao, bánh nướng.',
        specs: ['Hạt đỏ thẫm đều màu', 'Độ ẩm < 12%', 'Đóng gói: Bao 10kg - 50kg'],
        uses: ['Nấu chè đậu đỏ', 'Làm nhân bánh trung thu, bánh bao', 'Nấu cháo dinh dưỡng'],
        images: [
            'https://images.unsplash.com/photo-1515543922502-880a2d308c90?auto=format&fit=crop&w=800&q=80',
        ],
    },
    {
        id: 'dau-nanh',
        name: 'Đậu Nành (Đậu Tương)',
        priceRange: '25.000đ - 35.000đ / kg',
        origin: 'Đắk Nông',
        shortDesc: 'Đậu nành hạt vàng mẩy, giàu đạm. Chuyên làm sữa, đậu hũ.',
        fullDesc: 'Đậu nành chọn lọc hạt mẩy vàng, tỷ lệ nảy mầm cao, giàu hàm lượng protein. Phù hợp cho lò làm đậu hũ (tàu hũ), cơ sở sản xuất sữa đậu nành hoặc ép dầu.',
        specs: ['Không biến đổi gen (Non-GMO)', 'Tỷ lệ nảy mầm > 90%', 'Đóng gói: Bao 25kg, 50kg'],
        uses: ['Làm đậu hũ, tào phớ', 'Nấu sữa đậu nành', 'Làm tương, ủ mầm đậu nành'],
        images: [
            'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
        ],
    },
    {
        id: 'dau-trang',
        name: 'Đậu Trắng Mắt Cua',
        priceRange: '35.000đ - 48.000đ / kg',
        origin: 'Đồng Nai',
        shortDesc: 'Đậu trắng mẩy hạt, vỏ mỏng, dẻo bùi.',
        fullDesc: 'Đậu trắng mắt cua chọn lọc hạt to đều, khi hầm nấu rất mau dẻo bùi mà không bị rã nát. Thích hợp cho các món bò kho, rô-ti, mứt đậu trắng ngày Tết.',
        specs: ['Hạt trắng bóng đều', 'Độ ẩm < 12%', 'Đóng gói: Bao 10kg - 50kg'],
        uses: ['Nấu bò kho, rô-ti', 'Nấu chè đậu trắng', 'Làm mứt Tết'],
        images: [
            'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=800&q=80',
        ],
    },
];