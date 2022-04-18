import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LoadRemoteComponentModule } from '@components/load-remote-component/load-remote-component.module';
import { SearchBarModule } from '@components/search-bar/search-bar.module';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ApolloModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    LoadRemoteComponentModule,
    SearchBarModule,
  ],
  declarations: [HomePage],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => ({
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: 'https://rickandmortyapi.com/graphql',
        }),
      }),
      deps: [HttpLink],
    },
  ],
})
export class HomePageModule {}
