import { DataSource } from 'typeorm';
import { CoffeeRefactor1688422452028 } from './src/migrations/1688422452028-CoffeeRefactor';
import { SchemaSync1688422976339 } from './src/migrations/1688422976339-SchemaSync';
import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1688422452028, SchemaSync1688422976339],
});
