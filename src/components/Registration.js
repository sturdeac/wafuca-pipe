import React, { Component } from "react";
import classnames from "classnames";
import { loadReCaptcha, ReCaptcha } from "react-recaptcha-google";

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      captcha: "",
      errors: {}
    };
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  componentDidMount() {
    loadReCaptcha();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.captcha.length > 0) {
      this.setState({
        name: "",
        email: "",
        captcha: ""
      });

      // const newUser = {
      //   name: this.state.name,
      //   email: this.state.email
      // };

      // this.props.registerUser(newUser, this.props.history);
    }
  };

  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }

  verifyCallback(recaptchaToken) {
    this.setState({ captcha: recaptchaToken });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="reg-body">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-xs-12 col-sm-8 col-md-6 mx-auto">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.name
                        })}
                        id="name"
                        value={this.state.name}
                        errors={errors.name}
                        placeholder="Enter Name"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.name
                        })}
                        id="email"
                        value={this.state.email}
                        errors={errors.email}
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={this.onChange}
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div>
                      <ReCaptcha
                        ref={el => {
                          this.captchaDemo = el;
                        }}
                        size="visible"
                        render="explicit"
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onloadCallback={this.onLoadRecaptcha}
                        verifyCallback={this.verifyCallback}
                      />
                      <button
                        onClick={this.onSubmit}
                        className="btn btn-primary mt-4"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
