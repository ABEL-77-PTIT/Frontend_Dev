import React from "react";

const Footer = () => {
    return (
        <div className="bg-teal-500 text-white w-full py-2 xl:fixed xl:bottom-0 xl:left-0 xl:right-0">
            <div className="w-full px-2 md:container">
                <div className="flex flex-col text-center md:flex-row md:justify-between my-2">
                    <div className="textColorGradient text-36">APT2</div>
                    <div className="flex flex-col items-center">
                        <p>
                            <b className="mr-2">Email</b>
                            <a href="mailto:truonghungan2000@gmail.com">
                                truonghungan2000@gmail.com
                            </a>
                        </p>
                        <p>
                            <b className="mr-2">Phone</b>0359637400
                        </p>
                    </div>
                </div>
                <div className="text-center my-4 md:my-0 text-14">
                    Ban quyen cua An nhe!! La noi chua nhung thu hay ho va thu
                    vi trong lap trinh.
                </div>
            </div>
        </div>
    );
};

export default Footer;
