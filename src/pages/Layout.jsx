import { Outlet, useLocation } from "react-router-dom";
import { NavContainer } from "./Layout.styled";
import { HeaderLink } from "./Layout.styled";

export const Layout = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
      {pathname.length > 2 ? (
        <>
          <NavContainer>
            <div>
              <HeaderLink to="/">Back</HeaderLink>
            </div>
          </NavContainer>
          <>
            <Outlet />
          </>
        </>
      ) : (
        <>
          <NavContainer>
            <div>
              <HeaderLink to="/" style={{ marginRight: "15px" }}>
                Home
              </HeaderLink>
              <HeaderLink to="/tweets">Tweets</HeaderLink>
            </div>
          </NavContainer>
          <>
            <Outlet />
          </>
        </>
      )}
    </>
  );
};
