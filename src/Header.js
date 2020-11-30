import logo from "./logo.svg";

function Header() {
  return (
    <>
      <header class="navbar container grid-xl mb-2">
        <section class="navbar-section">
          <a href="#" class="btn btn-link navbar-brand">
            Название
          </a>
        </section>
        <section class="navbar-center">
          <a href="#" class="btn btn-link">
            Меню Пользователя
          </a>
        </section>
        <section class="navbar-section">
          <img src={logo} alt="testlogo" class="logo" />
        </section>
      </header>
    </>
  );
}

export default Header;
