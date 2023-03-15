import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [progress, changeProgress] = useState<boolean>(false);
    const [attempts, changeAttempts] = useState<number>(4);
    function clickStart(): void {
        changeProgress(!progress);
        attempts > 0 ? changeAttempts(attempts - 1) : changeAttempts(0);
    }
    function mulligan(): void {
        changeAttempts(attempts + 1);
    }
    function clickEnd(): void {
        changeProgress(!progress);
    }
    return (
        <div>
            {
                <Button
                    disabled={progress || attempts <= 0}
                    onClick={clickStart}
                >
                    Start Quiz
                </Button>
            }
            {<Button onClick={mulligan}>Mulligan</Button>}
            {
                <Button disabled={!progress} onClick={clickEnd}>
                    End Quiz
                </Button>
            }
            {attempts}
        </div>
    );
}
