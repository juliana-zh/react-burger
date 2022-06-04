import React from 'react';

import PropTypes from 'prop-types';
import styles from './BurgerConstructor.module.css';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { productPropTypes } from '../../utils/data.js'

function BurgerConstructor({ products, mainbun }) {
    return (
        <div className='burgerConstructorWrapper'>
            <ul className={styles.elements__list}>
                <div />
                <li>
                    <ConstructorElement
                        text={mainbun.name}
                        price={mainbun.price}
                        thumbnail={mainbun.image}
                        type="top"
                        isLocked={true}
                    />
                </li>
                {
                    products.map((item, index) => (
                        <React.Fragment key={`${index}`}>
                            <DragIcon type="primary" />
                            <li>
                                <ConstructorElement
                                    text={item.name}
                                    price={item.price}
                                    thumbnail={item.image}
                                />
                            </li>
                        </React.Fragment>
                    ))
                }
                <div />
                <li>
                    <ConstructorElement
                        text={mainbun.name}
                        price={mainbun.price}
                        thumbnail={mainbun.image}
                        type="bottom"
                        isLocked={true}
                    />
                </li>
            </ul>
            <div className={styles.summary}>
                <div className={styles.summaryPriceWrapper}>
                    <p className="text text_type_digits-medium">610</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="medium">
                    Оформить заказ
                </Button>
            </div>
        </div>
    )
}


BurgerConstructor.propTypes = {
    products: PropTypes.arrayOf(productPropTypes.isRequired).isRequired,
    mainbun: productPropTypes
};

export default BurgerConstructor; 