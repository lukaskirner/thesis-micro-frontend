/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface TeamList {
    'gender': string;
  }
  interface TeamListItem {
    'item': {
      id: number
      name: string
      price: number
      images: [string]
    };
  }
}

declare global {


  interface HTMLTeamListElement extends Components.TeamList, HTMLStencilElement {}
  var HTMLTeamListElement: {
    prototype: HTMLTeamListElement;
    new (): HTMLTeamListElement;
  };

  interface HTMLTeamListItemElement extends Components.TeamListItem, HTMLStencilElement {}
  var HTMLTeamListItemElement: {
    prototype: HTMLTeamListItemElement;
    new (): HTMLTeamListItemElement;
  };
  interface HTMLElementTagNameMap {
    'team-list': HTMLTeamListElement;
    'team-list-item': HTMLTeamListItemElement;
  }
}

declare namespace LocalJSX {
  interface TeamList {
    'gender'?: string;
  }
  interface TeamListItem {
    'item'?: {
      id: number
      name: string
      price: number
      images: [string]
    };
  }

  interface IntrinsicElements {
    'team-list': TeamList;
    'team-list-item': TeamListItem;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'team-list': LocalJSX.TeamList & JSXBase.HTMLAttributes<HTMLTeamListElement>;
      'team-list-item': LocalJSX.TeamListItem & JSXBase.HTMLAttributes<HTMLTeamListItemElement>;
    }
  }
}


