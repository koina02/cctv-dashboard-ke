from pydantic import BaseModel

class DeviceCreate(BaseModel):
    name: str
    ip_address: str

class DeviceOut(DeviceCreate):
    id: int

    class Config:
        orm_mode = True
