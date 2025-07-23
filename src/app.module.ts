import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocktailsModule } from './cocktails/cocktails.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [CocktailsModule,
  MongooseModule.forRoot('mongodb+srv://szapatar:PVQcogm7ymywbdwv@cluster0.rihybzv.mongodb.net/licores')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
