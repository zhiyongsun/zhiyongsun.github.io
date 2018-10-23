import React, { Fragment, Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Roster from './Roster'
import Schedule from './Schedule'
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const importAll = (r) => r.keys().map(r);


const markdownFiles = importAll(require.context('../../blog', false, /\.md$/))
  .sort()
  .reverse();


class WhatsNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
    }
  }
   componentDidMount() {
    const posts =  Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
      .catch((err) => console.error(err)).then(res=>{
        this.setState((state) => ({ ...state, posts:res }));
      });
  }

  render() {
    /* eslint-disable react/no-array-index-key */
    const { posts } = this.state;
    if(!posts.length){
      return null
    }
    return (
      <Fragment>
        <Helmet title="What's New" />
        <section className="hero">
          ... title stuff

        </section>
        <section className="section">
          <div className={`container`}>
            {
              posts.map((post, idx) => (
                <div className="card" key={idx}>
                  <div className="card-content">
                    <div className="content">
                      <ReactMarkdown source={post} />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      </Fragment>
    );
    /* eslint-enable react/no-array-index-key */
  }
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
      <Route path='/blog' component={WhatsNew}/>
    </Switch>
  </main>
)

export default Main
