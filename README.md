# Blood Bank Management App
A simple blood bank management application built with the MERN stack (MongoDB, Express, React, and Node.js). This app allows users to add, view, edit, and delete donors in a blood bank database.

## Features
### Frontend:

Home page with navigation links
Add Donor form with validations
Donor list with options to edit and delete donor records

### Backend:

RESTful API with Express.js
MongoDB for storing donor information
CRUD operations for managing donor data
Tech Stack
Frontend: React, React Bootstrap
Backend: Node.js, Express.js
Database: MongoDB (Mongoose as the ODM)


The frontend will  be running at http://localhost:3000.
The backend API will run at http://localhost:5000.
Project Structure
bash
Copy code
blood-bank-management-app/
├── backend/             # Express server and MongoDB setup
│   ├── models/          # Mongoose models
│   ├── routes/          # Express routes for CRUD operations
│   ├── controllers/     # Route handlers
│   └── server.js        # Entry point for the backend server
│
└── frontend/            # React app
    ├── src/
    │   ├── components/  # React components for AddDonor, DonorList, DonorUpdate
    │   ├── App.js       # Main app file
    │   └── index.js     # Entry point for the frontend app

API Endpoints
GET /donors => Fetch all donors
POST /donors => Add a new donor
PUT /donors/ =>  Update donor information
DELETE /donors/:id =>  Delete a donor