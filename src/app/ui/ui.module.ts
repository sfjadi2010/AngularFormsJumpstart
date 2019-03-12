import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicFormComponent } from './components/forms/basic-form/basic-form.component';
import { BasicFormOnewayBindingComponent } from './components/forms/basic-form-oneway-binding/basic-form-oneway-binding.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, BasicFormComponent, BasicFormOnewayBindingComponent],
  imports: [
    CommonModule
  ],
  exports: [LayoutComponent]
})
export class UiModule { }
