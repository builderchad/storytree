import { Component, Element } from '@stencil/core';
@Component({
  tag: 'editor-view',
  styleUrl: 'editor-view.scss'
})
export class EditorView {

  @Element() editorViewEl: HTMLElement;

  // @Listen('window:resize')
  // handleResize(_ev) {
  //   this.fitToSize();
  // }

  // componentDidLoad() {
  //   this.fitToSize();
  // }

  render() {
    return [
      <ion-header>
        <ion-navbar>
          <ion-menu-button id="appButton"><img src="assets/icon/android-icon-36x36.png"/></ion-menu-button>
          <label id="appTitle">Editor</label>
        </ion-navbar>
      </ion-header>,
      <ion-content scrollEnabled={false}>
        
        <storytree-splitter type="horizontal" minSize={40} maxSize={90} fullPage={true}>
          <storytree-editor slot="top"></storytree-editor>
          <storytree-minimap slot="bottom"></storytree-minimap>
        </storytree-splitter>
        
      </ion-content>
    ];
  }

  // fitToSize() {
  //   const currentHeight = this.editorViewEl.querySelector('ion-content').offsetHeight;
  //   const sed = this.editorViewEl.querySelector('storytree-editor');
  //   sed.style.height = (currentHeight - 300) + "px";
  //   console.log(sed.style.height);
  // }

}
