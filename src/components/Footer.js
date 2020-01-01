import React from "react";
import { Grid } from "@material-ui/core";

const FooterSecondary = () => (
  <div
    style={{
      backgroundColor: "#CA4040",
      color: "#FFF",
      padding: "40px 60px",
      position: "absolute"
    }}
  >
    <div>
      <div
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Grid container spacing={5}>
          <Grid item sm={4}>
            <h3>Discover Tricket</h3>
            <p>
              <small>
                Welcome to a place where words matter. On Tricket, smart voices
                and original ideas take center stage - with no ads in sight.
                Watch
              </small>
            </p>
          </Grid>
          <Grid item sm={4}>
            <h3>Makes Tricket yours</h3>
            <p>
              <small>
                Welcome to a place where words matter. On Tricket, smart voices
                and original ideas take center stage - with no ads in sight.
                Watch
              </small>
            </p>
          </Grid>
          <Grid item sm={4}>
            <h3>Become a Member</h3>
            <p>
              <small>
                Get unlimited access to the best stories on Medium — and support
                writers while you’re at it. Just $5/month. Upgrade
              </small>
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  </div>
);

export default FooterSecondary;
