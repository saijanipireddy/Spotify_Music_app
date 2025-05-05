**Spotify Clone**

I built A fully functional Spotify clone built with React, Node.js, Express.js and MongoDB. This project aims to replicate the core functionalities of Spotify, allowing users to browse albums, play songs, and manage playback. It includes functionalities for creating, browsing, and removing albums, as well as uploading, viewing, and deleting songs.

**Features**

Album Management: Create, list, and delete albums.
Song Management: Upload, list, and delete songs.
Play Music: Users can play, pause, and skip tracks.
Responsive Design: Mobile-friendly design for better accessibility.

**Technologies Used**

Frontend: React, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Cloud Storage: Cloudinary for image and song storage
Tools: Git, Vite, VSCode
State Management: Context API
Other Libraries: Axios, React Router, React Toastify

**Installation**

1.Clone the repository:
  git clone https://github.com/saijanipireddy/music_clone_app
  cd spotify clone
  
2.Set up environment variables: Create a .env file in the root directory and add the following:

  MONGO_URI=your_mongodb_uri
  CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
  CLOUDINARY_API_KEY=your_cloudinary_api_key
  CLOUDINARY_API_SECRET=your_cloudinary_api_secret
  
3.Run the backend server:
  
  cd spotify-backend
  npm install
  npm start
  
4.Run the backend server:

  cd spotify-admin
  npm install
  npm run dev

5.Run the frontend:

  cd spotify-frontend
  npm install
  npm run dev
  
**Usage**

Open your browser and navigate to http://localhost:4000.
Create new albums and songs on the Spotify Admin page.
Browse albums and songs, create playlists, and enjoy music.
