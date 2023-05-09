import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers } from "../services/API";
import {
  getIsError,
  getIsFetched,
  getIsLoading,
  getLoadMoreBtnStatus,
  
} from "../redux/selectors";
import {  LoadMoreBtn, MainContainer } from "./Tweets.styled";


import { allowFetching } from "../redux/usersSlice";
import { Dropdown } from "../components/Dropdown";
import { Tweets } from "../components/TweetsView";

export const TweetsPage = () => {
  const [page, setPage] = useState(1);

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
      <Tweets />
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
