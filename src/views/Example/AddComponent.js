import React from "react";
class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }

    handleOnChangeJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleOnClick = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Please!')
            return
        }
        this.props.addNewJob({
            id: Math.random(),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor='job'>Title</label><br />
                    <input type='text' value={this.state.title}
                        onChange={this.handleOnChangeJob} /><br />

                    <label htmlFor='salary'>Salary</label><br />
                    <input type='text' value={this.state.salary}
                        onChange={this.handleOnChangeSalary} /><br />

                    <input type='submit' onClick={this.handleOnClick} />
                </form>
            </>
        )
    }
}

export default AddComponent;