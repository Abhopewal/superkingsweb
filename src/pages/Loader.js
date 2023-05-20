import React from 'react'
import { BiRefresh } from "react-icons/bi";

function Loader() {
    return (
        <>
            
            <button className="buttonload" style={{backgroundColor:"transparent", border:"none"}}>
            <i className="fa fa-refresh fa-spin"></i>
            </button>
        </>
    )
}

export default Loader