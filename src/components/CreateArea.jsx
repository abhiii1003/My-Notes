import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [expended,setExpended]=useState(false);
  function handleChangeTitle(event) {
    setTitle(event.target.value);
  }
  function handleChangeContent(event) {
    setContent(event.target.value);
  }

  function submitNote(event) {
    props.onAdd(title, content);
    event.preventDefault();
    setContent("");
    setTitle("");
  }

  function expend(){
    setExpended(true);
  }
  return (
    <div>
      <form action="submit">
        {expended?<input name="title" onChange={handleChangeTitle} value={title} placeholder="Title" />:null}
        <textarea name="content" onChange={handleChangeContent} value={content} onClick={expend} placeholder="Take a note..." rows={expended?3:1} />
        <Zoom in={expended}>
          <button onClick={submitNote}>
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
