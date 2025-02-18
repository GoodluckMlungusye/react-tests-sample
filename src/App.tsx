import { useState } from 'react'
import './App.css'
import { ParagraphList } from './Paragraph';
import { ContentArea } from './Content';

function App() {
  const [selectedContent, setSelectedContent] = useState("");

  return (
    <div>
      <ParagraphList onSelect={setSelectedContent} />
      <ContentArea content={selectedContent} />
    </div>
  );

}

export default App
