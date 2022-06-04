import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import MainHeader from './components/MainHeader/MainHeader';

import { products } from './utils/data.js'

function App() {
  return (
    <div className='mainPage'>
      <AppHeader />
      <MainHeader />
      <div className='pageColumns'>
        <BurgerIngredients products={products} />
        <BurgerConstructor products={products.filter(item => item.type !== 'bun')} mainbun={products[0]} />
      </div>
    </div>
  );
}

export default App;
