import React, { useEffect, useRef, useState } from "react";
import "./Main.css"
import { Link } from 'react-router-dom';
import Lecture from "../../Component/Lecture/Lecture copy.js";
import useFetch from "../../Hook/useFetch";

function Main() {
    const [isLoading, setIsLoading] = useState(true);
    const lecture = useFetch(`http://localhost:3001/lecture?semesterId=202202`);

    const CarouselRef = useRef();                                   //Carousel DOM을 접근하기 위함
    const [CarouselWidth, setCarouselWidth] = useState(0);
    const [CarouselIdx, setCarouselIdx] = useState(null);
    const [CarouselCount, setCarouselCount] = useState(0);
    const CarouselImgWidth = 360;
    const CarouselImgMargin = 30;

    //첫 렌더링(페이지 방문)시 Carosel 크기 지정
    useEffect(() => {
        const count = CarouselRef.current.childNodes.length;
        CarouselRef.current.style.width = (CarouselImgWidth + CarouselImgMargin) * count + "px";
        setCarouselCount(count);
    }, [CarouselIdx])

    //Carosel 좌우 버튼 누를 시 기능
    function moveCarousel(idx) {
        console.log("moveCarousel")
        let tempIdx = CarouselIdx + idx;
        console.log(tempIdx);

        if (tempIdx < 0) {
            tempIdx = CarouselCount - 1;
            console.log(tempIdx);
        } else if (tempIdx >= CarouselCount) {
            tempIdx = 0;
            console.log(tempIdx);
        }
        setCarouselIdx(tempIdx);
    }

    //Carosel 버튼 누른 후 재 렌더링
    const mounted = useRef(false);
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            CarouselRef.current.style.transition = "all 0.5s ease-in-out"
            var mv = CarouselRef.current.style.left = -CarouselIdx * (CarouselImgWidth + CarouselImgMargin) + "px";
            console.log("move" + mv);
        }
    }, [CarouselIdx])

    return (
        <div className='MainContainer'>
            <div className="LabelWrapper">

                <hr></hr>
                <label>Admin's Pick</label>
            </div>

            <div className="CarouselContainer">
                <button className="CarouselPrev" type="button" onClick={() => { moveCarousel(-1) }}>{'<'}</button>
                <ul ref={CarouselRef} className="Carousel">
                    <li><img src="https://via.placeholder.com/360x300" alt=""></img></li>
                    <li><img src="https://via.placeholder.com/360x300" alt=""></img></li>
                    <li><img src="https://via.placeholder.com/360x300" alt=""></img></li>
                    <li><img src="https://via.placeholder.com/360x300" alt=""></img></li>
                    <li><img src="https://via.placeholder.com/360x300" alt=""></img></li>
                    <li><img src="https://via.placeholder.com/360x300" alt=""></img></li>
                    <li><img src="https://via.placeholder.com/360x300" alt=""></img></li>
                    <li><img src="https://via.placeholder.com/360x300" alt=""></img></li>
                </ul>
                <button className="CarouselNext" type="button" onClick={() => { moveCarousel(1) }}>{'>'}</button>
            </div>

            <div className="LabelWrapper">
                <hr></hr>
                <label>나의 강의</label>
            </div>
            <div className="LectureContainer">
                <div className="lectureListContainer">
                    {lecture && lecture.map(lecture => (
                        <Link to={`/lecture/${lecture.id}`}>
                            <Lecture title={lecture.title} professor={lecture.professor} semester={lecture.semester} id={lecture.id} key={lecture.id} />
                        </Link>
                    ))}
                </div>
                <ul className="LectureList">
                    {/* {lecture && lecture.map(lecture => (
                            <li key={lecture.id}>
                                <Link to={`/lecture/${lecture.id}`}>
                                    <Lecture title={lecture.title} professor={lecture.professor} semester={lecture.semester} id={lecture.id} key={lecture.id} />
                                </Link>
                            </li>
                        ))} */}
                </ul>
            </div>
            {/* {
                isLoading ? <h1> 로딩중 </h1> :
                    <div className="folioContainer">
                        <Link to="/testView"><Portfolio title="PDF를 업로드한 포트폴리오" summary="내용"></Portfolio></Link>
                        {
                            data.map((pf, idx) => (
                                <Link to={`portfolio/${pf.pfId}`} style={{ color: "black", textDecoration: "none" }}>
                                    <Portfolio title={pf.title} summary={pf.summary} tags={pf.tags} userId={pf.userId} like={pf.like} view={pf.view} img=""></Portfolio>
                                </Link>
                            ))
                        }
                    </div>
            } */}

        </div>
    );
}

export default Main;
