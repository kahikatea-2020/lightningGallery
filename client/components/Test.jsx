import React, { Component } from 'react'
import { getTopics } from '../api'

export default class Test extends Component {
	state = {
		topics: ''
	}

	componentDidMount() {
		getTopics().then((topics) => {
			this.setState({ topics: topics.data })
		})
	}

	render() {
		console.log(this.state)
		return <div>Test topics</div>
	}
}
