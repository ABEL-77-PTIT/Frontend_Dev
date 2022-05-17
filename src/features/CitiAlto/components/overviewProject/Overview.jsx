import React from "react";

import { FiArrowRightCircle } from "react-icons/fi";
import "./overview.css";
const overviewProject = [
    {
        name: "Tên dự án",
        value: "Mona Citi Land",
    },

    {
        name: "Chủ đầu tư",
        value: "Công ty TNHH Mona Media",
    },

    {
        name: "Vị trí",
        value: "Khu đô thị Cát Lái, Phường Cát Lái, Quận 2, TP HCM",
    },

    {
        name: "Đơn vị tư vấn thiết kế",
        value: "MIA",
    },

    {
        name: "Đơn vị thi công",
        value: "COSACO",
    },

    {
        name: "Tổng diện tích khu đất",
        value: "17.000 m2",
    },

    {
        name: "Diện tích xây dựng",
        value: "19%",
    },

    {
        name: "Tổng diện tích tầng hầm",
        value: "Full giữa 2 block",
    },

    {
        name: "Tổng số căn hộ",
        value: "675 căn",
    },

    {
        name: "Bàn giao",
        value: " quý 4/2019",
    },
];
const Overview = () => {
    return (
        <div className="overview" id="overviewProject">
            <div className="overview__container">
                <div className="overview__content">
                    <h3>TỔNG QUAN DỰ ÁN</h3>
                    {overviewProject.map((overview) => {
                        return (
                            <p key={overview.name}>
                                <FiArrowRightCircle />
                                <div>
                                    <b>{overview.name}</b>
                                    {": "}
                                    {overview.value}
                                </div>
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Overview;
