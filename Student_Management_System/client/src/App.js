import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CreateStudent from './components/CreateStudent'
import StudentList from './components/StudentList'
import EditStudent from './components/EditStudent'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
            <Link to={'/stu-list'}  className="nav-link">
                    Student management system
              </Link>
            </Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav>
                
              <Link to={'/create-stu'}  className="nav-link">
                Add 
              </Link>
                </Nav>
            </Nav>
          </Container>
        </Navbar>
      <Container>
        <Row>
          <Col md={12}>
              <div className="wrapper">
                  <Switch>
                    <Route
                      exact
                      path="/"
                      component={(props) => <StudentList {...props}/> }
                    />
                     <Route
                      exact
                      path="/create-stu"
                      component={(props) => <CreateStudent {...props}/> }
                    />
                      <Route
                      exact
                      path="/edit-stu/:id"
                      component={(props) => <EditStudent  {...props}/>}
                    />
                     <Route
                      exact
                      path="/stu-list"
                      component={(props) => <StudentList {...props}/>}
                    />
                  </Switch>
              </div>

          </Col>
        </Row>
      </Container>
      </header>
      </Router>
    </div>
  );
}

export default App;
