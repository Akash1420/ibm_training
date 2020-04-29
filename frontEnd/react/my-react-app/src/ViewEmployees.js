import React, { Component } from 'react';

class ViewEmployees extends Component {
    
    constructor(props){
        super(props)
        this.state= {employees: null}
    }

    componentWillMount() {
        fetch('http://localhost:8000/api/employee')
        .then(res=> res.json())
        .then(result=>{
            console.log(result)
            this.setState({employees: result})
        })
    }

    handleNameChange(event){
        // console.log('change event fired')
        // console.log(event.target.value);
        this.setState({name: event.target.value})
    }
    handleSalaryChange(event){
        // console.log('change event fired')
        // console.log(event.target.value);
        this.setState({salary: event.target.value})
    }

    

      handleDelete(item) {
          console.log("Deletion Attempted");
          console.log(item.id);
          fetch('http://localhost:8000/api/employee/' + item.id, {
                method: 'DELETE',
                headers: {
                    'Content-Type' : 'application/json'
                },
            })
            .then(res=>{
                console.log(res);
                this.setState({message: 'Employee deleted successfully'})
            })

      }

    //   handleUpdate(event, item){
    //       console.log("Updation Attempted");
    //       console.log('A name was submitted: ' + this.state.name , this.state.salary);
    //       fetch('http://localhost:8000/api/employee/' , {
    //           method: 'PUT',
    //           headers: {
    //               'Content=Type' : 'application/json'
    //           },
    //           body: JSON.stringify({name:this.state.name, salary: this.state.salary })
    //       })
    //       .then(res=>{
    //           console.log(res);
    //           this.setState({message : 'Employee Updated Successfully'})
    //       })
    //   }

    render() {
        if(!this.state.employees)
            return null;

        var employeeList = this.state.employees.map((employee, i)=> {
            var eid=employee.id
           
            return (
               <li>{employee.name} - {employee.salary}-{eid} 
               <input type="button" onClick={this.handleDelete.bind(this, employee)} value="Delete Employee" />
               
               </li>
            )
        })    
        return (
            <div>
                

                <ul>
                    {employeeList} 
                </ul>
            </div>
        );
    }
}

export default ViewEmployees;