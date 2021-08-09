import {Model} from '@nozbe/watermelondb';
import {field, action, date, readonly} from '@nozbe/watermelondb/decorators';

export default class Usuarios extends Model {
  static table = 'usuarios';

  @field('usuario') usuario;
  @field('senha') senha;

  @readonly @date('created_at') createdAt;
  @readonly @date('updated_at') updatedAt;
  
}
