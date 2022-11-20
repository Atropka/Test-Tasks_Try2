import "./App.css";
import Week from "./components/Week";

function App() {
  return (
    <div className="container">
      <nav>
        <div className="work_item">Work Item</div>
        <div className="tasks">
          <div className="task">
            <img src="/icons/1.svg" alt="1" /> Marketing launch
          </div>
          <div className="task">
            <img src="/icons/1.svg" alt="1" />
            Marketing launch
          </div>
          <div className="task">
            <img src="/icons/1.svg" alt="1" />
            Marketing launch
          </div>
          <div className="task">
            <img src="/icons/1.svg" alt="1" />
            Marketing launch
          </div>
          <div className="task">
            <img src="/icons/1.svg" alt="1" />
            Marketing launch
          </div>
          <div className="task">
            <img src="/icons/1.svg" alt="1" />
            Marketing launch
          </div>
        </div>
      </nav>
      <main>
        <div className="table">
          <div className="table_date">
            <Week />
            <Week />
            <Week />
            <Week />
            <Week />
            <Week />
          </div>

          <div className="table_overflow">
            <div className="table_base"></div>{" "}
            <div className="table_base"></div>
            <div className="table_base"></div>{" "}
            <div className="table_base"></div>
            <div className="table_base"></div>{" "}
            <div className="table_base"></div>
            <div className="table_base"></div>{" "}
            <div className="table_base"></div>
            <div className="table_base"></div>{" "}
            <div className="table_base"></div>
            <div className="table_base"></div>{" "}
            <div className="table_base"></div>
            <div className="table_base"></div>{" "}
            <div className="table_base"></div>
            <div className="table_base"></div>{" "}
            <div className="table_base"></div>
            <div className="table_base"></div>{" "}
            <div className="table_base"></div>
            <div className="table_base"></div>{" "}
            <div className="table_base"></div>
            <div className="table_base"></div>{" "}
            <div className="table_base"></div>
            <div className="table_base"></div>{" "}
            <div className="table_base"></div>
            <div className="table_base"></div>{" "}
            <div className="table_base"></div>
            <div className="table_base"></div>{" "}
            <div className="table_base"></div>
            <div className="table_base"></div>{" "}
            <div className="table_base"></div>
            <div className="table_base"></div>{" "}
            <div className="table_base"></div>
            <div className="table_base"></div>{" "}
            <div className="table_base"></div>
            <div className="table_base"></div>{" "}
            <div className="table_base"></div>
            <div className="table_base"></div>{" "}
            <div className="table_base"></div>
            <div className="table_base"></div>{" "}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
