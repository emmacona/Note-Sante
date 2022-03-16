import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Chusj from './Pages/Hospitals/Chusj';
import Home from './Pages/Home';

function App() {
  // return (
  //   <div>
  //     <Header />
  //     <div>
  //     <nav >
  //       <Link to={'/'}>Home</Link>
  //       <Link to={'/chusj'}>CHUSJ</Link>
  //     </nav>  
  //     </div>
      
  //     <Footer />
  //   </div>
  // )

  // const switchRender = (page) => {
  //   switch(page) {
  //     case "home":   
  //       return <Home />;
  //     case "chusj":   
  //       return <Chusj />;
  //     default: 
  //       return <h1>Page not found</h1>
  //   }
  // }

  // return (
  //   <div className="App">
  //     <Header />
  //     <div>{ switchRender('home') }</div>
  //     <Footer />
  //   </div>
    
  // )

  return (
    <div className="App">
      <Header />
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to={'/'} className="nav-link"> Home </Link>
              <Link to={'/chusj'} className="nav-link">CHUSJ</Link>
            </nav>
            <hr />
            <Switch>
                <Route exact path='/' element={<Home />} />
                <Route path='/chusj' element={<Chusj />} />
            </Switch>
          </div>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
