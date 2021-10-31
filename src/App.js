import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
        <Navigation />
        <Route path='/'>
        </Route>
    </BrowserRouter>
  );
}

export default App;
