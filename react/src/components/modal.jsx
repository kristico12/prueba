// Dependencies
import React, { createRef, Component, Fragment } from 'react';

class Modal extends Component {
	constructor() {
		super();
		this.esc = createRef();
	}
	back(e) {
        if (e.srcElement === this.esc.current) {
            this.props.back();
        }
    }
    backEsc(e) {
        const key = e.which || e.keyCode;
        if(key === 27){
            this.props.back();
        }
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.back.bind(this));
        document.addEventListener("keydown", this.backEsc.bind(this));
    }
    componentWillUnmount() {

        document.removeEventListener("mousedown", this.back.bind(this));
        document.removeEventListener("keydown", this.backEsc.bind(this));
    }
	render() {
		return (
			<Fragment>
				<div ref={this.esc} className="modal-section">
					<div className="modal-content">
						{this.props.children}
					</div>
				</div>
				<style jsx>{`
					.modal-section {
						display: flex;
						justify-content: center;
						align-items: center;
						position: fixed;
						z-index: 1000;
						left: 0;
						top: 0;
						width: 100%;
						height: 100%;
						overflow: auto;
						background-color: rgba(0,0,0,0.6);
					}
					.modal-content {
						background-color: white;
					}
				`}</style>
			</Fragment>
		);
	}
}
export default Modal;
