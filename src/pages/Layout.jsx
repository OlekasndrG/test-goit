import { NavLink, Outlet, useLocation } from "react-router-dom";

export const Layout = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
      {pathname.length > 2 ? (
        <>
          <div>
            <NavLink to="/">Back</NavLink>
          </div>
          <Outlet />
        </>
      ) : (
        <>
          <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/tweets">Tweets</NavLink>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
};
