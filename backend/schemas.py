

from pydantic import BaseModel


class JoinApplicationCreate(BaseModel):
    name: str
    email: str
    branch: str
    year: str
    reason: str


class ContactMessageCreate(BaseModel):
    name: str
    email: str
    message: str

