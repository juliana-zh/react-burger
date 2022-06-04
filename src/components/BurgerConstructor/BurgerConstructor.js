import React from 'react';

import PropTypes from 'prop-types';
import styles from './BurgerConstructor.module.css';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { productPropTypes } from '../../utils/data.js'

class BurgerConstructor extends React.Component {
    render() {
        return (
            <div className='burgerConstructorWrapper'>
                <ul className={styles.elements__list}>
                    <div />
                    <li key={this.props.mainbun._id}>
                        <ConstructorElement
                            text={this.props.mainbun.name}
                            price={this.props.mainbun.price}
                            thumbnail={this.props.mainbun.image}
                            type="top"
                            isLocked={true}
                        />
                    </li>
                    {
                        this.props.products.map((item, index) => (
                            <React.Fragment key={`${index}`}>
                                <DragIcon type="primary" key={`icon-${index}`} />
                                <li key={`${item._id}-${index}`}>
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
                    <li key={`${this.props.mainbun._id}_`}>
                        <ConstructorElement
                            text={this.props.mainbun.name}
                            price={this.props.mainbun.price}
                            thumbnail={this.props.mainbun.image}
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
}

BurgerConstructor.propTypes = {
    products: PropTypes.arrayOf(productPropTypes.isRequired),
    mainbun: productPropTypes.isRequired
};

export default BurgerConstructor; 