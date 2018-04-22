import { Component } from '@stencil/core';
@Component({
  tag: 'story-list-tab',
  styleUrl: 'story-list-tab.scss'
})
export class StoryListTab {

  render() {
    return [
      <ion-content>
        <ion-card mode="md">
          <ion-card-title>List</ion-card-title>
          <ion-card-content>
              ...
          </ion-card-content>
        </ion-card>
      </ion-content>
    ];
  }
}
