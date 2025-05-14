import { Module } from '@nestjs/common';
import { EnvConfigService } from './env-config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: false, // ou true se quiser que seja global
  })],
  providers: [EnvConfigService],
  exports: [EnvConfigService], // Exporte se outros módulos precisarem dele
})
export class EnvConfigModule { }
