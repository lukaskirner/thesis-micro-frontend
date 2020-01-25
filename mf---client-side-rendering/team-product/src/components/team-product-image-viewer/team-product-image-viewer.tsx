import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'team-product-image-viewer',
  styleUrl: 'team-product-image-viewer.scss',
  shadow: true
})
export class TeamProductImageViewer {

  @Prop() images: string[] = []

  @State() imageNr: number = 0

  private back() {
    const imgArrayLen = this.images.length
    if (this.imageNr > 0) {
      this.imageNr -=1
    } else {
      this.imageNr = imgArrayLen - 1
    }
  }

  private next() {
    const imgArrayLen = this.images.length
    if (this.imageNr < imgArrayLen - 1) {
      this.imageNr +=1
    } else {
      this.imageNr = 0
    }
  }

  render() {
    var divStyle = {
      backgroundImage: `url(${this.images[this.imageNr]})`,
    }

    return <div class="image-viewer">
      <div class="image" style={divStyle}>
        <button onClick={_ => this.back()} class="btn-left">{"<"}</button>
        <button onClick={_ => this.next()} class="btn-right">{">"}</button>
      </div>
    </div>
  }
}
