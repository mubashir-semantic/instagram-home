# Instagram Home UI

A React-based Instagram-inspired social media UI built with Create React App. The app focuses on authentication, protected navigation, token persistence, profile fetching, and a feed-style home layout with stories, posts, and suggestions.

## Features

- Email/password login and registration
- Forgot password screen
- Public and protected route guards
- JWT access and refresh token handling
- Automatic token refresh with Axios interceptors
- Redux Toolkit state management
- Redux Persist for auth state persistence
- TanStack Query for profile data fetching
- React Hook Form with Yup validation
- Instagram-style home feed, navbar, stories, posts, and sidebar suggestions
- Profile page backed by the authenticated user profile endpoint

## Tech Stack

- React 19
- React Router DOM
- Redux Toolkit
- Redux Persist
- TanStack Query
- Axios
- React Hook Form
- Yup
- React Icons
- Tailwind CSS
- Create React App

## API

The app uses the EscuelaJS API:

- Base URL: `https://api.escuelajs.co/api/v1`
- Login: `/auth/login`
- Register: `/users`
- Refresh token: `/auth/refresh-token`
- Profile: `/auth/profile`

## Authentication Flow

1. The user logs in with email and password.
2. The app stores the access token and refresh token in Redux Persist.
3. An Axios request interceptor attaches the access token to outgoing requests.
4. If an API response returns `401`, the response interceptor tries to refresh the tokens.
5. If refresh succeeds, the failed request is retried automatically.
6. If refresh fails or no refresh token exists, the user is logged out.

## Routes

| Route | Description |
| --- | --- |
| `/` | Login page |
| `/register` | Registration page |
| `/forgot-password` | Forgot password page |
| `/home` | Home feed, protected route |
| `/profile` | Profile page |

## Project Structure

```
src
├── api
├── assets
├── components
│   ├── Routes
│   └── ui
├── context
├── pages
│   └── auth
├── redux
│   └── slices
├── utils
└── validations
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

Create a production build:

```bash
npm run build
```

Run tests:

```bash
npm test
```

## Notes

- The home page is composed of a navbar, stories list, post list, and right sidebar suggestions.
- Login and registration forms use React Hook Form with Yup schemas.
- Profile data is fetched with TanStack Query and shown through the profile card UI.
- Global auth state lives in the Redux store and survives page reloads through persistence.

## Author

Mubashir Waseem
