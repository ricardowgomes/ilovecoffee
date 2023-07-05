import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import coffeesConfig from './config/coffees.config';

/*
- Non-class-based Provider Tokens -
import { COFFEE_BRANDS } from './coffees.constants';
*/

/*
- Value based Providers -
class MockCoffeesService {}
*/

/*
- Class Providers -
class ConfigService {}
class DevelopmentConfigService {}
class ProductionConfigService {}
*/

/*
- Factory Providers -
@Injectable()
export class CoffeeBrandsFactory {
  create() {
    // do something
    return ['buddy brew', 'nescafe'];
  }
}
*/

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig),
  ],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,

    /*
    Value based Providers
    {
      provide: CoffeesService,
      useValue: new MockCoffeesService(),
    },
    */

    /*
    Non-class-based Provider Tokens
    {
      provide: COFFEE_BRANDS,
      useValue: ['buddy brew', 'nescafe'],
    },
    */

    /*
    Class Providers ("useClass" syntax example)
    {
      provide: ConfigService,
      useClass:
        process.env.NODE_ENV === 'development'
          ? DevelopmentConfigService
          : ProductionConfigService,
    },
    */

    /*
    Factory Providers
    {
      provide: COFFEE_BRANDS,
      useFactory: (brandsFactory: CoffeeBrandsFactory) => brandsFactory.create(),
      inject: [CoffeeBrandsFactory],
    },
    */

    /*
    Asynchronous "useFactory" (async provider example)
    {
      provide: 'COFFEE_BRANDS',
      // Note "async" here, and Promise/Async event inside the Factory function
      // Could be a database connection / API call / etc
      // In our case we're just "mocking" this type of event with a Promise
      useFactory: async (connection: Connection): Promise<string[]> => {
        // const coffeeBrands = await connection.query('SELECT * ...');
        const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe'])
        return coffeeBrands;
      },
      inject: [Connection],
    },
    */
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
