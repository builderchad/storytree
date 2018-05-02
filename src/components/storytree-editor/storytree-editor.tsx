import { Component } from '@stencil/core';
@Component({
  tag: 'storytree-editor',
  styleUrl: 'storytree-editor.scss'
})
export class StorytreeEditor {

  // render() {
  //   return (
  //     <textarea></textarea>
  //   );
  // }

  render() {
    return (
      <storytree-splitter type="vertical" minSize={40} maxSize={90}>
        <div slot="left">
          <storytree-splitter type="horizontal" minSize={40} maxSize={90}>
            <div slot="top" class="editor"><textarea></textarea></div>
            <div slot="bottom" class="linker">
            <ion-card mode="md">
              <ion-card-content><strong>Go to the shop to find Mr. Buxley</strong></ion-card-content>
              </ion-card>          
              <ion-card mode="md">
              <ion-card-content><strong>Eat the golden egg!</strong></ion-card-content>
              </ion-card>          
              <ion-card mode="md">
              <ion-card-content><strong>Throw the egg at Serpentina</strong></ion-card-content>
              </ion-card>          
              <ion-card mode="md">
              <ion-card-content><strong>Wait for Serpentina to get closer</strong></ion-card-content>
            </ion-card>
            </div>
          </storytree-splitter>
        </div>
        <div slot="right" class="pageSettings">
            <form>
              <ion-item padding-right>
                <ion-label>ABC</ion-label>
                <select>
                  <option>ALKDJHAKJDSH</option>
                  <option>HGJKGHKGHJK^</option>
                  <option>^DFGHDFHSSSS</option>
                </select>
              </ion-item>
              <ion-item padding-right>
                <ion-label>XYZ</ion-label>
                <input type="checkbox" checked={true}/>
              </ion-item>
              <ion-button type="submit" expand="full">Update</ion-button>
            </form>
        </div>
      </storytree-splitter>
    );
  }

}



