import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mt-10 mb-3' src={logo} alt="" />
            <p className='mb-2'>Journalism Without Fear or Favour</p>
            <p>Sunday, November 27, 2022</p>
        </div>
    );
};

export default Header;