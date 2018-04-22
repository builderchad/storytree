import { Component } from '@stencil/core';
@Component({
  tag: 'user-tab',
  styleUrl: 'user-tab.scss'
})
export class UserTab {

  render() {
    return [
      <ion-content>
        <ion-card mode="md">
          <ion-card-content>
          <form>
            <ion-item padding-right>
              <ion-label>Username</ion-label>
              <ion-input type="text" name="username" autofocus={true}></ion-input>
            </ion-item>
            <ion-item padding-right>
              <ion-label>Password</ion-label>
              <ion-input type="text" name="password"></ion-input>
            </ion-item>
            <ion-button type="submit" expand="full">Login</ion-button>
          </form>
          </ion-card-content>
        </ion-card>
      </ion-content>
    ];
  }
}
