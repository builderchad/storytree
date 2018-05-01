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
			let posnARight = {
					x: this.fromDiv.offsetLeft + this.fromDiv.offsetWidth + 1,
					y: (this.fromDiv.offsetTop  + this.fromDiv.offsetHeight / 2) + 3
			};
			let posnBLeft = {
					x: this.toDiv.offsetLeft - 10,
					y: this.toDiv.offsetTop  + this.toDiv.offsetHeight / 2
			};

			let curveData = 
					"M" +
					(posnARight.x      ) + "," + (posnARight.y) + " " +
					"C" +
					(posnARight.x + 38) + "," + (posnARight.y) + " " +
					(posnBLeft.x - 38) + "," + (posnBLeft.y) + " " +
					(posnBLeft.x      ) + "," + (posnBLeft.y);    

			this.arrow.setAttribute("stroke", "#30af30");
			this.arrow.setAttribute("marker-end", "url(#arrow)");
			this.arrow.setAttribute("d", curveData);
    }
    
    setLeftArrow() {
			// Draw from right to left
			let posnALeft = {
					x: this.fromDiv.offsetLeft - 1,
					y: this.fromDiv.offsetTop  + this.fromDiv.offsetHeight / 2
			};
			let posnBRight = {
					x: this.toDiv.offsetLeft + this.toDiv.offsetWidth + 8,
					y: (this.toDiv.offsetTop  + this.toDiv.offsetHeight / 2) - 3
			};

			let curveData = 
					"M" +
					(posnALeft.x      ) + "," + (posnALeft.y) + " " +
					"C" +
					(posnALeft.x - 38) + "," + (posnALeft.y) + " " +
					(posnBRight.x + 38) + "," + (posnBRight.y) + " " +
					(posnBRight.x      ) + "," + (posnBRight.y);    
			
			this.arrow.setAttribute("stroke", "#3030af");
			this.arrow.setAttribute("marker-end", "url(#arrowB)");
			this.arrow.setAttribute("d", curveData);
    }

}
  