import React from 'react';

class Form extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submit(this.state.name)
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    let { target: { value, id }} = e;
    this.setState({ [id]: value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="name"
          placeholder="Add A Todo"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default Form;
