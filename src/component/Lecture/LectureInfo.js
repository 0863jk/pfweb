import Button from "react-bootstrap/esm/Button";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../Hook/useFetch";
import "./LectureInfo.css";

function OnClick() {
    console.log('clicked');
};

export default function Lecture(props) {
    return (
        <div>
            <div className="lecture">
                <div className="info">
                    <div className="lectureInfo">
                        <label className="lectureName">{props.title}</label><br></br>
                        <label className="professor">{props.professor} 교수님</label>
                        <label className="semester">{props.semester}</label>
                    </div>
                </div>
            </div>
        </div>
    )
};