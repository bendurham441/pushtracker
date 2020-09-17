import React from "react";

import Card from "../common/Card";

const Landing = ({ login }) => (
  <Card>
    This is the landing page
    <button
      onClick={() => {
        login(true);
      }}
    >
      Login
    </button>
  </Card>
);

export default Landing;
