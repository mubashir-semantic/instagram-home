import { FiHome, FiSearch, FiMessageCircle, FiSettings } from "react-icons/fi";

export const menuItems = [
    { id: 1, name: "Home", link: "#", icon: <FiHome /> },
    { id: 2, name: "Explore", link: "#", icon: <FiSearch /> },
    { id: 3, name: "Messages", link: "#", icon: <FiMessageCircle /> },
    { id: 4, name: "Settings", link: "#", icon: <FiSettings /> },
  ];

export const stories = [
    {
      id: 1,
      image: "/user-1.png",
      username: "USER 1",
    },
    {
      id: 2,
      image: "/user-2.png",
      username: "USER 2",
    },
    {
      id: 3,
      image: "/user-3.png",
      username: "USER 3",
    },
    {
      id: 4,
      image: "/user-1.png",
      username: "USER 4",
    },
    {
      id: 5,
      image: "/user-2.png",
      username: "USER 5",
    },
    {
      id: 6,
      image: "/user-3.png",
      username: "USER 6",
    },
    {
      id: 7,
      image: "/user-1.png",
      username: "USER 7",
    },
    {
      id: 8,
      image: "/user-2.png",
      username: "USER 8",
    },
    {
      id: 9,
      image: "/user-3.png",
      username: "USER 9",
    },
  ];


export const posts = [
    {
        id: 1,
        username: "USER 1",
        profileImage: "/user-1.png",
        postImage: "/Post-img-1.jpg",
        caption: "This is a caption for post 1.",
        posttime: "2 hours ago"
    },
    {
        id: 2,
        username: "USER 2",
        profileImage: "/user-2.png",
        postImage: "/post-img-2.jpg",
        caption: "This is a caption for post 2.",
        posttime: "1 hour ago"
    },
    {
        id: 3,
        username: "USER 3",
        profileImage: "/user-3.png",
        postImage: "/post-img-3.jpg",
        caption: "This is a caption for post 3.",
        posttime: "30 minutes ago"
    },
    {
        id: 4,
        username: "USER 4",
        profileImage: "/user-4.png",
        postImage: "/post-img-4.jpg",
        caption: "This is a caption for post 4.",
        posttime: "2 days ago"
    }
];