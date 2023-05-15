import { Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService, private readonly appService: AppService) {}


   //POST /login
   @UseGuards(LocalAuthGuard)
   @Post('login')
   login(@Request() req):any{
     return this.authService.login(req.user); //TODO: return JWT access token
   }

  // GET /protected
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req) { // TODO: require an bearer token
    return req.user; 
  }
}
