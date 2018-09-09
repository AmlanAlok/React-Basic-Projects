import React from 'react'
import ReactDOM from 'react-dom'

class SingleCustomer extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-lg-1 col-1">{this.props.name}</div>
                <div className="col-lg-1 col-1">{this.props.age}</div>
                <div className="col-lg-1 col-1">
                    <button type="submit" onClick={this.props.deleteClick}>DELETE</button>
                </div>
                <div className="col-lg-1 col-1">
                    <button type="submit" onClick={this.props.updateClick}>UPDATE</button>
                </div>
            </div>
        )
    }
}

export default SingleCustomer;