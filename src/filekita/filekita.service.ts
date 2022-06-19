import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {FileKita}from './filekita.entity';
import {FileKitaDTO} from './filekita.dto';

@Injectable()
export class FilekitaService {
    constructor(
        @InjectRepository(FileKita)
        private filekitaRepository : Repository<FileKita>
    ){}

    //menampilkan data sesuai id
    async showAll(){
        return await this.filekitaRepository.find();
    }
    //mempost data baru
    async create(data: FileKitaDTO){
        const filekitaNew = await this.filekitaRepository.create(data);
        await this.filekitaRepository.save(filekitaNew);
        return filekitaNew
    }
    //memnampilkan return
    async lihatSemua(){
        return 'ini di service';
    }
}
