import React from "react";
import { useSelector } from "react-redux";
import ProfilePreviewCard from "../ProfilePreviewCard";

import Spinner from "../Spinner";
import Pagination from "../Pagination";

const UsersList = () => {
  const users = useSelector((state) => state.users);
  const hasUsers = !!users.data.length && !users.isLoading;
  const hasError = !!users.error;

  const renderEmpty = () => {
    return (
      <div className="flex justify-center mt-20">
        <Spinner />
      </div>
    );
  };

  const renderProfileCards = () => {
    return users.data.map((user) => (
      <ProfilePreviewCard user={user} key={user.id} />
    ));
  };

  const renderError = () => {
    return (
      <div
        className="w-full lg:w-2/4 mx-auto flex items-center bg-red-600 text-white text-sm font-bold px-4 py-3"
        role="alert"
      >
        <p>{users.error}</p>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-8">
      {users.isLoading && renderEmpty()}
      {hasUsers && !hasError && (
        <>
          <div>{renderProfileCards()}</div>
          <div className="flex justify-center mt-6">
            <Pagination />
          </div>
        </>
      )}
      {hasError && renderError()}
    </div>
  );
};

export default UsersList;
