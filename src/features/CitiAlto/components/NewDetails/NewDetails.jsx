import React, { useEffect, useState } from "react";
import "./newDetails.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Link, useParams } from "react-router-dom";
import { NewsService } from "../../../../app/Services/CitiAlto";

import { BiSearchAlt2 } from "react-icons/bi";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const getNewSDetailsByTitle = (title) => {
    return NewsService.news.find((tintuc) => tintuc.title === title);
};
// const getNewsDetailsPrevPanigation = (newsDetailsCurrentId) => {
//     return NewsService.news.find((tintuc) => tintuc.id === newsDetailsCurrentId - 1)
// }
// const getNewsDetailsNextPanigation = (newsDetailsCurrentId) => {
//     return NewsService.news.find((tintuc) => tintuc.id === newsDetailsCurrentId + 1)
// }
const NewDetails = () => {
    const [newsDetails, setNewsDetails] = useState();
    const [newsDetailsPrev, setNewsDetailsPrev] = useState();
    const [newsDetailsNext, setNewsDetailsNext] = useState();
    const slug = useParams();

    useEffect(() => {
        setNewsDetails(getNewSDetailsByTitle(slug.id));
    }, [slug]);

    //hien thi title la cai truoc vaf sau trang hien tai
    //khi click vaof title thi chuyen noi dung sang baif viet truoc. neu >= 1 thi dung viec click laij
    // khi click vaof ttile sau thi chuyen sang bai viet sau, == total thfi dung lai.

    const handleChangeNewsDetailsPrev = (newsDetailsCurrentId) => {
        if (newsDetailsCurrentId >= 0)
            setNewsDetailsPrev(
                NewsService.news.find(
                    (tintuc) => tintuc.id === newsDetailsCurrentId
                )
            );
    };

    const handleChangeNewsDetailsNext = (newsDetailsCurrentId) => {
        if (newsDetailsCurrentId <= 4)
            setNewsDetailsNext(
                NewsService.news.find(
                    (tintuc) => tintuc.id === newsDetailsCurrentId
                )
            );
    };
    return (
        <>
            <Header />
            <div className="news__details--container">
                <div className="news__details--content">
                    <div className="news__details--navigation">
                        <div className="news__details--search-text">
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
                        <div className="news__details--title">
                            <h2>BÀI VIẾT MỚI</h2>
                            <div className="news__details--nav">
                                {NewsService.news.map((newDetails) => {
                                    return (
                                        <div
                                            key={newDetails.id}
                                            className="news__details--content-title"
                                        >
                                            <Link
                                                to={`/my/real_estate/${newDetails.title}`}
                                            >
                                                <div>
                                                    <img
                                                        src={newDetails.img}
                                                        alt="Real Estate"
                                                    />
                                                    <p>{newDetails.title}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="news__details--details">
                        <div className="news__details--details-content">
                            <p className="news__details--details-title">
                                TIN TỨC
                            </p>
                            <h2>{newsDetails?.title}</h2>
                            <hr />
                            <img src={newsDetails?.img} alt="Real Estate" />
                            <p className="news__details--details-desc">
                                {newsDetails?.desc}
                            </p>
                            <div className="pl-[30px] mb-10">
                                <div className="flex items-center justify-left">
                                    <button className="flex items-center justify-around mr-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                        <span className="ml-2">Facebook</span>
                                    </button>
                                    <button className="flex items-center justify-around mr-4 bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-600 rounded">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                        <span className="ml-2">Twitter</span>
                                    </button>
                                    <button className="flex items-center justify-around mr-4 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-600 rounded">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            role="img"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                                        </svg>
                                        <span className="ml-2">Reddit</span>
                                    </button>
                                    <button className="flex items-center justify-around mr-4 bg-pink-600 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-600 rounded">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            role="img"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <title>Pinterest icon</title>
                                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                                        </svg>
                                        <span className="ml-2">Pinterest</span>
                                    </button>
                                </div>
                            </div>
                            <nav>
                                <ul className="news__details--panigation">
                                    <li className="panigation__left">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleChangeNewsDetailsPrev(
                                                    newsDetails?.id - 1
                                                )
                                            }
                                        >
                                            <IoIosArrowBack className="panigation__icon--left" />
                                            <p>{newsDetailsPrev?.title}</p>
                                        </button>
                                    </li>
                                    <li
                                        className="panigation__right"
                                        onClick={() =>
                                            handleChangeNewsDetailsNext(
                                                newsDetails?.id + 1
                                            )
                                        }
                                    >
                                        <button type="button">
                                            <p>{newsDetailsNext?.title}</p>
                                            <IoIosArrowForward className="panigation__icon--right" />
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="news__details--details-feedback">
                            <h3 className="feedback__title">Trả lời</h3>
                            <form action="">
                                <p className="feedback__note">
                                    Email của bạn sẽ không được hiển thị công
                                    khai. Các trường bắt buộc được đánh dấu *
                                </p>

                                <div className="feedback__content">
                                    <div className="flex flex-col w-[100%] mb-4">
                                        <label
                                            htmlFor=""
                                            className="text-14 text-[#222] font-bold mb-2"
                                        >
                                            Bình luận
                                        </label>
                                        <textarea
                                            name=""
                                            id=""
                                            cols="20"
                                            rows="5"
                                            className="border-[1px] outline-none border-teal-800 p-3"
                                        ></textarea>
                                    </div>
                                    <div className="flex mb-4">
                                        <div className="mr-3">
                                            <label
                                                htmlFor=""
                                                className="text-14 text-[#222] font-bold mb-2"
                                            >
                                                Tên *
                                            </label>
                                            <input
                                                type="text"
                                                className="border-[1px] outline-none border-teal-800  w-full py-1 px-3"
                                            />
                                        </div>
                                        <div className="mr-3">
                                            <label
                                                htmlFor=""
                                                className="text-14 text-[#222] font-bold mb-2"
                                            >
                                                Email *
                                            </label>
                                            <input
                                                type="text"
                                                className="border-[1px] outline-none border-teal-800  w-full py-1 px-3"
                                            />
                                        </div>
                                        <div className="">
                                            <label
                                                htmlFor=""
                                                className="text-14 text-[#222] font-bold mb-2"
                                            >
                                                Trang Web
                                            </label>
                                            <input
                                                type="text"
                                                className="border-[1px] outline-none border-teal-800  w-full py-1 px-3"
                                            />
                                        </div>
                                    </div>
                                    <button className="feedback__button">
                                        PHẢN HỒI
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NewDetails;
