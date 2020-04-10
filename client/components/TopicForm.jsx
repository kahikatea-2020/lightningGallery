import React, { Component } from "react";
import { newTopic } from "../api";
import { Form, TextArea } from "semantic-ui-react";

class FormTopic extends Component {
  state = {
    title: "",
    presenter: "",
    url: "",
    description: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    newTopic(this.state).then(() => {
      this.props.history.push("/");
    });
  };
  //
  render() {
    return (
      <div className="TopicFormContainer">
        <Form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <Form.Input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />

          <label>Presenter</label>
          <Form.Input
            type="text"
            name="presenter"
            onChange={this.handleChange}
            value={this.state.presenter}
          />

          <label>Url</label>
          <Form.Input
            type="text"
            name="url"
            onChange={this.handleChange}
            value={this.state.url}
          />

          <div className="textArea">
            <label>Description</label>
            <TextArea
              type="textarea"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </div>
    );
  }
}

export default FormTopic;
