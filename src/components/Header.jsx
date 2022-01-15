import logo from '../img/harry-potter-logo.svg'; 

function Header() {

    return (
      <div className='col-12 text-center mt-4 header'>
          <img className='logo' src={logo} alt="Harry Potter Logo" />
          <p className='text-white font-700 pt-2 font-500'>Selecciona tu filtro</p>
      </div>
    )
  }
  
  export default Header