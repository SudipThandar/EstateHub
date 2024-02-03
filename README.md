# MERN Real Estate

A full-stack real estate marketplace built on the MERN stack (MongoDB, Express, React, Node.js). Users can create an account, browse property listings for sale or rent, search and filter them, and publish and manage their own listings with photos — all through a modern, responsive interface.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Production Build](#production-build)

## Overview

The application consists of two parts served by a single Node.js process in production:

- **Backend** — an Express REST API backed by MongoDB through Mongoose. It handles authentication with JSON Web Tokens stored in HTTP-only cookies, and exposes endpoints for user management and property listings.
- **Frontend** — a React single-page application built with Vite and styled with TailwindCSS. Global state is managed with Redux Toolkit and persisted across sessions with Redux Persist. Firebase provides Google sign-in and image storage for listing photos.

## Features

- **Authentication** — email/password sign-up and sign-in with JWT-based sessions in HTTP-only cookies, plus one-click Google sign-in via Firebase.
- **Listing Management** — authenticated users can create, update, and delete their own property listings, including uploading multiple photos per listing.
- **Rich Listing Details** — listings support sale or rent categories, pricing with optional discounted offers, and amenities such as parking and furnishing.
- **Search and Filtering** — full search page with keyword search, type filters (sale/rent), amenity filters, sorting, and pagination.
- **Image Slider** — listing photos are displayed in a touch-friendly slider.
- **Profile Management** — users can update their account details, change their avatar, view their listings, or delete their account.
- **Contact Landlord** — interested users can contact a listing's owner directly from the listing page.
- **Responsive UI** — TailwindCSS-based layouts optimized for mobile, tablet, and desktop screens.

## Tech Stack

### Backend

| Technology | Purpose |
|---|---|
| Node.js / Express | HTTP server and REST API |
| MongoDB / Mongoose | Database and ODM |
| JSON Web Token | Authentication tokens |
| Bcryptjs | Password hashing |
| Cookie Parser | Reading auth cookies |
| Dotenv | Environment configuration |

### Frontend

| Technology | Purpose |
|---|---|
| React 18 | UI library |
| Vite | Build tool and dev server |
| TailwindCSS | Utility-first CSS framework |
| Redux Toolkit | Global state management |
| Redux Persist | State persistence across sessions |
| React Router | Client-side routing |
| Firebase | Google OAuth and image storage |
| Swiper | Image slider/carousel |
| React Icons | Icon library |

## Architecture

```
┌────────────────┐        REST (JSON)         ┌────────────────┐        ┌────────────────┐
│    Frontend    │ ─────────────────────────► │    Backend     │ ─────► │    MongoDB     │
│  React + Vite  │ ◄───────────────────────── │ Express (3000) │ ◄───── │   (Mongoose)   │
└───────┬────────┘                            └────────────────┘        └────────────────┘
        │
        ▼
┌────────────────┐
│    Firebase    │  (Google sign-in and direct image uploads from the browser)
└────────────────┘
```

- The frontend calls the backend's REST endpoints under `/api`.
- Authentication state travels in an HTTP-only cookie set by the backend.
- Listing images are uploaded from the browser directly to Firebase Storage; only the resulting URLs are stored in MongoDB.
- In production, the Express server also serves the built frontend from `frontend/dist`, so the whole application runs as a single process.

## Project Structure

```
.
├── backend/
│   ├── controller/       # Route handlers (auth, user, listing)
│   ├── models/           # Mongoose models (User, Listing)
│   ├── routes/           # Express routers (/api/auth, /api/user, /api/listing)
│   ├── utils/            # Error handling and token verification helpers
│   └── index.js          # App entry point
├── frontend/
│   └── src/
│       ├── components/   # Reusable UI components
│       ├── pages/        # Route-level pages (Home, Search, Listings, Profile, ...)
│       └── redux/        # Redux Toolkit store and slices
├── package.json          # Backend dependencies and root scripts
└── frontend/package.json # Frontend dependencies and scripts
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/signup` | Register a new account |
| POST | `/api/auth/signin` | Sign in with email and password |
| POST | `/api/auth/google` | Sign in or register with Google |
| GET | `/api/auth/signout` | Sign out the current user |
| POST | `/api/user/update/:id` | Update account details |
| DELETE | `/api/user/delete/:id` | Delete an account |
| GET | `/api/user/listings/:id` | Get a user's listings |
| POST | `/api/listing/create` | Create a listing |
| POST | `/api/listing/update/:id` | Update a listing |
| DELETE | `/api/listing/delete/:id` | Delete a listing |
| GET | `/api/listing/get/:id` | Get a single listing |
| GET | `/api/listing/get` | Search listings with query filters |

## Getting Started

### Prerequisites

- Node.js 18 or later and npm
- A MongoDB database (local instance or a hosted service such as MongoDB Atlas)
- A Firebase project with Google authentication and Storage enabled

### Installation

Install backend dependencies from the project root:

```bash
npm install
```

Then install frontend dependencies:

```bash
cd frontend
npm install
```

### Environment Variables

Create a `.env` file in each location with the following variables.

**Project root (backend)**

| Variable | Description |
|---|---|
| `MONGODB_URL` | MongoDB connection string |
| `JWT_SECRET` | Secret used to sign JSON Web Tokens |

**frontend/.env**

| Variable | Description |
|---|---|
| `VITE_APP_FIREBASE_API_KEY` | Firebase API key |
| `VITE_APP_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `VITE_APP_FIREBASE_PROJECT_ID` | Firebase project ID |
| `VITE_APP_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `VITE_APP_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `VITE_APP_FIREBASE_APP_ID` | Firebase app ID |

### Running the Application

Start the backend from the project root:

```bash
npm run dev
```

The API will be available at `http://localhost:3000`.

In a separate terminal, start the frontend:

```bash
cd frontend
npm run dev
```

Visit `http://localhost:5173` in your browser to use the application.

## Available Scripts

### Root (backend)

| Script | Description |
|---|---|
| `npm run dev` | Start the backend with hot reload (nodemon) |
| `npm start` | Start the backend with Node |
| `npm run build` | Install all dependencies and build the frontend |

### Frontend

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the frontend for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint over the codebase |

## Production Build

Build everything from the project root:

```bash
npm run build
```

This installs dependencies for both packages and outputs the frontend build to `frontend/dist`. Then start the server:

```bash
npm start
```

The Express server serves both the API and the built frontend at `http://localhost:3000`.
