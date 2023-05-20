import { Button, Dropdown } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosLogOut } from 'react-icons/io'


const DashboardHeader = (props) => {

    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('token');
        navigate("/iam-admin")
    }

    const items = [
        {
            key: '1',
            label: (
                <>
                    <IoIosLogOut /> <span onClick={() => logout()}>Logout</span>
                </>
            ),
        }
    ];


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



                            <li className="nav-item dropdown user_dropdwn">
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                    placement="bottomRight"
                                    arrow={{
                                        pointAtCenter: true,
                                    }}
                                >
                                    <Button>Admin</Button>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default DashboardHeader;