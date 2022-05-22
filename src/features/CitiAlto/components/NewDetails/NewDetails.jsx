import React, { useEffect, useState } from "react";
import "./newDetails.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import { NewsService } from "../../../../app/Services/CitiAlto";

import { BiSearchAlt2 } from "react-icons/bi";

const NewDetails = () => {
    const [newDetails, setNewDetails] = useState();
    const slug = useParams();
    useEffect(() => {
        NewsService.news.map((tintuc) => {
            // const data = {}
            tintuc.id === slug.id
                ? setNewDetails({ tintuc })
                : setNewDetails({});
            return setNewDetails(tintuc);
        });
    }, [slug]);

    return (
        <>
            <Header />
            <div className="news__container">
                <div className="news__content">
                    <div className="news__navigation">
                        <div className="search__text">
                            <div>
                                <input type="text" placeholder="Tìm kiếm..." />
                                <button
                                    type="button"
                                    className="button__search"
                                >
                                    <BiSearchAlt2 className="icon__search" />
                                </button>
                            </div>
                        </div>
                        <div className="news__title">
                            <h2>BÀI VIẾT MỚI</h2>
                            <div className="news__nav">
                                {NewsService.news.map((tintuc) => {
                                    return (
                                        <div className="new__content--title">
                                            <div>
                                                <img
                                                    src={tintuc.img}
                                                    alt="Real Estate"
                                                />
                                                <p>{tintuc.title}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="news__detail">
                        {/* <div>
                            <p>TIN TỨC</p>
                            <h2>{newDetails.title}</h2>
                            <hr />
                            <img src={newDetails.img} alt="Real Estate" />
                            <p>{newDetails.description}</p>
                            <div>chua 5 cai button</div>
                            <div>Pagination</div>
                        </div>
                        <div>
                            <h3>TRA LOI</h3>
                            <p>
                                Email của bạn sẽ không được hiển thị công khai.
                                Các trường bắt buộc được đánh dấu *
                            </p>
                            <div>
                                <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="10"
                                ></textarea>
                                <div>
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                    <button
                                        type="button"
                                        className="button__search"
                                    >
                                        <BiSearchAlt2 className="icon__search" />
                                    </button>
                                </div>
                                <button>phan hoi</button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NewDetails;
