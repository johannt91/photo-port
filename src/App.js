import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([ // useState makes sure that data is persistent across files
    {
      name: "commercial",
      description: "Photo of grocery stores, food trucks, and other commercial projects",
    },
    { 
      name: "portraits",
      description: "Portraits of people in my life"
    },
    {
      name: "food",
      description: "Delicious delicacies"
    },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beatuy of nature",
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      >
      </Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
