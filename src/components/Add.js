import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';

function Add() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    let history = useNavigate();

    const handleEdit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b = age;

        Employees.push({id: uniqueId, Name : a , Age : b});

        history("/");
    }

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>

                <Form.Group className="mb-3" controlId="formName">
                    <FormControl type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                    </FormControl>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <FormControl type="text" placeholder="Enter Age" required onChange={(e) => setAge(e.target.value)}>
                    </FormControl>
                </Form.Group>
                <Button onClick={(e) => handleEdit(e)} type="submit">Submit</Button>
            </Form>
        </div>
    )
}
export default Add;