import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import MainHeader from '../MainHeader/MainHeader';

import { products } from '../../utils/data.js'

function App() {
  return (
    <div className='mainPage'>
      <AppHeader />
      <MainHeader />
      <div className='pageColumns'>
        <BurgerIngredients products={products} />
        <BurgerConstructor products={products.filter(item => item.type !== 'bun')} mainbun={products.find(item => item.type === 'bun')} />
      </div>
    </div>
  );
}

export default App;
