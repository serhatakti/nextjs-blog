import React from 'react';
import Link from "next/link";

const Categories = ({categories}) => {
    return (
        <div className="col-lg-2 col-md-3 primary-sidebar sticky-sidebar sidebar-left order-1 order-md-1">
            <div className="sidebar-widget widget_categories_2 border-radius-10 bg-white mb-30">
                <ul className="d-none d-md-block">
                    <li className="cat-item cat-item-2 d-flex justify-content-between align-items-center">
                        <Link className="kat-comp-link d-flex align-items-center" href="/">
                             <span className="mr-10 cat-icon-span">
                            <i className="gi gi-tank"></i>
                        </span> Land
                        </Link>
                        <i className="fas fa-chevron-right"></i>
                    </li>
                </ul>
                {/*<div className="d-md-none cat-mobile">
                    <asp:Repeater ID="rptKategoriSolMobile" OnItemDataBound="rptKategoriSol_ItemDataBound"
                                  runat="server">
                        <ItemTemplate>
                            <asp:HyperLink ID="katLink" CssClass="d-flex align-items-center" runat="server">
                    <span id="iconBg" runat="server" className="mr-10 cat-icon-span">
                        <i className='<%# Eval("Ikon") %>'></i>
                    </span>
                            </asp:HyperLink>
                        </ItemTemplate>
                    </asp:Repeater>
                </div>*/}
            </div>
        </div>
    );
};

export default Categories;
