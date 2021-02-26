import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InlineSVGModule } from 'ng-inline-svg';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CidadesComponent } from './Cidades/cidades.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './Loader/Loader.component';
import { NotificationComponent } from './notification/notification.component';
import { PopupHomeComponent } from './home/popup-home/popup-home.component';
import { CidadeComponent } from './home/cidade/cidade.component';
import { CidadeService } from './shared/cidade.service';
import { EstadoService } from './shared/estado.service';
import { CidadeFromFileComponent } from './home/cidade-from-file/cidade-from-file.component';
import { PopupFileComponent } from './home/cidade-from-file/popup-file/popup-file.component';
import { DeleteErrorComponent } from './Delete-Error/delete-error.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotificationComponent,
    LoaderComponent,
    HomeComponent,
    CidadesComponent,
    PopupHomeComponent,
    CidadeComponent,
    CidadeFromFileComponent,
    PopupFileComponent,
    DeleteErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InlineSVGModule.forRoot()
  ],
  providers: [CidadeService,EstadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
