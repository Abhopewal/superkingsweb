import { NavLink } from "react-router-dom";


const DashboardHeader = (props) => {

    console.log("header props", props.showFullsidebar)
    return (
        <>
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <NavLink className="navbar-brand" to="/">
                        <img className="logo" src="/betimg/appLogo.png" alt="Logo" />
                        <img className="logo_full" src="/img/logo_full.png" alt="Logo" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="list-unstyled expander_icon d-lg-none d-block">
                        <li>
                            <span><img className="gray_blue peauto " src="/img/Expander.svg" alt="img" onClick={props.showFullsidebar} /></span>
                        </li>
                    </ul>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div aria-label="breadcrumb" className="mr-auto">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><NavLink to="#"><img className="gray_blue" src="/img/home.svg" alt="" /></NavLink></li>
                                <li className="breadcrumb-item active" aria-current="page">USERS</li>
                            </ol>
                        </div>
                        <ul className="navbar-nav my-2 my-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">
                                    <img className="gray_blue" src="/img/setting.svg" alt="" />
                                </NavLink>
                            </li>
                            <li className="nav-item notifi dropdown">
                                <NavLink className="nav-link" to="javascript:void(0)" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    <img className="gray_blue" src="/img/wifi.svg" alt="" />
                                    <span>3</span>
                                </NavLink>
                                <div className="dropdown-menu notifiDrop">
                                    <NavLink className="shdul_icon" to="javascript:void(0)"><img src="/img/calendar_blue.svg" />Sheduled announcements</NavLink>
                                    <div className="shdul_list">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p>Free upgrade for all Gold Plan users with 1,000 free SMS!!</p>
                                            </div>
                                            <div className="media-right">
                                                <NavLink to="#"><img src="/img/delete.svg" /></NavLink>
                                            </div>
                                        </div>
                                        <small>Feb 18, 2020</small>
                                    </div>
                                    <div className="shdul_list">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p>Free upgrade for all Gold Plan users with 1,000 free SMS!!</p>
                                            </div>
                                            <div className="media-right">
                                                <NavLink to="#"><img src="/img/delete.svg" /></NavLink>
                                            </div>
                                        </div>
                                        <small>Feb 18, 2020</small>
                                    </div>
                                    <div className="shdul_list">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p>Free upgrade for all Gold Plan users with 1,000 free SMS!!</p>
                                            </div>
                                            <div className="media-right">
                                                <NavLink to="#"><img src="/img/delete.svg" /></NavLink>
                                            </div>
                                        </div>
                                        <small>Feb 18, 2020</small>
                                    </div>
                                    <div className="shdul_list">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p>Free upgrade for all Gold Plan users with 1,000 free SMS!!</p>
                                            </div>
                                            <div className="media-right">
                                                <NavLink to="#"><img src="/img/delete.svg" /></NavLink>
                                            </div>
                                        </div>
                                        <small>Feb 18, 2020</small>
                                    </div>
                                    <div className="manage_all text-center">
                                        <button type="button" className="btn">MANAGE ALL</button>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item dropdown user_dropdwn">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="profile_pic"><img src="/img/pro.jpg" alt /></span>John Manuel Doe
                                </NavLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <NavLink className="dropdown-item" to="#">Profile</NavLink>
                                    <NavLink className="dropdown-item" to="#">Billing</NavLink>
                                    <NavLink className="dropdown-item" to="#">Lists</NavLink>
                                    <NavLink className="dropdown-item" to="#">Tags</NavLink>
                                    <NavLink className="dropdown-item" to="#">Team</NavLink>
                                    <NavLink className="dropdown-item" to="#">Settings</NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default DashboardHeader;