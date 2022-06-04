import { useState } from 'react';

import PropTypes from 'prop-types';
import styles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { productPropTypes } from '../../utils/data.js'
import ProductItem from '../ProductItem/ProductItem';

function BurgerIngredients({ products }) {
    const [current, setCurrent] = useState('one');
    const buns = products.filter(
        (item) => item.type === 'bun'
    )
    const sauce = products.filter(
        (item) => item.type === 'sauce'
    );
    const main = products.filter(
        (item) => item.type === 'main'
    );
    return (
        <div className={styles.mainWrapper}>
            <div style={{ display: 'flex' }}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <h2 className={`text text_type_main-medium ${styles.contentHeader}`}>
                        Булки
                    </h2>
                    <ul className={styles.elements__list}>
                        {
                            buns.map((item) => (
                                <ProductItem item={item} key={item._id} />
                            ))
                        }
                    </ul>
                    <p className="text text_type_main-medium">
                        Соусы
                    </p>
                    <ul className={styles.elements__list}>
                        {
                            sauce.map((item) => (
                                <ProductItem item={item} key={item._id} />
                            ))
                        }
                    </ul>
                    <p className="text text_type_main-medium">
                        Начинка
                    </p>
                    <ul className={styles.elements__list}>
                        {
                            main.map((item) => (
                                <ProductItem item={item} key={item._id} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

BurgerIngredients.propTypes = {
    products: PropTypes.arrayOf(productPropTypes.isRequired).isRequired
};

export default BurgerIngredients; 