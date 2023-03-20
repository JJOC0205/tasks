import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    // return (
    //     <div>
    //         <h3>Edit Mode</h3>
    //     </div>
    // );
    //     const [released, setReleased] = useState<string>("2022");
    //     const previousYear = parseInt(released) - 1 || 0;

    //     // Provide forms for editing the new movie
    //     // And also a button to append the movie
    //     return (
    //         <div>
    //             <Form.Group controlId="formMovieReleased">
    //                 <Form.Label>Released:</Form.Label>
    //                 <Form.Control
    //                     type="number"
    //                     value={released}
    //                     onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
    //                         setReleased(event.target.value)
    //                     }
    //                 />
    //             </Form.Group>
    //             <div>
    //                 The year before the movie was released was {previousYear}.
    //             </div>
    //         </div>
    //     );
    // }
    // This is the State (Model)
    //     const [emotion, setEmotion] = useState<string>("happy");

    //     // This is the Control
    //     function updateEmotion(event: React.ChangeEvent<HTMLInputElement>) {
    //         setEmotion(event.target.value);
    //     }

    //     // This is the View
    //     return (
    //         <div>
    //             <Form.Check
    //                 inline
    //                 type="radio"
    //                 name="emotions"
    //                 onChange={updateEmotion}
    //                 id="emotion-check-happy"
    //                 label="Happy"
    //                 value="happy"
    //                 checked={emotion === "happy"}
    //             />
    //             <Form.Check
    //                 inline
    //                 type="radio"
    //                 name="emotions"
    //                 onChange={updateEmotion}
    //                 id="emotion-check-sad"
    //                 label="Sad"
    //                 value="sad"
    //                 checked={emotion === "sad"}
    //             />
    //             <Form.Check
    //                 inline
    //                 type="radio"
    //                 name="emotions"
    //                 onChange={updateEmotion}
    //                 id="emotion-check-angry"
    //                 label="Angry"
    //                 value="angry"
    //                 checked={emotion === "angry"}
    //             />
    //             <div>The user is feeling {emotion}.</div>
    //         </div>
    //     );
    // }
const COLORS = ["red", "blue", "green", "orange", "purple", "yellow"];
const DEFAULT_COLOR = COLORS[0];

export function App(): JSX.Element {
    // This is the State (Model)
    const [favorite, setFavorite] = useState<string>(DEFAULT_COLOR);

    // This is the Control
    function updateFavorite(event: React.ChangeEvent<HTMLSelectElement>) {
        setFavorite(event.target.value);
    }

    // This is the View
    return (
        <div>
            <Form.Group controlId="favoriteColors">
                <Form.Label>What is your favorite color?</Form.Label>
                <Form.Select value={favorite} onChange={updateFavorite}>
                  { COLORS.map((color: string) =>
                    <option key={color} value={color}>{color}</option>
                  )}
                </Form.Select>
            </Form.Group>
            The user's favorite color is {favorite}.
        </div>
    );
}