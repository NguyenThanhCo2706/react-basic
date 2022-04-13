import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleOnClick = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDel = (job) => {
        console.log(job)
        this.props.deleteJob(job)
    }

    render() {
        let { arrJobs } = this.props;
        return (
            <>
                {
                    this.state.showJobs === true ?
                        <>
                            <div className="job-lists">
                                {
                                    arrJobs.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                {item.title} - {item.salary}
                                                <> </>
                                                <span onClick={() => this.handleOnClickDel(item)}>x</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div><button onClick={this.handleOnClick}>Hide</button></div>
                        </>
                        :
                        <div><button onClick={this.handleOnClick}>Show</button></div>
                }
            </>
        )
    }
}

export default ChildComponent;