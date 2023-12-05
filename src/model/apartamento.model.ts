import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Imovel } from './imovel.model'

@Schema()
export class Apartamento extends Imovel {
  @Prop()
  private _vagasEstacionamento: number

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
    vagasEstacionamento: number,
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
    this._vagasEstacionamento = vagasEstacionamento
  }

  get vagasEstacionamento(): number {
    return this._vagasEstacionamento
  }

  set vagasEstacionamento(value: number) {
    this._vagasEstacionamento = value
  }
}

export const ApartamentoSchema = SchemaFactory.createForClass(Apartamento)
