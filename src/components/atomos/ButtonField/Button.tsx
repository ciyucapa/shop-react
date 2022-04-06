import './index.css'
import CartMas from '../../../assets/componentIcons/CartMas'

interface ButtonProps {
    text: string
    isIcon?: boolean
    onClick?: () => void
}

const ButtonField = ({text, isIcon, onClick}: ButtonProps): JSX.Element => (
    <div className="button__container" onClick={onClick}>
        {isIcon ? <CartMas/> : ''}
        <p>{text}</p>
    </div>
)

export default ButtonField;