export const ArrowTop: React.FC<{ rotate?: number }> = ({ rotate = 0 }) => (
    <svg style={{ transform: `rotate(${rotate}deg)` }} width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.999999 9L8.40908 1.65093C9.28408 0.783023 10.7159 0.783023 11.5909 1.65093L19 9" stroke="#16426C" strokeWidth="1.64062" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);