# Instagram Home UI

A React-based Instagram-inspired social media interface built with Create React App. This project focuses on the frontend experience, including authentication screens, a protected home feed, stories, posts, and a right-side suggestion panel.

## Features

- Login, registration, and forgot-password screens
- Protected route for the main home page
- Instagram-style navbar and feed layout
- Stories and post sections with sample content
- Responsive UI styled with Tailwind CSS and React Icons

## Tech Stack

- React
- React Router DOM
- Tailwind CSS
- React Icons
- Create React App

## Project Structure

- src/pages: authentication and main pages
- src/components: reusable UI and layout components
- src/utils/constants.js: sample data for stories, posts, and menu items

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

The app will open at http://localhost:3000.

## Available Scripts

- npm start: runs the app in development mode
- npm test: launches the test runner
- npm run build: creates a production build

## Notes

- This is a frontend demo project and does not connect to a real backend.
- Login is simulated using browser local storage.
- Main routes include:
  - / for login
  - /register for registration
  - /forgot-password for password recovery
  - /home for the protected home feed