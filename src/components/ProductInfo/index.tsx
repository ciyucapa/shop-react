import ButtonField from '../atomos/ButtonField/Button';
import './index.css'

const ProductInfo = () => {
    return (
        <>
            <img/>
            <div>
                <p>$120.00</p>
                <p>Retro Refrigerator</p>
                <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace</p>
                <ButtonField text='Add to cart' isIcon={true} />
            </div>
        </>
    )
};

export default ProductInfo;