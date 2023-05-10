import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max",
      image:
        "https://www.nationsonline.org/gallery/New_Zealand/NZ-Wellington-Government.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
