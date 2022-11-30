import { useState } from "react";
import SearchForm from "../components/SearchForm";
import SetList from "../components/SetList";
import Layout from "../components/layout/Layout";

export default function Home() {
  const [results, setResults] = useState();
  let ctr = 0;
  return (
    <Layout>
      <div className="max-w-[90%] mx-auto p-6">
        <SearchForm enterCards={setResults}></SearchForm>
        <div className="bg-opacity-50">
          {results
            ? Object.entries(results).map(([setName, cards]) => {
                ctr++;
                return (
                  <SetList
                    key={setName}
                    name={setName}
                    cards={cards}
                    id={`accrodion-${ctr}`}
                  ></SetList>
                );
              })
            : ""}
        </div>
      </div>
    </Layout>
  );
}
