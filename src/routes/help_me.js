import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../App.css";


const HelpMe = () => {

    const current_time = new Date();
    const current_hour = current_time.getHours();
    const current_minutes = current_time.getMinutes();

    return (
        <div className="help-me">
            <div className="page-title">Make a Request</div>

            <Form className="form">
                <Form.Group>
                    <Form.Label>Request Title</Form.Label>
                    <Form.Control type="text" placeholder="Title of your request"/>
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Request Description</Form.Label>
                    <Form.Control as="textarea" rows="5" placeholder="Detailed requirements for your request"/>
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Deadline</Form.Label>
                    <Form.Control type="time" defaultValue={`${current_hour}:${current_minutes}`}/>
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Reward</Form.Label>
                    <Form.Control type="number" pattern="\d*" defaultValue="5000" step="1000"/>
                    <Form.Text className="text-muted">5% of the reward will be saved as your mileage points.</Form.Text>
                </Form.Group>

                <Button style={{"backgroundColor": "black", "border": "none"}} onClick={() => alert("Request made!")}>Request</Button>
            </Form>
        </div>
    );
};

export default HelpMe;
