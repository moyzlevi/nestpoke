import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SimulatorController } from './controllers/simulator.controller';

@Module({
  imports: [],
  controllers: [AppController, SimulatorController],
  providers: [AppService],
})
export class AppModule {}
