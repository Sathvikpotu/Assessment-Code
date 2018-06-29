import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";

class Item extends Component {
	handleClick = action => {
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
				<span className="delete" onClick={() => this.handleClick('delete')}>
					<Tooltip id="tooltip-fab" title="Close" placement="top">
						<CloseIcon color="action" />
					</Tooltip>
				</span>
				<Chip
					label="Complete"
					className="complete"
					onClick={() => this.handleClick('complete')}
					deleteIcon={<DoneIcon />}
				/>
			</div>
		);
	}
}

export default Item;
