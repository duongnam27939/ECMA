
import { useEffect, useState } from "../../lib/lib"
const ProductPages = function (id) {
    const [books, setBook] = useState({})
    useEffect(function () {
        fetch(`http://localhost:3000/books/1`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setBook(data)
            })
    },[])

    return `<div class="content">
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
                <li><a class="menu_li12" href="#">Nhà sách Tiki ></a></li>
                <li><a class="menu_li12" href="#">Sách tiếng việt ></a></li>
                <li><a class="menu_li12" href="#">Sách kỹ năng sống ></a></li>
                <li><a class="menu_li12" href="#">Sách tư duy - Kỹ năng sống ></a></li>
                <li><a href="#">Càng Kỷ Luật, Càng Tự Do </a></li>
            </div>
        </div>
        <!-- address -->
        <div class="main_address">
            <div class="main_address_left">
                <div class="main_address_left_img2">
                    <img src="${books.images?.[0].base_url}" alt="">
                </div>
                <div class="main_address_left_img">
                    <div class="main_address_left_img_file">
                   <div class = "ima">
                   ${books.images?.map(function (item) {
                        return `<img src="${item.large_url}" alt="">`
                    })}
                   
                   </div>
                    </div>
                </div>
            </div>
            <div class="main_address_right">
                <div class="main_address_text_all">
                    <div class="main_address_right_text1">
                        <p>Tác giả:<span style="color: #0D5CB6;"> Ca Tây </span></p>
                    </div>
                    <div class="main_address_right_text2">
                        <p> Đứng thứ 13 trong <span style="color: #0D5CB6;"> Top 1000 Sách tư duy - Kỹ năng sống </span>
                            <span class="span2" style="color: #0D5CB6;">bán chạy tháng này</span>
                        </p>
                    </div>
                </div>
                <div class="main_address_right_text">
                    <p>${books.name}</p>
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
                            <p>(Xem 2942 đánh giá) <span> | Đã bán 1000+</span></p>
                        </div>
                    </div>
                    <div class="main_address_product">
                        <div class="main_address_product1">
                            <p class = "p7">${new Intl.NumberFormat().format(books.current_seller?.price)}₫
                            </p>
                        </div>

                    </div>
                </div>

                <div class="main_address_name">
                    <div class="main_address_name_p">
                        <p>Số Lượng</p>
                    </div>
                    <div class="main_address_name_input">
                        <div class="main_address_name_input1">
                            <p>-</p>
                        </div>
                        <div class="main_address_name_input2">
                            <p></p>
                        </div>
                        <div class="main_address_name_input1">
                            <p>+</p>
                        </div>
                    </div>
                    <input type="text" value="Chọn Mua">
                </div>

            </div>
        </div>
        <div class="main_aside">
            <div class="main_aside_text">
                <p>Sản Phẩm Tương Tự</p>
            </div>
            <!-- aside -->
            <div class="aside">
            
                    <div class="aside00">
                    <div class="aside1">
                    <a href="/product/${books.id}"><img src="${books.images?.[0].base_url}" alt=""></a>
                        <div class="aside5">
                            <img src="/Rectangle (45).png" alt="">
                        </div>
                    </div>
                    <div class="aside_p">
                        <p>${books.name}</p>
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
                        
                        <div class="aside_footer">
                            <img src="/Rectangle (12).png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="aside">
                <div class="main_aside_text">
                    <p>Thông tin chi tiết</p>
                    <div class="aside_tr">
                        <div class="aside_tr1">
                            <p>Công ty phát hành</p>
                        </div>
                        <div class="aside_tr2">
                            <p>Bloom Books</p>
                        </div>
                    </div>
                    <div class="aside_tr0">
                        <div class="aside_tr1">
                            <p>Ngày xuất bản</p>
                        </div>
                        <div class="aside_tr3">
                            <p>2020-09-01 00:00:00</p>
                        </div>
                    </div>
                    <div class="aside_tr0">
                        <div class="aside_tr1">
                            <p>Kích thước</p>
                        </div>
                        <div class="aside_tr4">
                            <p>14.5 x 20 cm</p>
                        </div>
                    </div>
                    <div class="aside_tr0">
                        <div class="aside_tr1">
                            <p>Dịch Giả</p>
                        </div>
                        <div class="aside_tr3">
                            <p>Tuyết Mai</p>
                        </div>
                    </div>
                    <div class="aside_tr0">
                        <div class="aside_tr1">
                            <p>Loại bìa</p>
                        </div>
                        <div class="aside_tr4">
                            <p>Bìa mềm</p>
                        </div>
                    </div>
                    <div class="aside_tr0">
                        <div class="aside_tr1">
                            <p>Số trang
                            </p>
                        </div>
                        <div class="aside_tr3">
                            <p>288</p>
                        </div>
                    </div>
                    <div class="aside_tr0">
                        <div class="aside_tr1">
                            <p>Nhà xuất bản</p>
                        </div>
                        <div class="aside_tr4">
                            <p>Nhà Xuất Bản Thế Giới</p>
                        </div>
                    </div>
                    <div class="aside_address_text_aside">
                        <div class="main_aside_text">
                            <p>Mô Tả Sản Phẩm</p>
                        </div>
                        <div class="main_aside_text_aside2">
                            <p>KỶ LUẬT vốn là ván cờ bạn phải tự đấu với chính mình. Thắng - bạn sẽ có được “bản năng
                                của người mạnh mẽ nhất”, đó là sự tự kiểm soát bản thân. Thua - bạn mãi sống trong cảm
                                giác tạm bợ, nuối tiếc. Càng dễ dàng dung túng cho những thói quen trì hoãn bao nhiêu,
                                cuộc sống của bạn sẽ đi càng nhanh tới sự mất kiểm soát và thiếu quy hoạch bấy nhiêu</p>


                            <p>Hãy kiên trì đặt ra yêu cầu cao với bản thân, từ chối sự mê hoặc của thói tùy tiện đồng
                                thời thiết lập cho mình những thói quen tốt trong hành vi thường ngày. Sự nỗ lực sẽ luôn
                                được đền đáp xứng đáng nếu bạn biết cách đầu tư công sức và thời gian. Bởi một ngày nào
                                đó trong tương lai, những gì bạn làm sẽ phản chiếu đầy đủ trên chính con người và cuộc
                                đời của bạn.</p>


                            <p>CÀNG KỶ LUẬT, CÀNG TỰ DO - Mong rằng tại thời điểm kết thúc hành trình với cuốn sách, bạn
                                đã là một phiên bản khác kỷ luật hơn, nhưng tự do hơn.</p>


                            <p>Một vài trích dẫn:</p>


                            <p>“Bạn cần phải biết rằng tình yêu là hoa thêu trên gấm. Có thì tốt, không có cũng chẳng
                                sao, thực sự không đáng để bạn vì nó mà từ bỏ sự nghiệp, từ bỏ cơ hội thăng tiến thậm
                                chí là từ bỏ cả cuộc đời vinh hoa sau này.”</p>


                            <p>“Những người trưởng thành như chúng ta nên nhìn cuộc sống rộng hơn một chút, ghen có thể
                                có, tức giận có thể có. Thế nhưng, có những cảm xúc chỉ nên lướt qua trong lòng, ngày
                                hôm sau ngủ dậy hãy để nó rời đi cùng với đêm đen mới là cách lựa chọn tốt nhất.”</p>


                            <p>“Mỗi người đều có kinh nghiệm sống không giống nhau, yêu cầu không giống nhau. Điều giống
                                nhau là chúng ta đều nên tìm mọi cách trau dồi khả năng của bản thân để sống tốt cuộc
                                đời này.”</p>


                            <p>Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản
                                phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận
                                chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có
                                giá trị trên 1 triệu đồng)./src.
                            </p>
                        </div>
                        <div class="main_aside_butum_click">
                            <input type="text" value="Xem Thêm Nội Dung">
                        </div>
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

export default ProductPages
