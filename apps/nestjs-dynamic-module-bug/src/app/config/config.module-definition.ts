import { ConfigurableModuleBuilder } from "@nestjs/common";
import { ConfigModuleOptions } from "./config.module-options";

export const {
    ConfigurableModuleClass,
    MODULE_OPTIONS_TOKEN,
    OPTIONS_TYPE,
    ASYNC_OPTIONS_TYPE,
  } = new ConfigurableModuleBuilder<ConfigModuleOptions>().build();