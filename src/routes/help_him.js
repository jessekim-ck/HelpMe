import React from "react";

import "../App.css";


const Errand = props => {

    const errand_info = props["errand_info"];

    const on_click = () => {
        let choice = window.confirm(`You want to take ${errand_info["username"]}'s errand?\n5% of the reward will be saved as your mileage points after finishing the task.`);
        if (choice) {
            alert("You have taken the errand!");
        }
    };

    return (
        <div className="errand-item" onClick={on_click}>
            <div style={{"fontSize": "18px", "marginBottom": "8px"}}><b>{errand_info["title"]}</b></div>
            <div><b>Username:</b> {errand_info["username"]} ({errand_info["requests"]} requests | {errand_info["helps"]} helps)</div>
            <div><b>Description:</b> {errand_info["description"]}</div>
            <div><b>Deadline:</b> {errand_info["deadline"]}</div>
            <div><b>Reward:</b> {errand_info["reward"]}</div>
        </div>
    );
};


const HelpHim = () => {

    const errand_list = [
        {
            "title": "Submitting a report",
            "username": "IronMan",
            "requests": "12",
            "helps": "4",
            "description": "Submitting a report to 058-402. Submitting a report to 058-402. Submitting a report to 058-402. Submitting a report to 058-402. Submitting a report to 058-402.",
            "deadline": "18:30",
            "reward": "3000"
        },
        {
            "title": "Submitting a report",
            "username": "IronMan",
            "requests": "12",
            "helps": "4",
            "description": "Submitting a report to 058-402. Submitting a report to 058-402. Submitting a report to 058-402. Submitting a report to 058-402. Submitting a report to 058-402.",
            "deadline": "18:30",
            "reward": "3000"
        },
        {
            "title": "Submitting a report",
            "username": "IronMan",
            "requests": "12",
            "helps": "4",
            "description": "Submitting a report to 058-402. Submitting a report to 058-402. Submitting a report to 058-402. Submitting a report to 058-402. Submitting a report to 058-402.",
            "deadline": "18:30",
            "reward": "3000"
        },
        {
            "title": "Submitting a report",
            "username": "IronMan",
            "requests": "12",
            "helps": "4",
            "description": "Submitting a report to 058-402. Submitting a report to 058-402. Submitting a report to 058-402. Submitting a report to 058-402. Submitting a report to 058-402.",
            "deadline": "18:30",
            "reward": "3000"
        },
        {
            "title": "Submitting a report",
            "username": "IronMan",
            "requests": "12",
            "helps": "4",
            "description": "Submitting a report to 058-402. Submitting a report to 058-402. Submitting a report to 058-402. Submitting a report to 058-402. Submitting a report to 058-402.",
            "deadline": "18:30",
            "reward": "3000"
        },
        {
            "title": "Submitting a report",
            "username": "IronMan",
            "requests": "12",
            "helps": "4",
            "description": "Submitting a report to 058-402. Submitting a report to 058-402. Submitting a report to 058-402. Submitting a report to 058-402. Submitting a report to 058-402.",
            "deadline": "18:30",
            "reward": "3000"
        }
    ];

    return (
        <div className="help-him">
            <div className="page-title">Errand List</div>
            {errand_list.map(errand_info => <Errand errand_info={errand_info}/>)}
        </div>
    );
};

export default HelpHim;
