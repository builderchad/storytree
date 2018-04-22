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
          <ion-item><ion-icon name="star"></ion-icon> &nbsp; Hosting on Firebase</ion-item>
          <ion-item><ion-icon name="star"></ion-icon> &nbsp; Firestore on Firebase</ion-item>
          <ion-item><ion-icon name="star-half"></ion-icon> &nbsp; UI layout</ion-item>

          <ion-item>
            <ion-icon name="cube"></ion-icon>
            <ion-list>
              <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Landing with notes on usage</ion-item>
              <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Editor view w/ mini-map and? live preview</ion-item>
              <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Login (in side-bar)</ion-item>
              <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Story load (in side-bar)</ion-item>
              <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Create story (in side-bar)</ion-item>
              <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Story settings, publish, export and delete (popup?)</ion-item>
              <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Story analysis report.  Select report types and their options, run, results in same page</ion-item>
            </ion-list>
          </ion-item>

          <ion-item><ion-icon name="star-half"></ion-icon> &nbsp; Soft/SPA routing</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Github repo</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Get running as a PWA</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Modals and Top-Right status bar</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; BDD test suite w/ CI</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Firebase integration: authentication</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Modal authentication views</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Experiment with online/offline db options</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Main editor prototype</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Basic story navigation (mini-map or similar)</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; DB integration</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Backup/export</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Story integrity test scripts</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Colours and theme</ion-item>
          <ion-item><ion-icon name="star-half"></ion-icon> &nbsp; Capacitor/Electron build</ion-item>
        </ion-list>

        <p>
        <ion-title>Next version:</ion-title>
        <ion-list>          
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Support for illustrations/plates</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Support for background music (possibly ambient sound as well)</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Further development of integrity test scripts</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; mxGraph or d3 or similar as a custom element?</ion-item>
          <ion-item><ion-icon name="star-outline"></ion-icon> &nbsp; Plugin system for addons such as a Stats system ala. Fighting Fantasy</ion-item>
        </ion-list>
        </p>

        <ion-button href='/profile/stencil'>
          Profile page
        </ion-button>
      </ion-content>
    ];
  }
}
