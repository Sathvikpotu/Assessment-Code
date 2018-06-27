import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";

class Item extends Component {
	handleClick = e => {
		const action = e.currentTarget.getAttribute("action");
		const { id, completed, handleTodoAction } = this.props;
		if (!completed || action === "delete") {
			handleTodoAction({
				type: action,
				payload: {
					id
				}
			});
		}
	};

	render() {
		const { title, completed } = this.props;
		return (
			<div className={`todo-item ${completed ? "completed" : ""}`}>
				<span>{title}</span>
				<span action="delete" className="delete" onClick={this.handleClick}>
					<Tooltip id="tooltip-fab" title="Close" placement="top">
						<CloseIcon color="action" />
					</Tooltip>
				</span>
				<Chip
					label="Complete"
					action="complete"
					className="complete"
					onClick={this.handleClick}
					deleteIcon={<DoneIcon />}
				/>
			</div>
		);
	}
}

export default Item;
