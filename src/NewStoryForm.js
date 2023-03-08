import React, { useState } from "react";
import "./NewStoryForm.css"

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
            <div className="NewStoryFormInput">
                <label htmlFor="adjective">Adjective: </label>
                <input
                    id="adjective"
                    name="adjective"
                    placeholder="adjective"
                    value={formData.adjective}
                    onChange={handleChange}
                />
            </div>
            <div className="NewStoryFormInput">
                <label htmlFor="noun">Noun: </label>
                <input
                    id="noun"
                    name="noun"
                    placeholder="noun"
                    value={formData.noun}
                    onChange={handleChange}
                />
            </div>
            <div className="NewStoryFormInput">
                <label htmlFor="adverb">Adverb: </label>
                <input
                    id="adverb"
                    name="adverb"
                    placeholder="adverb"
                    value={formData.adverb}
                    onChange={handleChange}
                />
            </div>
            <div className="NewStoryFormInput">
                <label htmlFor="verbPast">Verb (Past Tense): </label>
                <input
                    id="verbPast"
                    name="verbPast"
                    placeholder="verb (past tense)"
                    value={formData.verbPast}
                    onChange={handleChange}
                />
            </div>
            <button>Get Story!</button>
        </form>
    );
};

export default NewStoryForm;