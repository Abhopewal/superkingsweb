import { useEffect, useState } from "react";
import userService from "../../services/userService"
import { Pagination } from "antd";
import Loader from "../../pages/Loader";

export const Users = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers(1);
  }, [])


  async function getUsers(page) {
    setLoading(true);
    let res = await userService.getUsers(page);
    if (res.status) {
      setLoading(false);
      setUsers(res.data);
    }
    setLoading(false)
  }

  function getPaginate(page) {
    getUsers(page);
    console.log(page, 'data')
  }

  console.log(users, "usss")

  return (
    <>

      <div class="right_cntnt">
        <form class="search_form users_serch searchAdmin">
          <div class="row">
            <div class="col form-group search_smdiv">
              <div class="searchLgdiv search_sm">
                <input type="text" name="focus" required="" class="search-box form-control search_lg" placeholder="Name or email address" />
                {/* <button class="close-icon" type="reset"></button> */}
                <button class="serch_btn" type="button"><img src="/img/search.svg" alt="" /></button>
              </div>
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
                <th class="text-center">Name<span class="short_arrow"></span></th>
                <th class="text-center">Phone<span class="short_arrow"></span></th>
                <th class="text-center">Referral<span class="short_arrow"></span></th>
                <th class="text-center">Last Login<span class="short_arrow"></span></th>
                <th class="text-center">Registerd At<span class="short_arrow"></span></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {loading ? <Loader /> :
                users?.users && users?.users.length > 0 && users?.users.map((user) => (
                  <tr>
                    <td><a class="view_icon"><img src="/img/view.svg" alt="" /></a></td>
                    <td class="text-center">{user.name}</td>
                    <td class="text-center">{user.phone}</td>
                    <td class="text-center">{user.referralId}</td>
                    <td class="text-center">upcomming</td>
                    <td class="text-center">upcomming</td>
                  </tr>
                ))
              }


            </tbody>
          </table>

          <div className="mt-5 text-center">
            <Pagination
              onChange={getPaginate}
              defaultCurrent={1}
              total={users?.pagination?.pages}
            />
          </div>
        </div>
      </div>

    </>
  )
}