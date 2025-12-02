import React from "react";
import "../../styles/Header.css";

const Header = () => (
  <header className="header">
    <div className="header-left">
      <img src="/logo.png" alt="Light Novel Logo" className="header-logo" />
    </div>
    <nav className="header-nav">
      <a href="#">Sáng tác</a>
      <a href="#">AI dịch</a>
      <a href="#">Xuất bản</a>
      <a href="#">Thảo luận</a>
      <a href="#">Danh sách</a>
      <a href="#">Hướng dẫn</a>
    </nav>
    <div className="header-right">
      <input type="text" className="header-search" placeholder="Tối thiểu 2 kí tự" />
      <button className="header-login">Đăng nhập</button>
    </div>
  </header>
);

export default Header;
