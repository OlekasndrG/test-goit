import { useSelector } from "react-redux";
import { getFollowedUsers } from "../redux/selectors";
import PropTypes from "prop-types";

export const Button = ({ id, handleClick }) => {
  const followedUsers = useSelector(getFollowedUsers);
  const isFollowing = followedUsers.some((user) => user.id === id);
  return (
    <>
      {!isFollowing ? (
        <button type="button" name={id} onClick={handleClick}>
          Follow
        </button>
      ) : (
        <button
          type="button"
          name={id}
          onClick={handleClick}
          style={{ background: "#5CD3A8" }}
        >
          following
        </button>
      )}
    </>
  );
};
Button.propTypes = {
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
