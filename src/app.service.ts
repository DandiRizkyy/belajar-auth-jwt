import { Get, Injectable, Post, Request } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(req) {
    return req.user;
  }
}
