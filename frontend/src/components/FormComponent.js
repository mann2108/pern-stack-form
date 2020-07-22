import React, { Component } from 'react';
import {Navbar, NavbarBrand, Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';


class FormComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
            phoneNo : '',
            email : '',
            password1 : '',
            password2 : '',
            bio : '',
            dob : '',
            securityQue :'Favourite song?',
            answer : '',
            touched : {
                firstName : false,
                lastName : false,
                phoneNo : false,
                email : false,
                password1 : false,
                password2 : false,
                bio : false,
                dob : false,
                answer : false,
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }



    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        
    }

    handleSubmit(event) {
        event.preventDefault();

        var clientSideVerification = this.state.touched.firstName && this.state.touched.lastName && this.state.touched.phoneNo &&
        this.state.touched.email && this.state.password1 && this.state.password2 && this.state.bio && this.state.dob && this.state.answer ? true : false;
        
        if(clientSideVerification) {
            
            const errors = this.validateState(this.state.firstName, this.state.lastName, this.state.phoneNo, 
                this.state.email, this.state.password1, this.state.password2, this.state.bio, this.state.dob,
                this.state.answer);

            if(errors.firstName!=="") {
                clientSideVerification = false;
            } else if(errors.lastName!=="") {
                clientSideVerification = false;
            } else if(errors.phoneNo!=="") {
                clientSideVerification = false;
            } else if(errors.email!=="") {
                clientSideVerification = false;
            } else if(errors.password1!=="") {
                clientSideVerification = false;
            } else if(errors.password2!=="") {
                clientSideVerification = false;
            } else if(errors.bio!=="") {
                clientSideVerification = false;
            } else if(errors.dob!=="") {
                clientSideVerification = false;
            } else if(errors.answer!=="") {
                clientSideVerification = false;
            }
        }
        
        
        if(clientSideVerification) {
            alert("DONE");
        }
        else {
            alert("FIRST FILL THE FORM PROPERLY !");
        }
        
        
        //console.log('Current State is: ' + JSON.stringify(this.state));
        //alert('Current State is: ' + JSON.stringify(this.state));*/
        
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched : { ...this.state.touched, [field]: true}
        });
    }

    validateState(firstName, lastName, phoneNo, email, password1, password2, bio, dob, answer) {
        const errors = {
            firstName : '',
            lastName : '',
            phoneNo : '',
            email : '',
            password1 : '',
            password2 : '',
            bio : '',
            dob : '',
            answer : '',
        };

        if(this.state.touched.firstName && firstName.length<=2)
            errors.firstName = "First Name should be atleast 3 characters long";

        if(this.state.touched.lastName && lastName.length<=2)
            errors.lastName = "Last Name should be atleast 3 characters long";

        if(this.state.touched.phoneNo && phoneNo.length!==10 && phoneNo.split("").filter(x=>parseInt(x)>=0 && parseInt(x)<=9).length!==10)
            errors.phoneNo = "Phone no. is  invalid it should be exact 10 digits long";

        if(this.state.touched.email && email.split("").filter(x=>x==='@').length!==1)
            errors.email = "Please enter valid email addressed";

        if(this.state.touched.password1 && password1.length<=8)
            errors.password1 = "password is not satisfying all the required criteria";

        if(this.state.touched.password2 && password1!==password2)
            errors.password2 = "Password not matched";

        if(this.state.touched.bio && bio.length===0)
            errors.bio = "Bio is empty";

        if(this.state.touched.dob && dob.length===0)
            errors.dob = "dob is required";

        if(this.state.touched.answer && answer.length===0)
            errors.answer = "Answer should not be empty";
        
        return errors;
    }


    render() {

        const errors = this.validateState(this.state.firstName, this.state.lastName, this.state.phoneNo, 
            this.state.email, this.state.password1, this.state.password2, this.state.bio, this.state.dob,
            this.state.answer);
        

        const feedback = {
            color : 'red',
            fontSize : '12px'
        }

        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Demo Application</NavbarBrand>
                    </div>
                </Navbar>
                
                <div className="container" style={{marginLeft : 10, marginTop : 30}}>
                    <div className="row">
                        <div className="col-8">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label md={2}>First Name</Label>
                                    <Col>
                                        <Input type="text" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            value={this.state.firstname}
                                            onChange={this.handleInputChange}
                                            onBlur = {this.handleBlur('firstName')} />
                                            <p style={feedback}>{errors.firstName}</p>
                                    </Col>
                                </FormGroup>
                                
                                <FormGroup row>
                                    <Label md={2}>Last Name</Label>
                                    <Col>
                                        <Input type="text" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            value={this.state.lastName}
                                            onChange={this.handleInputChange} 
                                            onBlur = {this.handleBlur('lastName')} />
                                            <p style={feedback}>{errors.lastName}</p>
                                    </Col>                        
                                </FormGroup>

                                <FormGroup row>
                                    <Label md={2}>Phone No.</Label>
                                    <Col>
                                        <Input type="number" id="phoneNo" name="phoneNo"
                                            placeholder="Phone No."
                                            value={this.state.phoneNo}
                                            onChange={this.handleInputChange} 
                                            onBlur = {this.handleBlur('phoneNo')} />
                                            <p style={feedback}>{errors.phoneNo}</p>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label md={2}>Birth Date</Label>
                                    <Col>
                                        <Input type="date" id="dob" name="dob"
                                            placeholder="Date of Birth"
                                            value={this.state.dob}
                                            onChange={this.handleInputChange} 
                                            onBlur = {this.handleBlur('dob')} />
                                            <p style={feedback}>{errors.dob}</p>
                                    </Col>
                                </FormGroup>
                            
                                <FormGroup row>
                                    <Label md={2}>Email</Label>
                                    <Col>
                                        <Input type="email" id="email" name="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.handleInputChange} 
                                            onBlur = {this.handleBlur('email')} />
                                            <p style={feedback}>{errors.email}</p>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label md={2}>Password</Label>
                                    <Col>
                                        <Input type="password" id="password1" name="password1" 
                                        placeholder="Password" 
                                        value={this.state.password1}
                                        onChange={this.handleInputChange}
                                        onBlur = {this.handleBlur('password1')} />
                                        <p style={feedback}>{errors.password1}</p>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label md={2}>Confirm Password</Label>
                                    <Col>
                                        <Input type="password" id="password2" name="password2" 
                                        placeholder="Confirm Password" 
                                        value={this.state.password2}
                                        onChange={this.handleInputChange}
                                        onBlur = {this.handleBlur('password2')} />
                                        <p style={feedback}>{errors.password2}</p>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label md={2}>Security Question</Label>
                                    <Col>
                                        <Input type="select" name="securityQue" id="securityQue" value={this.state.securityQue} onChange={this.handleInputChange} >
                                            <option>Favourite song?</option>
                                            <option>Favourite programming language?</option>
                                            <option>Lucky number?</option>
                                            <option>First school name?</option>
                                            <option>Pet name?</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                
                                <FormGroup row>
                                    <Label md={2}>Answer</Label>
                                    <Col>
                                        <Input type="text" id="answer" name="answer"
                                            placeholder="Security Question Answer"
                                            value={this.state.answer}
                                            onChange={this.handleInputChange} 
                                            onBlur = {this.handleBlur('answer')} />
                                        <p style={feedback}>{errors.answer}</p>
                                    </Col> 
                                </FormGroup>

                                <FormGroup row>
                                    <Label md={2}>Bio</Label>
                                    <Col>
                                        <Input type="textarea" id="bio" name="bio"
                                            rows="12"
                                            value={this.state.bio}
                                            onChange={this.handleInputChange}
                                            onBlur = {this.handleBlur('bio')}>
                                        </Input>
                                        <p style={feedback}>{errors.bio}</p>
                                    </Col>
                                    
                                </FormGroup>
            
                                <FormGroup row>
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button type="submit" color="primary">
                                            Submit Form
                                        </Button>
                                    </Col>
                                </FormGroup>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormComponent;