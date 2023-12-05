import { Imovel } from './imovel.model'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'

@Schema()
export class Casa extends Imovel {
  @Prop()
  @ApiProperty()
  private _possuiAreaExterna: boolean

  constructor(
    id: number,
    nome: string,
    descricao: string,
    endereco: string,
    preco: number,
    area: number,
    disponivel: boolean,
    numeroQuartos: boolean,
    mobiliado: boolean,
    disponivelParaVenda: boolean,
    disponivelParaAluguel: boolean,
    possuiAreaExterna: boolean,
  ) {
    super(
      id,
      nome,
      descricao,
      endereco,
      preco,
      area,
      disponivel,
      numeroQuartos,
      mobiliado,
      disponivelParaVenda,
      disponivelParaAluguel,
    )
    this._possuiAreaExterna = possuiAreaExterna
  }

  get possuiAreaExterna(): boolean {
    return this._possuiAreaExterna
  }

  set possuiAreaExterna(value: boolean) {
    this._possuiAreaExterna = value
  }
}
export const CasaSchema = SchemaFactory.createForClass(Casa)
