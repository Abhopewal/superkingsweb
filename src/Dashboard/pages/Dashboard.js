
const Dashboard = () => {
    return (
        <>
            <section class="main_sec dash_board">
                <div class="right_cntnt">
                    <a class="dashMiniIcon" href="#"><img src="img/dash_mini.svg" alt="" /></a>
                    <div class="row row_gap48">
                        <div class="col-md-3 col-6">
                            <div class="smsent_box">
                                <div class="text-right active">
                                    <a href="#"><img src="img/up_arrow.svg" alt="" /></a><span>7%</span>
                                </div>
                                <h4>64885</h4>
                                <p>Total properties</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="smsent_box">
                                <div class="text-right">
                                    <a href="#"><img src="img/down_arrow.svg" alt="" /></a><span>12%</span>
                                </div>
                                <h4>2019</h4>
                                <p>Vacants</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="smsent_box">
                                <div class="text-right active">
                                    <a href="#"><img src="img/up_arrow.svg" alt="" /></a><span>17%</span>
                                </div>
                                <h4>6580</h4>
                                <p><span class="online_cricle"></span>Logged in users</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="smsent_box">
                                <div class="text-right active">
                                    <a href="#"><img src="img/up_arrow.svg" alt="" /></a><span>2.3%</span>
                                </div>
                                <h4>1745</h4>
                                <p>Skip Traced</p>
                            </div>
                        </div>
                    </div>

                    <div class="row row_gap48 justify-content-between">
                        <div class="col-md-6 col-lg-6">
                            <div class="chart_box hor_bar">
                                <div class="dash_month d-flex justify-content-between">
                                    <h5>Users per market</h5>
                                </div>
                                <div class="loc_bar">
                                    <div class="progrList">
                                        <span>45982</span>
                                        <div class="d-flex">
                                            <div class="progress prog_ress">
                                                <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <label>Florida</label>
                                        </div>
                                    </div>
                                    <div class="progrList">
                                        <span>23 905</span>
                                        <div class="d-flex">
                                            <div class="progress prog_ress">
                                                <div class="progress-bar" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <label>Alabama</label>
                                        </div>
                                    </div>
                                    <div class="progrList">
                                        <span>895</span>
                                        <div class="d-flex">
                                            <div class="progress prog_ress">
                                                <div class="progress-bar" role="progressbar" style={{ width: "7%" }} aria-valuenow="7" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <label>New York</label>
                                        </div>
                                    </div>
                                    <div class="progrList">
                                        <span>34</span>
                                        <div class="d-flex">
                                            <div class="progress prog_ress">
                                                <div class="progress-bar" role="progressbar" style={{ width: "4%" }} aria-valuenow="4" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <label>Georgia</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-5">
                            <div class="chart_box">
                                <div class="dash_month team_activti d-flex justify-content-between">
                                    <h5>Performance</h5>
                                    <a href="javascript:void(0)" class="qus_icon"><img src="img/qus.svg" alt="" /></a>
                                </div>
                                <div class="d-flex justify-content-between perfom_btn">
                                    <button type="button" class="btn">Past 24h</button>
                                    <button type="button" class="btn white_btn">Past 7 days</button>
                                    <button type="button" class="btn white_btn">Past 30 days</button>
                                    <button type="button" class="btn white_btn clndr_btn"><img class="gray_icon" src="img/calendar.svg" alt="" /></button>
                                </div>
                                <div class="loc_bar team_bar">
                                    <div class="progrList">
                                        <h4 class="priceName d-flex justify-content-between"><label>Addresses processed</label><span>868</span></h4>
                                        <div class="d-flex">
                                            <div class="progress prog_ress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                <span class="popOver" data-toggle="tooltip" data-placement="bottom" title="90%"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="progrList">
                                        <h4 class="priceName d-flex justify-content-between"><label>Skip tracing processed</label><span>130</span></h4>
                                        <div class="d-flex">
                                            <div class="progress prog_ress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="17" aria-valuemin="0" aria-valuemax="100"></div>
                                                <span class="popOver" data-toggle="tooltip" data-placement="bottom" title="17%"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="progrList">
                                        <h4 class="priceName d-flex justify-content-between"><label>Outgoing SMS</label><span>123</span></h4>
                                        <div class="d-flex">
                                            <div class="progress prog_ress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="7" aria-valuemin="0" aria-valuemax="100"></div>
                                                <span class="popOver" data-toggle="tooltip" data-placement="bottom" title="7%"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="progrList">
                                        <h4 class="priceName d-flex justify-content-between"><label>Incoming SMS</label><span>24</span></h4>
                                        <div class="progress prog_ress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            <span class="popOver" data-toggle="tooltip" data-placement="bottom" title="20%"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


export default Dashboard;