import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BehaviorSubject, debounceTime } from "rxjs";
import data from "../../constants/dummyData";

const DebounceRxJs = () => {
  const [results, setResults] = useState([]);
  const inputStream = useMemo(() => new BehaviorSubject("initial value"), []);
  let subscription = useRef();

  const QueryCall = useCallback(
    (evt) =>
      setResults(data.filter((i) => i.name.startsWith(evt.target?.value))),
    []
  );

  useEffect(() => {
    console.log("Debounce RxJs mounted");
    subscription.current = inputStream
      .pipe(debounceTime(100))
      .subscribe((value) => QueryCall(value));
  }, [QueryCall, inputStream]);

  return (
    <div className="container">
      <p>RxJs</p>
      <label>Search</label>
      <input
        placeholder="Search"
        onChange={(evt) => inputStream.next(evt)}
        className="input"
      />
      {results.map((i, index) => (
        <p key={index}>{i.name}</p>
      ))}
    </div>
  );
};

export default DebounceRxJs;
