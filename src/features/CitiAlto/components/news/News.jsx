import React from "react";
import { Link } from "react-router-dom";
import { NewsService } from "../../../../app/Services/CitiAlto";
import { handleSlug } from "../../slugify";
import "./news.css";

const News = () => {

    return (
        <div className="news" id="news">
            <div className="news__container">
                <div className="news__content">
                    <h1>TIN TỨC</h1>
                    <div className="news__content--lists">
                        {NewsService.news?.map((tintuc) => {
                            return (
                                <div
                                    key={tintuc.id}
                                    className="news__content--list"
                                >
                                    <div className="new__content">
                                        <img src={tintuc.img} alt="" />
                                        <hr
                                            style={{
                                                width: "40px",
                                                margin: "0 auto 10px",
                                                border: "1px solid #2294D2",
                                            }}
                                        />
                                        <div className="new__content--details">
                                            <h5>{tintuc.title}</h5>
                                            <p>{tintuc.desc}</p>
                                            <Link
                                                to={`/my/real_estate/${handleSlug(tintuc.title)}`}
                                            >
                                                <button
                                                    type="button"
                                                    className="new__content--button"
                                                >
                                                    CHI TIẾT
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
