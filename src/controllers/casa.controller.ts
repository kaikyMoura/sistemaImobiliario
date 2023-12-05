import { CasaService } from '../services/casa.service'
import { Body, Controller, Get, Post } from '@nestjs/common'
import { Casa } from '../model/casa.model'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('casa')
@Controller('casa')
export class CasaController {
  constructor(private readonly casaService: CasaService) {
    this.casaService = casaService
  }

  @Get('/buscarTodas')
  findAll(): Promise<Casa[]> {
    return this.casaService.findAll()
  }

  @Post('/criar')
  create(@Body() casa: Casa): Promise<Casa> {
    return this.casaService.create(casa)
  }
}
