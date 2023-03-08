import React from "react";

const Story = ({ adjective, noun, adverb, verbPast }) => {
    return (
        <div className="Story">
            <p>There once was a {adjective} {noun} that {adverb} {verbPast}.</p>
        </div>
    );
};

export default Story;