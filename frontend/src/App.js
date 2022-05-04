import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Weather from './components/Weather';

export default function App() {
 return (
  <Router>
    <Switch>
      <Route component={Home} exact path="/"/>
      <Route component={Weather} path="/weather/:city" exact />
    </Switch>
  </Router>
 )
}

// import React from 'react';
// import { render } from "react-dom";
// import {BrowserRouter, Routes,Route} from "react-router-dom";

// import Home from './components/Home';
// import Weather from './components/Weather';


// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/weather/:city" element={<Weather />} />
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );
