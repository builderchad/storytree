import { Component, Element } from '@stencil/core';
import { DocNode } from './doc-node';


// const NS = 'http://www.w3.org/2000/svg';
// wireframe.addEventListener( 'change', function () {
//   stage.classList.toggle( 'wireframe' );
// });


@Component({
  tag: 'storytree-minimap',
  styleUrl: 'storytree-minimap.scss'
})
export class StorytreeMinimap {
  
  @Element() storytreeMinimapEl: HTMLElement;

  docMap: HTMLDivElement;
  svg: SVGSVGElement;
  selected: HTMLElement;

  // selection: HTMLElement;

  // selectionHighlighter: SVGRectElement;
  // focusHighlighter: SVGRectElement;

  // offset = { x: 0, y: 0 };

  setListeners() {
    this.svg.addEventListener( 'mouseover', () => this.updateSelection());

    this.svg.addEventListener( 'mousedown', (_event) => {
      // let target = event.target as SVGAElement;
      // let group = target.parentNode as SVGAElement;
      // if (target.isSameNode(this.svg) === false) {
        // this.offset.x = parseFloat(target.getAttribute( 'x' )) - event.clientX;
        // this.offset.y = parseFloat(target.getAttribute( 'y' )) - event.clientY;
        // this.offset.x = target.getBoundingClientRect().left;
        // this.offset.y = target.getBoundingClientRect().top;
        // this.offset.x = event.clientX;
        // this.offset.y = event.clientY;
        // console.log(this.offset);
        // this.selected = group;
        // this.bx = target;
        // this.updateSelection();
			// }
		});

		this.svg.addEventListener( 'mouseup', () => { this.selected = null });

		window.addEventListener( 'mousemove', (_event) => {

      // if (this.selected) {
        // if (g.transform.baseVal.numberOfItems == 0) {
        //   g.setAttribute("transform", "translate(" + 50 + ", " + 50 + ")");
        // } else {
        //   t  = g.transform.baseVal.getItem(0),
        //   t.setMatrix(t.matrix.translate(50, 50));
        // }
            
        // this.selected.setAttribute('transform', `translate(${event.clientX + this.offset.x},${event.clientY + this.offset.y})`);
        // console.log(`translate(${event.clientX + this.offset.x},${event.clientY + this.offset.y})`);       
        // this.selected.setAttribute('transform', `translate(${event.clientX - this.offset.x},${event.clientY - this.offset.y})`);       
        // this.selected.setAttribute('transform', `translate(${this.offset.x - event.clientX},${this.offset.y - event.clientY})`);
        // this.offset.x = event.clientX + this.offset.x;
        // this.offset.y = event.clientY + this.offset.y;
				// this.updateSelection();
      // }
    });

  }
 
  componentDidLoad() {
    // this.selection = document.createElement('span');
    
    this.selected = null;
    this.svg = this.storytreeMinimapEl.querySelector('svg');

    let firstNode = new DocNode(10, 20, "Start");
    this.addNode(firstNode);
    this.selectNode(firstNode);

        // new DocNode(230, 20, "Branch A");


    this.setListeners();

  }

  clear() { this.svg.textContent = ''; }
  addNode(node) { this.docMap.appendChild(node.getGroupNode()); }


  selectNode(node) {

    console.log('box:',node.getBounds());
//    let nodeBounds: SVGRect = node.getBBox();

  }


  updateSelection() {
    // if (this.selected) {
    //   if (this.selected.isSameNode(this.svg)) {
    //     this.selection.style.display = 'none';
    //   } else {
    //     let rect = this.selected.getBoundingClientRect();
    //     // let rect = this.selected.children[0].getBoundingClientRect();
    //     this.selection.style.left = rect.left + 'px';
    //     this.selection.style.top = rect.top + 'px';
    //     this.selection.style.width = rect.width + 'px';
    //     this.selection.style.height = rect.height + 'px';
    //     this.selection.style.display = 'block';
    //   }
    // }
	}

  render() {
    return [
      <div>
        <svg id="stage"></svg>
      </div>
    ]
  }


  // createRectangle(x: number, y: number) {
  //   let group = document.createElementNS( this.NS, 'g' );
  //   let box = document.createElementNS( this.NS, 'rect' );
  //   this.setAttributes(box, {
  //     'x': ''+x, 'y': ''+y,
  //     'rx': '3', 'ry': '3',
  //     'width': "100", 'height': "30",
  //     'fill': '#00ff00', 'stroke': 'black'
  //   });
  //   group.appendChild(box);

  //   let text = document.createElementNS( this.NS, 'text' );
  //   this.setAttributes(text, {
  //     'x': ''+(x+2), 'y': ''+(y+14),
  //     'font-size': '14px',
  //     'stroke': 'black', 'fill': '#509464'
  //   });
  //   text.textContent = 'START';
  //   group.appendChild(text);

  //   this.addElement(group);
  //   return group;
  // }

  // getOffset( el ) {
  //   var _x = 0;
  //   var _y = 0;
  //   while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
  //       _x += el.offsetLeft - el.scrollLeft;
  //       _y += el.offsetTop - el.scrollTop;
  //       el = el.offsetParent;
  //   }
  //   return { top: _y, left: _x };
  // }
  // var x = getOffset( document.getElementById('yourElId') ).left; 


  // addElement(element) {
  //   this.svg.appendChild(element);
  //   // this.svg.appendChild( document.createTextNode( '\n' ) );
  // }

  // setAttributes(el, attributes) {
  //   for (let key of Object.keys(attributes)) {
  //     el.setAttribute(key, attributes[key]);
  //   }
  // }

  // setSVG( svg ) {
  //   this.svg.innerHTML = svg.documentElement.innerHTML;
  // }


  // var divA       = document.querySelector("#a");
  // var divB       = document.querySelector("#b");
  // var arrowLeft  = document.querySelector("#arrowLeft");
  // var arrowRight = document.querySelector("#arrowRight");
  
  // drawConnector(from: SVGElement, to: SVGElement) {

    // var posnALeft = {
    //   x: divA.offsetLeft - 8,
    //   y: divA.offsetTop  + divA.offsetHeight / 2
    // };
    // var posnARight = {
    //   x: divA.offsetLeft + divA.offsetWidth + 8,
    //   y: divA.offsetTop  + divA.offsetHeight / 2    
    // };
    // var posnBLeft = {
    //   x: divB.offsetLeft - 8,
    //   y: divB.offsetTop  + divA.offsetHeight / 2
    // };
    // var posnBRight = {
    //   x: divB.offsetLeft + divB.offsetWidth + 8,
    //   y: divB.offsetTop  + divA.offsetHeight / 2
    // };
    // var dStrLeft =
    //     "M" +
    //     (posnALeft.x      ) + "," + (posnALeft.y) + " " +
    //     "C" +
    //     (posnALeft.x - 100) + "," + (posnALeft.y) + " " +
    //     (posnBLeft.x - 100) + "," + (posnBLeft.y) + " " +
    //     (posnBLeft.x      ) + "," + (posnBLeft.y);
    // arrowLeft.setAttribute("d", dStrLeft);
    // var dStrRight =
    //     "M" +
    //     (posnBRight.x      ) + "," + (posnBRight.y) + " " +
    //     "C" +
    //     (posnBRight.x + 100) + "," + (posnBRight.y) + " " +
    //     (posnARight.x + 100) + "," + (posnARight.y) + " " +
    //     (posnARight.x      ) + "," + (posnARight.y);
    // arrowRight.setAttribute("d", dStrRight);
  
  // }
  

}

