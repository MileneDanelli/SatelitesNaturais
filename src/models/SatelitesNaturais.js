import {Model} from '@nozbe/watermelondb';
import {field, relation} from '@nozbe/watermelondb/decorators';

export default class SatelitesNaturais extends Model {
  static table = 'satelites_naturais';
  static associations = {
    planetas: {type: 'belongs_to', foreignKey: 'planeta_id'},
  };
  @field('nome') nome;
  @field('periodo_orbital') periodo_orbital;
  @field('ano_descoberta') ano_descoberta;
  @field('descricao') descricao;

  @relation('planetas', 'planeta_id') planetas;

  async deletarSatelite() {
    await this.markAsDeleted();
    await this.destroyPermanently();
  }
}
