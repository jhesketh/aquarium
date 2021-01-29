# project aquarium's backend
# Copyright (C) 2021 SUSE, LLC.
#
# This library is free software; you can redistribute it and/or
# modify it under the terms of the GNU Lesser General Public
# License as published by the Free Software Foundation; either
# version 2.1 of the License, or (at your option) any later version.

from fastapi.routing import APIRouter
from pydantic import BaseModel

router: APIRouter = APIRouter(
    prefix="/bootstrap",
    tags=["bootstrap"]
)


class StatusReply(BaseModel):
    status: str


@router.get("/status")
async def get_status() -> StatusReply:
    return { "status": "okay" }
