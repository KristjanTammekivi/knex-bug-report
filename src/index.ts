import * as knex from 'knex';

const db = knex({ client: 'pg', connection: { host: 'localhost', port: 5432, user: 'postgres', password: 'postgres' } });

interface Test {
    id: number;
    name: string;
}

(async () => {
    await db.schema.createTable('test', (t) => {
        t.bigIncrements('id');
        t.text('name');
    });
    const result = await db<Test>('test')
        .count('*')
        .first();
    // @ts-expect-error result is an object but types say it's a string
    console.log('result', result!.count);
    await db.schema.dropTable('test');
})();
