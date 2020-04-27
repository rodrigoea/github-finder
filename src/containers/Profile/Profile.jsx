import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import Navbar from "../../components/Navbar";
import ProfileCard from "../../components/ProfileCard";
import Spinner from "../../components/Spinner";
import RepositoriesList from "../../components/RepositoriesList";

import NotFound from "../NotFound";

import { fetchProfile, clearProfile } from "../../store/ducks/profile";

const Profile = () => {
  const { username } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    isLoading,
    data: { user, repos },
    error,
  } = useSelector((state) => state.profile);
  const hasUsers = !!user && !isLoading;
  const hasError = !!error;

  if (!username) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(fetchProfile(username));

    return () => dispatch(clearProfile());
  }, [dispatch, username]);

  if (hasError) {
    return <NotFound />;
  }

  return (
    <>
      <Navbar />
      <div className="container m-auto py-10 lg:py-16">
        {isLoading && (
          <div className="flex justify-center mt-20">
            <Spinner />
          </div>
        )}
        {hasUsers && !hasError && (
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/5">
              {!isLoading && !!user && <ProfileCard user={user} />}
            </div>
            <div className="w-full lg:w-4/5 px-4 mt-6 lg:mt-0">
              <div className="mb-4 pb-2 border-b">
                <h2 className="text-2xl font-light inline-flex items-center -mt-1">
                  Repositories{" "}
                  <span className="text-xs font-bold bg-gray-300 rounded-full px-2 py-1 ml-2">
                    {user.public_repos}
                  </span>
                </h2>
              </div>
              <RepositoriesList repos={repos} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
