import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module'; // Importa el módulo de enrutamiento

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule // Asegúrate de que AuthRoutingModule está importado aquí
  ],
  exports: [
    AuthComponent // Exporta AuthComponent para que esté disponible fuera de este módulo
  ]
})
export class AuthModule { }
