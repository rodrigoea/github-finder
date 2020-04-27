import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import UsersList from "../../components/UsersList";

import { fetchUsers } from "../../store/ducks/users";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!users.data.length) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.data.length]);

  return (
    <div>
      <Navbar />
      <Header />
      <UsersList />
    </div>
  );
};

export default Home;
