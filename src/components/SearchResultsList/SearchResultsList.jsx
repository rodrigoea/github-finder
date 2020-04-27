import React from "react";
import { Link } from "react-router-dom";

const SearchResultsList = ({ data }) => {
  const foundUsers = data.total_count > 0;
  return (
    <>
      {foundUsers && (
        <div
          className="absolute bg-white mt-1 left-0 w-full border rounded shadow-lg overflow-auto"
          style={{ maxHeight: 200 }}
        >
          {data.items.map((user) => (
            <Link
              key={user.id}
              to={`/profile/${user.login}`}
              className="transition duration-300 border-b p-2 flex hover:bg-gray-100 pointer"
            >
              <div
                className="w-6 h-6 bg-cover rounded-full shadow"
                style={{ backgroundImage: `url(${user.avatar_url})` }}
              ></div>
              <div className="font-bold text-sm ml-2">@{user.login}</div>
            </Link>
          ))}
        </div>
      )}
      {!foundUsers && (
        <div className="absolute bg-white mt-1 left-0 w-full border rounded shadow-lg overflow-auto">
          <div className="transition duration-300 p-2 flex hover:bg-gray-100 font-bold text-sm ml-2">
            No users found.
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResultsList;
