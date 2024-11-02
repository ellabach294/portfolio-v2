import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-[#e9b44b] font-medium text-lg text-white pt-4 md:px-10 sm:text-base">
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-center lg:py-2">
                    Build With <span className="px-2">&#9825;</span>by&nbsp;
                    <Link
                        href="https://ellabach.com"
                        className="underline underline-offset-2"
                        target="blank"
                    >
                        Ella Bach
                    </Link>
                </div>
                <Link
                    href="/contact"
                    className="underline underline-offset-2"
                    target="blank"
                >
                    Say Hello
                </Link>
            </Layout>
        </footer>
    );
};

export default Footer;
