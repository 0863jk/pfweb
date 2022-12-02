import "./Profile.css";
import Portfolio from "../../Component/Portfolio/Portfolio";
import { Link } from "react-router-dom";
import { useState } from "react";
import InputTag from "../../Component/Editor/InputTag"
import Lecture from "../../Component/Lecture/Lecture";
import useFetch from "../../Hook/useFetch";

function Profile(props) {
    const lecture = useFetch(`http://localhost:3001/lecture?semesterId=202202`);
    const portfolio = useFetch(`http://localhost:3001/portfolio`);

    return (
        <div className="MainContainer">
            <div className="ProfileContainer">
                <div className="ProfileInfoContainer">
                    <div className="ProfileImgWarpper">
                        <img src={process.env.PUBLIC_URL + '/img/letsPlay-icon.png'} alt=""></img>
                    </div>
                    <div className="ProfileInfo">
                        <label className="UserName">User Name</label>
                    </div>
                </div>
            </div>
            <div className="PortfolioWrapper">
                <div className="Portfolios">
                    {portfolio && portfolio.map(portfolio => (
                        <Link to={`/portfolio/${portfolio.pfId}`}>
                            <Portfolio title={portfolio.title} summary={portfolio.summary} />
                        </Link>
                    ))};
                </div>
            </div>
            <div className="LabelWrapper">
                <hr></hr>
                <label>강의 목록</label>
            </div>
            <div className="LectureContainer">
                <div className="lectureListContainer">
                    {lecture && lecture.map(lecture => (
                        <Link to={`/lecture/${lecture.id}`}>
                            <Lecture title={lecture.title} professor={lecture.professor} semester={lecture.semester} id={lecture.id} key={lecture.id} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile;
