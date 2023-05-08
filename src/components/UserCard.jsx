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
// import { useEffect, useState } from "react";
import { getFollowedUsers } from "../redux/selectors";
import { followUser, unfollowUser } from "../redux/usersSlice";
import DefaultImage from "../img/DefaultImage.png";
import { Button } from "./Button";

export const UserCard = (user) => {
  const { id, avatar, tweets, followers } = user;

  const followedUsers = useSelector(getFollowedUsers);
  const dispatch = useDispatch();
 
  const isFollowing = followedUsers.some((user) => user.id === id);
  const handleClick = () => {
    if (isFollowing) {
      dispatch(unfollowUser(user));
      dispatch(
        updateTweetCount({
          userId: id,
          followers: (Number(followers) - 1).toString(),
        })
      );
     
      return;
    } else {
      dispatch(
        updateTweetCount({
          userId: id,
          followers: (Number(followers) + 1).toString(),
        })
      );
      dispatch(followUser(user));
  
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
        <p>{new Intl.NumberFormat("en-US").format(followers)} followers</p>
     
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
