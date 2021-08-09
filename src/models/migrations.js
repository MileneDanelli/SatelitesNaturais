import { schemaMigrations, createTable } from '@nozbe/watermelondb/Schema/migrations'

export default schemaMigrations({
  migrations: [
    // {
    //   // ⚠️ Set this to a number one larger than the current schema version
    //   toVersion: 3,
    //   steps: [
    //     createTable({
    //       name: 'teste',
    //       columns: [
    //         { name: 'post_id', type: 'string', isIndexed: true },
    //         { name: 'body', type: 'string' },
    //       ],
    //     }),
    //   ], 
    // },
     {          
      toVersion: 2,
      steps: [
        // See "Migrations API" for more details
        createTable({
          name: 'usuarios',
            columns: [
                { name: 'usuario', type: 'string' },
                { name: 'senha', type: 'string' },
                { name: 'created_at', type: 'number' },
                { name: 'updated_at', type: 'number' },
          ]
        }),    
        createTable({
          name: 'planetas',
          columns: [
              { name: 'nome', type: 'string' },
              { name: 'tipo', type: 'string' },
          ]
        }),
        createTable({
          name: 'satelites_naturais',
          columns: [
              { name: 'nome', type: 'string' },
              { name: 'periodo_orbital', type: 'number' },
              { name: 'ano_descoberta', type: 'string' },
              { name: 'descricao', type: 'string' },
          ]
        }),
        // createTable({
        //   name: 'usuarios_teste',
        //     columns: [
        //         { name: 'usuario', type: 'string' },
        //         { name: 'senha', type: 'string' },
        //         { name: 'created_at', type: 'number' },
        //         { name: 'updated_at', type: 'number' },
        //   ]
        // }),
      ],
    },
  ],
})