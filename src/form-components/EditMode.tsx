import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [userName, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group controlId="Edit Mode">
                <Form.Check
                    type="switch"
                    id="change mode"
                    checked={mode}
                    onChange={() => setMode(!mode)}
                />
                {userName} {isStudent ? " is a student" : " is not a student"}
            </Form.Group>
        </div>
    );
}
