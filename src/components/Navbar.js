const Navbar = (props) => {
  const links = props.children;

  return (
    <nav className="flex justify-center items-center text-white font-bold bg-indigo-700 w-full h-12">
      <ul className="flex justify-center items-center">
        {links.map((link) => (
          <li className="mx-3 hover:border-b-2 border-orange-200 hover:text-gray-300">
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
