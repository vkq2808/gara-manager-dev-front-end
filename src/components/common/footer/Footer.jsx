import React from "react";
import "./Footer.css";
const Footer = () => {

    const ContactCol = () => {
        return (
            <div className="contact-container flex flex-col max-w-[25%] text-left text-wrap text-md">
                <div className="contact-title font-semibold text-lg">
                    Thông tin liên hệ
                </div>
                <div className="address flex items-center">
                    <span><i className="lni lni-map"></i></span>
                    Số 1 Võ Văn Ngân, Phường Linh Chiểu, Quận Thủ Đức, TP.HCM
                </div>
                <div className="phone flex items-center">
                    <span><i className="lni lni-phone"></i></span>
                    0123456789
                </div>
                <div className="email flex items-center">
                    <span><i className="lni lni-envelope"></i></span>
                    <a href="mailto:vkq265@gmail.com">vkq265@gmail.com</a>
                </div>
                <div className="work-time flex items-center">
                    <span><i className="lni fas fa-clock"></i></span>
                    T2-CN (8:00 - 17:00)
                </div>
            </div>
        );
    }

    const HelpOptionCol = () => {
        return (
            <div className="help-option-container flex flex-col max-w-[25%] text-left text-wrap text-md">
                <div className="help-option-title font-semibold text-lg">
                    Hỗ trợ
                </div>
                <div className="help-option-item">
                    <a href="#">Giới thiệu</a>
                </div>
                <div className="help-option-item">
                    <a href="#">Chính sách đổi trả</a>
                </div>
                <div className="help-option-item">
                    <a href="#">Chính sách bảo mật</a>
                </div>
                <div className="help-option-item">
                    <a href="#">Điều khoản dịch vụ</a>
                </div>
            </div>
        );
    }

    return (
        <footer className="flex w-full pt-4">
            <div className="flex footer-container container w-full justify-center">
                <div className="footer-content w-[80%]">
                    <div className="flex flex-row flex-wrap w-full justify-between">
                        <ContactCol />
                        <HelpOptionCol />
                    </div>
                    <p>© 2024 All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;