import { Component, Listen, Element } from '@stencil/core';
@Component({
  tag: 'editor-view',
  styleUrl: 'editor-view.scss'
})
export class EditorView {

  @Element() editorViewEl: HTMLElement;

  @Listen('window:resize')
  handleResize(_ev) {
    this.fitToSize();
  }

  componentDidLoad() {
    this.fitToSize();
  }

  render() {
    return [
      <ion-header>
        <ion-navbar>
          <ion-menu-button id="appButton"><img src="assets/icon/android-icon-36x36.png"/></ion-menu-button>
          <label id="appTitle">Editor</label>
        </ion-navbar>
      </ion-header>,
      <ion-content scrollEnabled={false}>
        <storytree-editor></storytree-editor>
        <storytree-minimap></storytree-minimap>
      </ion-content>
    ];
  }

  fitToSize() {
    const currentHeight = this.editorViewEl.querySelector('ion-content').offsetHeight;
    const sed = this.editorViewEl.querySelector('storytree-editor');
    sed.style.height = (currentHeight - 200) + "px";
  }

}
