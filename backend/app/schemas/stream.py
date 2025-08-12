from pydantic import BaseModel

class StreamStatus(BaseModel):
    device_id: int
    status: str
