import {ChessList} from './ChessList'
import { BrowserRouter as Router, NavLink, Routes, Route} from 'react-router-dom';
import './App.css';

export const App = () => {
  return (
    <Router>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className="nav-link" to="/">Chess</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link" to="/">Almenü 1</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link" to="/">Almenü 2</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<ChessList />} />
      </Routes>
    </Router>
  );
}

export default App;
