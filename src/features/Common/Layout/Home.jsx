import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col w-full md:flex md:flex-row md:px-10">
                <Sidebar />
                <div className="mt-12 mx-auto md:mt-16 lg:px-10">
                    <h1 className="text-center text-teal-800 text-32 mb-10">
                        What do you want from me??
                    </h1>
                    <div className="grid grid-cols-1 gap-y-6 mb-10 mx-2 md:mx-0 lg:grid-cols-2 lg:gap-6">
                        <div className="p-6 max-w-full lg:mb-0 bg-white rounded-lg border border-gray-200 shadow-md ">
                            <Link to="my/coffee_shop">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Would you like to have a cup of coffee with
                                    me?
                                </h5>
                            </Link>
                            <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">
                                Come with me and choose a great drink for your
                                new day!!.
                            </p>
                            <Link
                                to="my/coffee_shop"
                                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                            >
                                Views UI details.
                                <svg
                                    className="ml-2 -mr-1 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </Link>
                        </div>

                        <div className="p-6 max-w-full lg:mb-0 bg-white rounded-lg border border-gray-200 shadow-md ">
                            <Link to="my/nerd_card">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    You want to change payment via e-wallet?
                                </h5>
                            </Link>
                            <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">
                                This will be the place to provide you with a
                                faster and better payment service than ever.
                            </p>
                            <Link
                                to="my/nerd_card"
                                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                            >
                                Views UI details.
                                <svg
                                    className="ml-2 -mr-1 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </Link>
                        </div>

                        <div className="p-6 max-w-full lg:mb-0 bg-white rounded-lg border border-gray-200 shadow-md ">
                            <Link to="my/blogs">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    News page about technology and programmer's
                                    life.
                                </h5>
                            </Link>
                            <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">
                                Update the latest technology information, share
                                about the daily life of programmers.
                            </p>
                            <Link
                                to="my/blogs"
                                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Views UI details.
                                <svg
                                    className="ml-2 -mr-1 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </Link>
                        </div>

                        <div className="p-6 max-w-full lg:mb-0 bg-white rounded-lg border border-gray-200 shadow-md ">
                            <Link to="my/antube">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    An's channel, where to share good videos
                                </h5>
                            </Link>
                            <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">
                                Make videos about music, life, programming.
                            </p>
                            <Link
                                to="my/antube"
                                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Views UI details.
                                <svg
                                    className="ml-2 -mr-1 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </Link>
                        </div>

                        <div className="p-6 max-w-full lg:mb-0 bg-white rounded-lg border border-gray-200 shadow-md ">
                            <Link to="my/real_estate">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Real Estate Website
                                </h5>
                            </Link>
                            <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">
                                Choose luxury real estate, a place to sublimate
                                emotions.
                            </p>
                            <Link
                                to="my/real_estate"
                                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Views UI details.
                                <svg
                                    className="ml-2 -mr-1 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="p-6 max-w-full lg:mb-0 bg-white rounded-lg border border-gray-200 shadow-md ">
                            <Link to="pet_shop">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Pet Ecommerce Shop
                                </h5>
                            </Link>
                            <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">
                                PERN stack. Ecommerce website basic sale guitar.
                            </p>
                            <Link
                                to="pet_shop"
                                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Views UI details.
                                <svg
                                    className="ml-2 -mr-1 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="p-6 max-w-full lg:mb-0 bg-white rounded-lg border border-gray-200 shadow-md ">
                            <Link to="skilline">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    E-learning
                                </h5>
                            </Link>
                            <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">
                                E-Learning Landing Page với HTML CSS SASS
                            </p>
                            <Link
                                to="skilline"
                                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Views UI details.
                                <svg
                                    className="ml-2 -mr-1 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
