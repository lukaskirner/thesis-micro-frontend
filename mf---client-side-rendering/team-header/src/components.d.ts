/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface TeamHeader {}
}

declare global {


  interface HTMLTeamHeaderElement extends Components.TeamHeader, HTMLStencilElement {}
  var HTMLTeamHeaderElement: {
    prototype: HTMLTeamHeaderElement;
    new (): HTMLTeamHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'team-header': HTMLTeamHeaderElement;
  }
}

declare namespace LocalJSX {
  interface TeamHeader {}

  interface IntrinsicElements {
    'team-header': TeamHeader;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'team-header': LocalJSX.TeamHeader & JSXBase.HTMLAttributes<HTMLTeamHeaderElement>;
    }
  }
}


