import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Lecture from "../../Component/Lecture/Lecture copy";
import useFetch from "../../Hook/useFetch";
import "./SortByGrade.css";
import { useEffect, useRef, useState } from "react";
import Form from 'react-bootstrap/Form';

function SemesterSelect() {
	const { pGrade } = useParams();
	const { pSemester } = useParams();
	const [grade, setGrade] = useState();
	const [semester, setSemester] = useState();
	const semesters = useFetch(`http://localhost:3001/semester`);
	const navigate = useNavigate();

	useEffect(() => {
		setGrade(pGrade);
		setSemester(pSemester);
		console.log(grade);
	}, [pGrade])

	const onChange = (e) => {
		console.log("onChange ", e.target.value);
		navigate(`/grade/${grade}/${e.target.value}`);
	};

	return (
		<Form.Select aria-label="Default select example" onChange={onChange}>
			<option value="default">
				학기 선택
			</option>
			{semesters && semesters.map(semester => (
				<option value={semester.id} key={semester.id}>
					{semester.semester}
				</option>
			))}
		</Form.Select>
	);
}

export default function SortByGrade() {
	const { pGrade, pSemester } = useParams();
	const [grade, setGrade] = useState();
	const [semester, setSemester] = useState();
	const [lecture, setLecture] = useState();
	const [isLoaded, setIsLoaded] = useState(false);

	const location = useLocation();

	useEffect(() => {
		setGrade(pGrade);
		setSemester(pSemester);
	}, [pGrade, pSemester]);

	useEffect(() => {
		console.log(location);
	}, [location])

	useEffect(() => {
		if (isLoaded) {
			console.log("isLoaded true");
			if (pSemester === undefined || pSemester === null) {
				fetch(`http://localhost:3001/lecture?grade=${grade}`)
					.then(res => {
						return res.json();
					})
					.then(data => {
						setLecture(data);
					});
			} else {
				fetch(`http://localhost:3001/lecture?grade=${grade}&semesterId=${semester}`)
					.then(res => {
						return res.json();
					})
					.then(data => {
						setLecture(data);
					});
			}
		} else {
			console.log("isLoaded false");
			setIsLoaded(true);
		}
	}, [grade, semester]);

	return (
		<div className="MainContainer">
			<div className="GradeContainer">
				<div className="SemesterSelect">
					<SemesterSelect grade={grade} />
				</div>
			</div>
			<div className="LectureContainer">
				<div className="testContainer">
					{
						lecture < 1
							?
							<div className="EmptyDataContainer">
								<div className="labelWrapper">
									<label>개설된 강의가 없습니다.</label>
								</div>
							</div>
							:
							<div className="lectureListContainer">
								{lecture && lecture.map(lecture => (
									<Link to={`/lecture/${lecture.id}`}>
										<Lecture title={lecture.title} professor={lecture.professor} semester={lecture.semester} id={lecture.id} />
									</Link>
								))}
							</div>
					}
				</div>
			</div>
		</div>
	)
}
