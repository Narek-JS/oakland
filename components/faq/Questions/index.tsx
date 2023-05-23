import { Container } from '@/components/ui/container';
import { useState } from 'react';
import { ArrowTop } from '@/public/assets/svges/ArrowTop';
import classes from './index.module.css';
import classNames from 'classnames';

const questionsData = [
    {
        question: 'WHAT COVERAGE DOES MY COMPANY NEED TO BE LEGAL AND SAFE?',
        answer: 'Well, it depends on your industry. If you want to know the exact specifics of what your business needs, contact one of our agents today and they’ll work with you to figure out exactly what you need! However, for a general idea of what you’ll need, these are the coverages that show up in our policies most often:'
    },
    {
        question: 'I DON’T WANT TO JUST HAUL IN MY BASE STATE; I WANT TO HAUL ALL OVER THE COUNTRY! WHAT INSURANCE COVERAGE DO I NEED TO DO THAT?',
        answer: 'Well, it depends on your industry. If you want to know the exact specifics of what your business needs, contact one of our agents today'
    },
    {
        question: 'MY COMPANY IS ON A TIGHT BUDGET. CAN I STILL GET ENOUGH COVERAGE TO LEGALLY OPERATE?',
        answer: ''
    },
    {
        question: 'WHAT IS THE BARE MINIMUM OF INSURANCE COVERAGE THAT MY OPERATIONS NEED TO FUNCTION?',
        answer: ''
    },
]

const Questions = () => {
    const [questions, setQuestions ] = useState(questionsData ? [...questionsData, ...questionsData, ...questionsData].map((_) => ({..._, active: false})) : []);

    return (
        <section className={classes.section}>
            <Container>
                <div className={classes.questions}>
                    { questions.map(({ active, answer, question }, index) => (
                        <div key={index} className={classes.questionBlock}>
                            <p className={classes.question} onClick={() => setQuestions(questions.map((_, i) => ({..._, active: i === index})))}>
                                <span>{question}</span>
                                <ArrowTop rotate={active ? 180 : 0} />
                            </p>
                            <p className={classNames(classes.answer, {
                                [classes.active]: active
                            })}>{answer}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export { Questions };