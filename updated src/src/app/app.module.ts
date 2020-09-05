import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultTableComponent } from './search-result-table/search-result-table.component';
import { SharedService } from './services/shared.service';
import { LeftSearchFromComponent } from './left-search-from/left-search-from.component';
import { SymbolsService } from './services/symbols.service';
import { RightSearchFormComponent } from './right-search-form/right-search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FooterComponent,
    HeaderComponent,
    SearchResultTableComponent,
    RightSearchFormComponent,
    LeftSearchFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SharedService,SymbolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
