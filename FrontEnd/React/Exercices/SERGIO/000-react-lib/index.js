const divRoot = document.getElementById("root");
const root = ReactDOM.createRoot(divRoot);

const h1 = React.createElement("h1", { key: 123 }, "Hola Mundo 1");
const h2 = React.createElement("h1", { key: 1234 }, "Hola Mundo 2");
const div = React.createElement("div", { key: 12345 }, [h1, h2]);

const NewRender = () => {
  return (
    <React.Fragment>
      <h1>Hola Mundo 1</h1>
      <h1>Hola Mundo 2</h1>
    </React.Fragment>
  );
};

const OtherRender = () => {
  const OnChangeHandler = (event) => {
    console.log("Tales");
  };
  const h1 = React.createElement("h1", { key: 123 }, "Consultar");

  const input = React.createElement("input", {
    key: 1234,
    placeholder: "Realizar Consulta",
    onChange: OnChangeHandler,
  });

  const div = React.createElement("div", { key: 12345 }, [h1, input]);
  return div;
};
//root.render(div);
root.render(OtherRender());
