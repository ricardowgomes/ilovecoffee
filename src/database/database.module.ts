import { Module, DynamicModule } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';

@Module({})
export class DatabaseModule {
  static register(options: DataSourceOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'CONNECTION',
          useValue: new DataSource(options),
        },
      ],
      imports: [
        DatabaseModule.register({
          // 👈 passing in dynamic values
          type: 'postgres',
          host: 'localhost',
          username: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD,
        }),
      ],
    };
  }
}
