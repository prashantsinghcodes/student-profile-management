import React, { Component } from 'react';
import axios from "axios";
class App extends Component {
    componentDidMount() {
      // Runs after the first render() lifecycle
    axios.post('http://localhost:8080/student/save', {
      studentName : "Prashant Singh",
      phone : "08376818782"
    }).then(response => console.log(response));
    }
    render() {
      console.log('Render lifecycle')
      return <h1>Hello World!</h1>;
    }
}
export default App; 