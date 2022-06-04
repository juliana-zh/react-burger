import styles from './AppHeader.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
    return (
        <>
            <div className={styles.appHeader}>
                <div className={styles.header__menuWrapper}>
                    <div className={styles.header__elem}>
                        <div className={styles.header__elemWrapper}>
                            <a href="#" className={styles.clickable_elem}>
                                <BurgerIcon type="primary" />
                            </a>
                            <a href="#" className={`text text_type_main-default p-2 ${styles.clickable_elem}`}>
                                Конструктор
                            </a>
                        </div>
                    </div>
                    <div className={styles.header__elem}>
                        <div className={styles.header__elemWrapper}>
                            <a href="#" className={styles.clickable_elem}>
                                <ListIcon type="secondary" />
                            </a>
                            <a href="#" className={`text text_type_main-default p-2 text_color_inactive ${styles.clickable_elem}`}>
                                Лента заказов
                            </a>
                        </div>
                    </div>
                    <div className={styles.logo__wrapper}>
                        <Logo />
                    </div>
                    <div className={styles.header__elem}>
                        <div className={styles.header__elemWrapper}>
                            <a href="#" className={styles.clickable_elem}>
                                <ProfileIcon type="secondary" />
                            </a>
                            <a href="#" className={`text text_type_main-default p-2 text_color_inactive ${styles.clickable_elem}`}>
                                Личный кабинет
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppHeader; 