import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class EditStudent extends Component {
    constructor(props){
        super(props)

       // this.onChangestuName =  this.onChangestuName.bind(this);

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
    onChangeStuID = (event) =>{
        this.setState({id:event.target.value})
    }


    onChangeStuFirstName = (event) => { 
        //console.log(event.target.value)   
        this.setState({firstname:event.target.value})
    }
    onChangeStuLastName = (event) => { 
        //console.log(event.target.value)   
        this.setState({lastname:event.target.value})
    }
    onChangeStuLocation = (event) => { 
        //console.log(event.target.value)   
        this.setState({location:event.target.value})
    }

    onChangeStuEmail = (event) => { 
    //console.log(event.target.value)   
    this.setState({email:event.target.value})
    }
    onChangeStuDOB = (event) => { 
        //console.log(event.target.value)   
        this.setState({dob:event.target.value})
    }

    onChangeStuEducation = (event) =>{
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
        axios.put('http://localhost:8000/stu/update-studata/' + this.props.match.params.id ,stuObject)
        .then((res) => { 
            console.log(res.data)
            console.log("student data Successfully updated")
        }).catch((error) =>{
            console.log(error)
        })

        // Redirect to stulist Component
        this.props.history.push('/stu-list')

    }

    componentDidMount(){
        axios.get('http://localhost:8000/stu/edit-studata/' + this.props.match.params.id)
        .then(res => {
            console.log(res);
            this.setState({
                id:res.data.id,
                firstname: res.data.firstname,
                lastname: res.data.lastname,
                location: res.data.location,
                email: res.data.email,
                dob: res.data.dob,
                education: res.data.education
               });
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return(<div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="ID">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" value={this.state.id} onChange={this.onChangeStuID} />
        </Form.Group>

        <Form.Group controlId="FirstName">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" value={this.state.firstname} onChange={this.onChangeStuFirstName} />
        </Form.Group>

        <Form.Group controlId="LastName">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" value={this.state.lastname} onChange={this.onChangeStuLastName} />
        </Form.Group>

        <Form.Group controlId="Location">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" value={this.state.location} onChange={this.onChangeStuLocation} />
        </Form.Group>


        <Form.Group controlId="Email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={this.state.email} onChange={this.onChangeStuEmail} />
        </Form.Group>

        <Form.Group controlId="Dob">
        <Form.Label>DOB</Form.Label>
        <Form.Control type="text" value={this.state.dob} onChange={this.onChangeStuDOB} />
        </Form.Group>


        <Form.Group controlId="Education">
        <Form.Label>Education</Form.Label>
        <Form.Control type="text" value={this.state.education} onChange={this.onChangeStuEducation} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" className="mt-4" type="submit">
             submit
        </Button>
        </Form>
     </div>
 )
    }
}