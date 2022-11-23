import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import useFetch from '../../Hook/useFetch';
import "./SearchUserModal.css";
import Table from 'react-bootstrap/Table';

function Popup({ open, setPopup, callback, setData }) {
    // const [dto, setDto] = useState({

    // })

    const user = useFetch(`http://localhost:3001/user`);
    const [list, setList] = useState("");
    const data = user;
    const [checkedItems, setCheckedItems] = useState(new Set());
    const [bChecked, setChecked] = useState(false);

    const [input, setInput] = useState([]);

    const handleClose = () => {
        setData({input});
        setPopup({ open: false });
        if (callback) {
            callback();
        }
    };

    const checkedItemHandler = (id, isChecked) => {
        if (isChecked) {
            checkedItems.add(id);
            setCheckedItems(checkedItems);
        } else if (!isChecked && checkedItems.has(id)) {
            checkedItems.delete(id);
            setCheckedItems(checkedItems);
        }
    };

    const checkHandler = ({ target }, { user }) => {
        if (target.checked === true) {
            const li = document.createElement("li");
            li.setAttribute('id', user.id);
            li.setAttribute('key', user.id);
            const textNode = document.createTextNode(user.name);
            li.appendChild(textNode);
            document
                .getElementById('selectedMembers')
                .appendChild(li);
            const newUser = {
                'id': user.id,
                'name': user.name
            };
            setInput([...input, newUser]);
        } else if (target.checked === false) {
            const ul = document
            .getElementById('selectedMembers');
            const items = document.getElementById(user.id);
            if (items !== undefined) {
                items.remove();
                setInput(input.filter(input => input.id !== user.id));
            }
        }
        console.log({input});
        setChecked(!bChecked);
        checkedItemHandler(target.value, target.checked);
    };

    const addList = ({ target }, { user }) => {
        if (bChecked === true) {
            const li = document.createElement("li");
            li.setAttribute('id', user.id);
            li.setAttribute('key', user.id);
            const textNode = document.createTextNode(user.name);
            li.appendChild(textNode);
            document
                .getElementById('selectedMembers')
                .appendChild(li);
        }
    };

    // const getValue = (e) => {
    //     const { name, value } = e.target
    //     setDto({
    //         ...dto,
    //         [name]: value
    //     })
    //     console.log(dto);
    // }

    const onChange = (e) => {
        setList(e.target.value);
        console.log(e.target.value);
    };

    return (
        <>
            <Modal show={open} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>구성원 선택</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="bodyContainer">
                        <div className="searchContainer">
                            <div className="formContainer">
                                <Form.Control onChange={onChange} type="text" className="searchBar" name="memberSearch" placeholder="아이디, 이름, 학번으로 검색..." />
                            </div>
                            <div className="itemContainer">
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>학번</th>
                                            <th>이름</th>
                                            <th>아이디</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user && user.map(user => (
                                            <tr>
                                                <td>{user.schoolid}</td>
                                                <td>{user.name}</td>
                                                <td>{user.id}</td>
                                                <td><input value={user.name} type="checkbox" onChange={(e) => checkHandler(e, {user})} /></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                            {/* {user.filter((item) => {
                                    if (list === "") {
                                        return item;
                                    }
                                    else if (item.name.toLowerCase()
                                        .includes(list.toLowerCase())) {
                                        return item
                                    }

                                }).map((item) => (
                                    <div key={item.id}>
                                        <label className="items">
                                            {item.name}
                                        </label>
                                    </div>
                                ))
                                } */}
                        </div>
                        <div className="memberContainer">
                            <label className="title">
                                추가된 멤버
                            </label>
                            <ul id="selectedMembers">
                            </ul>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <form method="post">
                        <input type="hidden" name="members" />
                    </form>
                    <Button variant="primary" onClick={handleClose} type="submit">
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Popup;