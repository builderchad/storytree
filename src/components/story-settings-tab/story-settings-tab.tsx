import { Component } from '@stencil/core';
@Component({
  tag: 'story-settings-tab',
  styleUrl: 'story-settings-tab.scss'
})
export class StorySettingsTab {

  render() {
    return [
      <ion-content>
        <ion-card mode="md">
          <ion-card-title>Settings</ion-card-title>
          <ion-card-content>
              ...
          </ion-card-content>
        </ion-card>
      </ion-content>
    ];
  }
}
