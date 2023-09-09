import React, { useState,useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {

  const [titles, setTitles] = useState([]);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const storedTitles = localStorage.getItem("titles");
    const storedContents = localStorage.getItem("contents");
    if (storedTitles && storedContents) {
      setTitles(JSON.parse(storedTitles));
      setContents(JSON.parse(storedContents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("titles", JSON.stringify(titles));
    localStorage.setItem("contents", JSON.stringify(contents));
  }, [titles, contents]);

  function addNote(title, content) {
    setTitles(prevTitles => {
      return [...prevTitles, title];
    });
    setContents(prevContents => {
      return [...prevContents, content];
    });
  }

  function deleteNote(id) {
    //  console.log("delete was triggered");
    setContents(prevContents => {
      return prevContents.filter((contentItem, index) => {
        return index !== id;
      })
    })
    setTitles(prevTitles => {
      return prevTitles.filter((titleItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {titles.map(function (title, i) {
        return <Note title={title} content={contents[i]} key={i} id={i} onDelete={deleteNote} />;
      })}

      <Footer />
    </div>
  );
} export default App;
