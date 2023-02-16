import { useEffect, useState } from "../../lib/lib";
const HomePages = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/books')
        .then((res)=>{
           return res.json()
        })
        .then((data)=>{
            setData(data)
        });
    },[])
    return ` <div class="content">
    <div class="content_menu">
        <div class="logo">
            <div class="logo1">
                <img src="/Rectangle.png" alt="">
            </div>
            <div class="logo2">
                <img src="/Rectangle (1).png" alt="">
            </div>
        </div>
        <div class="seach">
            <div class="seach_input">
                <input type="text" placeholder="Tìm Kiếm">
            </div>
            <button>
                <div class="img1"><img src="/Rectangle (3).png" alt=""></div>
                <div class="text">
                    <p>Tìm kiếm</p>
                </div>
            </button>
        </div>
        <div class="content_left">
            <div class="content_left1">
                <img src="/Rectangle (2).png" alt="">
            </div>
            <div class="content_left_text">
                <div class="content_left2">
                    <p class="p1">Đăng Kí / Đăng Nhập</p>
                    <p class="p2">Tài Khoản
                    <p>
                </div>
                <div class="content_left_img">
                    <img src="/Rectangle(5).png" alt="">
                </div>
            </div>
        </div>
        <div class="content_produts">
            <div class="contenr_products1">
                <img src="/Rectangle (6).png" alt="">
            </div>
            <div class="content_produts_text">
                <p class="p1">Giỏ Hàng</p>
            </div>
        </div>
    </div>
    <!-- nav -->
    <div class="nav">
        <div class="menu">
            <li><a class="menu_li12" href="#">Trang chủ ></a></li>
            <li><a href="#">Nhà sách Tiki</a></li>
        </div>
    </div>
    <!-- address -->
    <div class="address">
        <div class="address_danhmuc">
            <h5>DANH MỰC SẢN PHẨM</h5>
            <p>English Books</p>
            <p>Sách tiếng Việt</p>
            <p>Văn phòng Phẩm</p>
            <p>Qùa lưu niện</p>
        </div>
        <div class="address_banner">
            <h1>Nhà Sách Tiki</h1>
            <img src="/Rectangle (7).png" alt="">
            <div class="menu1">
                <li><a href="#">Phổ Biến</a></li>
                <li><a href="#">Bán Chạy</a></li>
                <li><a href="#">Hàng Mới</a></li>
                <li><a href="#">Giá Thấp</a></li>
                <li><a href="#">Giá Cao</a></li>
            </div>
            <div class="hr"></div>
            <div class="address_banner_bottom1">
                <div class="address_banner_bottom">
                    <img src="/Rectangle (8).png" alt="">
                </div>
                <div class="address_banner_bottom2">
                    <img src="/Rectangle (9).png" alt="">
                </div>
            </div>
            
            <div class="aside">
                ${data.map(function(book,index)  {
                        return`
                        <div class="aside2">
                        <div class="aside0">
                        <a href="/product/${book.id}"><div class="aside1">
                                <img src="${book.images[0].base_url}" alt="">
                            </div>
                            </a>
                            <div class="aside_p">
                                <img src="/Rectangle (8).png" alt="">
                                <p class="p3">Giao Siêu tốc 2H</p>
                                <p>${book.name}</p>
                            </div>
                            <div class="aside_icon">
                                <div class="aside_icon_star">
                                    <div class="aside_icon_images">
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <div class="aside_icon_text">
                                        <p>| Đã bán 1000+</p>
                                    </div>
                                </div>
                            </div>
                            <div class="aside_sapan">
                                <p class="p4" >${new Intl.NumberFormat().format(book.current_seller.price)} ₫ <span> -35%</span></p>
                                <div class="aside_footer">
                                    <img src="/Rectangle (12).png" alt="">
                                </div>
                            </div>
                        </div>
                        </div>
                        `

                    }).join(' ')
                }

            
            </div>
            </div>

        </div>
    </div>

    <div class="footer">
        <div class="footer_banner">
            <div class="footer_banner_menu">
                <h4>Hỗ trợ khách hàng</h4>
                <p>Hotline: <span>1900-6035</span></p>
                <p>(1000 đ/phút, 8-21h kể cả T7, CN)</p>
                <p>Các câu hỏi thường gặp</p>
                <p>Gửi yêu cầu hỗ trợ</p>
                <p>Hướng dẫn đặt hàng</p>
                <p>Phương thức vận chuyển</p>
                <p>Chính sách đổi trả</p>
                <p>Hướng dẫn trả góp</p>
                <p>Chính sách hàng nhập khẩu</p>
                <p>Hỗ trợ khách hàng: <span>hotro@tiki.vn</span></p>
                <p>Báo lỗi bảo mật: <span>security@tiki.vn</span></p>
            </div>
            <div class="footer_banner_menu1">
                <h4>Về Tiki</h4>
                <p>Giới thiệu Tiki</p>
                <p>Tuyển dụng</p>
                <p>Chính sách bảo mật thanh toán</p>
                <p>Chính sách bảo mật thông tin cá nhân</p>
                <p>Chính sách giải quyết khiếu nại</p>
                <p>Điều khoản sử dụng</p>
                <p>Giới thiệu Tiki Xu</p>
                <p>Tiếp thị liên kết cùng Tiki</p>
                <p>Bán hàng doanh nghiệp</p>
                <p>Điều kiện vận chuyển</p>
            </div>
            <div class="footer_banner_menu1">
                <h4>Hợp tác và liên kết</h4>
                <p>Quy chế hoạt động Sàn GDTMĐT</p>
                <p>Bán hàng cùng Tiki</p>
                <h4>Chứng nhận bởi</h4>
                <div class="footer_small">
                    <div class="footer_banner_menu_images">
                        <img src="/Rectangle (31).png" alt="">
                    </div>
                    <div class="footer_banner_menu_images1">
                        <img src="/Shape (1).png" alt="">
                    </div>
                    <div class="footer_banner_menu_images2">
                        <img src="/Shape.png" alt="">
                    </div>
                </div>
            </div>
            <div class="footer_banner_menu1">
                <h4>Phương thức thanh toán</h4>
                <div class="footer_text">
                    <div class="footer_banner_menu_images">
                        <div class="footer_images1">
                            <img src="/tiki.png" alt="">
                        </div>
                        <div class="footer_images">
                            <img src="/visa.png" alt="">
                        </div>
                        <div class="footer_images">
                            <img src="/vector1.png" alt="">
                        </div>
                        <div class="footer_images">
                            <img src="/jbc.png" alt="">
                        </div>
                        <div class="footer_images">
                            <img src="/atm.png" alt="">
                        </div>
                    </div>
                    <div class="footer_banner_menu_images3">
                        <div class="footer_images1">
                            <img src="/momo.png" alt="">
                        </div>
                        <div class="footer_images">
                            <img src="/zalophay.png" alt="">
                        </div>
                        <div class="footer_images">
                            <img src="/moca.png" alt="">
                        </div>
                        <div class="footer_images">
                            <img src="/vtpay.png" alt="">
                        </div>
                        <div class="footer_images">
                            <img src="/vnpay.png" alt="">
                        </div>
                    </div>
                    <div class="footer_banner_menu_images3">
                        <div class="footer_images1">
                            <img src="/tay.png" alt="">
                        </div>
                        <div class="footer_images">
                            <img src="/tragop.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="footer_text1">
                    <h4>Dịch vụ giao hàng</h4>
                    <img src="/now.png" alt="">
                </div>
            </div>
            <div class="footer_banner_menu1">
                <h4>r</h4>
                <div>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <div class="footer_icon_images">
                    <h4>Tải úng dụng trên điện thoại</h4>
                    <div class="footer_icon_images1">
                        <div class="footer_icon_images2">
                            <img src="/Rectangle (32).png" alt="">
                        </div>
                        <div class="footer_icon_images3">
                            <div class="footer_icon_images4">
                                <img src="/Rectangle (33).png" alt="">
                            </div>
                            <div class="footer_icon_images4">
                                <img src="/Rectangle (34).png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hr1"></div>
        <div class="footer_button">
            <p>Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường 12, quận 10, Thành phố Hồ Chí
                Minh</p>
            <p>Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn
                phòng hoặc trung tâm xử lý đơn hàng</p>
            <p>Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp
                lần đầu ngày 06/01/2010 và sửa đổi lần thứ 23 ngày 14/02/2022</p>
            <p>© 2022 - Bản quyền của Công ty TNHH Ti Ki</p>
        </div>
    </div>
</div>`
}

export default HomePages