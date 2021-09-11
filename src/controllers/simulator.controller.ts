import { Controller, Get } from '@nestjs/common';

@Controller('simulator')
export class SimulatorController {
  @Get()
  simulateBattle(): string {
    return 'A battle has returned';
  }
}
