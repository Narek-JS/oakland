export const OpenFormQuote: React.FC<{rotate?: number}> = ({ rotate = 0 }) => (
<svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `rotate(${rotate}deg)`, transition: 'all .3s' }}
>
    <g clipPath="url(#clip0_105_4793)">
        <circle
            cx="15"
            cy="15"
            r="13.5"
            fill="#32C1EA"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="20 20"
        />
        <path
            d="M8 19L15.3043 11L22 19"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </g>
    <defs>
        <clipPath id="clip0_105_4793">
            <rect width="30" height="30" fill="white"/>
        </clipPath>
    </defs>
</svg>
)