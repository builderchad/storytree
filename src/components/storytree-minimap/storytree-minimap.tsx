import { Component, Element } from '@stencil/core';

// wireframe.addEventListener( 'change', function () {
//   stage.classList.toggle( 'wireframe' );
// });

@Component({
  tag: 'storytree-minimap',
  styleUrl: 'storytree-minimap.scss'
})
export class StorytreeMinimap {
  @Element() storytreeMinimapEl: HTMLElement;

  svg: SVGSVGElement;
  selected: SVGAElement;
  // bx: SVGAElement;
  selection: HTMLElement;
	offset = { x: 0, y: 0 };

  NS = 'http://www.w3.org/2000/svg';

  componentDidLoad() {
    this.selection = document.createElement('span');
    this.selected = null;
    this.svg = this.storytreeMinimapEl.querySelector('svg');
    this.createRectangle(10, 20);
    this.createRectangle(230, 20);

    this.svg.addEventListener( 'mouseover', () => this.updateSelection());

    this.svg.addEventListener( 'mousedown', (event) => {
      let target = event.target as SVGAElement;    
      let group = target.parentNode as SVGAElement;
      if (target.isSameNode(this.svg) === false) {
        // this.offset.x = parseFloat(target.getAttribute( 'x' )) - event.clientX;
        // this.offset.y = parseFloat(target.getAttribute( 'y' )) - event.clientY;
        this.offset.x = target.getBoundingClientRect().left;
        this.offset.y = target.getBoundingClientRect().top;
        // this.offset.x = event.clientX;
        // this.offset.y = event.clientY;
        console.log(this.offset);
        this.selected = group;
        // this.bx = target;
        this.updateSelection();
			}
		});

		this.svg.addEventListener( 'mouseup', () => { this.selected = null });

		window.addEventListener( 'mousemove', (event) => {
			if (this.selected) {
        this.selected.setAttribute('transform', `translate(${event.clientX + this.offset.x},${event.clientY + this.offset.y})`);       
        // this.selected.setAttribute('transform', `translate(${event.clientX},${event.clientY})`);       
        // this.selected.setAttribute('transform', `translate(${this.offset.x},${this.offset.y})`);       
				this.updateSelection();
      }
    });
    
    this.selection.style.position = 'absolute';
    this.selection.style.display = 'block';
    this.selection.style.outline = 'solid 2px #99f';
    this.selection.style.pointerEvents = 'none';
    this.storytreeMinimapEl.appendChild(this.selection);
  }

  updateSelection() {
    if (this.selected) {
      if (this.selected.isSameNode(this.svg)) {
        this.selection.style.display = 'none';
      } else {
        let rect = this.selected.getBoundingClientRect();
        // let rect = this.selected.children[0].getBoundingClientRect();
        this.selection.style.left = rect.left + 'px';
        this.selection.style.top = rect.top + 'px';
        this.selection.style.width = rect.width + 'px';
        this.selection.style.height = rect.height + 'px';
        this.selection.style.display = 'block';
      }
    }
	}


  createRectangle(x: number, y: number) {
    let group = document.createElementNS( this.NS, 'g' );
    let box = document.createElementNS( this.NS, 'rect' );
    this.setAttributes(box, {
      'x': ''+x, 'y': ''+y,
      'rx': '3', 'ry': '3',
      'width': "100", 'height': "30",
      'fill': '#00ff00', 'stroke': 'black'
    });
    group.appendChild(box);

    let text = document.createElementNS( this.NS, 'text' );
    this.setAttributes(text, {
      'x': ''+(x+2), 'y': ''+(y+14),
      'font-size': '14px',
      'stroke': 'black', 'fill': '#509464'
    });
    text.textContent = 'START';
    group.appendChild(text);

    this.addElement(group);
    return group;
  }

  addElement( element ) {
    this.svg.appendChild( element );
    // this.svg.appendChild( document.createTextNode( '\n' ) );
  }

  setAttributes(el, attributes) {
    for (let key of Object.keys(attributes)) {
      el.setAttribute(key, attributes[key]);
    }
  }

  setSVG( svg ) {
    this.svg.innerHTML = svg.documentElement.innerHTML;
  }

  clear() {
    this.svg.textContent = '';
  }

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
  
  render() {
    return [
      <div>
        <svg id="stage"></svg>
      </div>
    ]
  }

}

