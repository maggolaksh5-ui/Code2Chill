from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import Base, engine, get_db
import models
from schemas import JoinApplicationCreate, ContactMessageCreate
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI(
    title="Code2Chill API",
    description="Official Code2Chill Website Backend",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
   allow_origins=[
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "http://localhost:5173"
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

@app.get("/")
def home():
    return {
        "message": "Welcome to Code2Chill Backend!",
        "status": "Running Successfully"
    }

@app.get("/about")
def about():
    return {
        "club": "Code2Chill",
        "tagline": "Where Ideas Turn Into Code",
        "university": "Chitkara University"
    }

@app.post("/join")
def submit_application(
    application: JoinApplicationCreate,
    db: Session = Depends(get_db)
):
    new_application = models.JoinApplication(
        name=application.name,
        email=application.email,
        branch=application.branch,
        year=application.year,
        reason=application.reason
    )

    db.add(new_application)
    db.commit()
    db.refresh(new_application)

    return {
        "message": "Application submitted successfully!",
        "application_id": new_application.id
    }

@app.post("/contact")
def submit_contact_message(
    contact: ContactMessageCreate,
    db: Session = Depends(get_db)
):
    new_message = models.ContactMessage(
        name=contact.name,
        email=contact.email,
        message=contact.message
    )

    db.add(new_message)
    db.commit()
    db.refresh(new_message)

    return {
        "message": "Contact message submitted successfully!",
        "message_id": new_message.id
    }
