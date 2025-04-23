import React from "react";
import { Button } from "./SharedComponents";

export const ContentA = () => {
  return (
    <section style={{ padding: "2rem" }}>
      <h2>Content A</h2>
      <p>This is some sample content for Content A.</p>
      <Button label="Click A" />
    </section>
  );
};
