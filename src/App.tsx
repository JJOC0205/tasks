import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { Button, Col, Container, Row } from "react-bootstrap";
import dog from "./images/cuteDog.jpeg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Jonathon OConnell
            </header>
            <hr></hr>
            <h1> This is in a header</h1>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr /> Hello World
            <CycleHoliday></CycleHoliday>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <ol>
                <li>Dogs</li>
                <li>Cats</li>
                <li>Fish</li>
            </ol>
            <img
                src={dog}
                alt="A picture of a cute dog"
                width="500"
                height="500"
            />
            <Container>
                <Row>
                    <Col>
                        <div id="rectangle"></div>
                    </Col>
                    <Col>
                        <div id="rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
