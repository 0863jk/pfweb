import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Lecture from "../../component/LectureInfo"
import Portfolio from "../../component/Portfolio"
import useFetch from "../../Hook/useFetch"
import "./PortfolioList.css"

export default function PortfolioList(props) {
    const { pLectureId } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [lectureId, setLectureId] = useState();
    const [lectureInfo, setLectureInfo] = useState();
    const [portfolio, setPortfolio] = useState();

    useEffect(() => {
        setLectureId(pLectureId);
    }, [])

    useEffect(() => {
        if (isLoaded) {
            console.log("isLoaded true");
            fetch(`http://localhost:3001/lecture?id=${lectureId}`)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setLectureInfo(data);
                });
            fetch(`http://localhost:3001/portfolio?lectureId=${lectureId}`)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setPortfolio(data);
                });
        } else {
            console.log("isLoaded false");
            setIsLoaded(true);
        }
    }, [lectureId]);

    return (
        <div className="MainContainer">
            <div className="titleContainer">
                {lectureInfo && lectureInfo.map(lecture => (
                    <Lecture title={lecture.title} professor={lecture.professor} semester={lecture.semester} id={lecture.id} />
                ))}
            </div>
            <div className="contentContainer">

                {
                    portfolio < 1
                        ?
                        <div className="EmptyDataContainer">
                            <div className="labelWrapper">
                                <label>작성된 포트폴리오가 없습니다.</label>
                            </div>
                        </div>
                        :
                        <div className="folioContainer">
                            {
                                portfolio && portfolio.map(pf => (
                                    <Link to={`portfolio/${pf.pfId}`} style={{ color: "black", textDecoration: "none" }}>
                                        <Portfolio title={pf.title} summary={pf.summary} tags={pf.tags} userId={pf.userId} like={pf.like} view={pf.view} img=""></Portfolio>
                                    </Link>
                                ))}
                        </div>
                }
            </div>
        </div>
    )
};