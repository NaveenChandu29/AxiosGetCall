import { Component } from "react";
import Axios from "axios";

class AxiosCall extends Component {
  state = {
    axiosData: []
  };
  

  componentDidMount() {
    this.data();
  }

  dataCall = async () => {
    await Axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>
      this.setState({ axiosData: res.data })
    );
  };
  

  
  data = () =>{
   const data = {
     firstName:"chandu"
   }
   
    Axios.post("https://jsonplaceholder.typicode.com/users",data).then(res =>console.log(res))
  }

  render() {
    const { axiosData } = this.state;
    axiosData.map((eachItem) => console.log(eachItem));
    return (
      <div>
        <h1>Axios Call</h1>
      </div>
    );
  }
}

export default AxiosCall;
