import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";

const Header = () => {
    return (
        <header className="main-header header-style-2 mb-30">
            <div className="header-bottom header-sticky background-white text-center">
                <div className="scroll-progress gradient-bg-1"></div>
                <div className="mobile_menu d-lg-none d-block"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 p-0">
                            <div className="header-logo w-70 d-none d-lg-block ml-3">
                                <Link href="/">
                                    <Image
                                        width={163}
                                        height={50}
                                        priority
                                        src="/images/logo.png"
                                        className="logo-img d-inline"
                                        alt="Turdef Logo"
                                    />
                                </Link>
                            </div>
                            <div className="logo-tablet d-md-inline w-70 d-lg-none d-none">
                                <Link href="/">
                                    <Image
                                        width={163}
                                        height={50}
                                        priority
                                        src="/images/logo.png"
                                        className="logo-img d-inline"
                                        alt="Turdef Logo"
                                    />
                                </Link>
                            </div>
                            <div className="logo-mobile d-block d-md-none mx-2">
                                <Link href="/">
                                    <Image
                                        width={45}
                                        height={38}
                                        priority
                                        src="/images/m-logo.png"
                                        className="logo-img d-inline"
                                        alt="Turdef Logo"
                                    />
                                </Link>
                            </div>
                        </div>
                        <Menu/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
