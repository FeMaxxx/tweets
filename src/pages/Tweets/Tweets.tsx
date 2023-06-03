import React, { useState, useEffect, FC, ChangeEvent } from "react";
import { useActions } from "../../hooks/useActions";
import { useUsers } from "../../hooks/useUsers";
import { UsersList } from "../../components/UsersList";
import { Loader } from "../../components/Loader";
import { BackBtn, Select, WrapContainer } from "./Tweets.styled";
import { User } from "../../types/users";

const getVisibleUsers = (users: User[], follow: string[], filter: string) => {
  if (filter === "follow") {
    return users.filter((user) => {
      return follow.includes(user.id);
    });
  }

  if (filter === "unfollow") {
    return users.filter((user) => {
      return !follow.includes(user.id);
    });
  }

  return users;
};

const Tweets: FC = () => {
  const { getUsers } = useActions();
  const { users, loading, error, follow } = useUsers();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (users.length) return;
    getUsers();
  }, []);

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const visibleUsers = getVisibleUsers(users, follow, filter);

  return (
    <div>
      <WrapContainer>
        <BackBtn to={"/"}>Back</BackBtn>

        {users.length !== 0 && !loading && (
          <Select id="dropdown" value={filter} onChange={handleFilterChange}>
            <option value="all">all</option>
            <option value="follow">follow</option>
            <option value="unfollow">unfollow</option>
          </Select>
        )}
      </WrapContainer>

      {users.length !== 0 && <UsersList users={visibleUsers} />}

      {loading && <Loader />}

      {error && <div>Error</div>}
    </div>
  );
};

export default Tweets;
