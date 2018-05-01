import { Component } from '@stencil/core';
@Component({
  tag: 'home-view',
  styleUrl: 'home-view.scss'
})
export class HomeView {

  render() {
    return [
      
      <ion-header>
        <ion-navbar>
          <ion-menu-button id="appButton"><img src="assets/icon/android-icon-36x36.png"/></ion-menu-button>
          <label id="appTitle">Storytree</label>
        </ion-navbar>
      </ion-header>,
      <ion-content>
        <ion-title>First version:</ion-title>
        <ion-list>
          <ion-item><ion-icon name="star"></ion-icon> &nbsp; Get stable branch of Ionic running</ion-item>
          <ion-item><ion-icon name="star"></ion-icon> &nbsp; Github repo</ion-item>
          <ion-item><ion-icon name="star"></ion-icon> &nbsp; Hosting on Firebase</ion-item>
          <ion-item><ion-icon name="star"></ion-icon> &nbsp; Firestore on Firebase</ion-item>
          <ion-item><ion-icon name="star-half"></ion-icon> &nbsp; UI layout</ion-item>

          <ion-item>
            <ion-icon name="cube"></ion-icon>
            <ion-list>
              <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Landing with notes on usage</ion-item>
              <ion-item><ion-icon name="star-half"></ion-icon> &nbsp; Main text editor</ion-item>
              <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Page settings tab (rhs of text editor)</ion-item>
              <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Choices list (below text editor)</ion-item>
              <ion-item><ion-icon name="star-half"></ion-icon> &nbsp; Mini-map</ion-item>
              <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Resize handle btw text editor &amp; mmap</ion-item>
              <ion-item><ion-icon name="star-half"></ion-icon> &nbsp; Login &rarr; profile (side-bar)</ion-item>
              <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Story list &amp; create (side-bar)</ion-item>
              <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Story settings (side-bar)</ion-item>
              <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Testing &rarr; reports (side-bar)</ion-item>
              <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Publish and export (side-bar)</ion-item>
            </ion-list>
          </ion-item>
          <ion-item><ion-icon name="star-half"></ion-icon> &nbsp; DB integration</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Page saving &amp; versioning</ion-item>
          <ion-item><ion-icon name="star-half"></ion-icon> &nbsp; Soft/SPA routing</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Get running as a PWA</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; BDD test suite w/ CI</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Firebase integration: authentication</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Offline mode</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Backup/export</ion-item>
          <ion-item><ion-icon name="star-half"></ion-icon> &nbsp; Capacitor/Electron build</ion-item>
        </ion-list>

        <p>
        <ion-title>Next version:</ion-title>
        <ion-list>          
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; More story integrity test scripts</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Support for artwork</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Support for background music/ambient sounds</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Plugin support e.g. stats system ala. Fighting Fantasy</ion-item>
        </ion-list>
        </p>

        <ion-button href='/profile/stencil'>
          Profile page
        </ion-button>
      </ion-content>
    ];
  }
}
