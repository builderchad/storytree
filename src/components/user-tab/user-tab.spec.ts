
import { TestWindow } from '@stencil/core/testing';
import { UserTab } from './user-tab';

describe('User Tab', () => {

  it('should update', async () => {
    await window.flush();
  });

  let element: HTMLAppHomeElement;
  let window: TestWindow;
  beforeEach(async () => {
    window = new TestWindow();
    element = await window.load({
      components: [UserTab],
      html: '<user-tab></user-tab>'
    });
  });
});
