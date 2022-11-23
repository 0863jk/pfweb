import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useFetch from '../../Hook/useFetch';
import "./CreateLecture.css";
import Modal from "../../Component/Modal/SearchUserModal";

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
        console.log({members});
    }, [members])

    return (
        <div className="MainContainer">
            <div className="FormContainer">
                <Form>
                    <Form.Group className="FormGroup" controlId="formBasicEmail">
                        <Form.Label>제목</Form.Label>
                        <Form.Control name="title" onChange={getValue} type="text" placeholder="제목 입력..." />
                    </Form.Group>

                    <Form.Group className="FormGroup" controlId="formBasicPassword">
                        <Form.Label>학기 및 프로젝트 선택</Form.Label>
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
                    <div className="LastFormGroup">
                        <Form.Group className="FormGroup" controlId="formBasicCheckbox">
                            <Form.Label>구성원 선택</Form.Label>
                            <div className="BtnContainer">
                                <Button className="btnSelPart" variant="outline-primary" onClick={onClick}>
                                    구성원 선택
                                </Button>
                            </div>
                        </Form.Group>
                    </div>
                    <div className="SubmitBtnContainer">
                        <Button variant="primary" size="lg" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
            <div>
                <Modal open={popup.open} setPopup={setPopup} message={popup.message} title={popup.title} callback={popup.callback} setData={setData} />
            </div>
        </div>
    );
}