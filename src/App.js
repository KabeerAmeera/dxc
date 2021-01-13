import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { Modal, Button, Table } from "react-bootstrap";
//"bootstrap/dist/css/bootstrap.min.css"

class App extends Component{
constructor(props) {
    super(props);
    this.state = {
      orders: [],
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
      fileInfos: [],
      show: false,
      content: [],
    };
    this.selectFile = this.selectFile.bind(this);
    //this.upload = this.upload.bind(this);
  }
  selectFile(event) {
      console.log("inside select");
      this.setState({
        selectedFiles: event.target.files,
      });

      event.preventDefault();
      const reader = new FileReader();
      reader.onload = async (event) => {
        const text = event.target.result;
        const arr = text.split("\n");
        console.log(text);
        console.log(arr[0]);
        this.setState({
          content: arr,
        });
      };
      reader.readAsText(event.target.files[0]);
      this.showModal();
    }
    showModal = () => {
        this.setState({ show: true });
      };

      hideModal = () => {
        this.setState({ show: false });
      };
callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}
render(){
const {
      selectedFiles,
      currentFile,
      progress,
      message,
      content,
    } = this.state;
  return(
  <div class name="App">

  <Modal
            show={this.state.show}
            handleClose={this.hideModal}
            onHide={this.hideModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>Verify the CSV File Before Uploading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Table striped bordered hover size='sm'>
                <tbody>
                  {this.state.content
                    .slice(1, this.state.content.length - 1)
                    .map((data, index) => (


                      <tr key={data.split(",")[1]}>
                        <td>{index + 1}</td>
                        <td>{data.split(",")[0]}</td>
                        <td>{data.split(",")[1]}</td>
                        <td>{data.split(",")[2]}</td>
                        <td>{data.split(",")[3]}</td>
                        <td>{data.split(",")[4]}</td>
                        <td>{data.split(",")[5]}</td>
                        <td>{data.split(",")[6]}</td>
                        <td>{data.split(",")[7]}</td>
                        <td>{data.split(",")[8]}</td>
                        <td>{data.split(",")[9]}</td>
                        <td>{data.split(",")[10]}</td>
                        <td>{data.split(",")[11]}</td>
                        <td>{data.split(",")[13]}</td>



                      </tr>
                    ))}
                </tbody>
              </Table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={this.hideModal}>
              Close
              </Button>
              </Modal.Footer>
              </Modal>
   <label className='btn btn-default'>
                <input type='file' name='file' onChange={this.selectFile} />
              </label>
              <Table striped bordered hover size='sm'>
                              <tbody>
                                {this.state.content
                                  .slice(1, this.state.content.length - 1)
                                  .map((data, index) => (


                                    <tr key={data.split(",")[1]}>
                                      <td>{index + 1}</td>
                                      <td>{data.split(",")[0]}</td>
                                      <td>{data.split(",")[1]}</td>
                                      <td>{data.split(",")[2]}</td>
                                      <td>{data.split(",")[3]}</td>
                                      <td>{data.split(",")[4]}</td>
                                      <td>{data.split(",")[5]}</td>
                                      <td>{data.split(",")[6]}</td>
                                      <td>{data.split(",")[7]}</td>
                                      <td>{data.split(",")[8]}</td>
                                      <td>{data.split(",")[9]}</td>
                                      <td>{data.split(",")[10]}</td>
                                      <td>{data.split(",")[11]}</td>
                                      <td>{data.split(",")[13]}</td>



                                    </tr>
                                  ))}
                              </tbody>
                            </Table>
  </div>
  );
  }

}

export default App;
