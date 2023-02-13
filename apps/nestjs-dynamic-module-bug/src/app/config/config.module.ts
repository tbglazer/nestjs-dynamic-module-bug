import { Module, DynamicModule } from '@nestjs/common';
import { OPTIONS_TYPE, ASYNC_OPTIONS_TYPE, ConfigurableModuleClass } from './config.module-definition';
@Module({})
export class ConfigModule extends ConfigurableModuleClass {
  static register(options: typeof OPTIONS_TYPE): DynamicModule {
    console.log('SYNC GENERATED: ', super.register(options))
    return {
      // your custom logic here
      ...super.register(options),
    };
  }
  static registerAsync(options: typeof ASYNC_OPTIONS_TYPE): DynamicModule {
    console.log('ASYNC GENERATED: ', super.registerAsync(options))
    return {
      // your custom logic here
      ...super.registerAsync(options),
    };
  }
}