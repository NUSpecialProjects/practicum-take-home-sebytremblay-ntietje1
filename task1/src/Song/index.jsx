import React from "react";
import './index.css';


const SongCard = ({imagePath, title}) => {

    return (
        <div className="cardWrapper">
            <text>{title}</text>
            <img src={imagePath} alt="Cover Not Found"  style={{ width: "150px", height: "150px", objectFit: "cover" }} />
            <button className="buttonPrimary">Select</button>
        </div>
    )
} 


export default SongCard