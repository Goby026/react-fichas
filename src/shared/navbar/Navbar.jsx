// import Logo1 from "../../assets/img/Logo1.jpg";
import { useState } from "react";
import Logo1SF from "../../assets/img/Logo1SF.png";
import { Link } from "react-router-dom";

export const Navbar = () => {

  const [menubtn, setMenubtn] = useState(true);

  const handleToggleIcon = ()=> {
    setMenubtn(!menubtn);
  }


  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center gap-4 justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img className="xl:w-20 lg:w-20 md:w-20 sm:w-0 rounded-xl" src={Logo1SF} alt="" />
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          <a href="" className="hover:text-darkGrayishBlue">
            Precios
          </a>
          <a href="" className="hover:text-darkGrayishBlue">
            Productos
          </a>
          <a href="" className="hover:text-darkGrayishBlue">
            Conócenos
          </a>
          <a href="" className="hover:text-darkGrayishBlue">
            Carreras
          </a>
          <a href="" className="hover:text-darkGrayishBlue">
            Comunidad
          </a>
        </div>

        <Link
          to="/login"
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Empecemos
        </Link>

        {/* hamburguer icon */}
        <button onClick={handleToggleIcon} id="menu-btn" className={menubtn ? "block hamburguer md:hidden focus:outline-none": "open block hamburguer md:hidden focus:outline-none"}>
          <span className="hamburguer-top"></span>
          <span className="hamburguer-middle"></span>
          <span className="hamburguer-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div id="menu" className= {menubtn ? "absolute flex flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md": "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"  } >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>
  );
};
