import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<string>("3");
    const [attemptsWanted, setAttemptsWanted] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                Attemps left: {attemptsLeft} Wanted: {attemptsWanted}
            </div>
            <Form.Group controlId="giveAttemps">
                <Form.Label>Attempts Wanted</Form.Label>
                <Form.Control
                    type="number"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsWanted(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <Button
                    disabled={parseInt(attemptsLeft) < 1}
                    onClick={() =>
                        setAttemptsLeft(
                            (parseInt(attemptsLeft) - 1).toString(10)
                        )
                    }
                >
                    use
                </Button>
                <Button
                    onClick={() => {
                        setAttemptsWanted(attemptsWanted);
                    }}
                >
                    gain
                </Button>
            </div>
        </div>
    );
}
