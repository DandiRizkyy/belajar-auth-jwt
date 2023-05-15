import { SetMetadata } from "@nestjs/common";

export const Roles = (...roles: any[]) => SetMetadata('roles', roles)// nanti ...roles:any diganti ...roles: sring
