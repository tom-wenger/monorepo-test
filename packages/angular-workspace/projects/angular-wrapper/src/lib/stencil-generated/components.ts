/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from 'stencil-library/components';

import { defineCustomElement as defineMyComponent } from 'stencil-library/components/my-component.js';
@ProxyCmp({
  defineCustomElementFn: defineMyComponent,
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['first', 'last', 'middle'],
  standalone: true
})
export class MyComponent {
  protected el: HTMLMyComponentElement;
    /**
   * The first name
   */
  set first(_: Components.MyComponent['first']) {};
    /**
   * The middle name
   */
  set middle(_: Components.MyComponent['middle']) {};
    /**
   * The last name
   */
  set last(_: Components.MyComponent['last']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['out']);
  }
}


export declare interface MyComponent extends Components.MyComponent {

  out: EventEmitter<CustomEvent<string>>;
}


