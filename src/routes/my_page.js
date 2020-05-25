import React from "react";
import Form from "react-bootstrap/Form";

import "../App.css";


const MyPage = () => {

    return (
        <div className="my-page">
            <div className="page-title">User Information</div>
            <Form className="form">
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value="IronMan" readOnly/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Mileage</Form.Label>
                    <Form.Control type="text" value="12,000" readOnly/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" value="010-8642-2068" readOnly/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>SNU-ID</Form.Label>
                    <Form.Control type="text" value="2013-11086 (verified)" readOnly/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Number of Requests</Form.Label>
                    <Form.Control type="text" value="12" readOnly/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Number of Helps</Form.Label>
                    <Form.Control type="text" value="3" readOnly/>
                </Form.Group>
            </Form>
        </div>
    );
};

export default MyPage;
