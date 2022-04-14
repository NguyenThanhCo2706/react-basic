import React from "react";

class AddTodo extends React.Component {
    state = {
        job: ''
    }

    handleOnChange = (event) => {
        this.setState({
            job: event.target.value
        });
    }

    handleOnClick = () => {
        if (!this.state.job) {
            return;
        }
        this.props.AddJob({
            id: Math.random(),
            job: this.state.job
        })
        this.setState({
            // job: this.state = ''
            job: ''
        });
        console.log('oke')
    }
    render() {
        return (
            <div className="add-todo">
                <input type="text" value={this.state.job} onChange={this.handleOnChange} />
                <button type="button" className="add" onClick={this.handleOnClick}>Add</button>
            </div>
        )
    }
}

export default AddTodo;