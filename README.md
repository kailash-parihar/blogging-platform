# BloggingApp: A Full-Stack Blogging Platform

Welcome to **BloggingApp** – a professional and user-friendly platform designed to simplify content creation and management. With a clear separation between frontend and backend, this project ensures an efficient and scalable development experience.

## Overview

BloggingApp leverages modern technologies to deliver a seamless blogging experience:
- **Backend:** Built with Node.js and Express.
- **Frontend:** Developed using React and Vite.
- **Database:** Utilizes MongoDB for flexible, NoSQL data storage.

Experience a robust platform where managing your content is as straightforward as it is powerful.


## Getting Started

### Prerequisites

To set up and run this project, you will need the following tools installed on your machine:

- **Node.js**: JavaScript runtime environment.
- **npm**: Node package manager.
- **MongoDB**: NoSQL database for storing data.
- **VS Code** or any other text editor of your choice.

## Installation

- **Follow these steps to set up the project on your local machine:-**

1. **Clone the repository:**

    ```sh
    git clone https://github.com/kailash-parihar/blogging-platform.git
    ```
    ```sh        
    cd blogging-platform
    ```
   
2. **Set up environment variables:**
- **Create a .env file in the backend directory and add the following:-**

    ```sh
    MONGO_URI= YOUR_MONGODB_URI

    PORT=5001

    JWT_SECRET= YOUR_SECRET_KEY
    ```

3. **Install dependencies::**
    - **Backend :-**
    - **Navigate to the \blogging-platform\backend>**

    ```sh
    cd backend
    npm install
    ```
    - **Frontend :-**
    - **Navigate to the \blogging-platform\frontend>**

    ```sh
    cd..
    cd frontend
    npm install
    ```

4. **MongoDB:**
    - **Ensure MongoDB is running on your local machine or use a MongoDB Atlas URI in the .env file.**

5. **Start the application:**
    - **Start The Backend:-**
    - **Navigate to the \blogging-platform\backend>**

    ```sh
    npm run dev
    ```
    **OR**

    ```sh
    npm start
    ```
    ### When your backend server starts properly without any error, the terminal will show you this message

    ```markdown
    Server is start running on http://localhost:5001/
    
    MongoDB is Connected to Database:
          Database Host: YOUR_MONGO_DB_URL STRING
          Database Name: YOUR_DB_NAME
    ```
    - **Start The Front-End :-**
    - **Navigate to the \blogging-platform\frontend>**

    ```sh
    npm run dev
    ```

# Running the Application
- **Open your browser and navigate to http://localhost:5173/ for the frontend.**

- **The backend will be running on http://localhost:5001/**