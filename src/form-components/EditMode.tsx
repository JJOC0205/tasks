import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [userName, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const outText = isStudent
        ? userName + " is a student"
        : userName + " is not a student";
    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function changeStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function changeMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="change mode"
                checked={mode}
                onChange={changeMode}
            />
            {!mode && outText}
            <div>
                {mode ? (
                    <Form.Group controlId="name">
                        <Form.Control
                            value={userName}
                            onChange={changeName}
                            disabled={!mode}
                        />
                    </Form.Group>
                ) : null}
                {mode ? (
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="Student?"
                        checked={isStudent}
                        onChange={changeStudent}
                    />
                ) : null}
            </div>
        </div>
    );
}
