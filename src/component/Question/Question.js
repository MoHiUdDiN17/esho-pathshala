import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Individual from '../Individual/Individual';
import './Question.css'
const Question = () => {
    const post = useLoaderData();
    const eachpost = post.data;
    const {id,questions}=eachpost;
    return (
        <div>
            <h1>Quiz of JavaScript</h1>
            {
                 questions.map(ques=> <Individual
                    ques={ques}
                 ></Individual>)
            }
        </div>
    );
};

export default Question;