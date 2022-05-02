import { Link } from 'react-router-dom';
import './index.css'
import {ICategories} from '../../interfaces'

interface ICategoryMenu {
    categories: ICategories[]
}


const CategoryMenu = ({ categories }: ICategoryMenu) => (
    <section className="category__container">
        <h1>Compra en tus categorias favoritas</h1>
        <div className='category__aray'>
            {categories.map(({ name, id, image }) => (
                <div key={id}>
                    <div className="category__box" >
                        <img src={image} className="category__image" />
                        <Link to={name}><p>{name}</p></Link>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default CategoryMenu;