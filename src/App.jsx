// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { fetchUsers } from "./services/API";
// import { getAllUsers } from "./redux/selectors";
// import { UserCard } from "./components/UserCard";
// import { LoadMoreBtn, MainContainer } from "./pages/Tweets.styled";
// import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Tweets } from "./pages/Tweets";
import { Layout } from "./pages/Layout";

export default function App() {
  return (
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
  );
}

// function App() {
//   const [page, setPage] = useState(1);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchUsers(page));
//   }, [dispatch, page]);
//   const Users = useSelector(getAllUsers);
//   // const handleButtonClick = (id) => {
//   //   console.log(id);
//   // };

//   return (
//     <>
//       <MainContainer>
//         {Users?.map(({ id, avatar, tweets, followers }) => {
//           return (
//             <UserCard
//               id={id}
//               key={id}
//               avatar={avatar}
//               tweets={tweets}
//               followers={followers}
//             />
//           );
//         })}
//       </MainContainer>
//       <LoadMoreBtn type="button" onClick={() => setPage((prev) => prev + 1)}>
//         Load more
//       </LoadMoreBtn>
//     </>
//   );
// }

// export default App;
