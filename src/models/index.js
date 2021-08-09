import Planetas from './Planetas';
import SatelitesNaturais from './SatelitesNaturais';
import Usuarios from './Usuarios';
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { mySchema } from './esquema';
import  migrations  from './migrations';

const dbModels = [Planetas, SatelitesNaturais, Usuarios];

const adapter = new SQLiteAdapter({
    dbName: "app_planetas",
    schema: mySchema,
    migrations
});


export const database = new Database({
    adapter,
    modelClasses: dbModels,
    actionsEnabled: true
});