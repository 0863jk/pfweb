import "./Lecture.css?after";

function OnClick() {
    console.log('clicked');
};

export default function Lecture(props) {
    return (
        <div>
            <div className="lecture">
                <div className="lectureInfo">
                    <h4 className="lectureName">{props.title}</h4><br></br>
                    <p className="professor">{props.professor} 교수님</p>
                    <p className="semester">{props.semester}</p>
                </div>
            </div>
        </div>
    )
};