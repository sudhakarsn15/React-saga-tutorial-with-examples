import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React saga tutorial with examples</h1>
      <h2>The initial setup</h2>
      <code>
        <pre>
          $ cd redux-saga-beginner-tutorial
          <br />$ npm install
        </pre>
      </code>
      <p>To start the application, run:</p>
      <code>$ npm start</code>
      <p>Create a file sagas.js then add the following snippet:</p>
      <pre>
        <code>
          export function* helloSaga()
          <br />
          {console.log("Hello Sagas!")}
        </code>
      </pre>
    </div>
  );
}
