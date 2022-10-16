import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Saw from './components/Saw/Saw';
import Movies from './components/Movies/Movies';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path='/'>
        <Movies/>
      </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
        <Route path='/saw'>
          <Saw/>
        </Route>
        <Route path='/movie/:id'>
          <MovieDetail/>
        </Route>
    </div>
  );
}

export default App;
