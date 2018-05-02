// simpledrag code by LingTalfi (https://github.com/lingtalfi)
import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'storytree-splitter',
  styleUrl: 'storytree-splitter.scss'
})

export class StorytreeSplitter {

  @Element() splitterEl: HTMLElement;
  @Prop() type: string;
  @Prop() heightTo: string;

  @Prop() minSize: number = 30;
  @Prop() maxSize: number = 90;

  heightEl: HTMLElement;

  leftPane: HTMLElement;
  rightPane: HTMLElement;
  separator: HTMLElement;

  startX: number = 0;
  startY: number = 0;

  dragging: boolean = false;
  dragBinding: any;

  // @Listen('window:resize')
  // handleResize(_ev) {
  //   if (this.type == 'horizontal') {
  //     this.fitToHeight();
  //   }
  // } 

  componentDidLoad() {

    this.splitterEl.classList.add(this.type);

    let allChildren = this.splitterEl.children;
    this.leftPane = allChildren[0] as HTMLElement;
    this.rightPane = allChildren[2] as HTMLElement;
    this.separator = allChildren[1] as HTMLElement;

    this.separator.addEventListener('mousedown', (event) => this.startDrag(event));
    window.addEventListener('mouseup', (event) => this.stopDrag(event));
    this.dragBinding = this.updateDrag.bind(this);

    if (this.type == 'horizontal') {
      if (this.heightTo) {
        this.heightEl = document.getElementById(this.heightTo);
      }

      if (!this.heightEl) {
        this.heightEl = this.splitterEl.parentElement;
      }
      // this.handleResize(null);
      this.setHeight(this.separator.getBoundingClientRect()['top'], this.heightEl.getBoundingClientRect()['height']);
    }
  }

  fitToHeight() {
  }

  startDrag(event) {
    if (event.currentTarget == this.separator) {
      console.log("SCR: ", this.type, this.splitterEl.parentElement);
      this.dragging = true;
      let left = this.separator.style.left ? parseInt(this.separator.style.left) : 0;
      let top = this.separator.style.top ? parseInt(this.separator.style.top) : 0;
      this.startX = event.pageX - left;
      this.startY = event.pageY - top;
      console.log("top", this.startX, this.startY);
      // window.addEventListener('mousemove', (event) => this.updateDrag(event));
      window.addEventListener('mousemove', this.dragBinding);
    }
    else {
      throw new Error("Your target must be an html element");
    }
  }

  stopDrag(_event) {
    if (this.dragging) {
      this.dragging = false;
      // window.removeEventListener('mousemove', (event) => this.updateDrag(event));
      window.removeEventListener('mousemove', this.dragBinding);
    }
  }


  updateDrag(event) {

    if (this.type == 'vertical') { // horizontally constrain for vertical splitter

      let pageX = event.pageX;

      if (pageX < window.innerWidth * this.minSize / 100) {
          pageX = window.innerWidth * this.minSize / 100;
      }
      if (pageX > window.innerWidth * this.maxSize / 100) {
          pageX = window.innerWidth * this.maxSize / 100;
      }
  
      let cur = pageX / window.innerWidth * 100;
      if (cur < 0) {
          cur = 0;
      }
      if (cur > window.innerWidth) {
          cur = window.innerWidth;
      }
  
      let right = (100-cur-2);
      this.leftPane.style.width = cur + '%';
      this.rightPane.style.width = right + '%';
      
    } else { // vertically constrain for horizontal splitter
      let pageY = event.pageY;

      let containerHeight = this.heightEl.getBoundingClientRect()['height'];
  
      if (pageY < containerHeight * this.minSize / 100) {
          pageY = containerHeight * this.minSize / 100;
      }
      if (pageY > containerHeight * this.maxSize / 100) {
          pageY = containerHeight * this.maxSize / 100;
      }
  
      this.setHeight(pageY, containerHeight);

    }
  }

  setHeight(pageY, containerHeight) {
    let cur = (pageY - 38) / containerHeight * 100;
    if (cur < 0) {
        cur = 0;
    }
    if (cur > containerHeight) {
        cur = containerHeight;
    }
  
    let bottom = (100-cur);
    this.leftPane.style.height = cur + '%';
    this.rightPane.style.height = bottom + '%';
    let inner = this.rightPane.children[0] as HTMLElement;
    if (inner) { inner.style.height = bottom + '%'; }
  }

  render() {
    if (this.type == 'horizontal') {
      return [
        <slot name="top" />,
        <div class={this.type}></div>,
        <slot name="bottom" />
      ];
    } else {
      return [
        <slot name="left" />,
        <div class={this.type}></div>,
        <slot name="right" />
      ];      
    }
  }

}

// {/* <div class="panes-container">
//     <div class="left-pane" id="left-pane">
//     </div>
//     <div class="panes-separator" id="panes-separator"></div>
//     <div class="right-pane" id="right-pane">
//     </div>
// </div> */}





/**
 * THIS OBJECT WILL ONLY WORK IF your target is positioned relative or absolute,
 * or anything that works with the top and left css properties (not static).
 *
 * Howto
 * ============
 *
 * document.getElementById('my_target').sdrag();
 *
 * onDrag, onStop
 * -------------------
 * document.getElementById('my_target').sdrag(onDrag, null);
 * document.getElementById('my_target').sdrag(null, onStop);
 * document.getElementById('my_target').sdrag(onDrag, onStop);
 *
 * Both onDrag and onStop callback take the following arguments:
 *
 * - el, the currentTarget element (#my_target in the above examples)
 * - pageX: the mouse event's pageX property (horizontal position of the mouse compared to the viewport)
 * - startX: the distance from the element's left property to the horizontal mouse position in the viewport.
 *                  Usually, you don't need to use that property; it is internally used to fix the undesirable
 *                  offset that naturally occurs when you don't drag the element by its top left corner
 *                  (for instance if you drag the element from its center).
 * - pageY: the mouse event's pageX property (horizontal position of the mouse compared to the viewport)
 * - startY: same as startX, but for the vertical axis (and element's top property)
 *
 *
 *
 * The onDrag callback accepts an extra argument: fix.
 *
 * fix is an array used to fix the coordinates applied to the target.
 *
 * It can be used to constrain the movement of the target inside of a virtual rectangle area for instance.
 * Put a variable in the fix array to override it.
 * The possible keys are:
 *
 * - pageX
 * - startX
 * - pageY
 * - startY
 * - skipX
 * - skipY
 *
 * skipX and skipY let you skip the updating of the target's left property.
 * This might be required in some cases where the positioning of the target
 * is automatically done by the means of other css properties.
 *
 * 
 *
 *
 *
 *
 * Direction
 * -------------
 * With direction, you can constrain the drag to one direction only: horizontal or vertical.
 * Accepted values are:
 *
 * - <undefined> (the default)
 * - vertical
 * - horizontal
 *
 *
 *
 *
 */

// simple drag
// function sdrag(onDrag, onStop, direction) {

//     var startX = 0;
//     var startY = 0;
//     var el = this;
//     var dragging = false;

//     function move(e) {

//         var fix = {};
//         onDrag && onDrag(el, e.pageX, startX, e.pageY, startY, fix);
//         if ('vertical' !== direction) {
//             var pageX = ('pageX' in fix) ? fix.pageX : e.pageX;
//             if ('startX' in fix) {
//                 startX = fix.startX;
//             }
//             if (false === ('skipX' in fix)) {
//                 el.style.left = (pageX - startX) + 'px';
//             }
//         }
//         if ('horizontal' !== direction) {
//             var pageY = ('pageY' in fix) ? fix.pageY : e.pageY;
//             if ('startY' in fix) {
//                 startY = fix.startY;
//             }
//             if (false === ('skipY' in fix)) {
//                 el.style.top = (pageY - startY) + 'px';
//             }
//         }
//     }

//     function startDragging(e) {
//         if (e.currentTarget instanceof HTMLElement || e.currentTarget instanceof SVGElement) {
//             dragging = true;
//             var left = el.style.left ? parseInt(el.style.left) : 0;
//             var top = el.style.top ? parseInt(el.style.top) : 0;
//             startX = e.pageX - left;
//             startY = e.pageY - top;
//             window.addEventListener('mousemove', move);
//         }
//         else {
//             throw new Error("Your target must be an html element");
//         }
//     }

//     this.addEventListener('mousedown', startDragging);
//     window.addEventListener('mouseup', function (e) {
//         if (true === dragging) {
//             dragging = false;
//             window.removeEventListener('mousemove', move);
//             onStop && onStop(el, e.pageX, startX, e.pageY, startY);
//         }
//     });
// }

// Element.prototype.sdrag = sdrag;
// })();