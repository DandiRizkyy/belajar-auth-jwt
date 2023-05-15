import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt'

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
            ignoreExperation: false,
            secretOrKey: 'jwt-secret', // ini nanti kalo di real case dipindah ke .env
        })
        
    }

    async validate(payload: any){
        return {
            id: payload.sub,
            name: payload.name, 
        };
    }
}