import { TimePicker } from "antd";
import { useState } from "react";
import gameService from "../../services/gameService";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const CreateGame = () => {

    const [gameName, setGame] = useState(null);
    const [loading, setLoading] = useState(false)
    const [selectStartTime, setSelectStartTime] = useState(null);
    const [selectEndTime, setSelectEndTime] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const navigate = useNavigate();

    const onStartTime = (time, timeString) => {
        setSelectStartTime(time);
        setEndTime(timeString)
    };


    const onEndTime = (time, timeString) => {
        setSelectEndTime(time);
        setStartTime(timeString);
    };


    async function createGame(e) {
        e.preventDefault();
        setLoading(true);
        const res = await gameService.createGame({ gameName, startTime, endTime });
        if (!res.status) {
            toast.error(res.message);
            setLoading(false)
        }
        if (res.status) {
            setLoading(false)
            toast.success(res.message);
            navigate("/dashboard/games")
        }
    }

    return (
        <>
            <section class="main_sec">
                <div class="right_cntnt">
                    <div class="d-flex sett_row">
                        <div class="userSedit right_box">
                            <div class="userEditForm team_add">
                                <form class="search_form" onSubmit={createGame}>
                                    <a class="edit_profile" href="#" title=""><img src="/img/edit_icon.svg" alt="" /></a>
                                    <div class="row align-items-center">
                                        <div class="col form-group with_210 margRt60">
                                            <label class="form_lbl paddLft15">Game Name</label>
                                            <input type="text" class="form-control" placeholder="DELHI BAZAR" value={gameName} onChange={(e) => setGame(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="row text-center">
                                        <div class="col-md-3 form-group ">
                                            <label class="form_lbl ">Start Time</label> <br />
                                            <TimePicker value={selectStartTime} onChange={onStartTime} />
                                        </div>
                                        <div class="col-md-3 form-group">
                                            <label class="form_lbl">End Time</label> <br />
                                            <TimePicker value={selectEndTime} onChange={onEndTime} />
                                        </div>
                                        <div class="col form-group with_165">
                                            <label class="form_lbl paddLft15">Timezone</label>
                                            <select class="form-control">
                                                <option selected>GMT+5:30</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="custom_checkbox mt-2 text-center">
                                        <label class="radio_cstm">Instant show on app
                                            <input type="checkbox" checked="checked" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="radio_cstm">Edit
                                            <input type="checkbox" checked="checked" />
                                            <span class="checkmark"></span>
                                        </label>
                                     
                                    </div>

                                    <div class="modal_btn prifile_btn text-center">
                                        <button type="submit" class="btn btn_primary save_btn"><img src="/img/save.svg" alt="" /> SAVE</button>
                                      <NavLink to="/dashboard/games">  <button type="button" class="btn cancel_btn"><span class="close_icon">×</span> CANCEL</button></NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default CreateGame;