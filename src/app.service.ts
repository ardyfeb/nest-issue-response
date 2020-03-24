import { Injectable, ForbiddenException } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    throw new ForbiddenException('error_code', 'error_message')
  }
}
