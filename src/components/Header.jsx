import '../stylesheets/Header.css'
import logo from '../images/shinnypawslogo.png'

const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt='logo' />
      <ul className='navigator'>
        <li>Home</li>
        <li>Appointments</li>
        <li>About us</li>
      </ul>
    </div>
  )
}

export default Header;