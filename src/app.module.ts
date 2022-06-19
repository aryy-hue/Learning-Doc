import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilekitaModule } from './filekita/filekita.module';
import 'dotenv/config'

@Module({
  imports: [
     TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PW,
        database: process.env.DB_NAME,
        // entities: [],
        synchronize: true,
        dropSchema: false,
        logging: true,
        entities: ['src/**/*.entity.ts','dist/**/*.entity.js']
     }),
     FilekitaModule,
      ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
