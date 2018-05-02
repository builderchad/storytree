const NS = 'http://www.w3.org/2000/svg';
export class DocArrow {

		arrow: SVGPathElement;
		sideToJoin: string;
		fromDiv: HTMLDivElement;
		toDiv: HTMLDivElement;

    constructor(fromNode, toNode, sideToJoin = 'right') {
			this.fromDiv = fromNode.getEl();
			this.toDiv = toNode.getEl();
			this.arrow = document.createElementNS(NS, 'path');
			this.sideToJoin = sideToJoin;
			this.arrow.setAttribute("fill", "none");
			this.arrow.setAttribute("stroke-width", "2");
			this.arrow.setAttribute("marker-end", "url(#arrow)");
			// this.arrow.setAttribute("style", "filter:url(#dropshadow)");
			this.redraw();
			fromNode.addArrow(this);
			toNode.addArrow(this);
    }

		getEl() {
			return this.arrow;
		}

		redraw() {
			if (this.sideToJoin == 'right') {
				this.setRightArrow();
			} else {
				this.setLeftArrow();
			}
		}

    setRightArrow() {
			// Draw from left to right
			let posARight = {
					x: this.fromDiv.offsetLeft + this.fromDiv.offsetWidth + 1,
					y: (this.fromDiv.offsetTop  + this.fromDiv.offsetHeight / 2) + 3
			};
			let posBLeft = {
					x: this.toDiv.offsetLeft - 14,
					y: this.toDiv.offsetTop  + this.toDiv.offsetHeight / 2
			};

			let curveData = 
					"M" +
					(posARight.x      ) + "," + (posARight.y) + " " +
					"C" +
					(posARight.x + 38) + "," + (posARight.y) + " " +
					(posBLeft.x - 38) + "," + (posBLeft.y) + " " +
					(posBLeft.x      ) + "," + (posBLeft.y);    

			this.arrow.setAttribute("stroke", "#55afab");
			this.arrow.setAttribute("marker-end", "url(#arrow)");
			this.arrow.setAttribute("d", curveData);
    }
    
    setLeftArrow() {
			// Draw from right to left
			let posALeft = {
					x: this.fromDiv.offsetLeft - 1,
					y: this.fromDiv.offsetTop  + this.fromDiv.offsetHeight / 2
			};
			let posBRight = {
					x: this.toDiv.offsetLeft + this.toDiv.offsetWidth + 12,
					y: (this.toDiv.offsetTop  + this.toDiv.offsetHeight / 2) - 3
			};

			let curveData = 
					"M" +
					(posALeft.x      ) + "," + (posALeft.y) + " " +
					"C" +
					(posALeft.x - 38) + "," + (posALeft.y) + " " +
					(posBRight.x + 38) + "," + (posBRight.y) + " " +
					(posBRight.x      ) + "," + (posBRight.y);    
			
			this.arrow.setAttribute("stroke", "#3030af");
			this.arrow.setAttribute("marker-end", "url(#arrowB)");
			this.arrow.setAttribute("d", curveData);
    }

}
  