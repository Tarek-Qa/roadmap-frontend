# Career Guidance Roadmap Application

## Overview

The Career Guidance Roadmap Application is a web-based tool designed to help users determine the best career path based on their personality traits and preferences. Users can take a personality quiz, view personalized career recommendations, and explore resources tailored to their career journey. The application features user authentication for secure access to personalized dashboards and admin functionalities.

## Features

- **User Authentication**: Secure sign-up and sign-in using Firebase Authentication.
- **Personality Quiz**: An engaging quiz that assesses user preferences and traits.
- **Personalized Recommendations**: Career recommendations based on quiz results.
- **Admin Dashboard**: Manage user submissions, quiz data, and site analytics.
- **Responsive Design**: A modern, responsive design that works on all devices.
- **Animated Progress Bar**: A visually appealing progress bar that tracks quiz progress.

## Technologies Used

- **Frontend**: React, styled-components, framer-motion
- **Backend**: Firebase (Authentication, Firestore)
- **CSS Framework**: Bootstrap
- **Notifications**: react-toastify

## Getting Started

### Prerequisites

- Node.js and npm installed
- Firebase account and project set up

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/roadmap-app.git
   cd roadmap-app




2.  **Install dependencies**:
    
    bash
    
    Copy code
    
    `npm install` 
    
3.  **Set up Firebase**:
    
    -   Create a Firebase project in the Firebase Console.
        
    -   Register your app and get the Firebase configuration.
        
    -   Enable Firebase Authentication and Firestore.
        
    -   Create a file named `firebaseConfig.js` in the `src` directory and add your Firebase configuration:
        
        javascript
        
        Copy code
        
        `// src/firebaseConfig.js
        import { initializeApp } from 'firebase/app';
        import { getAuth } from 'firebase/auth';
        
        const firebaseConfig = {
          apiKey: "YOUR_API_KEY",
          authDomain: "YOUR_AUTH_DOMAIN",
          projectId: "YOUR_PROJECT_ID",
          storageBucket: "YOUR_STORAGE_BUCKET",
          messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
          appId: "YOUR_APP_ID"
        };
        
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        
        export { auth };` 
        
4.  **Run the application**:
    
    bash
    
    Copy code
    
    `npm start` 
    

## Project Structure

css

Copy code

`├── public
│   ├── index.html
│   └── path/to/marker-icon.png
├── src
│   ├── components
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Dashboard.js
│   │   ├── Footer.js
│   │   ├── Home.js
│   │   ├── Navbar.js
│   │   ├── ProtectedRoute.js
│   │   ├── Quiz.js
│   │   ├── Results.js
│   │   ├── SignIn.js
│   │   └── SignUp.js
│   ├── context
│   │   ├── AuthContext.js
│   │   └── QuizContext.js
│   ├── firebaseConfig.js
│   ├── GlobalStyle.js
│   ├── App.js
│   ├── index.js
│   └── styles
│       └── theme.js
├── .gitignore
├── package.json
└── README.md` 

## Usage

1.  **Sign Up**:
    
    -   Navigate to the Sign Up page.
    -   Create an account using your email and password.
2.  **Take the Quiz**:
    
    -   Start the personality quiz from the home page.
    -   Answer all the questions to get personalized career recommendations.
3.  **View Recommendations**:
    
    -   After completing the quiz, view your personalized career recommendations.
    -   Explore resources and next steps for your recommended careers.
4.  **Admin Dashboard**:
    
    -   If you are an admin, log in to access the admin dashboard.
    -   Manage user submissions, quiz data, and view site analytics.

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-branch`).
3.  Commit your changes (`git commit -m 'Add new feature'`).
4.  Push to the branch (`git push origin feature-branch`).
5.  Open a pull request.
