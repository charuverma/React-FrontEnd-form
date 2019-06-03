import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import registerform from './component/registerform';
import registerlist from './component/registerlist';
import Header from './component/header';
import Sidebar from './component/sidebar';
import Footer from './component/footer';
import productform from './component/productform';
import productlist from './component/productlist';

import '../src/style/App.css';

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Sidebar/>
        <div>
          <Route path="/registerlist/edit/:id" component={registerform} />
          <Route path="/productlist/edit/:id" component={productform} />
          <Route path="/registerform" component={registerform} />
          <Route path="/registerlist" component={registerlist} />
          <Route path="/productform" component={productform} />
          <Route path="/productlist" component={productlist} />
			  </div>
        <div>
          <Footer/>
        </div>
			</div>
    );
  }
}
class App extends React.Component{
  render(){
    return (
      <Router>
        <MainContainer />
      </Router>
    )
  }
}
export default App;







 
