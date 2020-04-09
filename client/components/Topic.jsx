import React, {Component} from 'react'
import Nav from './Nav'
impot Comments from "./comments"
class Topic extends Component {
  render () {
    return (
      <Nav/>
      <div>
        <div>
        <img src="https://www.getastra.com/blog/wp-content/uploads/2017/05/xsql-injection-2-650x350.png.pagespeed.ic.UdZjd3jX0J.webp"/>
        </div>
        <div>
          <h1>A Title</h1>
          <h4>Name: Park Min Young</h4>
          <h4>Description</h4>
          <p>Description Description Description Description</p>
          <div>
            <div>
              <h4>Rating</h4>
              <div class="ui star rating" data-rating="3" max-rating="5"></div>
            </div>
            <button>EDIT INFO</button>
          </div>
        </div>
         

        <h1>Comments</h1>
        <div className="addComment">
          <div className="commentImg">

          </div>
          <input name="newComment" type="text" placeholder="posting publicly as guest"/>
          <button>Post Comment<button>
        </div>
      </div>
      <Comments />
    )
  }
}
