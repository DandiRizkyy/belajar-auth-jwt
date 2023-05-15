import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "./entity/role.enum";

@Injectable()
export class RolesGuard implements CanActivate{
constructor(private reflector: Reflector){}

    canActivate(context: ExecutionContext):boolean{
    // what is the require role>
    const requireRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
        context.getHandler(),
        context.getClass(),
    ])

    if(!requireRoles){
        return true;
    }
    // does the current user making the request have the required roles
    // const {user} = context.switchToHttp().getRequest();
    // console.log(user)
    const user = {
        name: 'andi',
        roles: [Role.ADMIN], 
    }
    return requireRoles.some((role) => user.roles.includes(role));
    }
}