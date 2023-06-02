import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider>
    <div className="App">
      



<Routes>
  <Route path='/product' element=""/>
  <Route path='/' element=""/>
  <Route path='/about' element=""/>
  <Route path='/favourite' element=""/>
  <Route path='/movie' element="">
  
  </Route>
  <Route path='/details/:id' element=""/>
</Routes>
 
 
    </div>
    </Provider>
  );
}

export default App;
