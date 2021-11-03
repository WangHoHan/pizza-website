import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';
import HomePage from './components/home-page/HomePage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
        <Navigation />
        <Route path='/' component={HomePage}/>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
