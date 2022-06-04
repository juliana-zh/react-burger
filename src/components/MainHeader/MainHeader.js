import React from 'react';

import styles from './MainHeader.module.css';

class MainHeader extends React.Component {
    render() {
        return (
            <h1 className={`text text_type_main-large ${styles.mainHeader}`}>
                Соберите бургер
            </h1>
        )
    }
}

export default MainHeader; 