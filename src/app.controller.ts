import { Controller, Get, ForbiddenException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    throw new ForbiddenException('error_code', 'error_message')
  }
}
