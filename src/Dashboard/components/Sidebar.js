import { NavLink, Outlet } from "react-router-dom";
import Header from "../../components/Header";



const Sidebar = (props) => {

    return (
        <>
            <div className={props.sidebarFull ? "side_bar sidebar_full" : "side_bar"}>
                <div className="side_menu text-center">
                    <ul className="list-unstyled">
                        <li>
                            <NavLink to="/dashboard" title="Dashboard">
                                <span className="menu_cricle"><img className="gray_icon" src="/img/dash.svg" alt="" /></span>Dashboard
                            </NavLink>
                        </li>
                        <li className="active">
                            <NavLink to="/dashboard/users" title="Map search">
                                <span className="menu_cricle"><img className="gray_icon" src="/img/user.svg" alt="" /></span>Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#" title="Properties">
                                <span className="menu_cricle"><img className="gray_icon" src="/img/sys_log.svg" alt="" /></span>System logs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#" title="Skip tracing">
                                <span className="menu_cricle"><img className="gray_icon" src="/img/call.svg" alt="" /></span>Phones
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#" title="Campaign">
                                <span className="menu_cricle"><img className="gray_icon" src="/img/location.svg" alt="" /></span>Markets
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#" title="Campaign">
                                <span className="menu_cricle"><img className="gray_icon" src="/img/phone.svg" alt="" /></span>Accounting
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#" title="Campaign">
                                <span className="menu_cricle"><img className="gray_icon" src="/img/pricing.svg" alt="" /></span>Pricing
                            </NavLink>
                        </li>


                    </ul>
                    <ul className="list-unstyled expander_icon d-none d-lg-block">
                        <li>
                            <span><img className="gray_blue peauto " src="/img/Expander.svg" alt="img" onClick={props.showFullsidebar} /></span>
                        </li>
                    </ul>
                </div>
            </div>

            <section className={props.sidebarFull ? "main_sec dash_board mainpadd230" : "main_sec dash_board"} style={{backgroundColor:"#ededed"}}>
                <Outlet />
            </section>
        </>
    )
}

export default Sidebar;