import { useState } from "react";
import SearchForm from "../components/SearchForm";
import Card from "../components/Card";
import Layout from "../components/layout/Layout";

export default function Home() {
  const [results, setResults] = useState([]);

  return (
    <Layout>
      <div className="max-w-[90%] mx-auto p-6">
        <SearchForm enterCards={setResults}></SearchForm>
        <div className="">
          { results ? results.map(card => {
            return <Card key={card.id} cardData={card}></Card>;
          }) : ""}
        </div>
      </div>
    </Layout>
  );
}
