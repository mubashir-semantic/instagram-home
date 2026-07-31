export const fetchUserProfile = async (token) => {
  const response = await fetch(
    "https://reqres.in/api/users/2",
    {
      headers: {
        "x-api-key":
          "free_user_3HAsnAtljG6Fj4KjMEz79G8SPrd",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user profile");
  }

  const data = await response.json();

  return data.data;
};