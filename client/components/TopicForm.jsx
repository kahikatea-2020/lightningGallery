import React, { Component } from "react"
import { newTopic } from "../api"

export class FormTopic extends Component {
  state = {
    title: "",
    presenter: "",
    url: "",
    description: "",
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    newTopic(this.state).then(() => {
      this.props.history.push("/")
    })
  }

  render() {
    return (
      <div className='topicForm'>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <input
              type='text'
              name='title'
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div class='topicForm'>
            <label>Presenter</label>
            <input
              type='text'
              name='presenter'
              onChange={this.handleChange}
              value={this.state.presenter}
            />
          </div>
          <div class='topicForm'>
            <label>Url</label>
            <input
              type='text'
              name='url'
              onChange={this.handleChange}
              value={this.state.url}
            />
          </div>
          <div class='topicForm'>
            <label>Description</label>
            <input
              type='text'
              name='description'
              onChange={this.handleChange}
              value={this.state.description}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default FormTopic
