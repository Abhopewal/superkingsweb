const Users = () => {
    return (
        <>
            <section class="main_sec">
                <div class="right_cntnt">
                    <div class="maxWidth11">
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
                    </div>
                    <form class="search_form users_serch searchAdmin">
                        <div class="row">
                            <div class="col form-group search_smdiv">
                                <div class="searchLgdiv search_sm">
                                    <input type="text" name="focus" required="" class="search-box form-control search_lg" placeholder="Name or email address" />
                                    <button class="close-icon" type="reset"></button>
                                    <button class="serch_btn" type="button"><img src="img/search.svg" alt="" /></button>
                                </div>
                            </div>
                            <div class="col form-group select_width">
                                <select id="inputState" class="form-control">
                                    <option selected="">Account age</option>
                                    <option>Phoenix</option>
                                    <option>Phoenix</option>
                                    <option>Phoenix</option>
                                </select>
                            </div>
                            <div class="col form-group select_width">
                                <select id="inputState" class="form-control">
                                    <option selected="">Current plan</option>
                                    <option>Status 1</option>
                                    <option>Status 2</option>
                                    <option>Status 3</option>
                                </select>
                            </div>
                            <div class="col form-group select_width">
                                <select id="inputState" class="form-control">
                                    <option selected="">Team size</option>
                                    <option>Campaign type</option>
                                    <option>Campaign type</option>
                                    <option>Campaign type</option>
                                </select>
                            </div>
                            <div class="col form-group text-right">
                                <button type="button" class="btn"><img src="img/plus_white.svg" alt="" />ADD NEW USER</button>
                            </div>
                        </div>
                    </form>
                    <div class="table_data table-responsive user_table">
                        <table class="table text-left" id="example">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name<span class="short_arrow"></span></th>
                                    <th>Email<span class="short_arrow"></span></th>
                                    <th class="text-center">Plan<span class="short_arrow"></span></th>
                                    <th class="text-center">Spent<span class="short_arrow"></span></th>
                                    <th class="text-center">Team<span class="short_arrow"></span></th>
                                    <th class="text-center">Last login<span class="short_arrow"></span></th>
                                    <th class="text-center">Registered<span class="short_arrow"></span></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a class="view_icon"><img src="img/view.svg" alt="" /></a></td>
                                    <td>Dwayne Shaw</td>
                                    <td>dwayne@mydadbuyshouses.com</td>
                                    <td class="text-center">Platinum</td>
                                    <td class="text-center"><b>$ 2,840</b></td>
                                    <td class="text-center">8</td>
                                    <td class="text-center">18/02/2020</td>
                                    <td class="text-center">08/01/2020</td>
                                    <td>
                                        <span class="no-wrap action_btn">
                                            <a href="javascript:void:(0);" class="btn">LOGIN</a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/edit.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/log_out.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/delete.svg" alt="" /></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a class="view_icon"><img src="img/view.svg" alt="" /></a></td>
                                    <td>Dwayne Shaw</td>
                                    <td>dwayne@mydadbuyshouses.com</td>
                                    <td class="text-center">Platinum</td>
                                    <td class="text-center"><b>$ 2,840</b></td>
                                    <td class="text-center">8</td>
                                    <td class="text-center">18/02/2020</td>
                                    <td class="text-center">08/01/2020</td>
                                    <td>
                                        <span class="no-wrap action_btn">
                                            <a href="javascript:void:(0);" class="btn">LOGIN</a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/edit.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/log_out.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/delete.svg" alt="" /></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a class="view_icon"><img src="img/view.svg" alt="" /></a></td>
                                    <td>Dwayne Shaw</td>
                                    <td>dwayne@mydadbuyshouses.com</td>
                                    <td class="text-center">Platinum</td>
                                    <td class="text-center"><b>$ 2,840</b></td>
                                    <td class="text-center">8</td>
                                    <td class="text-center">18/02/2020</td>
                                    <td class="text-center">08/01/2020</td>
                                    <td>
                                        <span class="no-wrap action_btn">
                                            <a href="javascript:void:(0);" class="btn">LOGIN</a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/edit.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/log_out.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/delete.svg" alt="" /></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a class="view_icon"><img src="img/view.svg" alt="" /></a></td>
                                    <td>Dwayne Shaw</td>
                                    <td>dwayne@mydadbuyshouses.com</td>
                                    <td class="text-center">Platinum</td>
                                    <td class="text-center"><b>$ 2,840</b></td>
                                    <td class="text-center">8</td>
                                    <td class="text-center">18/02/2020</td>
                                    <td class="text-center">08/01/2020</td>
                                    <td>
                                        <span class="no-wrap action_btn">
                                            <a href="javascript:void:(0);" class="btn">LOGIN</a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/edit.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/log_out.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/delete.svg" alt="" /></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a class="view_icon"><img src="img/view.svg" alt="" /></a></td>
                                    <td>Dwayne Shaw</td>
                                    <td>dwayne@mydadbuyshouses.com</td>
                                    <td class="text-center">Platinum</td>
                                    <td class="text-center"><b>$ 2,840</b></td>
                                    <td class="text-center">8</td>
                                    <td class="text-center">18/02/2020</td>
                                    <td class="text-center">08/01/2020</td>
                                    <td>
                                        <span class="no-wrap action_btn">
                                            <a href="javascript:void:(0);" class="btn">LOGIN</a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/edit.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/log_out.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/delete.svg" alt="" /></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a class="view_icon"><img src="img/view.svg" alt="" /></a></td>
                                    <td>Dwayne Shaw</td>
                                    <td>dwayne@mydadbuyshouses.com</td>
                                    <td class="text-center">Platinum</td>
                                    <td class="text-center"><b>$ 2,840</b></td>
                                    <td class="text-center">8</td>
                                    <td class="text-center">18/02/2020</td>
                                    <td class="text-center">08/01/2020</td>
                                    <td>
                                        <span class="no-wrap action_btn">
                                            <a href="javascript:void:(0);" class="btn">LOGIN</a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/edit.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/log_out.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/delete.svg" alt="" /></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a class="view_icon"><img src="img/view.svg" alt="" /></a></td>
                                    <td>Dwayne Shaw</td>
                                    <td>dwayne@mydadbuyshouses.com</td>
                                    <td class="text-center">Platinum</td>
                                    <td class="text-center"><b>$ 2,840</b></td>
                                    <td class="text-center">8</td>
                                    <td class="text-center">18/02/2020</td>
                                    <td class="text-center">08/01/2020</td>
                                    <td>
                                        <span class="no-wrap action_btn">
                                            <a href="javascript:void:(0);" class="btn">LOGIN</a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/edit.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/log_out.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/delete.svg" alt="" /></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a class="view_icon"><img src="img/view.svg" alt="" /></a></td>
                                    <td>Dwayne Shaw</td>
                                    <td>dwayne@mydadbuyshouses.com</td>
                                    <td class="text-center">Platinum</td>
                                    <td class="text-center"><b>$ 2,840</b></td>
                                    <td class="text-center">8</td>
                                    <td class="text-center">18/02/2020</td>
                                    <td class="text-center">08/01/2020</td>
                                    <td>
                                        <span class="no-wrap action_btn">
                                            <a href="javascript:void:(0);" class="btn">LOGIN</a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/edit.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/log_out.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/delete.svg" alt="" /></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a class="view_icon"><img src="img/view.svg" alt="" /></a></td>
                                    <td>Dwayne Shaw</td>
                                    <td>dwayne@mydadbuyshouses.com</td>
                                    <td class="text-center">Platinum</td>
                                    <td class="text-center"><b>$ 2,840</b></td>
                                    <td class="text-center">8</td>
                                    <td class="text-center">18/02/2020</td>
                                    <td class="text-center">08/01/2020</td>
                                    <td>
                                        <span class="no-wrap action_btn">
                                            <a href="javascript:void:(0);" class="btn">LOGIN</a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/edit.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/log_out.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/delete.svg" alt="" /></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a class="view_icon"><img src="img/view.svg" alt="" /></a></td>
                                    <td>Dwayne Shaw</td>
                                    <td>dwayne@mydadbuyshouses.com</td>
                                    <td class="text-center">Platinum</td>
                                    <td class="text-center"><b>$ 2,840</b></td>
                                    <td class="text-center">8</td>
                                    <td class="text-center">18/02/2020</td>
                                    <td class="text-center">08/01/2020</td>
                                    <td>
                                        <span class="no-wrap action_btn">
                                            <a href="javascript:void:(0);" class="btn">LOGIN</a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/edit.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/log_out.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/delete.svg" alt="" /></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a class="view_icon"><img src="img/view.svg" alt="" /></a></td>
                                    <td>Dwayne Shaw</td>
                                    <td>dwayne@mydadbuyshouses.com</td>
                                    <td class="text-center">Platinum</td>
                                    <td class="text-center"><b>$ 2,840</b></td>
                                    <td class="text-center">8</td>
                                    <td class="text-center">18/02/2020</td>
                                    <td class="text-center">08/01/2020</td>
                                    <td>
                                        <span class="no-wrap action_btn">
                                            <a href="javascript:void:(0);" class="btn">LOGIN</a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/edit.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/log_out.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/delete.svg" alt="" /></a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a class="view_icon"><img src="img/view.svg" alt="" /></a></td>
                                    <td>Dwayne Shaw</td>
                                    <td>dwayne@mydadbuyshouses.com</td>
                                    <td class="text-center">Platinum</td>
                                    <td class="text-center"><b>$ 2,840</b></td>
                                    <td class="text-center">8</td>
                                    <td class="text-center">18/02/2020</td>
                                    <td class="text-center">08/01/2020</td>
                                    <td>
                                        <span class="no-wrap action_btn">
                                            <a href="javascript:void:(0);" class="btn">LOGIN</a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/edit.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/log_out.svg" alt="" /></a>
                                            <a href="javascript:void:(0);" class="icon_space"><img src="img/delete.svg" alt="" /></a>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Users;