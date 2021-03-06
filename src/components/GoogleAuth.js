import React, { Component } from "react";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "697201807028-r90elb7uil79cr9980ctk25sb4cebubs.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }

  render() {
    return (
      <div>
        <div>Google Auth</div>
      </div>
    );
  }
}

export default GoogleAuth;
