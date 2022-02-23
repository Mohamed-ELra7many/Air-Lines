/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Companies from '../Companies/Companies'

const Home = () => {
    return (
        <>
            <div className="card bg-dark text-white mt-3 mb-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDrn2TIa9xlE0ykUtkqxZfQdEaOK7qBcN2zQ&usqp=CAU" className="card-img" />
                <div className="card-img-overlay">
                    <h5 className="card-title fw-bold">Air Lines</h5>
                    <p className="card-text fs-3">We will show you the top 10 airline companies</p>
                </div>
            </div>
            <Companies />
        </>
    )
}

export default Home