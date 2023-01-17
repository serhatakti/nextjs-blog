import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Banner = ({type, page, no}) => {
    return (
        <div className="col-12 p-0 mb-15">
            <div className="banner-items">
                <Link target="_blank" href="https://turdef.com">
                    <Image
                        width={437}
                        height={89}
                        priority
                        layout="responsive"
                        src="/images/test-banner.jpg"
                        className="border-radius-10"
                        alt="Turdef Logo"
                        sizes="(max-width: 768px) 100%,
                            100%"
                    />
                </Link>

            </div>
        </div>
    );
};

export default Banner
