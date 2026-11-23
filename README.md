# Code2Chill – Official Club Website

### Where Ideas Turn Into Code.

Code2Chill is the official website of a student-focused coding community at Chitkara University. It aims to bring developers together, encourage collaboration, showcase technical events, and create opportunities for students to learn, build and innovate.

## Features

- Modern, responsive and premium homepage
- About Code2Chill section
- Events showcase
- Team and leadership section
- Gallery section
- Join the Club application form
- Contact form
- Responsive navigation
- Backend integration with FastAPI
- Form submissions stored in SQLite database

## Tech Stack

**Frontend**
- HTML5
- CSS3
- JavaScript

**Backend**
- Python
- FastAPI
- SQLAlchemy

**Database**
- SQLite

**Tools**
- Visual Studio Code
- Git and GitHub

## Project Structure

```text
Code2Chill/
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   └── code2chill.db
│
├── frontend html original/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── join.html
│   └── contact.html
│
├── .gitignore
└── README.md
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/maggolaksh5-ui/Code2Chill.git
cd Code2Chill
```

### 2. Run the Frontend

Open the `frontend html original` folder in Visual Studio Code.

Use the Live Server extension to run `index.html`.

### 3. Run the Backend

Open a terminal inside the backend folder.

Create and activate a virtual environment:

```bash
python -m venv venv
```

Windows activation:

```powershell
.\venv\Scripts\Activate.ps1
```

Install dependencies:

```bash
python -m pip install fastapi uvicorn sqlalchemy python-multipart
```

Start the FastAPI server:

```bash
python -m uvicorn main:app --reload
```

### 4. API Documentation

Once the backend is running, open:

```text
http://127.0.0.1:8000/docs
```

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Backend welcome message |
| GET | `/about` | Club information |
| POST | `/join` | Submit membership application |
| POST | `/contact` | Submit contact message |

## Project Status

- Frontend development completed.
- Backend APIs implemented and locally tested.
- Join and Contact forms integrated with SQLite.
- Production deployment and final live testing pending.

## Repository

[Code2Chill – GitHub](https://github.com/maggolaksh5-ui/Code2Chill)

---

**Code2Chill – Think. Code. Collaborate.**
## Repository

https://github.com/maggolaksh5-ui/Code2Chill
