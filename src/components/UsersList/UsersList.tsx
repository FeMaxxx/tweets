import { FC, useState } from "react";
import { User } from "../../types/users";
import { UserItem } from "../UserItem";
import { List, LoadMoreBtn } from "./UsersList.styled";

interface UsersListProps {
  users: User[];
}

export const UsersList: FC<UsersListProps> = ({ users }) => {
  const [usersPagination, setUsersPagination] = useState(3);

  const handleLoadMore = () => {
    setUsersPagination(usersPagination + 3);
  };

  return (
    <>
      <List>
        {users.slice(0, usersPagination).map((user: User) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </List>

      {usersPagination < users.length && (
        <LoadMoreBtn onClick={handleLoadMore} type="button">
          Load more
        </LoadMoreBtn>
      )}
    </>
  );
};
