import React from "react";
import "../style/Award.css"
const Award=()=>{
    return (
        <>
        <div >
            <br></br>
            <p id="award" className="headings Award mt-[10px]">Awards</p>
            <div className = "Upper-Container">
                <p className="Postion">Bronze</p>
                <p className="DSCAA">2022 - The Darrel Chong Student Activity Award</p>
            </div>
            <div className="Lower-Container">
                <p className="Award-Content">
                The purpose of this recognition system serves to change the mindset of our student groups, from being number-driven to becoming value-driven and to acknowledge exemplary student activities around the world. The goal is to improve the quality of activities and to foster knowledge sharing among students.
                </p>
            </div>
        </div>
        </>
    )
}

export default Award