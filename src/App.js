// src/App.js
import ClickButton from './ClickButton';         // Import ClickButton component
import SimpleForm from './SimpleForm';           // Import SimpleForm component
import MultiFieldForm from './MultiFieldForm';   // Import MultiFieldForm component

function App() {
  return (
    <div>
      <h1>React Event Handling and Forms</h1>
      <ClickButton />        {/* Use ClickButton component */}
      <SimpleForm />         {/* Use SimpleForm component */}
      <MultiFieldForm />     {/* Use MultiFieldForm component */}
    </div>
  );
}

export default App;
