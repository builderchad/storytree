import { Component } from '@stencil/core';
@Component({
  tag: 'storytree-editor',
  styleUrl: 'storytree-editor.scss'
})
export class StorytreeEditor {

  // render() {
  //   return (
  //     <textarea></textarea>
  //   );
  // }

  render() {
    return [
      <storytree-splitter type="vertical" minSize={40} maxSize={90}>
        <div slot="left">
          <storytree-splitter type="horizontal" minSize={40} maxSize={90}>
            <div slot="top" class="editor"><textarea></textarea></div>
            <div slot="bottom" class="linker">some things</div>
          </storytree-splitter>
        </div>
        <div slot="right" class="pageSettings">
        </div>
      </storytree-splitter>
    ];
  }

}
