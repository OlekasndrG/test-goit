import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  getAllUsers,
  getFollowedUsers,
  getUserstoShow,
} from "../redux/selectors";
import { setUsersToShow } from "../redux/usersSlice";
import { SelectContainer } from "./UserCard.styled";

const options = [
  { value: "showAll", label: "Show all" },
  { value: "follow", label: "Follow" },
  { value: "following", label: "Following" },
];

export const Dropdown = () => {
  const dispatch = useDispatch();
  const usersToShow = useSelector(getUserstoShow);
  const followedUSers = useSelector(getFollowedUsers);
  const allUsers = useSelector(getAllUsers);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (selectedOption) => {
    let unfollowedUsers = [];
    for (let i = 0; i < allUsers.length; i++) {
      const currentItem = allUsers[i];
      const matchingItem = followedUSers.find(
        (item) => item.id === currentItem.id
      );
      if (!matchingItem) {
        unfollowedUsers.push(currentItem);
      }
    }
    if (selectedOption.value === "showAll") {
      setSelectedOption(selectedOption);
      dispatch(setUsersToShow(allUsers));
    }
    if (selectedOption.value === "following") {
      setSelectedOption(selectedOption);
      dispatch(setUsersToShow(followedUSers));
    }
    if (selectedOption.value === "follow") {
      setSelectedOption(selectedOption);
      dispatch(setUsersToShow(unfollowedUsers));
    }
    return usersToShow;
  };
  useEffect(() => {
    dispatch(setUsersToShow(allUsers));
  }, [allUsers, dispatch]);
  return (
    <SelectContainer>
      <Select
        defaultValue={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </SelectContainer>
  );
};
