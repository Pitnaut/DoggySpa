import '../stylesheets/Header.css'
import logo from '../images/shinnypawslogo.png'

const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt='logo' />
      <div className='navigator'>
        <p>Home</p>
        <p>Appointments</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

export default Header;