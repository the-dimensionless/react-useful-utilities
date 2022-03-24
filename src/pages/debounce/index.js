import React from "react";
import DebounceLodash from "./DebounceLodash";
import DebounceRxJs from "./DebouncRxJs";

const DebounceDemo = () => {
  return (
    <div>
      <h4>
        Debouncing enforces that a function will not be called again until a
        certain amount of time has passed since its last call. As in “execute
        this function only if an amount of time (ex. 100 milliseconds) have
        passed without it being called.”
      </h4>
      <DebounceLodash />
      <DebounceRxJs />
    </div>
  );
};

export default <DebounceDemo />;
