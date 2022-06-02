import React from 'react';

import styles from './AppHeader.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

class AppHeader extends React.Component {
    render() {
        return (
            <>
                <div className={styles.appHeader}>
                    <div className={styles.header__menuWrapper}>
                        <div className={styles.header__elem}>
                            <div className={styles.header__elemWrapper}>
                                <BurgerIcon type="primary" />
                                <p className="text text_type_main-default p-2">
                                    Конструктор
                                </p>
                            </div>
                        </div>
                        <div className={styles.header__elem}>
                            <div className={styles.header__elemWrapper}>
                                <ListIcon type="secondary" />
                                <p className="text text_type_main-default p-2 text_color_inactive">
                                    Лента заказов
                                </p>
                            </div>
                        </div>
                        <div className={styles.logo__wrapper}>
                            <Logo />
                        </div>
                        <div className={styles.header__elem}>
                            <div className={styles.header__elemWrapper}>
                                <ProfileIcon type="secondary" />
                                <p className="text text_type_main-default p-2 text_color_inactive">
                                    Личный кабинет
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AppHeader; 