import React from 'react';

import styles from './BurgerIngredients.module.css';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState('one');
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
                            props.products.filter(
                                (item) => item.type === 'bun'
                            ).map((item) => (
                                <li className={styles.elements__item} key={item._id}>
                                    <img className="elements__image" src={item.image} />
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
                            ))
                        }
                    </ul>
                    <p className="text text_type_main-medium">
                        Соусы
                    </p>
                    <ul className={styles.elements__list}>
                        {
                            props.products.filter(
                                (item) => item.type === 'sauce'
                            ).map((item) => (
                                <li className={styles.elements__item} key={item._id}>
                                    <img className="elements__image" src={item.image} />
                                    <div className={styles.priceWrapper}>
                                        <p className='text text_type_digits-default'>
                                            {item.price}
                                        </p>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    <p className={`elements__name text text_type_main-small ${styles.nameProps}`}>{item.name}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <p className="text text_type_main-medium">
                        Начинка
                    </p>
                    <ul className={styles.elements__list}>
                        {
                            props.products.filter(
                                (item) => item.type === 'main'
                            ).map((item) => (
                                <li className={styles.elements__item} key={item._id}>
                                    <img className="elements__image" src={item.image} />
                                    <div className={styles.priceWrapper}>
                                        <p className='text text_type_digits-default'>
                                            {item.price}
                                        </p>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    <p className={`elements__name text text_type_main-small ${styles.nameProps}`}>{item.name}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BurgerIngredients; 