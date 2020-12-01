import logo from "./logo.svg";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <header class="navbar container grid-xl mb-2">
        <section class="navbar-section">
          <div class="btn btn-link navbar-brand">Название CRUD Приложения</div>
        </section>
        <section class="navbar-center">
          {isLoading ? (
            <div class="loading loading-lg" />
          ) : isAuthenticated ? (
            <LogoutButton />
          ) : (
            <LoginButton />
          )}
        </section>
        <section class="navbar-section">
          <img src={logo} alt="testlogo" class="logo" />
        </section>
      </header>
    </>
  );
}

export default Header;
