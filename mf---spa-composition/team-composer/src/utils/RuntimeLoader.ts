import { Runtime, RuntimeType } from './ExternalRuntimes'
import axios, { AxiosResponse } from 'axios'

export default class Runtimeloader {

  static loadRuntime(runtime: Runtime) {
    if (!runtime.loaded) {
      switch (runtime.type) {
        case RuntimeType.REACT:
          this.loadRuntimeManifest(runtime, resp => {
            this.loadByRuntimeTypeReact(runtime.baseURL, resp.data)
            runtime.loaded = true
          })
          break
        case RuntimeType.VUE:
          this.loadRuntimeManifest(runtime, resp => {
            this.loadByRuntimeTypeVue(runtime.baseURL, resp.data)
            runtime.loaded = true
          })
          break
        case RuntimeType.STENCIL:
          this.loadByRuntimeTypeStencil(runtime.baseURL)
          break
        default:
          console.log("Error: Invalid runtime type")
      }
    }
  }

  private static async loadRuntimeManifest(runtime: Runtime, successCallback: (resp: AxiosResponse) => void) {
    const resp = await axios.get(`${runtime.baseURL}${runtime.manifest}`)
    if (resp.status === 200) {
      successCallback(resp)
    } else {
      console.log("Error at getting manifest")
    }
  }

  private static loadByRuntimeTypeReact(baseURL: string, manifest: Map<string, any>) {
    const entrypoints: string[] = manifest['entrypoints']
    entrypoints.map(entrypoint => {
      if (entrypoint.endsWith('.js')) {
        this.buildAndAppendScript(`${baseURL}${entrypoint}`)
      } else if (entrypoint.endsWith('.css')) {
        this.buildAndAppendStyle(`${baseURL}${entrypoint}`)
      }
    })
  }

  private static loadByRuntimeTypeVue(baseURL: string, manifest: Map<string, any>) {
    const script: string = manifest['entrypoint']
    this.buildAndAppendScript(`${baseURL}${script}`)
  }

  private static loadByRuntimeTypeStencil(url: string) {
    this.buildAndAppendScript(url)
  }

  static buildAndAppendStyle(src: string) {
    let link = document.createElement('link')
    link.href = src
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }

  static buildAndAppendScript(src: string) {
    let script = document.createElement('script')
    script.type = 'module'
    script.src = src
    script.crossOrigin = 'true'
    document.body.appendChild(script)
  }
}
