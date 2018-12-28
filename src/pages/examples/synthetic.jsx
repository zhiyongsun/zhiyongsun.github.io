import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../../layout'
import config from '../../../data/SiteConfig'

class AboutPage extends Component {

  componentDidMount() {
    this.event = new Event('build')

    // Listen for the event.
    window.addEventListener('build', function(e) {
      alert('合成事件 build')
    }, false)

    // Dispatch the event.
  }

  handleclick = () => {
    window.dispatchEvent(this.event);
  }

  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`合成事件`}/>
          <div onClick={this.handleclick}>点击合成事件build</div>
        </div>
      </Layout>
    )
  }
}

export default AboutPage
