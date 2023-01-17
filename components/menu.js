import React from 'react';
import HomeIcon from "../public/svg/home-outline.svg"
import Link from "next/link";

const Menu = () => {
    return (
        <div className="col-lg-10 col-md-9 main-header-navigation">
            <div className="main-nav text-left float-lg-right float-md-right">
                <ul className="mobi-menu d-none menu-3-columns" id="navigation">
                    <li className="cat-item cat-item-2">
                        <Link href="/">Anasayfa</Link>
                    </li>
                </ul>
                <nav>
                    <ul className="main-menu d-none d-lg-inline">
                        <li>
                            <Link href="/">
                                <span className="mr-5"><HomeIcon height={17}/></span>
                                Anasayfa
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Menu;
