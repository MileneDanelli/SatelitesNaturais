import {Model} from '@nozbe/watermelondb';
import {field, children} from '@nozbe/watermelondb/decorators';

export default class Planetas extends Model {
  static table = 'planetas';
  static associations = {
    satelites_naturais: {type: 'has_many', foreignKey: 'planeta_id'},
  };
  @field('nome') nome;
  @field('tipo') tipo;

  @children('satelites_naturais') satelites_naturais;

  // getPlaneta() {
  //     return {
  //         nome: this.nome,
  //         tipo: this.tipo
  //     };
  // }

  // async addSatelite(nome, periodo_orbital, ano_descoberta, descricao) {
  //     return this.collections.get("satelites").create(satelites => {
  //         satelites.planetas.set(this);
  //         satelites.nome = nome;
  //         satelites.periodo_orbital = periodo_orbital;
  //         satelites.ano_descoberta = ano_descoberta;
  //         satelites.descricao = descricao;
  //     });
  // }

  // editarPlaneta = async editandoPlaneta => {
  //     await this.update(planetas => {
  //         planetas.nome = editandoPlaneta.nome;
  //         planetas.tipo = editandoPlaneta.tipo;
  //     });
  // }

  // async deletarTodosSatelites() {
  //     await this.satelites_naturais.destroyAllPermanently();
  // }

  // async deletarPlaneta() {
  //     await this.deletarTodosSatelites();
  //     await this.markAsDeleted();
  //     await this.destroyPermanently();
  // }
}
