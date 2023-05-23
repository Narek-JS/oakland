import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ArrowToRightBlue } from '@/public/assets/svges/ArrowToRightBlue';
import * as yup from 'yup';
import classNames from 'classnames';
import classes from './index.module.css';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    phone: yup.string().matches(/^\d+$/, 'Invalid phone number').required('Phone Number is required'),
    subject: yup.string().required('subject is required'),
    message: yup.string().required('subject is message'),
});

type InputNames = | 'name' | 'email' | 'phone' | 'subject' | 'message';

interface IFormTemplate {
    name: InputNames;
    placeholder?: string;
    label?: string;
    type?: 'textarea'
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
};

interface IProps {
    color?: 'blue' | 'white';
};

const formTemplate: Array<IFormTemplate> = [
    {
        name: 'name',
        placeholder: 'Your Name (required)',
    },
    {
        name: 'email',
        placeholder: 'Email (required)'
    },
    {
        name: 'phone',
        placeholder: 'Phone (required)'
    },
    {
        name: 'subject',
        placeholder: 'Subject'
    },
    {
        name: 'message',
        label: 'How can we help you?',
        type: 'textarea'
    },
]

const ContactForm: React.FC<IProps> = ({ color = 'white' }) => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        },
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form 
            className={classNames(classes.form, {
                [classes.formBlue]: color === 'blue' 
            })}
            onSubmit={handleSubmit(onSubmit)}
        >
            { formTemplate.map(({ name, label, placeholder, type }, index) => (
                <div className={classes.inputWraper} key={index}>
                    { label && <label className={classes.lable}>{label}</label> }
                    { type === 'textarea' ? (
                        <textarea {...register(name)} className={classes.textarea} />
                    ) : (
                        <input
                            className={classes.input}
                            placeholder={placeholder}
                            {...register(name)}
                        />
                    )}
                    { errors[name]?.message && <span className={classes.error}>{errors[name]!.message}</span> }
                </div>
            ))}

            <button type='submit' className={classes.btn}><ArrowToRightBlue color='#FFFFFF' /> <span>Submit</span></button>
        </form>
    );
};

export { ContactForm };