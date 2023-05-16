import { Outlet } from "react-router-dom";
import Header from "../../components/Header";



const Sidebar = () => {

    return (
        <>
            <div class="side_bar">
                <div class="side_menu text-center">
                    <ul class="list-unstyled">
                        <li>
                            <a href="#" title="Dashboard">
                                <span class="menu_cricle"><img class="gray_icon" src="img/dash.svg" alt="" /></span>Dashboard
                            </a>
                        </li>
                        <li class="active">
                            <a href="#" title="Map search">
                                <span class="menu_cricle"><img class="gray_icon" src="img/user.svg" alt="" /></span>Users
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Properties">
                                <span class="menu_cricle"><img class="gray_icon" src="img/sys_log.svg" alt="" /></span>System logs
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Skip tracing">
                                <span class="menu_cricle"><img class="gray_icon" src="img/call.svg" alt="" /></span>Phones
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Campaign">
                                <span class="menu_cricle"><img class="gray_icon" src="img/location.svg" alt="" /></span>Markets
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Campaign">
                                <span class="menu_cricle"><img class="gray_icon" src="img/phone.svg" alt="" /></span>Accounting
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Campaign">
                                <span class="menu_cricle"><img class="gray_icon" src="img/pricing.svg" alt="" /></span>Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Campaign">
                                <span class="menu_cricle"><img class="gray_icon" src="img/cut.svg" alt="" /></span>Coupons
                            </a>
                        </li>
                        <li>
                            <a href="#" title="Campaign">
                                <span class="menu_cricle"><img class="gray_icon" src="img/info.svg" alt="" /></span>SPAM words
                            </a>
                        </li>
                    </ul>
                    <ul class="list-unstyled expander_icon d-none d-lg-block">
                        <li>
                            <a class="expander" href="#" title="Expander">
                                <span><img class="gray_blue" src="img/Expander.svg" alt="" /></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;