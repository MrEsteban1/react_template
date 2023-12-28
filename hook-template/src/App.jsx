import CounterApp from "./components/CounterApp";
import CounterWithCumtomHook from "./components/CounterWithCumtomHook";
import FormWithCusHook from "./components/FormWithCusHook";
import SimpleForm from "./components/SimpleForm";
import MultipleCustomHooks from "./components/examples/MultipleCustomHooks";

const App = () => {
  return (
    <>
      <h1>Hooks Pages</h1>
      <CounterApp />
      <CounterWithCumtomHook />
      {/* <SimpleForm />
      <FormWithCusHook /> */}
      <MultipleCustomHooks />
    </>
  );
};

export default App;
