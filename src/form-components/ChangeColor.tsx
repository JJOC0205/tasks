import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");
    const colorOptions = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="color Options:">
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color choose"
                    value={color}
                    label={color}
                    //checked={color === }
                >
                    {colorOptions.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Check>
            </Form.Group>
        </div>
    );
}
