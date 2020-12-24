import React from 'react';
import Nav from './Nav.js'

class Header extends React.Component{
  render(){
    return(
      <div className="header">
        <Nav />
      </div>
    )
  }
}

export default Header;