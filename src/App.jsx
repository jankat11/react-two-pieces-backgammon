import { Button } from "react-bootstrap";
import Board from "./Board";
import { wrapperClass } from "./utility";

const App = () => {
  return (
    <>
      <section className={wrapperClass}>
        <Board />
        <article className="button-container">
          <p className="m-3 dice">dice</p>
          <div className="m-3">
            <Button className="btn-light border">white</Button>
          </div>
          <div className="m-3">
            <Button className="btn-dark">Black</Button>
          </div>
        </article>
      </section>
    </>
  );
};
export default App;
