import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'storytree-splitter',
  styleUrl: 'storytree-splitter.scss'
})

export class StorytreeSplitter {

  @Element() splitterEl: HTMLElement;
  @Prop() type: string;
  @Prop() fullPage: boolean = false;
  @Prop() minSize: number = 30;
  @Prop() maxSize: number = 90;

  parentEl: HTMLElement;

  mainPane: HTMLElement;
  secondaryPane: HTMLElement;
  separator: HTMLElement;

  startX: number = 0;
  startY: number = 0;

  dragging: boolean = false;
  dragBinding: any;

  componentDidLoad() {

    this.splitterEl.classList.add(this.type);

    let allChildren = this.splitterEl.children;
    this.mainPane = allChildren[0] as HTMLElement;
    this.secondaryPane = allChildren[2] as HTMLElement;
    this.separator = allChildren[1] as HTMLElement;

    this.separator.addEventListener('mousedown', (event) => this.startDrag(event));
    window.addEventListener('mouseup', (event) => this.stopDrag(event));
    this.dragBinding = this.updateDrag.bind(this);
    this.parentEl = this.splitterEl.parentElement;

    if (this.type == 'horizontal') {
      if (this.fullPage) {
        this.setHeight(this.separator.getBoundingClientRect()['top'], this.parentEl.getBoundingClientRect()['height']);
      } else {
        setTimeout(() => this.setHeight(this.separator.getBoundingClientRect()['top'], this.parentEl.getBoundingClientRect()['height']), 200);
      }
    }
  }

  startDrag(event) {
    if (event.currentTarget == this.separator) {
      this.dragging = true;
      let left = this.separator.style.left ? parseInt(this.separator.style.left) : 0;
      let top = this.separator.style.top ? parseInt(this.separator.style.top) : 0;
      this.startX = event.pageX - left;
      this.startY = event.pageY - top;
      window.addEventListener('mousemove', this.dragBinding);
    }
    else {
      throw new Error("Your target must be an html element");
    }
  }

  stopDrag(_event) {
    if (this.dragging) {
      this.dragging = false;
      window.removeEventListener('mousemove', this.dragBinding);
    }
  }

  updateDrag(event) {
    
    if (this.type == 'vertical') { // horizontally constrain for vertical splitter

      let pageX = event.pageX;
      let containerWidth = this.parentEl.getBoundingClientRect()['width'];

      if (pageX < containerWidth * this.minSize / 100) {
          pageX = containerWidth * this.minSize / 100;
      }
      if (pageX > containerWidth * this.maxSize / 100) {
          pageX = containerWidth * this.maxSize / 100;
      }
  
      let main = pageX / containerWidth * 100;
      if (main < 0) { main = 0; }
      if (main > containerWidth) { main = containerWidth; }
  
      let secondary = (100-main-2);
      this.mainPane.style.width = main + '%';
      this.secondaryPane.style.width = secondary + '%';
      
    } else { // vertically constrain for horizontal splitter
      let pageY = event.pageY;
      let containerHeight = this.parentEl.getBoundingClientRect()['height'];
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
    let main = (pageY - 44) / containerHeight * 100;
    if (main < 0) { main = 0; }
    if (main > containerHeight) { main = containerHeight; }
  
    let secondary = (100-main-0.2);
    this.mainPane.style.height = main + '%';
    this.secondaryPane.style.height = secondary + '%';

    let inner = this.secondaryPane.children[0] as HTMLElement;
    if (inner && this.fullPage) { 
      inner.style.height = secondary + '%';
    }

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


      //TODO: change to parent element width (not window width)
      // if (pageX < window.innerWidth * this.minSize / 100) {
      //   pageX = window.innerWidth * this.minSize / 100;
      // }
      // if (pageX > window.innerWidth * this.maxSize / 100) {
      //     pageX = window.innerWidth * this.maxSize / 100;
      // }

      // let main = pageX / window.innerWidth * 100;
      // if (main < 0) {
      //   main = 0;
      // }
      // if (main > window.innerWidth) {
      //   main = window.innerWidth;
      // }
