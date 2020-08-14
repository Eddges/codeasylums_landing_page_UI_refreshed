import React from 'react';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';


class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Landing />
      </div>
    )
  }
}



export default App;
