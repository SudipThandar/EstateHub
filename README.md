# Real Estate Project

![](/assets/home.png)

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Usage](#usage)
- [Project Preview](#project-preview)

## Overview

This is a comprehensive real estate project designed to streamline property management and enhance the overall user experience for both property owners and tenants. The project leverages technologies such as Node.js, Express, and MongoDB for the backend, and React for the frontend.

## Key Features

- **User Authentication**: Secure authentication system to manage user accounts, ensuring data privacy and security.
- **Listing Management**: Efficiently create, update, and display property listings, with support for various types such as sale and rent.

- **Responsive UI**: A user-friendly and responsive frontend built with React, providing a seamless experience across devices.

- **API Endpoints**: Well-defined API endpoints for user-related actions, property listing management, and more.

- **Middleware Handling**: Robust middleware to handle errors gracefully and provide informative responses.

## Getting Started

Follow these steps to set up the project locally on your machine:

### Prerequisites

Make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [React.js](https://react.dev/)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/sothulthorn/mern-real-estate.git
```

2. Navigate to the project directory:

```bash
cd mern-real-estate
```

#### Backend Setup

Now, let's set up the backend of the real estate project.

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file:

```bash
MONGODB_URL=your_mongodb_connection_url
JWT_SECRET=your_jwt_secret_code
```

3. Start the development server:

```bash
npm run dev
```

#### Frontend Setup

Now, let's set up the frontend of the real estate project.

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```bash
VITE_APP_FIREBASE_API_KEY=your_firebase_api_key
VITE_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_APP_FIREBASE_APP_ID=your_firebase_app_id
```

4. Start the development server:

```bash
npm run dev
```

#### Usage

Visit `http://localhost:5173/` in your browser to access the full application, seamlessly integrating the backend and frontend.

## Project Preview

### Home Page

![](/assets/home.png)

![](/assets/offer-section.png)

![](/assets/rent-section.png)

![](/assets/sale-section.png)

### Sign In Page

![](/assets/sign-in.png)

### Sign Up Page

![](/assets/sign-up.png)

### Profile Page

![](/assets/profile.png)

### Create Lists Page

![](/assets/creating-list.png)

### Update Lists Page

![](/assets/updating-list.png)

### Listing Page

![](/assets/listing.png)

### Search Page

![](/assets/search-page.png)
