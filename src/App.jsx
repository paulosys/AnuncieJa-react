import { useEffect } from "react";
import {useProduct} from "./contexts/ProductContext"
import api from "../api/api";

import './App.css';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import UserProducts from './components/UserProducts/UserProducts'
import AllProducts from './components/AllProducts/AllProducts'
import FooterPage from './components/FooterPag/FooterPag'

const App = () => {
  const { product, setProduct, productClient, setProductClient} = useProduct();
 
  
  useEffect(() => {
    async function loads () {
      const response = await api.readAll();
   
      setProduct([...product, ...response]);
      const productsClient = response.filter(product => product.default == 1);
      setProductClient([...productClient, ...productsClient]);

    }
    loads()
  }, []);
  
  return (
      <div className="App">
      <div className='Container-Padding'>
          <Header userName="João" className="header"/>
          <Banner/>
          
      </div>

      <section>
        <UserProducts/>
      </section>

      <section>
        <AllProducts/>
      </section>

      <footer>
        <FooterPage/>
      </footer>

    </div>
  )
}

export default App
