import React from "react";
import moment from "moment";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdGroup, MdEmail, MdLink } from "react-icons/md";

const ProfileCard = ({ user }) => {
  const {
    avatar_url,
    id,
    login,
    created_at,
    bio,
    public_repos,
    email,
    location,
    blog,
    company,
    name,
    followers,
    following,
  } = user;

  return (
    <div className="w-full inline-flex">
      <div className="mx-3 transition duration-300 border shadow-md hover:shadow-lg rounded-lg overflow-hidden w-full">
        <div className="flex flex-col bg-gray-900 border-b p-4">
          <div
            className="w-16 h-16 bg-cover shadow-md rounded-full mx-auto text-center overflow-hidden"
            style={{
              backgroundImage: `url(${avatar_url})`,
            }}
            title={name}
          />
          <div className="flex flex-col justify-center mt-2 leading-normal text-white font-thin text-center">
            <h1 className="text-lg ">{name}</h1>
            <span className="text-sm ">
              @{login} #{id}
            </span>
            <span className="text-sm ">{bio}</span>
          </div>
        </div>
        <div className="py-2 px-4 flex flex-col leading-normal">
          <div className="mt-4">
            {company && (
              <div className="flex items-center">
                <MdGroup size="16" />
                <span className="flex font-thin text-sm ml-2">{company}</span>
              </div>
            )}
            {location && (
              <div className="flex items-center">
                <FaMapMarkerAlt size="16" />
                <span className="flex font-thin text-sm ml-2">{location}</span>
              </div>
            )}
            {email && (
              <div className="flex items-center">
                <MdEmail size="16" />
                <span className="text-sm ml-2">
                  <a href={`mailto:${email}`}>{email}</a>
                </span>
              </div>
            )}
            {blog && (
              <div className="flex items-center">
                <MdLink size="16" />
                <span className="flex text-sm ml-2">
                  <a href={blog} target="_blank" rel="noopener noreferrer">
                    {blog}
                  </a>
                </span>
              </div>
            )}
          </div>
          <div className="mt-4 text-center">
            <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mb-2 mr-1">
              {public_repos} Repositories
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mb-2 mr-1">
              {followers} Followers
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mb-2">
              {following} Following
            </span>
          </div>
          <a
            href={`https://github.com/${login}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition uppercase duration-300 bg-blue-500 px-4 py-2 rounded text-white shadow hover:shadow-lg mt-4 font-bold text-sm mx-auto"
            title="View Full Profile on GitHub"
          >
            View Full Profile
          </a>
          <span className="font-thin italic text-xs text-center mt-4">
            User since {moment(created_at).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
