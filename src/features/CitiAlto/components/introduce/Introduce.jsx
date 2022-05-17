import React from 'react'
import "./introduce.css"
const Introduce = () => {
  return (
    <div className="introduce" id="introduce">
        <div className="introduce__container">
            <div className="introduce__content">
                <div className="introduce__content--desc">
                    <h3>Dự án căn hộ</h3>
                    <h1>MONA CITI LAND</h1>
                    <p>Căn hộ Mona Citi Land tọa lạc tại khu đô thị Cát Lái phường Cát Lái quận 2 Tp.Hồ Chí Minh. Diện tích 152ha được thành phố quy hoạch và phát triển thành khu đô thị hoàn chỉnh với đầy đủ chức năng: bệnh viện, trường học, trung tâm thương mại, khu vui chơi giải trí, công viên rộng 4ha, trung tâm thể dục thể thao…</p>
                    <p>Là một siêu phẩm mới củatại khu đô thị Cát Lái được ví như hòn ngọc mới của khu đông bởi sự hoàn hảo trong đường nét thiết kế. Mọi cảnh quan bên trong và ngoài căn hộ , từ không gian tới kiến trúc đều toát lên vẻ thời thượng của dự án.</p>
                </div>
                <div className="introduce__content--img">
                    <img src="http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/gt.jpg" alt="Image__photo" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduce