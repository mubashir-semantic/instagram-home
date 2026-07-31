import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { fetchUserProfile } from "../api/userApi";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ErrorMessage from "../components/ui/ErrorMessage";
import ProfileCard from "../components/ProfileCard";

function Profile() {
  const token = useSelector(
    (state) => state.auth.user?.token
  );

  const {
    data: profile,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["userProfile", token],
    queryFn: () => fetchUserProfile(token),
    enabled: !!token,
  });

  if (isLoading) {
    return <LoadingSpinner text="Loading profile..." />;
  }

  if (isError) {
    return <ErrorMessage message={error.message} />;
  }

  return <ProfileCard profile={profile} />;
}



export default Profile;