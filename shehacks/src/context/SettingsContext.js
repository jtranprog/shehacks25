import { createContext, useState } from "react";

const SettingsContext = createContext({
  workMinutes: 25,
  breakMinutes: 5,
});

export default SettingsContext;
