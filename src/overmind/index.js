import { createStateHook } from "overmind-react";
import { state } from "./state";
export const config = {
  state,
};

export const useAppState = createStateHook();
