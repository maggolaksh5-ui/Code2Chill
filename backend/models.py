
from sqlalchemy import Column, Integer, String, Text
from database import Base


class JoinApplication(Base):
    __tablename__ = "join_applications"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(150), nullable=False)
    branch = Column(String(100), nullable=False)
    year = Column(String(20), nullable=False)
    reason = Column(Text, nullable=False)
