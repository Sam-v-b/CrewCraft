import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployee = () => {

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();

    }, [])

    function getAllEmployees(){
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee() {
        navigator('/add-employee')
    }
    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }
    function removeEmployee(id){
       console.log(id);
       deleteEmployee(id).then((response)=>{
        getAllEmployees();
       }).catch(error=>{
        console.error(error);
       })
    }

    return (

        <div className='container 'style={{ overflowY: 'scroll', maxHeight: '450px' }}>

            <h2 className='text-center'>List Of Employees</h2>
            <br />
            <button type="button" className="btn btn-dark mb-2" onClick={addNewEmployee}>Add Employee</button>
            <div className="overflow-auto">
                <table className='table table-striped table-bordered table-hover table-light'>
                    <thead className="table-dark">
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((employee) =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <button className='btn btn-secondary'
                                            onClick={() => updateEmployee(employee.id)}>Update</button>
                                        <button className='btn btn-danger'
                                            onClick={() => removeEmployee(employee.id)}
                                            style={{marginLeft: '10px'}}
                                            >Delete</button>
                                    
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListEmployee