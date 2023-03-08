import React, { useState } from "react";
import Story from "./Story";
import NewStoryForm from "./NewStoryForm"
import { v4 as uuid } from "uuid";


function Madlibs() {
    const [stories, setStories] = useState([]);

    const addStory = (story) => {
        let newStory = { ...story, id: uuid() };
        setStories(stories => [...stories, newStory]);

    }

    return (
        <div className="Madlibs">
            <h1>Madlibs!</h1>
            <NewStoryForm addStory={addStory} />
            <div>
                {stories.map(({ id, adjective, noun, adverb, verbPast }) =>
                    <Story id={id} adjective={adjective} noun={noun} adverb={adverb} verbPast={verbPast} />)}
            </div>
        </div>
    )
}

export default Madlibs;