import React from 'react'
import { BiRefresh } from "react-icons/bi";

function Loader() {
    return (
        <>
            <button className="buttonload">
            <i className="fa fa-refresh fa-spin"></i> Loading...
            </button>
        </>
    )
}

export default Loader