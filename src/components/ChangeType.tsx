import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, alterType] = useState<string>("Short Answer");
    return (
        <div>
            <Button
                onClick={() =>
                    alterType(
                        type === "Short Answer"
                            ? "Multiple Choice"
                            : "Short Answer"
                    )
                }
            >
                Change Type
            </Button>
            {type}
        </div>
    );
}
