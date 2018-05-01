import { DocArrow } from './doc-arrow';

export class DocNode {

  container: HTMLDivElement;
  currentX: number;
  currentY: number;
  arrows: DocArrow[];

  constructor(x, y, text) {
    this.container = document.createElement('div');
    this.setAttributes(this.container, { class: 'docGlyph', draggable: 'true' });
    this.container.style.left = x + 'px';
    this.container.style.top  = y + 'px';
    this.container.innerHTML  = text;
    this.container.addEventListener('dragstart', (event) => this.handleDragStart(event), false);
    this.container.addEventListener('dragend',   (event) => this.handleDragEnd(event),   false);
    this.arrows = [];
  }

  handleDragStart(event) {
    this.currentX = event.clientX - this.container.offsetLeft;
    this.currentY = event.clientY - this.container.offsetTop;
  }

  handleDragEnd(event) {
    this.container.style.left = (event.clientX - this.currentX) + 'px';
    this.container.style.top  = (event.clientY - this.currentY) + 'px';    
    this.arrows.forEach((docArrow) => docArrow.redraw())
  }

  addArrow(docArrow: DocArrow) {
    this.arrows.push(docArrow);
  }

  getEl() {
    return this.container;
  }

  setAttributes(el, attributes) {
    for (let key of Object.keys(attributes)) {
      el.setAttribute(key, attributes[key]);
    }
  }  
}


// getBounds() {
//   return this.container.getBoundingClientRect();
// }

    // this.container.addEventListener('drop', this.handleDrop, false);
    // this.groupNode = document.createElementNS(ns, 'g') as SVGGElement;
    // this.boxNode = document.createElementNS(ns, 'rect') as SVGRectElement;
    // this.setAttributes(this.boxNode, {
    //   'x': ''+x, 'y': ''+y,
    //   'rx': '3', 'ry': '3',
    //   'width': "100", 'height': "30",
    //   'fill': '#DBF8BB', 'stroke': 'black'
    // });
    // this.groupNode.appendChild(this.boxNode);

    // let textNode = document.createElementNS(ns, 'text');
    // this.setAttributes(textNode, {
    //   'x': ''+(x+2), 'y': ''+(y+14),
    //   'font-size': '14px',
    //   'fill': '#333333'
    // });
    // textNode.textContent = text;
    // this.groupNode.appendChild(textNode);

    // this.addElement(group);
    // return this;

// export class DocNode {

//   boxNode: SVGRectElement;
//   groupNode: SVGGElement;

//   constructor(x, y, text) {

//     let ns = 'http://www.w3.org/2000/svg';
//     this.groupNode = document.createElementNS(ns, 'g') as SVGGElement;
//     this.boxNode = document.createElementNS(ns, 'rect') as SVGRectElement;
//     this.setAttributes(this.boxNode, {
//       'x': ''+x, 'y': ''+y,
//       'rx': '3', 'ry': '3',
//       'width': "100", 'height': "30",
//       'fill': '#DBF8BB', 'stroke': 'black'
//     });
//     this.groupNode.appendChild(this.boxNode);

//     let textNode = document.createElementNS(ns, 'text');
//     this.setAttributes(textNode, {
//       'x': ''+(x+2), 'y': ''+(y+14),
//       'font-size': '14px',
//       'fill': '#333333'
//     });
//     textNode.textContent = text;
//     this.groupNode.appendChild(textNode);

//     // this.addElement(group);
//     // return this;
//   }

//   getBoxNode() {
//     return this.boxNode;
//   }

//   getGroupNode() {
//     return this.groupNode;
//   }

//   getBBox() {
//     console.log(this.groupNode.getBBox());
//     return this.boxNode.getBBox();
//   }

//   setAttributes(el, attributes) {
//     for (let key of Object.keys(attributes)) {
//       el.setAttribute(key, attributes[key]);
//     }
//   }  
// }
