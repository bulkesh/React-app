import React, { Component } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Content from './Content';
import Forms from './Forms';
import Header from './Header';
import LearnMore from './LearnMore';
import LifeCycle from './LifeCycle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: this.props.header,
      contentText: this.props.content
    };
  }

  render() {
    return (
      <div className="App">
       <Header header={this.state.headerText} />
       <div className="Template">
            <Routes>
              <Route exact path="/" element={<Forms />} />
              <Route exact path="/forms" element={<Forms />} />
              <Route exact path="/learn-more" element={<LearnMore />} />
              <Route exact path="/content" element={<Content />} />
              <Route exact path="/life-cycle" element={ <LifeCycle />} />
              {/* <Route path="*" element={<NotFound/>}/> */}
            </Routes>
            </div>
      </div>
    );
  }
}

App.defaultProps = {
  header: 'Welcome to React !!',
  content: 'Props Validation and Default Props !!'
}

export default App;
