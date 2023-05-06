import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers } from "../services/API";
import {
  getAllUsers,
  getIsError,
  getIsLoading,
  getLoadMoreBtnStatus,
} from "../redux/selectors";
import { CardsContainer, LoadMoreBtn, MainContainer } from "./Tweets.styled";
// import { fetchUsers } from "./services/API";
// import { getAllUsers } from "./redux/selectors";
import { UserCard } from "../components/UserCard";
// import { MainContainer } from "./Tweets.styled";

export const Tweets =()=> {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const LoadMoreBtnStatus = useSelector(getLoadMoreBtnStatus);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);
  const Users = useSelector(getAllUsers);
  const error = useSelector(getIsError);
  const loading = useSelector(getIsLoading);
  return (
    <MainContainer>
      <CardsContainer>
        {Users?.map(({ id, avatar, tweets, followers }) => {
          return (
            <UserCard
              id={id}
              key={id}
              avatar={avatar}
              tweets={tweets}
              followers={followers}
            />
          );
        })}
      </CardsContainer>
      {loading ? (
        <p>loading</p>
      ) : (
        <>
          {!LoadMoreBtnStatus && (
            <LoadMoreBtn
              type="button"
              onClick={() => setPage((prev) => prev + 1)}
            >
              Load more
            </LoadMoreBtn>
          )}
        </>
      )}
      {error && <p>Something went wrong :/</p>}
    </MainContainer>
  );
}


