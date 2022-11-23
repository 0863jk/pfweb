import { useState } from "react";
import { Link } from "react-router-dom";
import "./PortfolioEdit.css"
import Tag from "../Tag";


function Portfolio(props) {
    const onErrorImg = (e) => {
        e.target.src = process.env.PUBLIC_URL + "/img/non-image.png";
    }


    return (
        <div className="portfolio_container">
            <div className="thumnail-box">
                <img className="thumnail" src={process.env.PUBLIC_URL + `${props.img}`} alt="non-image" onError={onErrorImg}></img>
            </div>
            <div className="content-box">
                <div className="portfolio_title">
                    <Link to={`/portfolio/${props.pfId}`}><h4>{props.title}</h4></Link>
                </div>
                <div className="portfolio_summary">
                    <p>{props.summary}</p>
                </div>
                <div className="Tags">
                    {
                        props.tags?.split(",").map((tag, idx) => (
                            <Tag content={tag} />
                        ))
                    }
                </div>
            </div>
            <div className="footer-box">
                <div className="linkToBox">
                    <Link to={`/portfolio/modify/${props.pfId}`} className="linkTo">수정</Link>
                    <Link to={`/portfolio/modify/${props.pfId}`} className="linkTo">삭제</Link>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;

