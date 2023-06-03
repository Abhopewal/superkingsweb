import { useEffect, useState } from "react";
import { Pagination } from "antd";
import Loader from "../../pages/Loader";
import gameService from "../../services/gameService";
import { NavLink } from "react-router-dom";

const Games = () => {

  const [game, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getGames(1);
  }, [])


  async function getGames(page) {
    setLoading(true);
    let res = await gameService.getGame(page)
    console.log(res)
    if (res.status) {
      setLoading(false);
      setGames(res.data);
    }
    setLoading(false)
  }

  function getPaginate(page) {
    getGames(page);
    console.log(page, 'data')
  }


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
              <NavLink to="/dashboard/games/create">
                <button type="button" class="btn"><img src="img/plus_white.svg" alt="" />
                  ADD NEW GAME
                </button>
              </NavLink>

            </div>
          </div>
        </form>
        <div class="table_data table-responsive user_table">
          <table class="table text-left" id="example">
            <thead>
              <tr>
                <th></th>
                <th class="text-center">GameName<span class="short_arrow"></span></th>
                <th class="text-center">Start Time<span class="short_arrow"></span></th>
                <th class="text-center">End Time<span class="short_arrow"></span></th>
                <th class="text-center">Time Zone<span class="short_arrow"></span></th>

              </tr>
            </thead>
            <tbody>
              {loading ? <Loader /> :
                game?.games && game?.games.length > 0 && game?.games.map((item) => (
                  <tr>
                    <td><a class="view_icon"><img src="/img/view.svg" alt="" /></a></td>
                    <td class="text-center">{item.gameName}</td>
                    <td class="text-center">{item.startTime}</td>
                    <td class="text-center">{item.endTime}</td>
                    <td class="text-center">{item.timeZone}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>

          <div className="mt-5 text-center">
            <Pagination
              onChange={getPaginate}
              defaultCurrent={1}
              total={game?.pagination?.pages}
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default Games;