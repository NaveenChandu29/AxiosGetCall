import { Component } from "react";
import Axios from "axios";

class AxiosCall extends Component {
  state = {
    axiosData: []
  };

  componentDidMount() {
    this.dataCall();
  }

  dataCall = async () => {
    await Axios.get("https://jsonplaceholder.typicode.com/posts").then((res) =>
      this.setState({ axiosData: res.data })
    );
  };

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
