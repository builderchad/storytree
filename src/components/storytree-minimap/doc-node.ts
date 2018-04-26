export class DocNode {

  container: HTMLDivElement;
  text: HTMLLabelElement;
  do_summat(ev) {
    console.log(ev);
  }

  constructor(x, y, text) {

    this.container = document.createElement('div');
    this.setAttributes(this.container, {
      class: "docGlyph",
      draggable: "true",
      ondragstart: (event) => this.do_summat(event)
    });

    this.container.style.left = x + 'px';
    this.container.style.top = y + 'px';
    // this.container.ondragstart(ev)

    this.container.innerHTML = "" + x + "," + y + ":" + text;

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
  }

  getEl() {
    return this.container;
  }

  getBounds() {
    // console.log(this.groupNode.getBBox());
    return this.container.getBoundingClientRect();
  }

  setAttributes(el, attributes) {
    for (let key of Object.keys(attributes)) {
      el.setAttribute(key, attributes[key]);
    }
  }  
}


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
