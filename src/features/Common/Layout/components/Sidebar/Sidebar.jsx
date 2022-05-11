import React from 'react'
import { MdFacebook } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import { ImYoutube } from 'react-icons/im';

const Sidebar = () => {
    return (
        <div className="w-auto min-h-[79vh] fixed top-10 left-0 bottom-36 py-5 m-8 bg-[#fdfdfd] rounded-xl">
            <div className="flex flex-col items-center">
                <span className="m-3 p-2 w-[80%] border-t-2 border-b-2 border-[#a7a4a4] text-16 text-[#222] font-semibold text-center">ABOUT ME</span>
                <img src="https://avatars.githubusercontent.com/u/70141159?v=4" alt="Truong Hung An" title="Truong Hung An" className="w-80 h-80 rounded-3xl mb-4" />
                <p className="px-8">Lập trình viên Front-end. Đã từng học tại Học viện Công nghệ bưu chính viễn thông Hồ Chí Minh.</p>
            </div>
            <div className="flex flex-col items-center">
                <span className="m-3 p-2 w-[80%] border-t-2 border-b-2 border-[#a7a4a4] text-16 text-[#222] font-semibold text-center">CATEGORIES</span>
                <ul className="">
                    <li className="inline-block w-[50%] mt-4 cursor-pointer hover:text-teal-800 transition duration-200">Life</li>
                    <li className="inline-block w-[50%] mt-4 cursor-pointer hover:text-teal-800 transition duration-200">Music</li>
                    <li className="inline-block w-[50%] mt-4 cursor-pointer hover:text-teal-800 transition duration-200">Style</li>
                    <li className="inline-block w-[50%] mt-4 cursor-pointer hover:text-teal-800 transition duration-200">Sport</li>
                    <li className="inline-block w-[50%] mt-4 cursor-pointer hover:text-teal-800 transition duration-200">Tech</li>
                </ul>
            </div>
            <div className="flex flex-col items-center">
                <span className="m-3 p-2 w-[80%] border-t-2 border-b-2 border-[#a7a4a4] text-16 text-[#222] font-semibold text-center">FOLLOW ME</span>
                <div className="w-[250px] flex items-center justify-center">
                    <p className="text-24 mx-2 text-teal-800 hover:text-teal-900 transition duration-150"><MdFacebook /></p>
                    <p className="text-24 mx-2 text-teal-800 hover:text-violet-600 transition duration-150"><AiFillInstagram /></p>
                    <p className="text-24 mx-2 text-teal-800 hover:text-red-600 transition duration-150"><ImYoutube /></p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar