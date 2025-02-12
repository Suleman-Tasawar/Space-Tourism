import { Outlet } from "react-router-dom";
import Navigation from "../components/Navbar";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Layout = () => {
  return (
    <>
      <Navigation />
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="route" unmountOnExit>
          <main>
            <Outlet />
          </main>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default Layout;
