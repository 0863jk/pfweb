import "./Lecture.css";
import { Link } from "react-router-dom";

function OnClick() {
    console.log('clicked');
};

export default function Lecture(props) {
    return (
        <>
            <div className="card card-6">
                <div className="cardInfo">
                    <h4 className="card__title">{props.title}</h4>
                    <label className="card__professor">{props.professor} 교수님</label>
                    <label className="card__semester">{props.semester}</label>
                </div>
                <p className="card__apply">
                    <Link className="card__link" to={`/lecture/${props.id}`}>들어가기 👉<i className="fas fa-arrow-right"></i></Link>
                </p>
            </div>
        </>
    )
};