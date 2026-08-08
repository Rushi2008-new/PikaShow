# PikaShow

A sleek React movie discovery app built with Vite, featuring category browsing, search, rating filters, and bilingual support for English and Hindi.

## 🚀 Overview

PikaShow is a modern front-end project that lets users explore movie collections powered by The Movie Database (TMDB) API. The app includes:

- A responsive home page with featured category cards
- Movie category browsing for now playing, popular, top rated, and upcoming titles
- Movie search and rating filters
- Detail view with background hero, overview, and video trailer support
- Language toggle between English and Hindi
- Offline detection for improved user experience- **Note**: If network speed is slow, use a VPN for reliable TMDB API access

## ✨ Key Features

- **TMDB API integration** via `VITE_API_KEY`
- **React Router** for page navigation
- **Dynamic category pages** for `now_playing`, `popular`, `top_rated`, and `upcoming`
- **Movie detail page** with trailer overlay
- **Search bar** and **rating filter** in the category listing
- **Language context** for text localization
- **Error and loading states** for better UX

## 🧱 Tech Stack

- React 19
- Vite
- React Router DOM
- React Icons
- ESLint

## 📁 Project Structure

- `src/App.jsx` — Home page and featured categories
- `src/components/Movies.jsx` — Category movie listing with search/filter
- `src/components/AllMovies.jsx` — Multi-category carousel-style view
- `src/components/MovieDisplay.jsx` — Movie details and trailer overlay
- `src/components/Header.jsx` — Top navigation and language selector
- `src/components/Footer.jsx` — Footer section
- `src/components/MovieCard.jsx` — Category card layout
- `src/components/Error.jsx` — Route error handling
- `src/contexts/LanguageContext.jsx` — Language selection context
- `src/hooks/useOnlineStatus.js` — Online/offline detection
- `src/data.js` — TMDB API configuration and category metadata



---

## 🚀 LIVE PROJECT

Visit the live deployment:

[https://pika-show.vercel.app](https://pika-show.vercel.app)

Made for a polished movie browsing experience with multilingual UI and TMDB-powered data.