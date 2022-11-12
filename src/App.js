import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx'
import Browse from './pages/Browse.jsx'
import ItemPage from './pages/ItemPage.jsx'
import Basket from './pages/Basket.jsx';

import { items } from './data.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';

function App() {
  const [basket, setBasket] = useState([]);

  function addToBasket(addedItem) {
    const dupeItem = basket.find(item => +item.id === +addedItem.id)
    dupeItem
    ?
    dupeItem.quantity += 1
    :
    setBasket([...basket, {...addedItem, quantity: 1}])
  }

  function changeQuantity(iteminfo, quantity) {
    setBasket(basket.map(item => {
      return item.id === iteminfo.id
              ?
              {
                ...item,
                quantity: +quantity,
              }
              :
              item
    }
    ))
  } 

  function removeItem(removingItem){
    setBasket(basket.filter(item => {
      return +item.id !== +removingItem.id
    }))
  }

  function numberOfItems()
  {
    let numOfItems = 0
    basket.forEach(items => {
      numOfItems += items.quantity
    })
    return numOfItems
  }

  useEffect(() => {
    //console.log(basket)
  }, [basket])

  return (
    <BrowserRouter>
      <div className='App'>
        <Nav numberOfItems={(numberOfItems())}/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/browse' exact element={<Browse items={items} />} />
          <Route path='browse/:id' element={<ItemPage items={items} addToBasket={addToBasket} />} />
          <Route path='/basket' element={<Basket items={items} basket={basket} changeQuantity={changeQuantity} removeItem={removeItem}/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
