import './App.css'

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import UserProducts from './components/UserProducts/UserProducts'

import FooterPage from './components/FooterPag/FooterPag'

function App() {

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

      </section>

      <footer>
        <FooterPage/>
      </footer>

    </div>
  )
}

export default App
