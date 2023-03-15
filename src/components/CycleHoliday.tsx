import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [day, changeHoliday] = useState<string>("⚜️");
    //Since eslint and prettier cant agree on ternary format, we get if statements
    const changeByDate: Record<string, string> = {
        "⚜️": "☘️",
        "☘️": "🇺🇸",
        "🇺🇸": "🦃",
        "🦃": "🎄",
        "🎄": "⚜️"
    };
    const changeByAlphabet: Record<string, string> = {
        "🎄": "🇺🇸",
        "🇺🇸": "⚜️",
        "⚜️": "☘️",
        "☘️": "🦃",
        "🦃": "🎄"
    };
    function changeDate() {
        changeHoliday(changeByDate[day]);
    }
    function changeAlphabet() {
        changeHoliday(changeByAlphabet[day]);
    }
    return (
        <div>
            <Button onClick={changeDate}> Change by Year</Button>
            <Button onClick={changeAlphabet}> Change by Alphabet</Button>
            {"Holiday: " + day}
        </div>
    );
}
