

const DashboardHeader = () => {
    return (
        <>
            <header class="header">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#">
                        <img class="logo" src="img/logo.png" alt="Logo" />
                        <img class="logo_full" src="img/logo_full.png" alt="Logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <ul class="list-unstyled expander_icon d-lg-none d-block">
                        <li>
                            <a class="expander" href="#" title="Expander">
                                <span><img class="gray_blue" src="img/Expander.svg" alt="" /></span>
                            </a>
                        </li>
                    </ul>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div aria-label="breadcrumb" class="mr-auto">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#"><img class="gray_blue" src="img/home.svg" alt="" /></a></li>
                                <li class="breadcrumb-item active" aria-current="page">USERS</li>
                            </ol>
                        </div>
                        <ul class="navbar-nav my-2 my-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <img class="gray_blue" src="img/setting.svg" alt="" />
                                </a>
                            </li>
                            <li class="nav-item notifi dropdown">
                                <a class="nav-link" href="javascript:void(0)" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    <img class="gray_blue" src="img/wifi.svg" alt="" />
                                    <span>3</span>
                                </a>
                                <div class="dropdown-menu notifiDrop">
                                    <a class="shdul_icon" href="javascript:void(0)"><img src="img/calendar_blue.svg" />Sheduled announcements</a>
                                    <div class="shdul_list">
                                        <div class="media align-items-center">
                                            <div class="media-body">
                                                <p>Free upgrade for all Gold Plan users with 1,000 free SMS!!</p>
                                            </div>
                                            <div class="media-right">
                                                <a href="#"><img src="img/delete.svg" /></a>
                                            </div>
                                        </div>
                                        <small>Feb 18, 2020</small>
                                    </div>
                                    <div class="shdul_list">
                                        <div class="media align-items-center">
                                            <div class="media-body">
                                                <p>Free upgrade for all Gold Plan users with 1,000 free SMS!!</p>
                                            </div>
                                            <div class="media-right">
                                                <a href="#"><img src="img/delete.svg" /></a>
                                            </div>
                                        </div>
                                        <small>Feb 18, 2020</small>
                                    </div>
                                    <div class="shdul_list">
                                        <div class="media align-items-center">
                                            <div class="media-body">
                                                <p>Free upgrade for all Gold Plan users with 1,000 free SMS!!</p>
                                            </div>
                                            <div class="media-right">
                                                <a href="#"><img src="img/delete.svg" /></a>
                                            </div>
                                        </div>
                                        <small>Feb 18, 2020</small>
                                    </div>
                                    <div class="shdul_list">
                                        <div class="media align-items-center">
                                            <div class="media-body">
                                                <p>Free upgrade for all Gold Plan users with 1,000 free SMS!!</p>
                                            </div>
                                            <div class="media-right">
                                                <a href="#"><img src="img/delete.svg" /></a>
                                            </div>
                                        </div>
                                        <small>Feb 18, 2020</small>
                                    </div>
                                    <div class="manage_all text-center">
                                        <button type="button" class="btn">MANAGE ALL</button>
                                    </div>
                                </div>
                            </li>

                            <li class="nav-item dropdown user_dropdwn">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="profile_pic"><img src="img/pro.jpg" alt /></span>John Manuel Doe
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Profile</a>
                                    <a class="dropdown-item" href="#">Billing</a>
                                    <a class="dropdown-item" href="#">Lists</a>
                                    <a class="dropdown-item" href="#">Tags</a>
                                    <a class="dropdown-item" href="#">Team</a>
                                    <a class="dropdown-item" href="#">Settings</a>
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