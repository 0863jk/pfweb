import { Link, useParams } from "react-router-dom";
import useFetch from "../Hook/useFetch";
import "./Lecture.css";

function OnClick() {
    console.log('clicked');
};

export default function Lecture(props) {
    return (
        <div>
            <div className="lecture">
                <img className="icon" src="https://via.placeholder.com/100x100" alt="non-image" />
                <div className="lectureInfo">
                    <Link to={`/lecture/${props.id}`} className="lectureName">{props.title}</Link><br></br>
                    <label className="professor">{props.professor} 교수님</label>
                    <label className="semester">{props.semester}</label>
                </div>
            </div>
        </div>
    )
};