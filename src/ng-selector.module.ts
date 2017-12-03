import { NgModule } from '@angular/core';
import { NgSelectorDirective } from './ng-selector.directive';
import { TestComponent } from './test.component/test.component';

@NgModule({
  declarations: [NgSelectorDirective, TestComponent],
  exports: [NgSelectorDirective, TestComponent]
})
export class NgSelectorModule { }

