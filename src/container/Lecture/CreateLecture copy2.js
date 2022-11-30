import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useFetch from '../../Hook/useFetch';
import "./CreateLecture copy2.css";
import Modal from "../../Component/Modal/SearchUserModal copy";
import Tag from "../../Component/Tag.js";

export default function CreateLecture() {
    const semesters = useFetch(`http://localhost:3001/semester`);
    const [members, setMembers] = useState([]);

    const [popup, setPopup] = useState({ open: false });

    const [dto, setDto] = useState({

    })

    const setData = (data) => {
        setMembers(data);
    }

    const onClick = (e) => {
        setMembers([]);
        setPopup({
            open: true,
        });
        return;
    }

    const getValue = (e) => {
        const { name, value } = e.target
        setDto({
            ...dto,
            [name]: value
        })
        console.log(dto);
    }

    useEffect(() => {
        console.log({ members });
    }, [members])

    return (
        <div className="container">
            <>
                <div className="container1">
                    <Form>
                        <h3>강의 만들기</h3>
                        <div className="mainContainer">
                            <div className="leftContainer">
                                <div className="formContainer">
                                    <Form.Group className="FormGroup" controlId="formBasicEmail">
                                        <Form.Label>제목</Form.Label>
                                        <Form.Control name="title" onChange={getValue} type="text" placeholder="제목 입력..." />
                                    </Form.Group>
                                    <Form.Group className="FormGroup" controlId="formBasicPassword">
                                        <Form.Label>학년 및 학기 선택</Form.Label>
                                        <div className="SelectContainer">
                                            <div className="SelectContainerLeft">
                                                <Form.Select name="grade" onChange={getValue}>
                                                    <option value="DEFAULT">학년 선택</option>
                                                    <option value="1학년">1학년</option>
                                                    <option value="2학년">2학년</option>
                                                    <option value="3학년">3학년</option>
                                                </Form.Select>
                                            </div>
                                            <div className="SelectContainerRight">
                                                <Form.Select name="semester" aria-label="Semester Select" onChange={getValue}>
                                                    <option value="DEFAULT">
                                                        학기 선택
                                                    </option>
                                                    {semesters && semesters.map(semester => (
                                                        <option key={semester.id} value={semester.semester}>
                                                            {semester.semester}
                                                        </option>
                                                    ))}
                                                </Form.Select>
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="FormGroup" controlId="formBasicPassword">
                                        <Form.Label>구성원 선택</Form.Label>
                                        <Button className="btnSelectPart" variant="outline-primary" onClick={onClick}>구성원 선택</Button>
                                        <div className="selectedMember">
                                            <ul className="ulselectedMember">
                                                {members && members.map(member => (
                                                    <li><Tag content={member.name} /></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Form.Group>
                                    {/*<div className="selectedMember">
                                        {members && members.map(user => (
                                            <tr>
                                                <td>{user.schoolid}</td>
                                                <td>{user.name}</td>
                                                <td>{user.id}</td>
                                            </tr>
                                        ))}
                                        </div>*/}
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <input type="submit" value="SUBMIT" className="parentsSubmit" />
                    </Form>
                </div>
            </>
            <div>
                <Modal open={popup.open} setPopup={setPopup} message={popup.message} title={popup.title} callback={popup.callback} setData={setData} />
            </div>
        </div>
    );
}