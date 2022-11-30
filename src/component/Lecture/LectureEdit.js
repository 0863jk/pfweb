import Button from "react-bootstrap/esm/Button";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../Hook/useFetch";
import "./LectureEdit.css";

function OnClick() {
    console.log('clicked');
};

export default function Lecture(props) {
    return (
        <div>
            <div className="lecture">
                <div className="info">
                    <div className="lectureInfo">
                        <Link to={`/lecture/${props.id}`} className="lectureName">{props.title}</Link><br></br>
                        <label className="professor">{props.professor} 교수님</label>
                        <label className="semester">{props.semester}</label>
                    </div>
                </div>
                <div className="lectureBtnContainer">
                    <Button className="lectureBtnEdit" size="sm" onClick={() => {
						window.location.replace(`/lecture/modify/${props.id}`);
					}}>
                        수정
                    </Button>
                    <Button className="lectureBtnDelete" size="sm">
                        삭제
                    </Button>
                </div>
            </div>
        </div>
    )
};