import React from "react";
import { useSelector } from "react-redux";
import ProfilePreviewCard from "../ProfilePreviewCard";

import Spinner from "../Spinner";
import Pagination from "../Pagination";

const UsersList = () => {
  let { data, error, isLoading } = useSelector((state) => state.users);
  const hasUsers = !!data.length && !isLoading;
  const hasError = !!error;
  const isEmpty = !hasError && !isLoading && !data.length;

  const renderEmpty = () => {
    return (
      <div className="flex justify-center mt-20">
        <Spinner />
      </div>
    );
  };

  const renderProfileCards = () => {
    return data.map((user) => <ProfilePreviewCard user={user} key={user.id} />);
  };

  const renderError = () => {
    return (
      <div
        className="w-full lg:w-2/4 mx-auto flex items-center bg-red-600 text-white text-sm font-bold px-4 py-3"
        role="alert"
      >
        <p>{error}</p>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-8 px-2">
      {isLoading && renderEmpty()}
      {isEmpty && (
        <div
          className="w-full lg:w-2/4 mx-auto flex items-center bg-blue-600 text-white text-sm font-bold px-4 py-3"
          role="alert"
        >
          <p>No users found.</p>
        </div>
      )}
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
