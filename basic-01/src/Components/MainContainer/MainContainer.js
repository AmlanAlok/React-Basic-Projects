import React from 'react'
import ReactDOM from 'react-dom'
import './MainContainer.css'
import SingleCustomer from '../SingleCustomer/SingleCustomer'

class MainComponent extends React.Component{

    constructor(){
        super();
        this.state={
            allCustomers:[],
            
            // name:'',
            // age:''
            
                name:'',
                age:''
        
            
        }
        this.readName = this.readName.bind(this)
        this.readAge = this.readAge.bind(this)
        this.addCustomer = this.addCustomer.bind(this)
    }

    addCustomer(){
        console.log("add is working")
        console.log(this.state.name)
        console.log(this.state.age)

        var temp = {
            name : this.state.name,
            age : this.state.age
        }
        console.log(temp)
        this.state.name = ''
        this.state.age = ''
        console.log(this.state.allCustomers)
        this.state.allCustomers.push(temp)
        console.log(this.state.allCustomers)

        
   
    }

    deleteCustomer(deleteIndex){
        console.log(deleteIndex)
    }

    updateCustomer(updateIndex){
        console.log(updateIndex)
    }

    readName(e){
        console.log(e.target.value)
        this.setState({name: e.target.value})
    }

    readAge(e){
        console.log(e.target.value)
        this.setState({age:e.target.value})
    }

    check(){
        console.log("hello")
    }


    render(){
        return (
            <div>
                <div className="part1">
                    <form>
                        Name :
                        <input type="text" onChange={this.readName} value={this.state.name}></input>
                        <br/>
                        Age : 
                        <input type="text" onChange={this.readAge} value={this.state.age}></input>
                        <br/>
                        
                    </form>

                    {/* <button type="submit" onClick={this.check}>check</button> */}
                    <button type="submit" 
                                className="btn btn-primary"
                                onClick={this.addCustomer}>Add</button>
                </div>

                <div className="part2">
                    {
                        this.state.allCustomers.map((customer,index)=>(

                            <SingleCustomer key={index}
                                            name={customer.name}
                                            age={customer.age}
                                            deleteClick={()=>this.deleteCustomer(index)}
                                            updateClick={()=>this.updateCustomer(index)}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default MainComponent;