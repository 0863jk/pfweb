import { Navigate, useParams } from "react-router-dom";
import Lecture from "../component/Lecture";
import useFetch from "../Hook/useFetch";
import "./SortByGrade.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Select from 'react-select';
import { useEffect, useRef, useState } from "react";

const onChange = (event) => {
	// event handler
	console.log(event.target.value);
};

function SemesterButton() {
	const { pGrade } = useParams();
	const { pSemester } = useParams();
	const [grade, setGrade] = useState();
	const [semester, setSemester] = useState();
	const semesters = useFetch(`http://localhost:3001/semester`);

	useEffect(() => {
		setGrade(pGrade);
		console.log(grade);
	}, [])

	return (
		<ButtonToolbar aria-label="Toolbar with button groups">
			<ButtonGroup className="me-2" aria-label="First group">
				{semesters && semesters.map(semester => (
					<Button key={semester.id} variant="secondary" onClick={() => {
						window.location.replace(`/grade/${grade}/${grade}${semester.id}`);
					}}>
						{semester.semester}
					</Button>
				))}
			</ButtonGroup>
		</ButtonToolbar>
	);
}

export default function SortByGrade() {
	const { pGrade, pSemester } = useParams();
	const [grade, setGrade] = useState();
	const [semester, setSemester] = useState();
	const [lecture, setLecture] = useState();
	const [isLoaded, setIsLoaded] = useState(false);
	// const lecture = useFetch(`http://localhost:3001/lecture?grade=${grade}`);

	useEffect(() => {
		setGrade(pGrade);
		setSemester(pSemester);
	}, [])

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
				<SemesterButton grade={grade} />
			</div>
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
									<Lecture title={lecture.title} professor={lecture.professor} semester={lecture.semester} id={lecture.id} />
								</li>
							))}
						</ul>
				}
			</div>
		</div>
	)
}
