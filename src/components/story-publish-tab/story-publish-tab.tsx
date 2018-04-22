import { Component } from '@stencil/core';
@Component({
  tag: 'story-publish-tab',
  styleUrl: 'story-publish-tab.scss'
})
export class StoryPublishTab {

  render() {
    return [
      <ion-content>
        <ion-card mode="md">
          <ion-card-title>Pub</ion-card-title>
          <ion-card-content>
              ...
          </ion-card-content>
        </ion-card>
      </ion-content>
    ];
  }
}
