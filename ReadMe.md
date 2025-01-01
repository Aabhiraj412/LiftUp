# LiftUp

A comprehensive fitness application built using the MERN (MongoDB, Express.js, React, Node.js) stack with a React Native mobile app.

## Project Structure

The project is organized into three main directories:

```
LiftUp/
├── APP/          # React Native mobile application
├── Backend/      # Node.js and Express.js server
└── Frontend/     # React web application
```

## Prerequisites

Before running the project, make sure you have the following installed:
- Node.js (v16 or higher)
- MongoDB
- Bun (Latest version)
- React Native development environment setup

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/liftup.git
cd liftup
```

2. Install dependencies for all projects:
```bash
# Install Backend dependencies
cd Backend
bun install

# Install Frontend dependencies
cd ../Frontend
bun install

# Install APP dependencies
cd ../APP
bun install
```

## Running the Projects

### Backend Server
```bash
cd Backend
bun run dev
```
The server will start on `http://localhost:5000`

### Frontend Web Application
```bash
cd Frontend
bun run dev
```
The web application will be available on `http://localhost:3000`

### Mobile Application
```bash
cd APP
bun run dev    # Start Metro bundler
```

For iOS:
```bash
bun run ios
```

For Android:
```bash
bun run android
```

## Environment Variables

Create `.env` files in the following locations:

### Backend/.env
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend/.env
```
VITE_API_URL=http://localhost:5173
```

### APP/.env
```
API_URL=http://localhost:8080
```

## Features

- User authentication and authorization
- Workout tracking
- Progress monitoring
- Exercise library
- Custom workout plans
- Social features

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React, Vite
- **Mobile**: React Native
- **Package Manager**: Bun
- **Database**: MongoDB

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Contact

Your Name - Alpha_Queue

Project Link: [https://github.com/Aabhiraj412/LiftUp](https://github.com/Aabhiraj412/LiftUp)