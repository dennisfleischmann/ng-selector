import { NgModule } from '@angular/core';
import { NgSelectorDirective } from './ng-selector.directive';


@NgModule({
  declarations: [NgSelectorDirective],
  exports: [NgSelectorDirective]
})
export class NgSelectorModule { }

