from fastapi import APIRouter, Depends
from app.api.deps import get_current_user
from app.models.user import User

router = APIRouter(prefix="/stream", tags=["Stream"])

@router.get("/start/{device_id}")
def start_stream(device_id: int, user: User = Depends(get_current_user)):
    # This is a placeholder — later, link this to an RTSP/ONVIF module
    return {"status": "started", "device_id": device_id}

@router.get("/stop/{device_id}")
def stop_stream(device_id: int, user: User = Depends(get_current_user)):
    return {"status": "stopped", "device_id": device_id}

@router.get("/status/{device_id}")
def stream_status(device_id: int, user: User = Depends(get_current_user)):
    return {"device_id": device_id, "status": "mock_active"}
