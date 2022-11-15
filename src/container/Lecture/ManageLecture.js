import Lecture from "../../component/LectureEdit";
import useFetch from "../../Hook/useFetch";

export default function ManageLecture() {
    const lecture = useFetch(`http://localhost:3001/lecture`);
    return (
        <div className="LectureContainer">
				{
					lecture < 1
						?
						<div className="EmptyDataContainer">
							<div className="labelWrapper">
								<label>개설된 강의가 없습니다.</label>
							</div>
						</div>
						:
						<ul className="LectureList">
							{lecture && lecture.map(lecture => (
								<li key={lecture.id}>
									<Lecture title={lecture.title} professor={lecture.professor} semester={lecture.semester} id={lecture.id}/>
								</li>
							))}
						</ul>
				}
			</div>
    );
}