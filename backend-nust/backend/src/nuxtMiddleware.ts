import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as path from 'path';

@Injectable()
export class NuxtMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
        // Перенаправляем все запросы, кроме тех, что начинаются с '/api', на Nuxt.js
        if (!req.url.startsWith('/api')) {
            // Путь к индексному файлу Nuxt.js
            res.sendFile(path.resolve('/home/nike/tapigo1/newTapigo2/nuxt-tap1/dist/index.html'));
        } else {
            next();
        }
    }
}