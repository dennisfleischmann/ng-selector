import { Directive, ViewContainerRef, ElementRef, OnInit, Renderer } from '@angular/core';

/**
 * @description
 * The responsibility of this directive is to add a name selector if no attribute was already specified on a given element

 */
@Directive({
  selector: '[ngSelector]'
})
export class NgSelectorDirective implements OnInit {
  private readonly SNAKE_CASE_REGEXP = /[A-Z]/g;

  constructor(
    private host: ViewContainerRef,
    private element: ElementRef,
    private renderer: Renderer) {
  }

  ngOnInit() {
    /**
     * dont override existing name attribute
     */
    if (this.element.nativeElement.name) {
      return;
    }

    const component = (<any>this.host);
    const componentName = component._view.component.constructor.name.replace('Component', '');

    const normalizedComponentName = this.snake_case(componentName, '-');

    const componentNameAttribute = this.element.nativeElement.getAttribute('selector-name');

    const nameAttribute = `${normalizedComponentName}-${this.snake_case(componentNameAttribute, '-')}`;

    this.renderer.setElementAttribute(this.element.nativeElement, 'name', nameAttribute);
  }

  /**
   * This function was copied from the official angular1 code
   * https://github/angular/angular.js/blob/v1.3.10/src/Angular.js#L1447-1453
   */
  snake_case(name: string, separator: string) {
    separator = separator || '-';
    return name.replace(this.SNAKE_CASE_REGEXP, function (letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    })
  }
}