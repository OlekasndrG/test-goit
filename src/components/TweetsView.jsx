import { useSelector } from "react-redux";
import { CardsContainer } from "../pages/Tweets.styled";
import { UserCard } from "./UserCard";
import { getUserstoShow } from "../redux/selectors";

export const Tweets = () => {
  const usersToShow = useSelector(getUserstoShow);

  return (
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
  );
};
