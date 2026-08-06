import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getUserProfileApi } from "../api/userService";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ErrorMessage from "../components/ui/ErrorMessage";
import ProfileCard from "../components/ProfileCard";
// import { useDispatch } from "react-redux";
// import { setInvalidAccessToken } from "../redux/slices/authSlice";
// import useToggle from "../hooks/useToggle";

function Profile() {
  // const { isOpen, toggle } = useToggle(false);

  const accessToken = useSelector(
    (state) => state.auth.accessToken
  );

  // const dispatch = useDispatch();

  const {
    data: profile,
    isLoading,
    isError,
    error,
    // refetch,
  } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfileApi,
    enabled: !!accessToken,
    retry: false, // Disable automatic retries on failure
  });

  if (isLoading) {
    return <LoadingSpinner text="Loading profile..." />;
  }

  if (isError) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <>
      <ProfileCard profile={profile} />

      {/* <button
        onClick={async () => {
          dispatch(setInvalidAccessToken());
          await refetch();
        }}
        className="mt-4 rounded bg-red-500 px-4 py-2 text-white"
      >
        Expire Access Token
      </button> */}

      {/* <button onClick={toggle} className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
        Toggle
      </button>

      <p className="text-lg font-semibold">
        {isOpen ? "Open" : "Closed"}
      </p> */}
    </>
  );

}

export default Profile;