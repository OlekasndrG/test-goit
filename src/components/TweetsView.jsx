import { useDispatch, useSelector } from "react-redux";
import { CardsContainer } from "../pages/Tweets.styled";
import { UserCard } from "./UserCard";
import { getAllUsers, getFollowedUsers } from "../redux/selectors";
import { useState } from "react";
import { SelectContainer } from "./UserCard.styled";
import Select from "react-select";
import { showLoadMoreBtn } from "../redux/usersSlice";

const options = [
  { value: "showAll", label: "Show all" },
  { value: "follow", label: "Follow" },
  { value: "following", label: "Following" },
];

export const Tweets = () => {
  const allUsers = useSelector(getAllUsers);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dispatch = useDispatch();
  const followedUsers = useSelector(getFollowedUsers);
  const [filter, setFilter] = useState("all");

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (selectedOption.value === "showAll") {
      setFilter("all");
      dispatch(showLoadMoreBtn(false));
    }
    if (selectedOption.value === "following") {
      setFilter("following");
      dispatch(showLoadMoreBtn(true));
    }
    if (selectedOption.value === "follow") {
      setFilter("follow");
      dispatch(showLoadMoreBtn(true));
    }
  };

  let unfollowedUsers = [];
  let followedUsersforrender = [];
  for (let i = 0; i < allUsers.length; i++) {
    const currentItem = allUsers[i];
    const matchingItem = followedUsers.find(
      (item) => item.id === currentItem.id
    );
    if (!matchingItem) {
      unfollowedUsers.push(currentItem);
    }
    if (matchingItem) {
      followedUsersforrender.push(currentItem);
    }
  }

  return (
    <>
      <SelectContainer>
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
        />
      </SelectContainer>
      <CardsContainer>
        {filter === "all" &&
          allUsers.map((user) => {
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
        {filter === "following" &&
          followedUsersforrender.map((user) => {
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
        {filter === "follow" &&
          unfollowedUsers.map((user) => {
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
    </>
  );
};
