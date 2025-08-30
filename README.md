# Spotify Clone 🎵

A fully functional **Spotify clone** built with **React, Node.js, Express, and MongoDB**, replicating the core features of Spotify. Users can browse albums, play songs, manage playback, and perform album/song CRUD operations.

---

## 🌟 Features

- **Album Management:** Create, list, and delete albums  
- **Song Management:** Upload, list, and delete songs  
- **Music Playback:** Play, pause, skip tracks  
- **Responsive Design:** Mobile-friendly and accessible across devices  

---

## 🛠 Technologies Used

- **Frontend:** React, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Cloud Storage:** Cloudinary (for images and songs)  
- **State Management:** Context API  
- **Routing & HTTP Requests:** React Router, Axios  
- **Notifications:** React Toastify  
- **Tools:** Git, Vite, VSCode  

---

## ⚙️ Installation

1. **Clone the repository**

git clone https://github.com/saijanipireddy/music_clone_app.git
cd spotify-clone

Set up environment variables
Create a .env file in the root directory with the following:

env

MONGO_URI=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

Run the backend server

cd spotify-backend
npm install
npm start


Run the admin panel

cd spotify-admin
npm install
npm run dev
Run the frontend

cd spotify-frontend

npm install
npm run dev
🚀 Usage
Open your browser and navigate to http://localhost:8000

Use the Spotify Admin page to create and manage albums and songs

Browse albums and songs, create playlists, and enjoy music playback

