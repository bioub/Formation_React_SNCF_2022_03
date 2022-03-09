import './Menu.css';
import HelloContainer from '../containers/HelloContainer';

function Menu() {
  return (
    <nav className="Menu">
      <span>MyApp</span>
      <HelloContainer />
    </nav>
  )
}

export default Menu;