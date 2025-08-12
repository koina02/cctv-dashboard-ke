from fastapi import FastAPI
from app.api.routes import auth, devices, streams
from app.db import Base, engine

app = FastAPI()

# Initialize DB
Base.metadata.create_all(bind=engine)

# Register routes
app.include_router(auth.router)
app.include_router(devices.router)
app.include_router(streams.router)
