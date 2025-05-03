# Google Authentication Project

This project implements a full-stack application with Google Authentication, featuring a React frontend and Node.js backend.

## Project Structure

The project is divided into two main directories:

### Client (`/client`)

A React-based frontend application built with Vite.

#### Directory Structure

- `src/` - Source code for the React application
- `public/` - Static assets
- `node_modules/` - Dependencies
- `vite.config.js` - Vite configuration
- `eslint.config.js` - ESLint configuration

#### Dependencies

- React 19
- Firebase 11.6.1 (for Google Authentication)
- TailwindCSS 4.1.5 (for styling)
- Vite 6.3.1 (build tool)

#### Available Scripts

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run lint   # Run ESLint
npm run preview # Preview production build
```

### Server (`/server`)

A Node.js backend application using Express and MongoDB.

#### Directory Structure

- `routes/` - API route definitions
- `controller/` - Business logic controllers
- `models/` - Database models
- `services/` - Service layer implementations
- `middlewares/` - Custom middleware functions
- `db/` - Database configuration and utilities
- `server.js` - Main server entry point

#### Dependencies

- Express 5.1.0
- Mongoose 8.14.1 (MongoDB ODM)
- JWT 9.0.2 (for authentication)
- Bcrypt 5.1.1 (for password hashing)
- CORS 2.8.5 (for cross-origin requests)
- Cookie-parser 1.4.7 (for cookie handling)
- Dotenv 16.5.0 (for environment variables)

#### Available Scripts

```bash
npm run dev    # Start development server with nodemon
npm start      # Start production server
```

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- MongoDB
- Google OAuth credentials

### Installation

1. Clone the repository
2. Install dependencies for both client and server:

```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Create a `.env` file in the server directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

4. Start the development servers:

```bash
# Start the backend server
cd server
npm run dev

# Start the frontend development server
cd ../client
npm run dev
```

## Features

- Google OAuth authentication
- JWT-based session management
- MongoDB database integration
- RESTful API endpoints
- Modern React frontend with TailwindCSS
- Secure password hashing
- CORS enabled for cross-origin requests

## Security Considerations

- Environment variables for sensitive data
- Password hashing with bcrypt
- JWT for secure authentication
- CORS configuration for API security
- Cookie-based session management

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the ISC License.
