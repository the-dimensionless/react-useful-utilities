import { debounce } from "lodash";
import { useState } from "react";
import data from "../../constants/dummyData";

const DebounceLodash = () => {
  const [results, setResults] = useState([]);

  const QueryCall = (evt) =>
    setResults(data.filter((i) => i.name.startsWith(evt.target.value)));

  const handleDebouncedInput = debounce(QueryCall, 100);

  return (
    <div className="container">
      <p>Lodash</p>
      <label>Search</label>
      <input
        placeholder="Search"
        onChange={handleDebouncedInput}
        className="input"
      />
      {results.map((i, index) => (
        <p key={index}>{i.name}</p>
      ))}
    </div>
  );
};

export default DebounceLodash;
