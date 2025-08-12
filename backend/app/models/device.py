from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.db import Base

class Device(Base):
    __tablename__ = "devices"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    ip_address = Column(String)
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", backref="devices")
