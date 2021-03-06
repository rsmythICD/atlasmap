import React, { FunctionComponent } from "react";

import { Toolbar } from "@patternfly/react-core";
import { css, StyleSheet } from "@patternfly/react-styles";

const styles = StyleSheet.create({
  toolbar: { borderBottom: "1px solid #ccc" },
});

export const ContextToolbar: FunctionComponent = ({ children }) => (
  <Toolbar
    id="data-toolbar"
    className={css("view-toolbar pf-u-px-md pf-u-py-md", styles.toolbar)}
    role={"complementary"}
  >
    {children}
  </Toolbar>
);
