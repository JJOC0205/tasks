import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsWanted, setAttemptsWanted] = useState<string>("");
    const wants =
        isNaN(parseInt(attemptsWanted)) === true ? 0 : parseInt(attemptsWanted);
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="giveAttemps">
                <Form.Label>Attempts Wanted</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsWanted}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsWanted(event.target.value)
                    }
                />
            </Form.Group>
            <Button
                disabled={attemptsLeft < 1}
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
            >
                use
            </Button>
            <div>{attemptsLeft}</div>
            <Button
                onClick={() => {
                    setAttemptsLeft(wants + attemptsLeft);
                }}
            >
                gain
            </Button>
        </div>
    );
}
