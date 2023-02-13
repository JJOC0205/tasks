import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import dog from "./images/cuteDog.jpeg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Jonathon OConnell
            </header>
            <h1> This is in a header</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
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
