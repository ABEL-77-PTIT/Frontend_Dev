import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./home.css";
import { Navigation } from "swiper";

const Home = () => {
    return (
        <div className="fixed top-20 left-[40vw] bottom-40">
            <h1 className="text-center text-teal-800 text-32">
                What do you want from me??
            </h1>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide className="mb-4">
                    <div className="max-w-sm min-w-[384px] w-full lg:max-w-full lg:flex">
                        <div
                            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                            style={{
                                backgroundImage:
                                    "url('https://readtoolead.com/wp-content/uploads/2019/05/coffee.jpg')",
                            }}
                            title="Coffee with me!!"
                        ></div>
                        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <div className="text-gray-900 font-bold text-xl mb-2">
                                    Can coffee make you a better developer?
                                </div>
                                <p className="text-gray-700 text-base">
                                    Enjoy it now. A cup of coffee a day keeps
                                    you full of energy.
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img
                                        className="w-10 h-10 rounded-full mr-4"
                                        src="https://readtoolead.com/wp-content/uploads/2019/05/coffee.jpg"
                                        alt="Avatar of Jonathan Reinink"
                                    />
                                    <div className="text-sm">
                                        <p className="text-gray-900 leading-none">
                                            Truong Hung An
                                        </p>
                                        <p className="text-gray-600">May 5</p>
                                    </div>
                                </div>
                                <button className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded">
                                    View more.
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="mb-4">
                    <div className="max-w-sm min-w-sm min-w-[384px] w-full lg:max-w-full lg:flex">
                        <div
                            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                            style={{
                                backgroundImage:
                                    "url('https://readtoolead.com/wp-content/uploads/2019/05/coffee.jpg')",
                            }}
                            title="Woman holding a mug"
                        ></div>
                        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <div className="text-gray-900 font-bold text-xl mb-2">
                                    Do you want an automatic billing system?
                                </div>
                                <p className="text-gray-700 text-base">
                                    The system helps you to pay yourself, just
                                    scan the QR code and you're done.
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img
                                        className="w-10 h-10 rounded-full mr-4"
                                        src="https://readtoolead.com/wp-content/uploads/2019/05/coffee.jpg"
                                        alt="Avatar of Jonathan Reinink"
                                    />
                                    <div className="text-sm">
                                        <p className="text-gray-900 leading-none">
                                            Truong Hung An
                                        </p>
                                        <p className="text-gray-600">May 5</p>
                                    </div>
                                </div>
                                <button className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded">
                                    View more.
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="mb-4">
                    <div className="max-w-sm min-w-[384px] w-full lg:max-w-full lg:flex">
                        <div
                            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                            style={{
                                backgroundImage:
                                    "url('https://readtoolead.com/wp-content/uploads/2019/05/coffee.jpg')",
                            }}
                            title="Woman holding a mug"
                        ></div>
                        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <div className="text-gray-900 font-bold text-xl mb-2">
                                    Do you want to stay up to date with the
                                    latest technology news?
                                </div>
                                <p className="text-gray-700 text-base">
                                    This is a place to share programming
                                    knowledge, technology, programmer life.
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img
                                        className="w-10 h-10 rounded-full mr-4"
                                        src="https://readtoolead.com/wp-content/uploads/2019/05/coffee.jpg"
                                        alt="Avatar of Jonathan Reinink"
                                    />
                                    <div className="text-sm">
                                        <p className="text-gray-900 leading-none">
                                            Truong Hung An
                                        </p>
                                        <p className="text-gray-600">May 5</p>
                                    </div>
                                </div>
                                <button className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded">
                                    View more.
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;
