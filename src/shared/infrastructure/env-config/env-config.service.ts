import { Injectable } from '@nestjs/common';
import { EnvConfig } from './env-config.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor(private configService: ConfigService) {
    // Aqui você pode adicionar lógica adicional, se necessário
    // Exemplo: console.log('EnvConfigService initialized');
  }
  getappPort(): number {
    return Number(this.configService.get<number | undefined>('PORT'));
  }
  getNodeEnv(): string {
    return this.configService.get<string | undefined>('NODE_ENV') ?? 'development';
  }
}
