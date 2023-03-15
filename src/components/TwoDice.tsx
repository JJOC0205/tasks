import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [roll1, rollDie1] = useState<number>(1);
    const [roll2, rollDie2] = useState<number>(6);

    return (
        <div>
            <span data-testid="left-die">
                <Button onClick={() => rollDie1(d6)}> Roll 1</Button>
            </span>
            <span data-testid="right-die">
                <Button onClick={() => rollDie2(d6)}> Roll 2</Button>
            </span>
            {"die1 = " + roll1 + ", die2 = " + roll2}
            {roll1 != 1 && roll1 === roll2 && "You Win"}
            {roll1 === 1 && roll1 === roll2 && "You Lose"}
        </div>
    );
}
