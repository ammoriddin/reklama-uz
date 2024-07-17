export const Icons = {
    logo: (props) => (
        <svg 
            width="32" 
            height="32" 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect 
                width="32" 
                height="32" 
                fill="#322C39"
            />
            <circle 
                cx="16" 
                cy="16" 
                r="16" 
                transform="rotate(180 16 16)" 
                fill="#7000FF"
            />
            <path 
                d="M16 0L16.5404 6.34437C16.9537 11.1971 20.8029 15.0463 25.6556 15.4596L32 16L25.6556 16.5404C20.8029 16.9537 16.9537 20.8029 16.5404 25.6556L16 32L15.4596 25.6556C15.0463 20.8029 11.1971 16.9537 6.34437 16.5404L0 16L6.34437 15.4596C11.1971 15.0463 15.0463 11.1971 15.4596 6.34437L16 0Z" 
                fill="#FFF500"
            />
        </svg>
    )
}