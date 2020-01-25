export enum RuntimeType {
  VUE, REACT, STENCIL
}

export interface Runtime {
  type: RuntimeType,
  manifest: string,
  baseURL: string,
  loaded: boolean
}

const ExternalRuntimes = {
  TEAM_HEADER: {
    type: RuntimeType.REACT,
    manifest: 'asset-manifest.json',
    baseURL: 'https://spa-composition-team-header.lukaskirner.now.sh/build/',
    loaded: false
  } as Runtime,
  TEAM_BASKET: {
    type: RuntimeType.STENCIL,
    manifest: '',
    baseURL: 'https://spa-composition-team-basket.now.sh/dist/team-basket/team-basket.js',
    loaded: false
  } as Runtime,
  TEAM_LIST: {
    type: RuntimeType.VUE,
    manifest: 'manifest.json',
    baseURL: 'https://spa-composition-team-list.lukaskirner.now.sh/dist/',
    loaded: false
  } as Runtime,
  TEAM_PRODUCT: {
    type: RuntimeType.VUE,
    manifest: 'manifest.json',
    baseURL: 'https://spa-composition-team-product.lukaskirner.now.sh/dist/',
    loaded: false
  } as Runtime,
  TEAM_DISCOVER: {
    type: RuntimeType.REACT,
    manifest: 'asset-manifest.json',
    baseURL: 'https://spa-composition-team-discover.lukaskirner.now.sh/build/',
    loaded: false
  } as Runtime
}

export default ExternalRuntimes
