
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Tweets } from "./pages/Tweets";
import { Layout } from "./pages/Layout";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="*"
            element={
              <>
                <h3>No page found, redirecting to Home</h3>
                <Navigate to="/" replace={true} />
              </>
            }
          />
          <Route path="/tweets" element={<Tweets />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </>
  );
}

