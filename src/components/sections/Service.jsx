import React from "react";
import "../../styles/Service.css";

const services = [
  {
    title: "Giới thiệu",
    description: "Cộng Light Novel là nền tảng đọc truyện miễn phí, nơi bạn có thể khám phá và chia sẻ những câu chuyện yêu thích với cộng đồng."
  },
  {
    title: "Chính sách bảo mật",
    description: "Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn và không chia sẻ với bên thứ ba."
  },
  {
    title: "Quy định sử dụng",
    description: "Vui lòng không đăng tải nội dung vi phạm pháp luật hoặc bản quyền. Mọi vi phạm sẽ bị xử lý theo quy định."
  }
];

const Service = () => (
  <section className="service-section">
    <h2>Dịch vụ & Chính sách</h2>
    <div className="service-list">
      {services.map((item, idx) => (
        <div className="service-item" key={idx}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Service;
