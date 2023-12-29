// import React from "react";

import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

export const App = () => {
  return (
    <div>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </div>
  );
};
