import { PrimaryGeneratedColumn } from 'typeorm'
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger'

@ApiExtraModels(Imovel)
export abstract class Imovel {
  @PrimaryGeneratedColumn()
  private readonly _id: number

  @ApiProperty()
  private _nome: string

  @ApiProperty()
  private _descricao: string

  @ApiProperty()
  private _endereco: string

  @ApiProperty()
  private _preco: number

  @ApiProperty()
  private _area: number

  @ApiProperty()
  private _disponivel: boolean

  @ApiProperty()
  private _numeroQuartos: boolean

  @ApiProperty()
  private _mobiliado: boolean

  @ApiProperty()
  private _disponivelParaVenda: boolean

  @ApiProperty()
  private _disponivelParaAluguel: boolean

  protected constructor(
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
  ) {
    this._id = id
    this._nome = nome
    this._descricao = descricao
    this._endereco = endereco
    this._preco = preco
    this._area = area
    this._disponivel = disponivel
    this._numeroQuartos = numeroQuartos
    this._mobiliado = mobiliado
    this._disponivelParaVenda = disponivelParaVenda
    this._disponivelParaAluguel = disponivelParaAluguel
  }

  get id(): number {
    return this._id
  }

  get nome(): string {
    return this._nome
  }

  set nome(value: string) {
    this._nome = value
  }

  get descricao(): string {
    return this._descricao
  }

  set descricao(value: string) {
    this._descricao = value
  }

  get endereco(): string {
    return this._endereco
  }

  set endereco(value: string) {
    this._endereco = value
  }

  get preco(): number {
    return this._preco
  }

  set preco(value: number) {
    this._preco = value
  }

  get area(): number {
    return this._area
  }

  set area(value: number) {
    this._area = value
  }

  get disponivel(): boolean {
    return this._disponivel
  }

  set disponivel(value: boolean) {
    this._disponivel = value
  }

  get numeroQuartos(): boolean {
    return this._numeroQuartos
  }

  set numeroQuartos(value: boolean) {
    this._numeroQuartos = value
  }

  get mobiliado(): boolean {
    return this._mobiliado
  }

  set mobiliado(value: boolean) {
    this._mobiliado = value
  }

  get disponivelParaVenda(): boolean {
    return this._disponivelParaVenda
  }

  set disponivelParaVenda(value: boolean) {
    this._disponivelParaVenda = value
  }

  get disponivelParaAluguel(): boolean {
    return this._disponivelParaAluguel
  }

  set disponivelParaAluguel(value: boolean) {
    this._disponivelParaAluguel = value
  }
}
