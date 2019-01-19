import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Row,
  Col,
  Label
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { Control, LocalForm, Errors } from "react-redux-form";
import { FadeTransform, Fade, Stagger } from "react-animation-components";
const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;

function RenderDish({ dish }) {
  console.log("dish", dish);

  if (dish != null)
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)"
        }}
      >
        <Card>
          <CardImg top src={dish.image} alt={dish.author} />
          <CardBody>
            <CardTitle>{dish.author}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
  else return <div />;
}
function RenderComments({ comments, postComment, dishId }) {
  if (comments != null) {
    let commentList = (
      <Stagger in>
        {comments.map(comment => {
          return (
            <Fade in key={comment.id}>
              <li>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author},{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit"
                  }).format(new Date(Date.parse(comment.date)))}{" "}
                </p>
              </li>
            </Fade>
          );
        })}
      </Stagger>
    );
    return (
      <React.Fragment>
        <h3>Comments</h3>
        <ul className="list-unstyled">{commentList}</ul>

        <CommentForm dishId={dishId} postComment={postComment} />
      </React.Fragment>
    );
  } else return <div />;
}

const DishDetail = props => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.author}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.author}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>

          <div className="col-12 col-md-5 m-1">
            <RenderComments
              comments={props.comments}
              postComment={props.postComment}
              dishId={props.dish.id}
            />
          </div>
        </div>
      </div>
    );
  else return <div />;
};

export default DishDetail;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }
  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };
  handleSubmit(values) {
    this.toggleModal();
    //   console.log('Current State is: ' + JSON.stringify(values));
    //   alert('Current State is: ' + JSON.stringify(values));
    this.props.postComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
  }
  render() {
    return (
      <React.Fragment>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg" /> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={2}>
                  Rating
                </Label>
                <Col md={10}>
                  <Control.select
                    model=".rating"
                    author="Rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label
                  htmlFor="author
                                  "
                  md={2}
                >
                  Your Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".author
                                      "
                    id="author
                                      "
                    author="author
                                      "
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author
                                          "
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="Comment" md={2}>
                  Comment
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    author="comment"
                    rows="6"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 1, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
