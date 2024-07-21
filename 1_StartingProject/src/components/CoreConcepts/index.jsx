import React from "react";
import { CORE_CONCEPTS } from "../../data";
import CoreConceptItem from "../CoreConceptItem";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((data) => (
          <CoreConceptItem {...data} key={data.title} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
