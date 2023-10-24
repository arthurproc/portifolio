function NavBar() {
  return (
    <nav className="flex px-4 justify-between">
      <h2>
        Procorp.dev
      </h2>
      <ul className="flex gap-3">
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#projects">Carreira</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;