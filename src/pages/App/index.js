import React from 'react';
import Navbar from '../../components/Navbar';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import './styles.scss';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      inputValue: ""
    }
  }

  handleData(inputValue) {
    this.setState({
      inputValue: inputValue
    })
  }
  render(){
    const { inputValue } = this.state;
    return(
      <React.Fragment>
        <Navbar showAutocomplete={true} getData={(inputValue) => this.handleData(inputValue)}/>
        <Cards filter={inputValue} />
        <Footer />
      </React.Fragment>
    )
  }
}


export default App;
