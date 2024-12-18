import styles from "./App.module.css";
import Card from "./components/Card";
import fetchData from "./data/data.json";
import { CardType, State } from "./types/types";

function App() {
  const parsedData: CardType[] = fetchData.map((item) => ({
    ...item,
    createdAt: new Date(item.createdAt),
    controlDate: new Date(item.controlDate),
    doneDate: item.doneDate ? new Date(item.doneDate) : null,
    state: item.state as State,
  }));

  return (
    <div className={styles.main}>
      {parsedData.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
}

export default App;
