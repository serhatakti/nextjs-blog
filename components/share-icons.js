import React from 'react';

const ShareIcons = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12">
                    <div className="single-social-share single-sidebar-share mt-30">
                        <ul>
                            <li><a className="social-icon twitter-icon text-xs-center" target="_blank"
                                   href="https://twitter.com/tur_def"><i className="ti-twitter-alt"></i></a></li>
                            <li><a className="social-icon instagram-icon text-xs-center" target="_blank"
                                   href="https://instagram.com/tur.def"><i className="ti-instagram"></i></a></li>
                            <li><a className="social-icon linkedin-icon text-xs-center" target="_blank"
                                   href="https://www.linkedin.com/company/turdef/"><i className="ti-linkedin"></i></a>
                            </li>
                            <li><a className="social-icon youtube-icon text-xs-center" target="_blank"
                                   href="https://www.youtube.com/channel/UC5ZlR5mOU421nnoZdvtqTqg"><i
                                className="ti-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareIcons;
