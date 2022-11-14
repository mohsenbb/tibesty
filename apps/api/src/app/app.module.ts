import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InsTransAviModule } from './ins-trans-avi/ins-trans-avi.module';

@Module({
  imports: [InsTransAviModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
