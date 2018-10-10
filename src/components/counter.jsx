import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // imageUrl: "https://picsum.photos/200"
    tags: []
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = product => {
    // console.log("Increment Clicked", this);
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //   doHandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  render() {
    const product = { id: 1 };
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <div>
          {this.state.tags.length === 0 && "Please create a new tag"}
          {this.renderTags()}
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
