import React from "react";
import "./benefit.css";
const benefits = [
  {
    img: "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/icons8-first-place-ribbon-60.png",
    title: "Chủ đầu tư uy tín",
    desc: "Với uy tín và tâm huyết của mình trên thị trường bất động sản. Mona Media tạo ra thương hiệu được khách hàng và đối tác đánh giá cao. Trong năm 2018 Mona Media tiếp tục nhận được nhiều giải thưởng mang tầm cỡ quốc tế về chủ đầu tư uy tín và các dự án nhân văn…",
  },

  {
    img: "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/icons8-map-marker-60.png",
    title: "Vị Trí Đẹp",
    desc: "Mona Citi Land là một trong những dự án chung cư hiếm hoi hiện nay toạ lạc tại ngay trung tâm khu đô thị Cát Lái một trong những khu đô thị hoàn chỉnh nhất tại Sài Gòn hiện nay. Vị trí đắt giá Khu đô Thị Cát Lái – Phường Cát Lái – Quận 2.",
  },

  {
    img: "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/icons8-money-bag-60.png",
    title: "Giá Bán Cạnh Tranh",
    desc: "Sở hữu ưu thế vượt trội về vị trí và tiện ích nhưng Mona Citi Land lại có mức giá rất cạnh tranh so với những dự án chung cư khác trong khu vực. Căn hộ cao cấp của khu đôn nhưng sở hữu mức giá phù hợp với đông đảo khách hàng. Một dự án đáng đồng tiền cho khách mua ở và đầu tư.",
  },
];
const Benefit = () => {
  return (
    <div className="benefit" id="benefit">
      <div className="benefit__container">
        <div className="benefit__content">
            {benefits.map((benefit) => {
              return (
                <div key={benefit.img} className="benefit__content--list">
                  <img src={benefit.img} alt="Ảnh nè" />
                  <h2 className="benefit__content--title">{benefit.title}</h2>
                  <p className="benefit__content--desc">{benefit.desc}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );  
};

export default Benefit;
