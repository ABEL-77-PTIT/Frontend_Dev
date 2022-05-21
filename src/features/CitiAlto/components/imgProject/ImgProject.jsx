import React, { useState } from "react";
// import Carousel from "react-elastic-carousel";
import Slider from "react-slick";
import "./imgProject.css";

// const apartment = [
//     "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/gall1.jpg",
//     "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/gall2.jpg",
//     "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/gall3.jpg",
//     "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/gall4.jpg",
//     "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/gall5.jpg",
//     "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/gall6.jpg",
// ];

const grounds = [
    "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/A1-3d.jpg",
    "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/A2-3d.jpg",
    "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/B1-3d.jpg",
    "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/B2.jpg",
];

const othersUtilities = [
    "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/tien-ich-3.jpg",
    "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/tien-ich-4.jpg",
    "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/4001_dieu_hoa_10.jpg",
    "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/PHOI-CANH-DU-AN-CAN-HO-FLORA-KESHI-THU-DUC-NAM-LONG-HCM.jpg,",
    "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/tien-ich-1.jpg",
    "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/tien-ich-2.jpg",
];

// const settingsApartment = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
// };

const settingsUtilities = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
};

const ImgProject = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTag = (index) => {
        setToggleState(index);
    };
    return (
        <div className="imgProject" id="imgProject">
            <div className="imgProject__container">
                <div className="imgProject__content">
                    <h1>HÌNH ẢNH</h1>
                    <div className="bloc__tabs">
                        <div
                            onClick={() => toggleTag(1)}
                            className={
                                toggleState === 1 ? "tabs active__tabs" : "tabs"
                            }
                        >
                            CĂN HỘ
                        </div>
                        <div
                            onClick={() => toggleTag(2)}
                            className={
                                toggleState === 2 ? "tabs active__tabs" : "tabs"
                            }
                        >
                            MẶT BẰNG
                        </div>
                        <div
                            onClick={() => toggleTag(3)}
                            className={
                                toggleState === 3 ? "tabs active__tabs" : "tabs"
                            }
                        >
                            TIỆN ÍCH KHÁC
                        </div>
                    </div>
                    <div className="img__content--tabs">
                        <div
                            className={
                                toggleState === 1
                                    ? "img__content--tab active__img--content "
                                    : "img__content--tab"
                            }
                        >
                            <div className="apartment__img">
                                <div className="apartment__left">
                                    <div>
                                        <h3>Phòng tắm</h3>
                                        <p>Căn hộ Mona Citi land</p>
                                    </div>
                                </div>
                                <div className="apartment__center--top">
                                    <div>
                                        <h3>Phòng khách</h3>
                                        <p>Căn hộ Mona Citi Land</p>
                                    </div>
                                </div>
                                {/* <Slider {...settingsApartment}>
                                        {apartment.map((apart) => {
                                            return (
                                                <div className="apartImg">
                                                    <img
                                                        src={apart}
                                                        alt="Ảnh nè"
                                                    />
                                                </div>
                                            );
                                        })}
                                    </Slider> */}
                                <div className="apartment__center--bottom-left"></div>
                                <div className="apartment__center--bottom-center"></div>
                                <div className="apartment__center--bottom-right"></div>
                                <div className="apartment__right">
                                    <div>
                                        <h3>Nhà bếp</h3>
                                        <p>Căn hộ Mona Citi Land</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={
                                toggleState === 2
                                    ? "img__content--tab active__img--content"
                                    : "img__content--tab"
                            }
                        >
                            <div className="ground__img">
                                {grounds.map((ground) => {
                                    return (
                                        <div key={ground}>
                                            <img src={ground} alt="ảnh nè" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div
                            className={
                                toggleState === 3
                                    ? "img__content--tab active__img--content"
                                    : "img__content--tab"
                            }
                        >
                            <Slider {...settingsUtilities}>
                                {othersUtilities.map((otherUtilities) => {
                                    return (
                                        <div className="otherUtilities">
                                            <img
                                                src={otherUtilities}
                                                alt="Ảnh nè"
                                            />
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImgProject;
