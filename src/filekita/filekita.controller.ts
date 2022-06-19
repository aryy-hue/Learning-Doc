import { Controller, Get , Param } from '@nestjs/common';

@Controller('filekita')
export class FilekitaController {
    @Get()
    lihatOutput(): string{
        return 'ini controller file kita';
    }
    @Get(':id')
    lihatDetail(@Param('id') id: string): string{
        return 'ini Detail file kita '+ id;
    }

}
