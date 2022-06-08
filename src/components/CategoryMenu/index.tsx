import { Link } from 'react-router-dom';
import './index.css'
import {ICategoryMenu} from '../../interfaces'

const CategoryMenu = ({ categories }: ICategoryMenu) => (
    <section className="category__container">
        <h1>Compra en tus categorias favoritas</h1>
        <div className='category__aray'>
            {categories.map(({ name, id, image }) => (
                <div key={id}>
                    <span className="category__box" >
                        <img src={image} className="category__image" alt="imagenprueba" />
                        <Link to={name}><p>{name}</p></Link>
                    </span>
                </div>
            ))}
        </div>
    </section>
);

export default CategoryMenu;