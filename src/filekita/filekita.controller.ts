import { Body, Controller, Get , Param , Post} from '@nestjs/common';
import { FilekitaService } from './filekita.service';
import {FileKitaDTO} from './filekita.dto';

@Controller('filekita')
export class FilekitaController {
    constructor(private FileKitaService: FilekitaService){
    }
    @Get()
    lihatOutput(){
        return this.FileKitaService.showAll();
    }

    @Post()
    membuatRecord(@Body() data: FileKitaDTO){
        return this.FileKitaService.create(data)
    }
    @Get(':id')
    lihatDetail(@Param('id') id: string): string{
        return 'ini Detail file kita '+ id;
    }
    @Get('service')
    lihatSemua(){
        return this.FileKitaService.lihatSemua();
    }

}
