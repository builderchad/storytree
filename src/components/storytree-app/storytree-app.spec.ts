import { TestWindow } from '@stencil/core/testing';
import { StorytreeApp as App } from './storytree-app';

describe('storytree-app', () => {

  it('should update', async () => {
    await window.flush();
  });

  let element: HTMLHomeViewElement;
  let window: TestWindow;
  beforeEach(async () => {
    window = new TestWindow();
    element = await window.load({
      components: [App],
      html: '<storytree-app></storytree-app>'
    });
  });
});

