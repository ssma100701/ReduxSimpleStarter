import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
      componentWillMount() {
          if(!this.props.authenticated) {
              this.props.history.push('/');
          }
      }

      componentWillUpdate(nextProps) {
        if(!nextProps.authenticated) {
            nextProps.history.push('/');
        }
      }

      render() {
          console.log(this.props);
          return <ComposedComponent {...this.props} />
      }
  }

  function mapStateToProps(state) {
      return {authenticated: state.authenticated};
  }

  return connect(mapStateToProps)(Authentication);
}
