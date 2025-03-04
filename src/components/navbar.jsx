const Navbar = ({brandName}) => {
  return (
    
    <nav className="navbar shadow-lg bg-base-100 text-neutral-content w-full p-5">
      <div className="nav-start">
        <a href="#" className="text-lg brand">{brandName}</a>
      </div>
      <div className="nav-center"></div>
      <div className="nav-end"></div>
    </nav>
  
  );
}

export default Navbar;