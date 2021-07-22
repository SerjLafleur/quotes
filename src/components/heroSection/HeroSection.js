import React, { useState } from 'react'
import Quotes from '../quotes/Quotes'
import './HeroSection.css'

function Herosection() {

    const [resultData, setResultData] = useState()
    return (
        <>
            <div className="container">
                <div className="row">

                    <div className="top-line"></div>
                    <h1>Upload your file and choose the format</h1>
                    <Quotes setResultData={setResultData} />

                </div>
                <div>{resultData}</div>
            </div>
        </>
    )
}

export default Herosection
