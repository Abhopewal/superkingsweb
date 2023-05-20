import { TimePicker } from "antd";
import { useState } from "react";


const CreateGame = () => {

    const [gameName, setGame] = useState(null);
    const [selectStartTime, setSelectStartTime] = useState(null);
    const [selectEndTime, setSelectEndTime] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const onStartTime = (time,timeString) => {
        setSelectStartTime(time);
        setEndTime(timeString)
    };


    const onEndTime = (time,timeString) => {
        setSelectEndTime(time);
        setStartTime(timeString);
    };


    function createGame(e) {
        e.preventDefault();
        console.log(gameName,startTime,endTime)
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
                                            <input type="text" class="form-control" value={gameName} onChange={(e) => setGame(e.target.value)} />
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
                                                <option selected>UTC</option>
                                                <option>UTC</option>
                                                <option>UTC</option>
                                                <option>UTC</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="custom_checkbox">
                                        <label class="radio_cstm">Imported records
                                            <input type="checkbox" checked="checked" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="radio_cstm">Not imported records
                                            <input type="checkbox" checked="checked" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="radio_cstm">Updated records
                                            <input type="checkbox" checked="checked" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>

                                    <div class="modal_btn prifile_btn text-center">
                                        <button type="submit" class="btn btn_primary save_btn"><img src="/img/save.svg" alt="" /> SAVE</button>
                                        <button type="button" class="btn cancel_btn"><span class="close_icon">×</span> CANCEL</button>
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