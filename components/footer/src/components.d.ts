/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface ComponentFooter {
      'first': string;
      'last': string;
    }
  }

  interface HTMLComponentFooterElement extends StencilComponents.ComponentFooter, HTMLStencilElement {}

  var HTMLComponentFooterElement: {
    prototype: HTMLComponentFooterElement;
    new (): HTMLComponentFooterElement;
  };
  interface HTMLElementTagNameMap {
    'component-footer': HTMLComponentFooterElement;
  }
  interface ElementTagNameMap {
    'component-footer': HTMLComponentFooterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'component-footer': JSXElements.ComponentFooterAttributes;
    }
  }
  namespace JSXElements {
    export interface ComponentFooterAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;