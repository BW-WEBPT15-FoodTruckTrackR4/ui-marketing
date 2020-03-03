import React from 'react';
import logo from '../images/logofood.png'
import styled from 'styled-components'
import M, {options, instances} from 'materialize-css';

const Navi = styled.div `
a {
    color: #e44635 !important;
    text-decoration: none;
}

nav {
    box-shadow: none !important;
    height: 100px;
    padding: 3% 1%;
}
.logo {
  width: 15vw;  
}
@media screen and (max-width: 700px) {
    .logo {
        width: 25vw;  
      }   
}
`

const Nav = () => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
      });
    return (
        <Navi>
            <nav>
    <div class="nav-wrapper">
    <a class="brand-logo right" href="/"><img class="logo" src={logo}/></a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="/about">About</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
      <ul id="slide-out" class="sidenav">
          <br/>
          <br/>
    <li><a class="waves-effect" href="/about">About</a></li>
    <li><div class="divider"></div></li>
    <li><a class="waves-effect" href="/login">Login</a></li>
    <li><div class="divider"></div></li>
    <li><a class="waves-effect" href="/register">Register</a></li>
  </ul>
  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  </nav>
        </Navi>
    )
}
export default Nav;