import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers } from "../services/API";
import {
 
  getIsError,
  getIsFetched,
  getIsLoading,
  getLoadMoreBtnStatus,
  getUserstoShow,
} from "../redux/selectors";
import { CardsContainer, LoadMoreBtn, MainContainer } from "./Tweets.styled";

import { UserCard } from "../components/UserCard";
import { allowFetching } from "../redux/usersSlice";
import { Dropdown } from "../components/Dropdown";


export const Tweets = () => {
  const [page, setPage] = useState(1);
  const usersToShow = useSelector(getUserstoShow);
  const dispatch = useDispatch();
  const LoadMoreBtnStatus = useSelector(getLoadMoreBtnStatus);
 
  const isFetched = useSelector(getIsFetched);

  const error = useSelector(getIsError);
  const loading = useSelector(getIsLoading);


  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchUsers(page));
    }
  }, [dispatch, page, isFetched]);


  const handleLoadMoreBtnClick = () => {
    dispatch(allowFetching());
    setPage((prev) => prev + 1);
  };

  return (
    <MainContainer>
      <Dropdown />
      <CardsContainer>
        {usersToShow?.map((user) => {
          const { id, avatar, tweets, followers } = user;
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
