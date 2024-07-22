# Dona - backend

[![Continuous Integration](https://github.com/SignCraft2024/signcraft/actions/workflows/CI.yml/badge.svg)](https://github.com/micael-jerry/my-social-media-backend/blob/dev/.github/workflows/ci.yml)

[![Test coverage with codevov](https://codecov.io/gh/micael-jerry/my-social-media-backend/branch/dev/graph/badge.svg?token=5E63UJ11NG)](https://codecov.io/gh/micael-jerry/my-social-media-backend)

## Description

This project is a React application and an Express API inspired by Waze. It allows users to report police positions and potentially other incidents on a map using Leaflet. Users can sign up, view reports on the map, and report incidents themselves.

### [Front-End link](https://github.com/micael-jerry/dona-frontend)

## Features

- User registration and authentication
- Report police positions and other incidents
- View reports on an interactive map
- Add comments and votes to reports

## Technologies Used

- Express
- Node
- MongoDB

## Getting started

### Prerequisites

Before you start, please ensure that you have the following items installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

#### 1. Clone the repository

```bash
git clone git@github.com:micael-jerry/dona-backend.git
```

#### 2. Install dependencies for the backend

```bash
cd dona-backend
npm install
```

#### 3. Configuration

Create a `.env` file at the root of the project and configure the necessary environment variables:

```bash
PORT= <port>
DATABASE_URL= <url>
DATABASE_NAME= <name>
JWT_SECRET_KEY= <key>
```

### Start

#### 1. Launch application

```bash
npm start
```

#### 2. Launch the application in development mode

```bash
npm run dev
```

> The API will be accessible at: `http://localhost:8080` (or any other port you have configured)

## Author

- [@micael-jerry](https://github.com/micael-jerry)
