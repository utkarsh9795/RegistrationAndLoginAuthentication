Here is the live preview 

[Live Preview](https://registrationandloginauthentication.onrender.com/)

Here's a detailed project description for your GitHub README for the "Registration and Login Authentication" project in Express.js:

---

 Registration and Login Authentication

This project is a simple web application built with Express.js that implements user registration and login authentication functionality. The purpose of this project is to demonstrate a basic authentication flow with hashed passwords and provide a clean, responsive UI using Bootstrap CDN.

 Features

- User Registration: Allows users to create a new account with a unique username and password.
- User Login: Users can log in with their credentials.
- Password Hashing: Ensures that passwords are securely stored in the database.
- Views with EJS: The UI is rendered with EJS templates and styled using Bootstrap for responsiveness and design consistency.
- Database Integration: Utilizes MongoDB to store user data, ensuring efficient and scalable data storage.

 Table of Contents

- Setup
- Project Structure
- Features
- Technology Stack
- Implementation Details
- Screenshots

---

 Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/registration-and-login-authentication.git
    cd registration-and-login-authentication
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following lines to configure the MongoDB URI and any other secrets:
     ```env
     MONGODB_URI=your_mongodb_uri
     PORT=3000
     ```

4. Start the server:
    ```bash
    npm start
    ```

   The application will run on `http://localhost:3000`.

---

 Project Structure

The project structure is organized as follows:

```
registration-and-login-authentication/
├── controllers/
│   └── authController.js          # Contains logic for user registration and login
├── models/
│   └── User.js                    # Defines User schema and model
├── routes/
│   └── authRoutes.js              # Defines routes for authentication (login and registration)
├── views/
│   ├── partials/
│   │   ├── header.ejs             # Header partial view
│   │   └── footer.ejs             # Footer partial view
│   ├── index.ejs                  # Home page
│   ├── login.ejs                  # Login page
│   └── register.ejs               # Registration page
├── public/
│   └── css/                       # Stylesheets and other public assets
├── app.js                         # Main application file
└── package.json                   # Project dependencies
```

---

 Technology Stack

- Backend: Node.js, Express.js
- Database: MongoDB
- Templating Engine: EJS
- Password Hashing: bcrypt
- Styling**: Bootstrap CDN

---

 Implementation Details

 1. Creating and Setting up the Project

The project is initiated using Express and includes essential dependencies like bcrypt for password hashing and mongoose for MongoDB interactions.

 2. Database Connection

The application connects to MongoDB using the mongoose library. Connection details are specified in the `.env` file to keep sensitive information secure.

 3. Creating the User Model and User Schema

A User Schema is defined in `User.js` that includes fields for storing the username, email, and hashed password. MongoDB collections are structured with the schema to store user data.

 4. Creating Controller and Routes

- Controller (`authController.js`): Handles registration and login logic.
- Routes (`authRoutes.js`): Defines routes for registration (`/register`) and login (`/login`).

 5. Creating Views with EJS

- Home Page: Basic homepage that displays a welcome message and navigation links.
- Registration Page: A form where users can enter their username, email, and password to register.
- Login Page: A form where users can enter their login credentials.

 6. Using Bootstrap CDN

Bootstrap is included via CDN in the header to provide a responsive design without the need for a local CSS file.

 7. Header and Footer Views

Separate EJS partials for the header and footer are created to keep the structure consistent across all pages.

 8. Navbar

A simple navigation bar allows users to navigate between the home, registration, and login pages.

 9. Registration Form

- Located on `/register`.
- Collects user information like username, email, and password.
- Password is hashed before saving to the database using bcrypt.

 10. Login Form

- Located on `/login`.
- Checks user credentials against stored hashed passwords.
- If the login is successful, the user is redirected to a welcome page.

 11. Hashing Password

- bcrypt is used to hash passwords before saving them to the database.
- On login, bcrypt checks if the entered password matches the stored hashed password.



 Screenshots

- Home Page: 
   - Displays welcome message and navigation bar.
- Registration Page: 
   - Form for new users to register.
- Login Page: 
   - Form for existing users to log in.
