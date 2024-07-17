# Tuner Front-End 🎶

This is the front-end application for Tuner, a music playlist manager built with React. This application consumes a RESTful API built with Node.js and Express.js (provided separately) to manage a collection of songs.

## Features

- View a list of songs, including their title, artist, album, time, and favorite status.
- View details of a specific song.
- Add new songs to the playlist.
- Update existing song information.
- Delete songs from the playlist.
- Mark songs as favorites.

## Technologies Used

- React.js
- React Router
- Vite.js
- HTML
- CSS
- JavaScript

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/jmoncayo-pursuit/tuner-front-end.git
   cd tuner-front-end
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```

   This will usually start the development server at `http://localhost:5173/` (or a similar port).

**Make sure your Tuner API backend is running on `http://localhost:3346` (or your specified port).**

## Project Structure

- **`src/`**: Contains the React source code.
  - **`Components/`**: Reusable React components.
  - **`Pages/`**: Components representing different pages of the application.

## API Endpoints

This front-end application consumes the following API endpoints provided by the Tuner backend API:

```
GET    /songs       // Get all songs
GET    /songs/:id    // Get a specific song by ID
POST   /songs       // Create a new song
PUT    /songs/:id    // Update an existing song
DELETE /songs/:id    // Delete a song
```
