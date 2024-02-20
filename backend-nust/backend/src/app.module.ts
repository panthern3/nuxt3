import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NuxtMiddleware } from './nuxtMiddleware'; // Подключаем middleware

@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule { // Реализуем NestModule для использования middleware
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(NuxtMiddleware)
      .forRoutes('*'); // Применяем middleware ко всем маршрутам
  }
}