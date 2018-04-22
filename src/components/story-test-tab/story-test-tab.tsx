import { Component } from '@stencil/core';
@Component({
  tag: 'story-test-tab',
  styleUrl: 'story-test-tab.scss'
})
export class StoryTestTab {

  render() {
    return [
      <ion-content>
        <ion-card mode="md">
          <ion-card-title>Test</ion-card-title>
          <ion-card-content>
              ...
          </ion-card-content>
        </ion-card>
      </ion-content>
    ];
  }
}
