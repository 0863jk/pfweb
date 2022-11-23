import "./Profile.css";
import Portfolio from "../../Component/Portfolio/Portfolio";
import { Link } from "react-router-dom";
import { useState } from "react";
import InputTag from "../../Component/Editor/InputTag"
import Lecture from "../../Component/Lecture/Lecture";
import useFetch from "../../Hook/useFetch";

function Profile(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const lecture = useFetch(`http://localhost:3001/lecture?semesterId=1`);

    const openModal = () => {
        setModalOpen(true);
        document.body.style.overflow = "hidden";
    };
    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = "unset"
    };


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
                    <Portfolio title="Prototype Project Portfolio" summary="개요" />
                    <Portfolio title="Prototype Project Portfolio" summary="개요" />
                    <Portfolio title="Prototype Project Portfolio" summary="개요" />
                    <Portfolio title="Prototype Project Portfolio" summary="개요" />
                    <Portfolio title="Prototype Project Portfolio" summary="개요" />
                    <Portfolio title="Prototype Project Portfolio" summary="개요" />
                </div>
            </div>
            <div className="LabelWrapper">
                <hr></hr>
                <label>강의 목록</label>
            </div>
            <div className="LectureContainer">
                <ul className="LectureList">
                    <li>
                        {lecture && lecture.map(lecture => (
                            <li key={lecture.id}>
                                <Lecture title={lecture.title} professor={lecture.professor} semester={lecture.semester} id={lecture.id} key={lecture.id} />
                            </li>
                        ))}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;
