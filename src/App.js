import React from 'react';
import Header from './components/Header.js'
import Main from './components/Main.js'   

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;