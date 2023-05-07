import PropTypes from "prop-types";

import {
  AvatarImage,
  BottomContainer,
  CardLogo,
  UpperContainer,
  UserCardContainer,
} from "./UserCard.styled";
import CardImage from "../img/picture2 1.png";
import { useDispatch, useSelector } from "react-redux";
import { updateTweetCount } from "../services/API";
import { useEffect, useState } from "react";
import { getFollowedUsers } from "../redux/selectors";
import { followUser, unfollowUser } from "../redux/usersSlice";
import DefaultImage from "../img/DefaultImage.png";
import { Button } from "./Button";

export const UserCard = ({ id, avatar, tweets, followers }) => {
  const [localFollowersCount, setLocalFollowersCount] = useState(null);
  const followedUsers = useSelector(getFollowedUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    setLocalFollowersCount(Number(followers));
  }, [followers]);
  const handleClick = () => {
    if (followedUsers.includes(id)) {
      dispatch(unfollowUser(id));
      dispatch(
        updateTweetCount({
          userId: id,
          followers: (Number(followers) - 1).toString(),
        })
      );
      setLocalFollowersCount((prev) => prev - 1);
      return;
    } else {
      dispatch(
        updateTweetCount({
          userId: id,
          followers: (Number(followers) + 1).toString(),
        })
      );
      dispatch(followUser(id));
      setLocalFollowersCount((prev) => prev + 1);
      return;
    }
  };
  return (
    <UserCardContainer key={id}>
      <CardLogo />
      <UpperContainer>
        <img src={CardImage}></img>
      </UpperContainer>
      <AvatarImage>
        <img src={avatar ? avatar : DefaultImage} />
      </AvatarImage>
      <BottomContainer>
        <p>{Number(tweets)} tweets</p>
        <p>{localFollowersCount} followers</p>
        {/* <p>{Number(followers)} followers</p> */}
        <Button id={id} handleClick={handleClick} />
      </BottomContainer>
    </UserCardContainer>
  );
};

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
};
