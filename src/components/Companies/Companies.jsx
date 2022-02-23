/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { NavLink } from 'react-router-dom'

const Companies = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        const ress = await (await axios.get("https://api.instantwebtools.net/v1/airlines")).data; {/*To get the data */ }
        let best = ress.slice(0, 10);       {/*This is to cut only 10 items from the Array */ }
        setData(best)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="row">
                {data.map((item) => (
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 text-center p-1" key={item.id}>
                            <img src={item.logo} className="card-img-top" height="150px" alt={item.title} />
                            <div className="card-body">
                                <h5 className="card-title"> {item.name}</h5>
                                <p className="card-text lead fw-bold" >{item.slogan}</p>
                                <NavLink to={`/compains/${item.id}`} className="btn btn-outline-dark"  >more details</NavLink>   {/* To go to the details page*/}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Companies