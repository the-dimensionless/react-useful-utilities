import { throttle } from "lodash";
import { useState } from "react";
import data from "../../constants/dummyData";

const AutoCompleteLodash = () => {
  const [results, setResults] = useState([]);

  const QueryCall = (value) =>
    setResults(data.filter((i) => i.name.startsWith(value)));

  const handleInput = (evt) => QueryCall(evt.target.value);

  const handleThrottledInput = throttle(handleInput, 100);

  return (
    <div className="container">
      <p>Lodash example</p>
      <label className="label">Search</label>
      <input
        placeholder="Search"
        onChange={handleThrottledInput}
        className="input"
      />
      <div>
        {results.map((i, index) => (
          <p key={index}>{i.name}</p>
        ))}
      </div>
    </div>
  );
};

export default AutoCompleteLodash;
