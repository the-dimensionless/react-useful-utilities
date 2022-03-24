import React from "react";
import AutoCompleteLodash from "./AutoCompleteLodash";
import AutoCompleteRxJs from "./AutoCompleteRxJs";

const ThrottlingDemo = () => {
  return (
    <div>
      <h4>
        Throttling enforces a maximum number of times a function can be called
        over time. As in “execute this function at most once every 100
        milliseconds.”
      </h4>
      <AutoCompleteLodash />
      <AutoCompleteRxJs />
    </div>
  );
};

export default <ThrottlingDemo />;
