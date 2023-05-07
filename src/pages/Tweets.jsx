import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers } from "../services/API";
import {
  getAllUsers,
  getIsError,
  getIsFetched,
  getIsLoading,
  getLoadMoreBtnStatus,
} from "../redux/selectors";
import { CardsContainer, LoadMoreBtn, MainContainer } from "./Tweets.styled";
// import { fetchUsers } from "./services/API";
// import { getAllUsers } from "./redux/selectors";
import { UserCard } from "../components/UserCard";
import { allowFetching } from "../redux/usersSlice";
// import { MainContainer } from "./Tweets.styled";

export const Tweets = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const LoadMoreBtnStatus = useSelector(getLoadMoreBtnStatus);
  const isFetched = useSelector(getIsFetched);
  console.log(isFetched);

  const Users = useSelector(getAllUsers);
  const error = useSelector(getIsError);
  const loading = useSelector(getIsLoading);
  const handleLoadMoreBtnClick = () => {
    dispatch(allowFetching());
    setPage((prev) => prev + 1);
  };
  useEffect(() => {
    if (!isFetched) dispatch(fetchUsers(page));
  }, [dispatch, page, isFetched]);
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
            <LoadMoreBtn type="button" onClick={handleLoadMoreBtnClick}>
              Load more
            </LoadMoreBtn>
          )}
        </>
      )}
      {error && <p>Something went wrong :/</p>}
    </MainContainer>
  );
};
