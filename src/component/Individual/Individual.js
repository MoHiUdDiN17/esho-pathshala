import React, { useEffect, useState } from 'react';
import Optionques from '../Optionques/Optionques';
import './Individual.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Individual = (props) => {
    const { question, correctAnswer, options } = props.ques;
    const string1 = 'Correct Answer';
    const string2 = 'Wrong Answer';
    let variable = 1;
    const [active, isActive] = useState(0);
    const [show, isShow] = useState(0);
    const checkans = (ans) => {
        if (ans == correctAnswer)
            isActive(1);
        else
            isActive(2);
    }
    const answershow = () => {
        isShow(show + 1);
    }
    useEffect(() => {
        const notify = (string) => toast(string, {
            position: toast.POSITION.TOP_RIGHT,
        });
        if (active == 1)
            notify(string1);
        else if (active == 2)
            notify(string2);
        else
            ;
    }, [active])

    useEffect(() => {
        const notitofy = () => toast("Answer: " + correctAnswer, {
            position: toast.POSITION.TOP_RIGHT,
        });
        if (show)
            notitofy();
    }, [show])

    return (
        <div className='container ps-5 pe-5 whole'>
            <div className='flexi'>
                <div >
                    <h3>Question: {question}</h3>
                </div>
                <div>
                    <i onClick={() => answershow()} class="fa-solid fa-eye"></i>
                </div>
            </div>

            <div className='separate'>
                {
                    options.map(option => <Optionques
                        option={option}
                        correctAnswer={correctAnswer}
                        checkans={checkans}
                    ></Optionques>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Individual;