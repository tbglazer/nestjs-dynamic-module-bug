import { Module, DynamicModule } from '@nestjs/common';
import { ASYNC_OPTIONS_TYPE, ConfigurableModuleClass } from './config.module-definition';
@Module({})
export class ConfigModule extends ConfigurableModuleClass {
static registerAsync(options: typeof ASYNC_OPTIONS_TYPE): DynamicModule {
    console.log('GENERATED: ', super.registerAsync(options))
    return {
      // your custom logic here
      ...super.registerAsync(options),
    };
  }
}