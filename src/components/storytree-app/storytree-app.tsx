import '@ionic/core';
import { Component, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'storytree-app',
  styleUrl: 'storytree-app.scss'
})
export class StorytreeApp {

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;

  /**
   * Handle service worker updates correctly.
   * This code will show a toast letting the
   * user of the PWA know that there is a
   * new version available. When they click the
   * reload button it then reloads the page
   * so that the new service worker can take over
   * and serve the fresh content
   */
  @Listen('window:swUpdate')
  async onSWUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'New version available',
      showCloseButton: true,
      closeButtonText: 'Reload'
    });
    await toast.present();
    await toast.onWillDismiss()
    window.location.reload();
  }
  
  openMenu() {

  }

  render() {
    return (
      <ion-app>
        <ion-menu menu-id="mainMenu" swipeEnabled={false}>

          <ion-content scrollEnabled={false}>
            <ion-tabs tabbarPlacement="top">
              <ion-tab icon="book" title="Stories" component="story-list-tab"></ion-tab>
              <ion-tab icon="construct" title="Settings" component="story-settings-tab"></ion-tab>
              <ion-tab icon="git-branch" title="Tests" component="story-test-tab"></ion-tab>
              <ion-tab icon="download" title="Export" component="story-publish-tab"></ion-tab>
              <ion-tab icon="happy" title="Profile" component="user-tab"></ion-tab>
            </ion-tabs>
         
          </ion-content>
        </ion-menu>        

        <ion-nav main root="editor-view"></ion-nav>
      </ion-app>
    );
  }
}

