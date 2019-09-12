import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { OutTable, ExcelRenderer } from "react-excel-renderer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cols: [], rows: [] };
  }

  fileHandler = event => {
    let fileObj = event.target.files[0];

    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          cols: resp.cols,
          rows: resp.rows
        });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Welcome to Excel Reader</h2>
          <input
            type="file"
            onChange={this.fileHandler.bind(this)}
            style={{ padding: "10px" }}
          />
          <OutTable
            data={this.state.rows}
            columns={this.state.cols}
            tableClassName="ExcelTable2007"
            tableHeaderRowClass="heading"
          />
        </header>
      </div>
    );
  }
}

export default App;
