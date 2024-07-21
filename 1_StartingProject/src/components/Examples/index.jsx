import React, { useState } from "react";
import TabButton from "../TabButton";
import { EXAMPLES } from "../../data";
import Sections from "../Sections";
import Tabs from "../Tabs";

const Examples = () => {
  const [selectedTab, setSelectedTab] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTab(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTab) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTab].title}</h3>
        <p>{EXAMPLES[selectedTab].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTab].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Sections id="examples" title="Examples">
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTab === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              richText
              isSelected={selectedTab === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Sections>
  );
};

export default Examples;
