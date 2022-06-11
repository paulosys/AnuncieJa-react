import './App.css'

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import UserProducts from './components/UserProducts/UserProducts'
import AllProducts from './components/AllProducts/AllProducts'
import FooterPage from './components/FooterPag/FooterPag'
import Login from './components/Login/Login'

function App() {

  return (
    <div className="App">
      <div className='Container-Padding'>
          <Login/>
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
