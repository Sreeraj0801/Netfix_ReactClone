import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {originals,actions,romance,horror,comedy,trending} from './urls'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals}  title ='Netflix Orginals'/>
      <RowPost url={trending}  title = 'Trending' isSmall/>
      <RowPost url={actions}  title = 'Actions' isSmall/>
      <RowPost url={comedy}  title = 'Comedy' isSmall/>
      <RowPost url={horror}  title = 'Horror' isSmall/>
      {/* <RowPost url={romance}  title = 'Romance' isSmall/> */}
      <Footer/>

    </div>
  )
}

export default App
