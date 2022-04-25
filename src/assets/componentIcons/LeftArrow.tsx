import { ClickProps } from "../../interfaces"

const LeftArrow = ({onClick}: ClickProps): JSX.Element => (
    <div onClick={onClick}>
        <svg 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 129 129" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
        >
            <g>
                <g>
                    <path d="m64.5,122.6c32,0 58.1-26 58.1-58.1s-26-58-58.1-58-58,26-58,58 26,58.1 58,58.1zm0-108c27.5,5.32907e-15 49.9,22.4 49.9,49.9s-22.4,49.9-49.9,49.9-49.9-22.4-49.9-49.9 22.4-49.9 49.9-49.9z" />
                    <path d="m70,93.5c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-23.5-23.5 23.5-23.5c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-26.4,26.4c-0.8,0.8-1.2,1.8-1.2,2.9s0.4,2.1 1.2,2.9l26.4,26.4z" />
                </g>
            </g>
        </svg>
    </div>
)
export default LeftArrow