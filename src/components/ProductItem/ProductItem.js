import styles from './ProductItem.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'

function ProductItem({ item }) {
    return (
        <li className={styles.elements__item} key={item._id}>
            <img className="elements__image" src={item.image} alt={item.image} />
            <div className={styles.priceWrapper}>
                <p className='text text_type_digits-default'>
                    {item.price}
                </p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`elements__name text text_type_main-small ${styles.nameProps}`}>{item.name}</p>
            <div className={styles.counterWrapper}>
                <Counter count={1} size="small" />
            </div>
        </li>
    )
}

export default ProductItem; 