import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  
  {path:'home-page',component:HomePageComponent},
  {path:'project-page',component:ProjectPageComponent},
  {path:'user-page',component:UserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
