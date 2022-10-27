import React from "react"

export function Card(props) {
    
    return (
        <>
        <div className="card">
            <img 
                src={props.coverImg} 
                className="card--image" alt="cover"
            />
            <div className="card--stats">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/BlackStar.PNG" className="card--star" alt="star" /> &nbsp;
                <span>{props.stats.rating}</span>&nbsp;
                <span className="gray">({props.stats.reviewCount}) • &nbsp; </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ₹ {props.price}</span><span className="person">/person</span>
            </p>
        </div>
        </>    
    )
}
