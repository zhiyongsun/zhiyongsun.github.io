import React, { Component } from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import readme from '../../blog/README.md'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    marked.setOptions({
      highlight: code => hljs.highlightAuto(code).value
    })
  }

  render(){
    return(
      <div dangerouslySetInnerHTML={{ __html: marked(readme) }} />
    );
  }
}

export default Home
