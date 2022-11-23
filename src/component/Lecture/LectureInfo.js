import { Link, useParams } from "react-router-dom";
import useFetch from "../../Hook/useFetch";
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
                    <label className="lectureName">{props.title}</label><br></br>
                    <label className="professor">{props.professor} 교수님</label>
                    <label className="semester">{props.semester}</label>
                </div>
            </div>
        </div>
    )
};