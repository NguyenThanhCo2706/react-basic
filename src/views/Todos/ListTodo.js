import React from "react";
import './style.scss'
import AddTodo from "./AddTodo";
class ListTodos extends React.Component {

    state = {
        arrJobs: [
            { id: '1', job: 'HomeWork' },
            { id: '2', job: 'CleanWork' },
            { id: '3', job: 'Add new content' }
        ],
        editTodo: {}
    }

    AddTodo = (job) => {
        this.setState({
            // this.state.arrJobs = [...this.state.arrJobs, job]
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    DeleteTodo = (job) => {
        let newJobs = this.state.arrJobs.filter(item => item.id !== job.id)
        console.log(job.id)
        this.setState({
            // this.state.arrJobs = newJobs
            arrJobs: newJobs
        })
    }

    handleOnClickEdit = (job) => {
        console.log(job.id)
        this.setState({
            editTodo: job
        })
    }

    handleOnEditChange = (event) => {
        let job1 = { ...this.state.editTodo };
        job1.job = event.target.value
        console.log(job1)
        this.setState({
            editTodo: job1,

        })
    }

    handleOnClickSave = (job) => {
        let {arrJobs, editTodo} = this.state
        let copyArrJobs = [...arrJobs]
        let job_index = copyArrJobs.findIndex(item => item.id === job.id);
        copyArrJobs[job_index].job = editTodo.job
        console.log(editTodo)
        this.setState({
            arrJobs: copyArrJobs,
            editTodo: {}
        })

    }

    render() {
        let { arrJobs, editTodo } = this.state;
        return (
            <div className="list-todo-container">
                <AddTodo AddJob={this.AddTodo} />
                <div className="list-todo-content">
                    {arrJobs && arrJobs.length > 0 && arrJobs.map((item, index) => {
                        return (
                            <div className="todo-child" key={item.id}>
                                {editTodo.id == item.id ?
                                    <>
                                        <span>{index + 1} - <input value={editTodo.job} onChange={(event) => this.handleOnEditChange(event)} /></span>
                                        <button className="save" onClick={() => this.handleOnClickSave(item)}>Save</button>
                                    </>
                                    :
                                    <>
                                        <span>{index + 1} - {item.job}</span>
                                        <button className="edit" onClick={() => this.handleOnClickEdit(item)}>Edit</button>
                                        <button className="delete" onClick={() => this.DeleteTodo(item)}>Delete</button>
                                    </>
                                }


                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ListTodos;