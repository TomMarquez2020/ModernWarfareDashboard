import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FindPlayer(props) {
    // const [playerID, setPlayerid] = useState("");
    // const [platform, setPlatform] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //props.setPlatform(e.target.value);
        console.log(e.target.value);
    }

    const handleOnChange = (e) => {
        props.platform = e.target.value;
    }

    return (
        <>
            <Form onSubmit={props.handleSubmit}>
                {/* <Form.Group controlId="formPlayerID">
                    <Form.Label>Player ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter player id"></Form.Control>
                </Form.Group> */}
                <Form.Group controlId="formPlatform">
                    <Form.Label>Platform</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter the platform player plays on"
                        value={props.platform}
                        onChange={props.handleOnChange}
                    >
                        {/* // onSubmit={(e) => props.handleSubmit(e)}> */}
                        {/* // onSubmit={(e) => console.log(e.target.value)}> */}
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
            </Button>
            </Form>
            {/* <p>{platform}</p> */}
        </>
    );
}

export default FindPlayer;