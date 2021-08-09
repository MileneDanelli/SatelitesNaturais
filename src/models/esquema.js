import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const mySchema = appSchema({
    version: 2,
    tables: [
        tableSchema({
            name: 'usuarios',
            columns: [
                { name: 'usuario', type: 'string' },
                { name: 'senha', type: 'string' },
                { name: 'created_at', type: 'number' },
                { name: 'updated_at', type: 'number' },
            ]
        }),
        tableSchema({
            name: 'planetas',
            columns: [
                { name: 'nome', type: 'string' },
                { name: 'tipo', type: 'string' },
            ]
        }),
        tableSchema({
            name: 'satelites_naturais',
            columns: [
                { name: 'nome', type: 'string' },
                { name: 'periodo_orbital', type: 'number' },
                { name: 'ano_descoberta', type: 'string' },
                { name: 'descricao', type: 'string' },
            ]
        }),
        // tableSchema({
        //     name: 'usuarios_teste',
        //       columns: [
        //           { name: 'usuario', type: 'string' },
        //           { name: 'senha', type: 'string' },
        //           { name: 'created_at', type: 'number' },
        //           { name: 'updated_at', type: 'number' },
        //     ]
        // }), 
        // tableSchema({
        //     name: 'teste',
        //     columns: [
        //       { name: 'post_id', type: 'string', isIndexed: true },
        //       { name: 'body', type: 'string' },
        //     ],
        // }),
    ]
})