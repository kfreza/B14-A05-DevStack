import menuIcon from "../../assets/menu.svg";
import AuthControls from "./AuthControls";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header className="border-b border-slate-100 bg-white">
      {/* Below lg: 3 equal-sided columns so the logo stays truly centred. lg+: logo | links | auth. */}
      <nav className="navbar mx-auto grid h-14 min-h-0 max-w-7xl grid-cols-[1fr_auto_1fr] gap-2 px-4 lg:flex lg:h-20 lg:justify-between lg:px-8">
        <div className="flex items-center lg:flex-1">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost btn-square btn-sm -ml-1.5" aria-label="Open menu">
              <img src={menuIcon} alt="" className="h-[15.5px] w-[19.5px]" />
            </button>
            <NavLinks className="menu dropdown-content z-10 mt-3 w-52 rounded-box bg-white p-2 shadow-lg" />
          </div>
          <div className="hidden lg:flex">
            <Logo />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="lg:hidden">
            <Logo size="xs" />
          </div>
          <NavLinks className="hidden items-center gap-7 lg:flex" />
        </div>

        <div className="flex justify-end lg:flex-1">
          <AuthControls />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
