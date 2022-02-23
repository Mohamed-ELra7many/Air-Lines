/* eslint-disable no-lone-blocks */
import React from 'react'

const Darkmode = () => {
    let body = document.getElementById("body")

    const Dark = () => {
        body.classList.toggle("dark"); {/* This is for adding and deleting dark*/ }
    }
    return (
        <div className="toogle-dark">
            <i class="fa fa-moon-o fs-4 fw-bold" onClick={Dark} ></i>
        </div>
    )
}

export default Darkmode