
-----

# 🚀 Day 1: SkillMatcher Project Kickstart & Groundwork

## Project Overview

**Project Name:** SkillMatcher
**One-liner Pitch:** Connects user skills to recommended career paths, online courses, and potential teammates.
**Tech Stack:** React (Vite) + Tailwind CSS (Frontend), Django + Django Rest Framework (Backend), SQLite (Database for now).
**MVP Goals:** Create a functional end-to-end pipeline allowing users to input skills, receive hardcoded recommendations from a backend API, and display them on a results page. Focus on core functionality, not UI/UX.

-----

## 🔧 Day 1 Tasks & Execution Log

### Project Kickstart & Groundwork

  - **Goal:** Create the base skeleton for frontend + backend and establish initial communication.

#### 1\. GitHub Repository Creation

  - Created a public GitHub repository named `skillmatcher`.
  - Initialized `README.md` with project name, one-liner pitch, tech stack, and MVP goals.
  - Initial `.gitignore` for common files.
  - **Status:** ✅ Done

#### 2\. Frontend Setup (React + Tailwind)

  - **Tooling:** Vite + React (JavaScript variant).
  - **Project Creation:**
    ```bash
    npm create vite@latest frontend
    cd frontend
    npm install
    ```
  - **Tailwind CSS Configuration:**
      - Installed `tailwindcss`, `postcss`, `autoprefixer`.
      - Initialized Tailwind with `npx tailwindcss init -p`.
      - Updated `tailwind.config.js` to include content paths:
        ```javascript
        /** @type {import('tailwindcss').Config} */
        module.exports = {
          content: ["./index.html", "./src/**/*.{js,jsx}"],
          theme: {
            extend: {},
          },
          plugins: [],
        }
        ```
      - Replaced `src/index.css` content with Tailwind directives:
        ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```
      - Imported `index.css` into `main.jsx`.
  - **Basic Routing (React Router):**
      - Installed `react-router-dom`.
      - Created `src/pages` directory with `Home.jsx`, `Input.jsx`, and `Results.jsx`.
      - Configured `App.jsx` with `BrowserRouter`, `Routes`, and `Route` for `/`, `/input`, and `/results`.
      - Each page returns a simple heading for now.
  - **Status:** ✅ Done

#### 3\. Backend Setup (Django + DRF)

  - **Project Creation:**
    ```bash
    mkdir backend && cd backend
    python -m venv venv
    source venv/bin/activate # On Windows: venv\Scripts\activate
    pip install django djangorestframework
    django-admin startproject backend .
    python manage.py startapp matcher
    ```
  - **`INSTALLED_APPS` Configuration:** Added `'rest_framework'` and `'matcher'` to `backend/settings.py`.
  - **Single API Endpoint (`POST /api/match-skills`):**
      - **`matcher/views.py`:** Created `match_skills` function with `@api_view(['POST'])` decorator.
          - Accepts `skills` list from `request.data`.
          - Implemented **dummy logic** using a hardcoded `recommendations` dictionary to return matches.
      - **`matcher/urls.py`:** Defined URL pattern for `match-skills/`.
      - **`backend/urls.py`:** Included `matcher.urls` under `/api/` path.
  - **Status:** ✅ Done

#### 4\. Database Setup (SQLite for now)

  - No complex models created.
  - Ensured Django project was wired up and could run, implicitly using SQLite as the default.
  - **Status:** ✅ Done

#### 5\. Folder Structure

  - Adhered to the specified monorepo structure:
    ```
    skillmatcher/
    ├── backend/
    │   ├── matcher/
    │   ├── backend/
    │   ├── manage.py
    │   └── requirements.txt
    ├── frontend/
    │   ├── public/
    │   ├── src/
    │   │   ├── pages/
    │   │   ├── components/
    │   │   └── App.jsx
    │   └── tailwind.config.js
    ├── README.md
    └── .gitignore
    ```
  - **Status:** ✅ Done

### Connecting Frontend and Backend

  - **Goal:** Enable end-to-end communication from skill input in the frontend to displaying recommendations from the backend.

#### 1\. Build the Skill Input Page (`/input`)

  - **`pages/Input.jsx`:**
      - Implemented a form with an input field for skills.
      - Used `useState` for `skills` input and `useNavigate` for redirection.
      - On form submission (`handleSubmit`):
          - Split and trimmed user input into a skill list.
          - Used `axios.post` to send the `skills` list to `http://localhost:8000/api/match-skills/`.
          - Stored the received `res.data.matches` in `localStorage` as `"skillResults"`.
          - Navigated to `/results`.
  - **Status:** ✅ Done

#### 2\. Show Recommendations on `/results`

  - **`pages/Results.jsx`:**
      - Used `useState` for `results` and `useEffect` to retrieve `skillResults` from `localStorage` on component mount.
      - Conditionally rendered "No results to show" if data is missing.
      - Mapped over `Object.entries(results)` to display each skill and its recommendations in a list format.
  - **Status:** ✅ Done

#### 3\. Fix CORS on Django Backend

  - **Installation:** `pip install django-cors-headers`.
  - **`backend/settings.py`:**
      - Added `'corsheaders'` to `INSTALLED_APPS`.
      - Added `"corsheaders.middleware.CorsMiddleware"` to `MIDDLEWARE`.
      - Set `CORS_ALLOW_ALL_ORIGINS = True` (for development only).
  - **Restarted backend server.**
  - **Status:** ✅ Done

#### 4\. End-to-End Test

  - Ran both frontend (`npm run dev`) and backend (`python manage.py runserver`).
  - Navigated to `/input` in the browser.
  - Entered sample skills (e.g., "Python, SQL").
  - Successfully submitted the form, redirected to `/results`, and observed the dummy recommendations displayed correctly.
  - **Status:** ✅ Connected & Working

-----

## 🧩 Day 1 Checklist Summary

| Task                         | Status |
| :--------------------------- | :----- |
| GitHub repo created          | ✅     |
| React + Tailwind scaffold    | ✅     |
| Django project setup         | ✅     |
| DRF endpoint /match-skills   | ✅     |
| Dummy skill matching logic   | ✅     |
| Frontend routes (/, /input, /results) | ✅     |
| Input page (frontend)        | ✅     |
| POST request to backend      | ✅     |
| Results display              | ✅     |
| CORS setup                   | ✅     |
| End-to-end test works        | ✅     |

-----

## 🚧 Blockers / Notes

  - No significant blockers encountered during Day 1 setup.
  - Focused strictly on core functionality and ignored styling/optimizations as per instructions.
  - All code pushed to GitHub after each major milestone.

-----

## ⏱ Completion

  - All Day 1 tasks, including the end-to-end connection, were completed by: **[30 July 2025]**.

-----