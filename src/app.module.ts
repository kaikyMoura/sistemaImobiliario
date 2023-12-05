import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'
import { CasaSchema } from './model/casa.model'
import { ApartamentoSchema } from './model/apartamento.model'
import { CasaService } from './services/casa.service'
import { CasaController } from './controllers/casa.controller'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/banco_imoveis'),
    MongooseModule.forFeature([{ name: 'Casa', schema: CasaSchema }]),
    MongooseModule.forFeature([
      { name: 'Apartamento', schema: ApartamentoSchema },
    ]),
  ],
  controllers: [CasaController],
  providers: [CasaService],
})
export class AppModule {}
