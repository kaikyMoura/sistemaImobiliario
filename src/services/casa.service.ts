import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Casa } from '../model/casa.model'
import { Model } from 'mongoose'

@Injectable()
export class CasaService {
  constructor(@InjectModel('Casa') private casaModel: Model<Casa>) {}

  async findAll(): Promise<Casa[]> {
    return this.casaModel.find()
  }
  async create(casa: Casa): Promise<Casa> {
    return this.casaModel.create(casa)
  }
}
