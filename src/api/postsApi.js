export const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }
    const data = await response.json();
    return data;
};