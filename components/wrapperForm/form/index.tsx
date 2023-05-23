import { useRouter } from 'next/router';
import { useContext } from 'react';
import { GlobalDatasContext } from '@/context/globalDatas';
import { OperatorIconForm } from '@/public/assets/svges/OperatorIconForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useWindowSize from '@/hooks/useWindowSize';
import classNames from 'classnames';
import * as yup from 'yup';
import classes from './index.module.css';

type InputNames = 'companyName' | 'numberOfTrucks' | 'email' | 'phoneNumber' | 'physicalDamage' | 'liability' | 'cargo' | 'otherCoverage' | 'truck' | 'trailer' | 'cargoVehicle' | 'otherVehicle';

type InputGroup = {
    name: InputNames;
    placeholder?: string;
    lable?: string;
};

interface IFormTemplate {
    inputs: Array<Array<InputGroup>>;
    checkBoxes: Array<{
        lable: string;
        checkBoxesGroup: Array<InputGroup>;
    }>;
};

interface FormData {
    companyName: string;
    numberOfTrucks: string;
    email: string;
    phoneNumber: string;
    physicalDamage: boolean;
    liability: boolean;
    cargo: boolean;
    otherCoverage: boolean;
    truck: boolean;
    trailer: boolean;
    cargoVehicle: boolean;
    otherVehicle: boolean;
};

interface IProps {
    flexRow?: boolean;
    fromLayout?: boolean;
    directoryHome?: boolean;
};

const schema = yup.object().shape({
    companyName: yup.string().required('Company Name is required'),
    numberOfTrucks: yup.string().required('Number of Trucks is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: yup.string().matches(/^\d+$/, 'Invalid phone number').required('Phone Number is required'),
    physicalDamage: yup.boolean().required('Type of Coverage is required'),
    liability: yup.boolean().required('Type of Coverage is required'),
    cargo: yup.boolean().required('Type of Coverage is required'),
    otherCoverage: yup.boolean().required('Type of Coverage is required'),
    truck: yup.boolean().required('Class of Vehicles is required'),
    trailer: yup.boolean().required('Class of Vehicles is required'),
    cargoVehicle: yup.boolean().required('Class of Vehicles is required'),
    otherVehicle: yup.boolean().required('Class of Vehicles is required'),
});

const formTemplate: IFormTemplate = {
    inputs: [[
        { name: 'companyName', placeholder: 'Company Name *' },
        { name: 'numberOfTrucks', placeholder: 'Number of Trucks *' }
    ],
    [
        { name: 'email', placeholder: 'Email *' },
        { name: 'phoneNumber', placeholder: 'Phone Number *' }
    ]], 
    checkBoxes: [{
        lable: 'Type of Coverage',
        checkBoxesGroup: [
            { name: 'physicalDamage', lable: 'Physical Damage', },
            { name: 'liability', lable: 'Liability' },
            { name: 'cargo', lable: 'Cargo' },
            { name: 'otherCoverage', lable: 'Other' },
        ]
    },
    {
        lable: 'Class of Vehicles',
        checkBoxesGroup: [
            { name: 'truck', lable: 'Truck' },
            { name: 'trailer', lable: 'Trailer' },
            { name: 'cargoVehicle', lable: 'Cargo' },
            { name: 'otherVehicle', lable: 'Other' },
        ]
    }]
}

const Form: React.FC<IProps> = ({ flexRow, fromLayout = false}) => {
    const { pathname, push } = useRouter();
    const { menus: { data: menuData } } = useContext(GlobalDatasContext);
    const { width } = useWindowSize();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
          companyName: '',
          numberOfTrucks: '',
          email: '',
          phoneNumber: '',
          physicalDamage: false,
          liability: false,
          cargo: false,
          otherCoverage: false,
          truck: false,
          trailer: false,
          cargoVehicle: false,
          otherVehicle: false,
        },
    });

    const onSubmit = (data: FormData) => {
        push('thank-you')
    };

    const isMobile = Number(width) <= 768;
    const isHomePage = pathname === '/';

    return (
        <div className={classNames(classes.wrapperForm, {
            [classes.flexRow]: flexRow,
            [classes.wrapperFormHome]: isHomePage
        })}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.wrapperTitle}>
                    <h3 className={classes.formTitle}>Get Your Quote Now </h3>
                    { menuData?.contactInfo?.phone?.url && (
                        <a href={`tel:${menuData.contactInfo.phone.url}`} className={classes.wrapperTitlePhone}>
                            <OperatorIconForm
                                {...(isMobile && { width: 20 })}
                                {...(isMobile && { height: 20 })}
                            />
                            {menuData?.contactInfo?.phone?.url}
                        </a>
                    )}
                </div>
                <p className={classes.or}>or</p>

                <div className={classes.inputs}>
                    { formTemplate.inputs.map((inputLine, lineIndex) => (
                        <div className={classes.inputsLine} key={lineIndex}>
                            { inputLine.map(({ placeholder, name }, inputIndex) => (
                                <div key={inputIndex} className={classes.wrapperInput}>
                                    <input placeholder={placeholder} {...register(name)} autoComplete="off"/>
                                    { errors[name] && <span className={classes.error}>{errors[name]?.message}</span>}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className={classes.checkBoxes}>
                    { formTemplate.checkBoxes.map(({ checkBoxesGroup, lable }, groupIndex) => (
                        <div className={classes.checkBoxLine} key={groupIndex}>
                            <h3>{lable}</h3>
                            <div className={classes.wrapperCheckBoxes}>
                                { checkBoxesGroup.map(({ name, lable }, lineIndex) => (
                                    <div key={lineIndex}>
                                        <input type='checkbox' {...register(name)}/>
                                        <label>{lable}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <button type='submit' className={classes.submitBtn}>Submit</button>
            </form>
            <div className={classes.wrapperContent}>
                { isHomePage && !isMobile && (
                    <h1 className={classes.titleBox}>
                        No Broker FEE
                    </h1>
                )}
                <h2 className={classNames(classes.title, {
                    [classes.whiteTitle]: fromLayout
                })}>
                    Get <span>Your Quote</span> from <span>Fontana</span> Truck <span>Insurance</span>
                </h2>
                { !fromLayout &&
                    <p className={classes.description}>
                        Lorem ipsum dolor sit amet consectetur. Amet turpis proin rutrum lacus pretium diam duis. Urna sodales tristique pretium id pharetra. Tristique faucibus odio nunc bibendum vitae cursus.
                    </p>
                }
            </div>
        </div>
    )
};

export { Form };