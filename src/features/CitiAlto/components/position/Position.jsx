import React from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import "./position.css";
const positions = [
    {
        title: "TRUNG TÂM QUẬN 1",
        desc: "Từ Citialto chỉ 15 phút kết nối trực tiếp với quận 1 thông qua hầm thủ thiêm.",
    },
    {
        title: "CÁC TIỆN ÍCH LÂN CẬN",
        desc: "Chỉ chưa tới 1 phút chạy xe dân cư Citialto có thể tiếp cận cụm tiện ích khu đô thị Cát Lái. Hệ thống giáo dục từ mầm non tới đại học, khu thể thao, khu mua sắm…",
    },
    {
        title: "CÁC TIỆN ÍCH QUẬN 2",
        desc: "Chưa đến 8 phút khách hàng thuận tiện tới các tiện ích hiện hữu của quận 2 – Trung tâm hành chính quận, Parkson Cantatil, Vincom Mega Mall…",
    },
    {
        title: "PHÚ MỸ HƯNG",
        desc: "Từ dự án liên kết tới trung tâm khu nam Phú Mỹ Hưng chỉ mất chưa tới 10 phút chạy xe quan cầu Phú Mỹ.",
    },
];
const Position = () => {
    return (
        <div className="position" id="position">
            <div className="position__container">
                <div className="position__content">
                    <div className="position__desc">
                        <h1>VỊ TRÍ ĐẮT ĐỊA</h1>
                        <p>
                            Mona Citi Land toạ lạc tại ngay trung tâm khu đô thị
                            Cát Lái quận 2. Chỉ cần không quá 15 phút di chuyển
                            khách hàng có thể kết nối tất cả các tiện ích lân
                            cận, tất cả những quận lân cận và quận 1. Trường
                            học, bệnh viện, siêu thị, khu vui chơi giải trí,
                            công viên kề bên…Citialto giúp bạn hiện thực ước mơ
                            có 1 căn nhà ngay trung tâm thành phố, phù hợp trở
                            thành một nơi an cư lý tưởng.
                        </p>
                    </div>
                    <div className="position__img">
                        <img
                            className="thumbnail"
                            src="http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/vi-tri.jpg"
                            alt=""
                        />
                    </div>

                    {positions.map((position) => {
                        return (
                            <div
                                key={position.title}
                                className="position__details"
                            >
                                <h3>
                                    <span>
                                        <AiFillPlusSquare />
                                    </span>
                                    {position.title}
                                </h3>
                                <p>{position.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Position;
