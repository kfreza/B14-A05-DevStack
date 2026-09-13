import { HiBars3 } from "react-icons/hi2";
import AuthControls from "./AuthControls";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header className="bg-white">
      <nav className="navbar mx-auto h-20 max-w-7xl px-4 md:px-8">
        <div className="navbar-start gap-1">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost btn-square btn-sm" aria-label="Open menu">
              <HiBars3 className="size-6 text-heading" />
            </button>
            <NavLinks className="menu dropdown-content z-10 mt-3 w-52 rounded-box bg-white p-2 shadow-lg" />
          </div>
          <Logo />
        </div>

        <div className="navbar-center hidden lg:flex">
          <NavLinks className="flex items-center gap-7" />
        </div>

        <div className="navbar-end">
          <AuthControls />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
