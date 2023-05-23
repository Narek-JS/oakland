import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ArrowToRightBlue } from '@/public/assets/svges/ArrowToRightBlue';
import * as yup from 'yup';
import classes from './index.module.css';
import Link from 'next/link';
import { Fragment } from 'react';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    website: yup.string().required('subject is required'),
    message: yup.string().required('subject is message'),
});

interface FormData {
    name: string;
    email: string;
    website: string;
    message: string;
    checkbox: boolean;
};


const CommentForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            website: '',
            message: '',
            checkbox: false
        },
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <Fragment>
            <h2 className={classes.title}>Leave a Reply</h2>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.wrapperInput}>
                    <label>Your comment here...</label>
                    <textarea {...register('message')} className={classes.textarea}/>
                    { errors.message?.message && <span className={classes.error}>{errors.message.message}</span> }
                </div>
                <div className={classes.inputs}>
                    <div className={classes.wrapperInput}>
                        <input {...register('name')} placeholder='Name (required)' className={classes.input}/>
                        { errors.name?.message && <span className={classes.error}>{errors.name.message}</span> }
                    </div>
                    <div className={classes.wrapperInput}>
                        <input {...register('email')} placeholder='Email (required)' className={classes.input}/>
                        { errors.email?.message && <span className={classes.error}>{errors.email.message}</span> }
                    </div>
                    <div className={classes.wrapperInput}>
                        <input {...register('website')} placeholder='Website (required)' className={classes.input}/>
                        { errors.website?.message && <span className={classes.error}>{errors.website.message}</span> }
                    </div>
                </div>
                <div className={classes.underScop}>
                    <div className={classes.checkbox}>
                        <input type='checkbox' {...register('checkbox')} className={classes.checkboxInput}/>
                        <label>Save my name, email, and website in this browser for the next time I comment.</label>
                    </div>
                    <button className={classes.btn} type='submit'><ArrowToRightBlue color='#FFFFFF'/>Post Comment</button>
                </div>
                <p className={classes.wrapperLink}>
                    This site uses Akismet to reduce spam. 
                    <Link href={'/'}>Learn how your comment data is processed.</Link>
                </p>
            </form>
        </Fragment>
    );
};

export { CommentForm };