import React, { Component } from 'react';
import jQCloud from 'jqcloud2';
import $ from 'jquery';

class jqCloudReact extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      word_array: this.props.word_array || [],
      jqStyle: this.props.jqStyle || { width: '550px', height: '350px' },
      jqID: this.props.jqID || 'jqcloud',
      colors: this.props.colors || ["#800026", "#bd0026", "#e31a1c", "#fc4e2a", "#fd8d3c", "#feb24c", "#fed976", "#ffeda0", "#ffffcc"],
      fontSize: this.props.fontSize || {from: 0.1,to: 0.02}
    }
  }

  componentDidMount() {
    this._wordCloud();
  }

  _wordCloud() {    
    $(this._cloud).jQCloud(this.state.word_array, {
                        classPattern: null,
                        colors: this.state.colors,
                        fontSize: this.state.fontSize
                        })

  }

  render() {
    return (
      <div ref={a => this._cloud = a} id={this.state.jqID} style={this.state.jqStyle}>
        {!this.state.word_array.length && 
          <div
            style={{
              textAlign: "center",
              fontSize: "20px",
              color: "#777777",
              padding: "25px 20px",
              border: "1px dashed #1c1c1c"
            }}
          >Please add words to generate cloud!</div>}
      </div>
    );
  }
}

export default jqCloudReact;
