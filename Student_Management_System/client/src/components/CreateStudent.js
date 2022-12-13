import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class CreateStudent extends Component {

    constructor(props){
        super(props)

       // this.onChangeStuName =  this.onChangeName.bind(this);

        this.state = {
            id:'',
            firstname: '',
            lastname: '',
            location: '',
            email:'',
            dob: '',
            education: ''
        }
    }

    onChangeID = (event) =>{
        this.setState({id:event.target.value})
    }


    onChangeFirstName = (event) => { 
        //console.log(event.target.value)   
        this.setState({firstname:event.target.value})
    }
    onChangeLastName = (event) => { 
        //console.log(event.target.value)   
        this.setState({lastname:event.target.value})
    }
    onChangeLocation = (event) => { 
        //console.log(event.target.value)   
        this.setState({location:event.target.value})
    }

    onChangeEmpEmail = (event) => { 
    //console.log(event.target.value)   
    this.setState({email:event.target.value})
    }
    onChangeDOB = (event) => { 
        //console.log(event.target.value)   
        this.setState({dob:event.target.value})
    }

    onChangeEducation = (event) =>{
        this.setState({education:event.target.value})
    }
    onSubmit = (event) => {
        event.preventDefault();
        console.log("I am Working")
        const stuObject = {
            id:this.state.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            location: this.state.location,
            email: this.state.email,
            dob: this.state.dob,
            education: this.state.education
        }
        console.log(stuObject);
        axios.post('http://localhost:8000/stu/create-student',stuObject)
        .then(res => console.log(res.data))

        this.setState({
            id:'',
            firstname: '',
            lastname: '',
            location: '',
            email:'',
            dob: '',
            education: ''
    })
    }


    render() {
        return(<div className="form-wrapper">
               <Form onSubmit={this.onSubmit}>
               <Form.Group controlId="ID">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" value={this.state.id} onChange={this.onChangeID} />
        </Form.Group>

        <Form.Group controlId="FirstName">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" value={this.state.firstname} onChange={this.onChangeFirstName} />
        </Form.Group>

        <Form.Group controlId="LastName">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" value={this.state.lastname} onChange={this.onChangeLastName} />
        </Form.Group>

        <Form.Group controlId="Location">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" value={this.state.location} onChange={this.onChangeLocation} />
        </Form.Group>


        <Form.Group controlId="Email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmpEmail} />
        </Form.Group>

        <Form.Group controlId="Dob">
        <Form.Label>DOB</Form.Label>
        <Form.Control type="text" value={this.state.dob} onChange={this.onChangeDOB} />
        </Form.Group>


        <Form.Group controlId="Education">
        <Form.Label>Education</Form.Label>
        <Form.Control type="text" value={this.state.education} onChange={this.onChangeEducation} />
        </Form.Group>

               <Button variant="danger" size="lg" block="block" className="mt-4" type="submit">
                    Create STU Details
               </Button>
               </Form>
            </div>
        )
    }
}