import React from "react";

export default function Card() {
    return (
        <div className="card">
            <div className="firstCard">
                <img src="./images/katie-zaferes.png" className="card--img"/>
                <div className="card--reviews">
                    <img src="./images/star.png"/>
                    <p className="card--stars">5.0</p>
                    <p className="card--numberReviews">(30) • USA</p>
                </div>
                <p className="card--activity">Life lessons with Katie Zaferes</p>
                <p><strong>From $136</strong> / person</p>
            </div>
        </div>
    )
}