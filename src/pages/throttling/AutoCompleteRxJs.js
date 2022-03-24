import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BehaviorSubject, throttleTime } from "rxjs";
import data from "../../constants/dummyData";

const AutoCompleteRxJs = () => {
  const [results, setResults] = useState([]);
  const inputStream = useMemo(() => new BehaviorSubject("initial"), []);
  let subscription = useRef();

  const QueryCall = useCallback(
    (value) => setResults(data.filter((i) => i.name.startsWith(value))),
    []
  );

  useEffect(() => {
    console.log("Throttling RxJs Mounted");
    subscription.current = inputStream
      .pipe(throttleTime(100))
      .subscribe((value) => QueryCall(value));
  }, [QueryCall, inputStream]);

  /* useEffect(() => {
    console.log("Subscription is", subscription);
    console.log("inputstream", inputStream.getValue());
  }); */

  return (
    <div className="container">
      <p>RxJs example</p>
      <label className="label">Search</label>
      <input
        placeholder="Search"
        onChange={(evt) => inputStream.next(evt.target.value)}
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

export default AutoCompleteRxJs;
