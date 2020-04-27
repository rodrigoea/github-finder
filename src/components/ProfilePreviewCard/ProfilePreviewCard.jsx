import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdGroup, MdEmail, MdLink } from "react-icons/md";
import { Link } from "react-router-dom";

const ProfilePreviewCard = ({ user }) => {
  const { avatar_url, id, login } = user;

  return (
    <div className="w-2/4 lg:w-1/4 inline-flex mb-6">
      <div className="mx-3 transition duration-300 shadow-md hover:shadow-lg rounded-lg overflow-hidden w-full">
        <Link
          to={`/profile/${login}`}
          className="flex flex-col bg-gray-900 p-4"
          title={login}
        >
          <div
            className="w-16 h-16 bg-cover shadow-md rounded-full mx-auto text-center overflow-hidden"
            style={{
              backgroundImage: `url(${avatar_url})`,
            }}
            title={id}
          />
          <div className="flex flex-col justify-center mt-2 leading-normal text-white text-sm text-center">
            <span className="font-bold">@{login}</span>
            <span className="font-thin">#{id}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePreviewCard;
