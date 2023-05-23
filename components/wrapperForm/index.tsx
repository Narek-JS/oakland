import { useRouter } from 'next/router';
import { Form } from './form';
import { Fragment } from 'react';
import classes from './index.module.css';
import useWindowSize from '@/hooks/useWindowSize';

interface IProps {
    children?: React.ReactNode;
};

const WrapperForm: React.FC<IProps> = ({ children }) => {
    const { width } = useWindowSize();
    const { pathname } = useRouter();
  
    const isMobile = Number(width) <= 768;
    const isPaintForm = isMobile && (pathname === '/' || pathname === '/quote');
  
    return (
      <div className={classes.wrapperForm}>
        {(!isMobile || isPaintForm) ? (
          <Fragment>
            <Form {...(!children && { flexRow: true })}/>
            {!isMobile && (
              <div className={classes.rightContent}>
                {children}
              </div>
            )}
          </Fragment>
        ) : (
          isPaintForm ? (
            <Form {...(!children && { flexRow: true })} />
          ) : (
            <div className={classes.rightContent}>
              {children}
            </div>
          )
        )}
      </div>
    );
};
  
  export { WrapperForm };