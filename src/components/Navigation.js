import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
const List = styled.li`
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
`;
class Navigation extends React.Component {
  PathHandler = page => {
    this.props.history.push(page);
  };
  render() {
    return (
      <div>
        <div className="App">
          <h1>React Router Mini</h1>
          <List onClick={() => this.PathHandler("/")}>Home</List>
          <List onClick={() => this.PathHandler("/About")}>About</List>
          <List onClick={() => this.PathHandler("/Contact")}>Contact</List>
          <List onClick={() => this.PathHandler("/Navigation")}>
            Navigation
          </List>
        </div>
      </div>
    );
  }
}

export default withRouter(Navigation);
