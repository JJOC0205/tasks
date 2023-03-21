import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [favorite, setFavorite] = useState<string>(options[0]);
    function updateFavorite(event: React.ChangeEvent<HTMLSelectElement>) {
        setFavorite(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="favoriteOptions">
                <Form.Label>What is the best of these?</Form.Label>
                <Form.Select value={favorite} onChange={updateFavorite}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {favorite === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
