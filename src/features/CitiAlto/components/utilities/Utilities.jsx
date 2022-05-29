import React from "react";
import "./utilities.css";
const internalArea = [
    { id: 1, name: "Công viên trung tâm" },
    { id: 2, name: "Sân cầu lông" },
    { id: 3, name: "BBQ" },
    { id: 4, name: "Khu vui chơi trẻ em" },
    { id: 5, name: "Ghế nghỉ" },
    { id: 6, name: "Trung tâm thương mại" },
    { id: 7, name: "Sân bóng rổ" },
    { id: 8, name: "Lối đi bộ" },
    { id: 9, name: "Sân cát" },
    { id: 10, name: "Hồ bơi" },
    { id: 11, name: "Sảnh đón" },
    { id: 12, name: "Hầm giữ xe" },
];

const suburbs = [
    { id: 1, name: "Trung tâm thương mại" },
    { id: 2, name: "Bệnh viên" },
    { id: 3, name: "THPT Cát Lái" },
    { id: 4, name: "Mẫu giáo Sơn Ca" },
    { id: 5, name: "Tiểu học Mỹ Thủy" },
    { id: 6, name: "THCS Cát Lái" },
    { id: 7, name: "Tòa án" },
    { id: 8, name: "Sân vận động" },
    { id: 9, name: "Cơ quan hành chính" },
    { id: 10, name: "Câu lạc bộ" },
    { id: 11, name: "Đại học quản lí & công nghệ (UMT)" },
    { id: 12, name: "Bưu điện" },
];
const Utilities = () => {
    return (
        <div className="utilities" id="utilities">
            <div className="utilities__container">
                <div className="utilities__content">
                    <h1>NHỮNG TIỆN ÍCH</h1>
                    <div className="utilities__internalArea">
                        <div className="utilities__internalArea--img">
                            <img
                                className="thumbnail"
                                src="http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/Capture1.png"
                                alt=""
                            />
                        </div>
                        <div className="internalArea__content">
                            <h3>Tiện ích nội khu</h3>
                            <div>
                                {internalArea.map((internal) => {
                                    return (
                                        <span key={internal.id}>
                                            <span>{internal.id}</span>{" "}
                                            {internal.name}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="utilities__suburbs">
                        <div className="suburbs__content">
                            <h3>Tiện ích ngoại khu</h3>
                            <div>
                                {suburbs.map((ex) => {
                                    return (
                                        <span key={ex.id}>
                                            <span>{ex.id}</span> {ex.name}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="utilities__internalArea--img">
                            <img
                                className="thumbnail"
                                src="http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/tien-ich-ngoai-khu.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Utilities;
