/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface TeamProductImageViewer {
    'images': string[];
  }
  interface TeamProductInfo {
    'productid': string;
  }
}

declare global {


  interface HTMLTeamProductImageViewerElement extends Components.TeamProductImageViewer, HTMLStencilElement {}
  var HTMLTeamProductImageViewerElement: {
    prototype: HTMLTeamProductImageViewerElement;
    new (): HTMLTeamProductImageViewerElement;
  };

  interface HTMLTeamProductInfoElement extends Components.TeamProductInfo, HTMLStencilElement {}
  var HTMLTeamProductInfoElement: {
    prototype: HTMLTeamProductInfoElement;
    new (): HTMLTeamProductInfoElement;
  };
  interface HTMLElementTagNameMap {
    'team-product-image-viewer': HTMLTeamProductImageViewerElement;
    'team-product-info': HTMLTeamProductInfoElement;
  }
}

declare namespace LocalJSX {
  interface TeamProductImageViewer {
    'images'?: string[];
  }
  interface TeamProductInfo {
    'productid'?: string;
  }

  interface IntrinsicElements {
    'team-product-image-viewer': TeamProductImageViewer;
    'team-product-info': TeamProductInfo;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'team-product-image-viewer': LocalJSX.TeamProductImageViewer & JSXBase.HTMLAttributes<HTMLTeamProductImageViewerElement>;
      'team-product-info': LocalJSX.TeamProductInfo & JSXBase.HTMLAttributes<HTMLTeamProductInfoElement>;
    }
  }
}


