import React, { useState } from "react";

const NewStoryForm = ({ addStory }) => {
    const INITIAL_STATE = { adjective: "", noun: "", adverb: "", verbPast: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    //sends data to parent and clears form
    const handleSubmit = evt => {
        evt.preventDefault();
        addStory(formData);
        setFormData(INITIAL_STATE);
    };

    //updates formData using the name and value of the form inputs
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="NewStoryForm">
            <label htmlFor="adjective">Adjective: </label>
            <input
                id="adjective"
                name="adjective"
                value={formData.adjective}
                onChange={handleChange}
            />
            <label htmlFor="noun">Noun: </label>
            <input
                id="noun"
                name="noun"
                value={formData.noun}
                onChange={handleChange}
            /><label htmlFor="adverb">Adverb: </label>
            <input
                id="adverb"
                name="adverb"
                value={formData.adverb}
                onChange={handleChange}
            /><label htmlFor="verbPast">Verb (Past Tense): </label>
            <input
                id="verbPast"
                name="verbPast"
                value={formData.verbPast}
                onChange={handleChange}
            />
            <button>Get Story!</button>
        </form>
    );
};

export default NewStoryForm;