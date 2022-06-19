import { Module } from '@nestjs/common';
import {FileKita} from './filekita.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilekitaController } from './filekita.controller';

@Module({
    imports : [TypeOrmModule.forFeature([FileKita])],
    controllers: [FilekitaController]
})
export class FilekitaModule {}
