import axios from "axios";
import React, {Component} from "react";
import Table from 'react-bootstrap/Table'
import StuTable from './StuTable'
export default class StudentList extends Component {

    constructor(props){
        super(props)
        this.state = {
            studatalist:[]
        }
    }

    componentDidMount(){
       axios.get('http://localhost:8000/stu')
      
       .then(res =>{
            console.table(res.data)
            this.setState({
                studatalist: res.data
            });
       })
       .catch((error)=>{
        console.log(error)
       }) 

               
               

    }


    DataTable(){
        return this.state.studatalist.map((res,i) => {
            return <StuTable obj={res} key={i} />;
        });
    }


    render() {
        return(
            <div className="table-wrapper">
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Location</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Education</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.DataTable()}
                </tbody>

                </Table>
            </div>
        )
    }
}