import React from "react";
import Entry from "./Entry";
import EmojiArray from "../emojipedia";

function createEntry(entry) {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      description={entry.name}
      explanation={entry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{EmojiArray.map(createEntry)}</dl>
    </div>
  );
}

export default App;
