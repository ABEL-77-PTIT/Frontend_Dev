import React, { useEffect, useState } from "react";
import "./newDetails.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import { NewsService } from "../../../../app/Services/CitiAlto";

const NewDetails = () => {
    const [newDetails, setNewDetails] = useState();
    const slug = useParams();
    useEffect(() => {
        NewsService.news.map((tintuc) => {
            tintuc.id === slug.id
                ? setNewDetails({ tintuc })
                : setNewDetails({});
            return setNewDetails(tintuc);
        });
    }, [slug]);

    return (
        <>
            <Header />
            <div>
                <div>
                    <div>
                        <input type="text" placeholder="XIn chao" />
                    </div>
                    <div>
                        <h2>BAI VIET MOI,</h2>
                        <div>
                            <div>
                                <img src="#!" alt="Real Estate" />
                                <p>Titile</p>
                            </div>
                            <div>
                                <img src="#!" alt="Real Estate" />
                                <p>Titile</p>
                            </div>
                            <div>
                                <img src="#!" alt="Real Estate" />
                                <p>Titile</p>
                            </div>
                            <div>
                                <img src="#!" alt="Real Estate" />
                                <p>Titile</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p>TIN TUC</p>
                        <h2>Title</h2>
                        <hr />
                        <img src="#!" alt="Real Estate" />
                        <p>Content</p>
                        <div>chua 5 cai button</div>
                        <div>Pagination</div>
                    </div>
                    <div>
                        <h3>TRA LOI</h3>
                        <p>
                            Email của bạn sẽ không được hiển thị công khai. Các
                            trường bắt buộc được đánh dấu *
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
                            </div>
                            <button>phan hoi</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NewDetails;
