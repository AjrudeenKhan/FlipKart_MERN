
import './App.css';
import Header from './component/header/Header';
import Home from './component/homee/Home';
import DataProvider from './context/DataProvider';
import DetailView from './component/details/DetailView';
import Cart from './component/cart/Cart';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

import {Box} from '@mui/material'

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Header/>
      <Box style = {{marginTop:54}}>
        <Routes>
          <Route path='/' element={<Home/>}/>
           <Route path='/product/:id' element={ <DetailView/>}/>
           <Route path ='/cart' element ={<Cart/>}/>
        </Routes>
      </Box> 
      </BrowserRouter>
    </DataProvider>
    
    
    
  );
}

export default App;
