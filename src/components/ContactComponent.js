import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
import { Control, Form, Errors} from 'react-redux-form';
import { Link } from 'react-router-dom';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component {
    constructor(props) {
        super(props);

        
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    

    handleSubmit(values) {
        // console.log('Current State is: ' + JSON.stringify(values));
        // alert('Current State is: ' + JSON.stringify(values));
        this.props.postFeedback(values)
        this.props.resetFeedbackForm();
        // event.preventDefault();
    }
    render(){
        //const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        return (
        <div className="container">
        <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                {/* <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1"> */}
                <div className="col-6">
                    <h3>Location Information</h3>
                    <div className="col-12"></div>
                        <h5>Our Address</h5>
                        <address>
                        1898, Helton St<br />
                        Brooklyn,NY<br />
                        NEW YORK<br />
                        <i className="fa fa-phone"></i>: +347 943 2451<br />
                        <i className="fa fa-fax"></i>: +347 943 2451<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">greensgourmetone@gmail.com</a>
                        </address>
                        </div>
                    <div className="col-12">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                    

                </div>
    
        </div>
        )};
}


export default Contact;