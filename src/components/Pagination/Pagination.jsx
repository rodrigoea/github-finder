import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUsers } from "../../store/ducks/users";

const Pagination = () => {
  const { pagination } = useSelector((state) => state.users);
  const { page, ids } = pagination;
  const { last } = !!ids.length && ids[page - 1];
  const { prev } = ids[page - 2] || 0;
  const isFirstPage = page === 1;
  const dispatch = useDispatch();

  const onPrevPage = () => {
    if (isFirstPage) {
      return null;
    }

    dispatch(fetchUsers(prev - 1));
  };

  const onNextPage = () => {
    dispatch(fetchUsers(last));
  };

  return (
    <div className="inline-flex">
      <button
        onClick={onPrevPage}
        className={`bg-gray-300 shadow hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l focus:outline-none ${
          isFirstPage && "cursor-not-allowed"
        }`}
        disabled={isFirstPage}
      >
        Prev
      </button>
      <button
        onClick={onNextPage}
        className="bg-gray-300 shadow hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
