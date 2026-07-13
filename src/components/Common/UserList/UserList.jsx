import { useMemo, useState } from "react";

import {
  Input,
  Button,
  UserCard
} from "../../Common";

import "./UserList.css";

function UserList({
  users = [],
  selectedUser,
  onSelect,
}) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("Active");

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesStatus = user.status === status;

      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.networkId.toLowerCase().includes(search.toLowerCase());

      return matchesStatus && matchesSearch;
    });
  }, [users, search, status]);

  return (
    <div className="user-list">

      <Input
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="user-list-tabs">

        <Button
          variant={status === "Active" ? "primary" : "secondary"}
          onClick={() => setStatus("Active")}
        >
          Active
        </Button>

        <Button
          variant={status === "Inactive" ? "primary" : "secondary"}
          onClick={() => setStatus("Inactive")}
        >
          Inactive
        </Button>

      </div>

      <div className="user-list-items">

        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            {...user}
            selected={selectedUser?.id === user.id}
            onClick={() => onSelect(user)}
          />
        ))}

      </div>

    </div>
  );
}

export default UserList;
