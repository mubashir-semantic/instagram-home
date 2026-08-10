import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getUserProfileApi } from "../api/userService";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ErrorMessage from "../components/ui/ErrorMessage";
import ProfileCard from "../components/ProfileCard";

interface RootState {
  auth: {
    accessToken: string | null;
  };
}

function Profile() {
  const accessToken = useSelector(
    (state: RootState) => state.auth.accessToken
  );

  const {
    data: profile,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfileApi,
    enabled: !!accessToken,
    retry: false,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <>
      {profile && <ProfileCard profile={profile} />}
    </>
  );
}

export default Profile;