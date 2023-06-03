import React, { FC, useState } from "react";
import {
  Avatar,
  FollowButton,
  UnfollowButton,
  Circle,
  InfoBox,
  Item,
  Line,
  Logo,
  Picture,
  CircleBg,
} from "./UserItem.styled";
import { User } from "../../types/users";
import { useUsers } from "../../hooks/useUsers";
import { addFollow, removeFollow } from "../../redux/users/usersSlice";
import { useDispatch } from "react-redux";
import { useActions } from "../../hooks/useActions";

const picture = require("../../images/picture1.png");
const logo = require("../../images/Logo.png");
const boy = require("../../images/boy.png");

interface UserItemProps {
  user: User;
}

export const UserItem: FC<UserItemProps> = ({ user }) => {
  const { changeUser } = useActions();
  const dispatch = useDispatch();
  const { follow } = useUsers();
  const [followers, setFollowers] = useState(user.followers);

  const handleFollow = (id: string) => {
    setFollowers(followers + 1);
    changeUser({ ...user, followers: followers + 1 });
    dispatch(addFollow(id));
  };

  const handleUnsubscribe = (id: string) => {
    setFollowers(followers - 1);
    changeUser({ ...user, followers: followers - 1 });
    dispatch(removeFollow(id));
  };

  const avatar = user.avatar ? user.avatar : boy;

  return (
    <Item>
      <Logo src={logo} alt="" />
      <Picture src={picture} alt="" />
      <Avatar src={avatar} alt="" />
      <Circle />
      <CircleBg />
      <Line />
      <InfoBox>
        <p>{user.tweets} tweets</p>
        <p>
          {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} followers
        </p>
      </InfoBox>
      {follow.includes(user.id) && (
        <UnfollowButton
          onClick={() => handleUnsubscribe(user.id)}
          type="button"
        >
          following
        </UnfollowButton>
      )}
      {!follow.includes(user.id) && (
        <FollowButton onClick={() => handleFollow(user.id)} type="button">
          follow
        </FollowButton>
      )}
    </Item>
  );
};
