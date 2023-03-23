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
            {colorOptions.map((option: string) => (
                <div key={option}>
                    <span style={{ backgroundColor: option }}>{option}</span>
                    <Form.Check
                        inline
                        type="radio"
                        name={option}
                        onChange={updateColor}
                        id="option"
                        value={option}
                        label={option}
                        checked={option === color}
                    />
                </div>
            ))}
            <p>
                you picked{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </p>
        </div>
    );
}
