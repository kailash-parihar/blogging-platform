# BloggingApp: A Full-Stack Blogging Platform

Welcome to **BloggingApp** – a professional and user-friendly platform designed to simplify content creation and management. With a clear separation between frontend and backend, this project ensures an efficient and scalable development experience.

## Overview

BloggingApp leverages modern technologies to deliver a seamless blogging experience:
- **Backend:** Built with Node.js and Express.
- **Frontend:** Developed using React and Vite.
- **Database:** Utilizes MongoDB for flexible, NoSQL data storage.

Experience a robust platform where managing your content is as straightforward as it is powerful.

## Application Architecture

**Backend (Server-side):**
- **Controllers:** Execute the core business logic.
- **Models:** Define and enforce MongoDB data schemas.
- **Routes:** Handle API endpoints and client requests.
- **Middleware:** Incorporate custom functionality such as authentication and logging.
- **Config:** Manage environment variables and configuration settings.

**Frontend (Client-side):**
- **Components:** Modular and reusable UI elements.
- **Pages:** Dedicated views for various sections of the application.
- **Services:** Facilitate API interactions and data fetching.
- **Styles:** Organized CSS for a modern and responsive design.
- **Utilities:** Helper functions to streamline common tasks.


## Getting Started

### Prerequisites

To set up and run this project, you will need the following tools installed on your machine:

- **Node.js**: JavaScript runtime environment.
- **npm**: Node package manager.
- **MongoDB**: NoSQL database for storing data.
- **VS Code** or any other text editor of your choice.

### Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository:**

    ```sh
    https://github.com/kailash-parihar/blogging-platform.git
    
    cd bloggingApp
    ```
   
2. **Set up environment variables:**
    ```sh
    Create a .env file in the backend directory and add the following:

    MONGO_URI=your_mongodb_uri

    PORT=5001

    JWT_SECRET=your_secret_key
    ```

3. **Install dependencies::**
    ```sh
    Backend:

    cd backend
    npm install
    ```
    ```
    Frontend:

    cd ../frontend
    npm install
    ```

4. **Run MongoDB:**
    - Ensure MongoDB is running on your local machine or use a MongoDB Atlas URI in the .env file.

5. **Start the application:**
    ```sh
    Backend:

    cd Back-end
    npm run dev
    ```
    ```sh
    Server is start running on http://localhost:5001/
    
    MongoDB is Connected to Database:
          Database Host: mongodb://localhost:27017/
          Database Name: YOUR_DB_NAME
    ```
    ```sh
    Front-end:

    cd ../frontend
    npm run dev
    ```

# Running the Application
- Open your browser and navigate to http://localhost:5173 for the frontend.

- The backend will be running on http://localhost:5001.