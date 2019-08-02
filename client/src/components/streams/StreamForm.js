import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderError = meta => {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    const error = meta.error && meta.touched ? "error" : "";
    return (
      <div className={`field ${error}`}>
        <label>{label}</label>
        <input type="text" {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = values => {
    this.props.onFormSubmit(values);
  };

  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <h3 className="ui header">{this.props.formHeader}</h3>
          <Field name="title" component={this.renderInput} label="Title" />
          <Field
            name="description"
            component={this.renderInput}
            label="Description"
          />
          <button className="ui primary button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Please input stream title.";
  }
  if (!values.description) {
    errors.description = "Please input stream description.";
  }
  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate
})(StreamForm);
