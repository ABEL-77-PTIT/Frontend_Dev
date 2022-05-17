import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { CgInstagram, CgYoutube } from "react-icons/cg";
import { FiTwitter } from "react-icons/fi";

import "./footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__content">
          <h1>THÔNG TIN LIÊN HỆ</h1>
          <div className="footer__content--details">
            <div className="footer__content--left">
              <h3>Công ty TNHH Mona Media</h3>
              <img
                src="http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/logo-footer.jpg"
                alt="Anh nè"
              />
              <p>
                <b>Địa chỉ: </b>319 C16 Lý Thường Kiệt, Phường 15, Quận 11,
                Tp.HCM
              </p>
              <p>
                <b>Điện thoại: </b>076 922 0162
              </p>
              <p>
                <b>Email: </b>demonhunterg@gmail.com
              </p>
              <p>
                <b>Thời gian làm việc: </b> thứ 2 - thứ 6 (9h00 - 18h00)
              </p>
              <div className="footer__icons">
                <TiSocialFacebook className="footer__icon" />
                <CgInstagram className="footer__icon" />
                <FiTwitter className="footer__icon" />
                <CgYoutube className="footer__icon" />
              </div>
            </div>
            <hr style={{border: "1px solid #2294D2", height: "auto"}}/>
            <div className="footer__content--right">
              <h3>
                Đăng ký ngay để cập nhật những thông tin mới nhất & bảng báo giá
                chính xác từ chúng tôi
              </h3>
              <form action className="footer__content--form">
                <div>
                  <input type="text" placeholder="Họ và tên" />
                  <input type="email" placeholder="email" />
                  <input type="text" placeholder="Số điện thoại" />
                  <input type="text" placeholder="Địa chỉ" />
                </div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Lời nhắn nhủ đến từ You!!"
                ></textarea>
                <button className="footer__content--button">GỬI nha!</button>
              </form>
            </div>
          </div>
          <div className="footer__license">
              <p>© Bản quyền thuộc về . Thiết kế website <a href="#!">Mona Media</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
