import styles from './MainHeader.module.css';

function MainHeader() {
    return (
        <h1 className={`text text_type_main-large ${styles.mainHeader}`}>
            Соберите бургер
        </h1>
    )
}

export default MainHeader; 