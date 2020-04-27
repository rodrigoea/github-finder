import React from "react";
import moment from "moment";
import { MdLanguage } from "react-icons/md";
import { GoLaw } from "react-icons/go";

const RepositoriesList = ({ repos }) => {
  const sortedRepos = repos.sort(
    (a, b) => moment(b.updated_at) - moment(a.updated_at)
  );

  return (
    <div>
      {sortedRepos.map((repo) => {
        return (
          <div
            key={repo.id}
            className="p-4 mb-4 transition duration-300 border shadow hover:shadow-lg rounded"
          >
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-500"
                >
                  {repo.name}
                </a>
                {repo.description && (
                  <span className="font-thin text-sm">{repo.description}</span>
                )}
              </div>
              <span className="text-xs font-bold">#{repo.id}</span>
            </div>
            <div className="flex items-center mt-4 text-xs font-thin text-white">
              {repo.language && (
                <span className="inline-flex items-center py-1 px-2 bg-red-400 rounded">
                  <MdLanguage className="mr-1" size="14" />
                  {repo.language}
                </span>
              )}
              {repo.license && (
                <span className="inline-flex items-center py-1 px-2 bg-gray-600 rounded ml-2">
                  <GoLaw className="mr-1" size="14" />
                  {repo.license.name}
                </span>
              )}
            </div>
            <div className="flex items-center mt-2 text-xs font-thin text-black">
              <span>
                Updated on {moment(repo.updated_at).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RepositoriesList;
