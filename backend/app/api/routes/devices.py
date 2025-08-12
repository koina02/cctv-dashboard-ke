from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.device import Device
from app.schemas.device import DeviceCreate, DeviceOut
from app.db import get_db
from app.api.deps import get_current_user
from app.models.user import User

router = APIRouter(prefix="/devices", tags=["Devices"])

@router.post("/", response_model=DeviceOut)
def add_device(device: DeviceCreate, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    new_device = Device(name=device.name, ip_address=device.ip_address, owner_id=user.id)
    db.add(new_device)
    db.commit()
    db.refresh(new_device)
    return new_device

@router.get("/", response_model=list[DeviceOut])
def get_user_devices(db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    return db.query(Device).filter(Device.owner_id == user.id).all()
