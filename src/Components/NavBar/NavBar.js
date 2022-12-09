import React from 'react'
import './NavBar.css';
function NavBar() {
  return (
    <div className='navbar container-fluid'>
      <nav class="col-md-12 navbar navbar-expand-lg navbar navbar-dark ">
        <div class="container-fluid">
          <img id='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='logo'  className='mx-lg-5'/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link  " aria-current="page" >Home</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link " >TV Shows</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" >Movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ">Recently Added</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ">My list</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='d-flex justify-content-around ps-2 pt-2' id='header-aside'>
          <h5 class="bi bi-search me-4"></h5>
          <h6 className='me-4'>KIDS</h6>
          <h6 className='me-4'>DVDS</h6>
          <h5 class="bi bi-bell-fill me-4"></h5>
          <img className='me-5 pb-4' id='avatarLogo' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Avatar' />
        </div>
      </nav>
    </div>
  )
}

export default NavBar
