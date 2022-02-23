/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        const respone = (await axios.get(`https://api.instantwebtools.net/v1/airlines/${id}`)).data; {/*To get the data */ }
        setData(respone)
        setLoading(false)
        console.log(data)
    }
    useEffect(() => {
        getData()
    }, [])

    const Loading = () => {
        return (
            <div>
                <h1>loading.....</h1>
            </div>
        )
    }
    const ShowItems = () => {
        return (
            <>
                <div className="col-md-6 mb-3">
                    <img className="deatils-img" src={data.logo} alt={data.title} height="350px" width="350px" />
                </div>
                <div className="col-md-6">
                    <h2 className="text-uppercase text-black-50">name : {data.name}</h2>
                    <h3 className="display-5 fs-3">country : {data.country}</h3>

                    <h4 className="display-6 fs-2 my-4">established : {data.established}</h4>
                    <p className="lead">Head Quaters : {data.head_quaters}</p>
                    <p className="lead">Slogan : {data.slogan}</p>
                    <a href={`https://${data.website}`} className="btn btn-dark ms-2 px-3 py-2">Website</a>   {/*To go to the official website of the company */}
                </div>
            </>
        )
    }
    return (
        <div className="container">
            <div className="row py-4">
                {loading ? <Loading /> : <ShowItems />}    {/*This is if loading is true it loads Loading, but if it is false it loads ShowItems */}
            </div>
        </div>
    )
}

export default Details