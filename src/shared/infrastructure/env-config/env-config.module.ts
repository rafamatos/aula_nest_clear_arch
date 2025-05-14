import { DynamicModule, Module } from '@nestjs/common';
import { EnvConfigService } from './env-config.service';
import { ConfigModule, ConfigModuleOptions } from '@nestjs/config';
// A importação de 'env' de 'process' não era utilizada e foi removida.
import { join } from 'node:path';

@Module({}) // O decorador @Module base é mantido mínimo quando forRoot é a forma principal de uso.
export class EnvConfigModule { // Removido "extends ConfigService"
  static forRoot(options: ConfigModuleOptions = {}): DynamicModule {
    // Navega de src/shared/infrastructure/env-config para a raiz do projeto
    const rootPath = join(__dirname, '..', '..', '..', '..');

    // Caminhos padrão para os arquivos .env: .env.{NODE_ENV} e depois .env
    // Ex: .env.development, .env.production, seguido por um .env genérico
    const defaultEnvFilePaths = [
      join(rootPath, `.env.${process.env.NODE_ENV}`),
      join(rootPath, '.env'),
    ];

    // Usa o envFilePath fornecido pelo usuário, se disponível, caso contrário, usa os padrões.
    const envFilePathToUse = options.envFilePath || defaultEnvFilePaths;

    return {
      module: EnvConfigModule, // Especifica esta classe de módulo.
      imports: [
        ConfigModule.forRoot({ // Configura o ConfigModule principal do @nestjs/config
          ...options, // Espalha as opções fornecidas pelo usuário (ex: isGlobal, validationSchema)
          envFilePath: envFilePathToUse, // Define os caminhos dos arquivos .env determinados
        }),
      ],
      providers: [EnvConfigService], // Fornece o EnvConfigService personalizado
      exports: [EnvConfigService],   // Exporta para uso em outros módulos
    };
  }
}
