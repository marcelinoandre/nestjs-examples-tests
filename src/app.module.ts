import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseVedovelliTddModule } from './course-vedovelli-tdd/course-vedovelli-tdd.module';

@Module({
  imports: [CourseVedovelliTddModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
