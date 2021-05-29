import React, { Fragment, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { convertToRaw, EditorState } from "draft-js";
import uuid from "react-uuid";
import { useHistory } from "react-router-dom";

// components
import Button from "../components/Button";
import Header from "../components/Header";
// redux
import { addPost } from "../redux/actions/postsActions";
import { useSelector, useDispatch } from "react-redux";
import { addAuthor } from "../redux/actions/authorsActions";

const AddPost = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [authorName, setAuthorName] = useState("");
  const [title, setTitle] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const authors = useSelector((state) => state.authors);

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };
  const onAuthorNameChange = (e) => {
    setAuthorName(e.target.value);
  };
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = () => {
    setAuthorName(authorName.trim());
    setTitle(title.trim());

    if (authorName === "") {
      alert("Имя автора не должно быть пустым");
      return;
    }
    if (title === "") {
      alert("Заголовок не должен быть пустым");
      return;
    }

    dispatch(
      addPost({
        id: uuid(),
        body: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        title,
        authorName: authorName.trim(),
        date: Date.now(),
      })
    );

    if (!authors.includes(authorName)) {
      dispatch(addAuthor(authorName));
    }

    history.push("/");
  };

  return (
    <Fragment>
      <Header title="Добавить запись" />
      <div className="content-wrapper">
        <form>
          Автор:{" "}
          <input
            className="form-control"
            value={authorName}
            onChange={onAuthorNameChange}
            list="authorsList"
          />
          <datalist id="authorsList">
            {authors.map((authorName, index) => (
              <option value={authorName} key={index} />
            ))}
          </datalist>
        </form>

        <form>
          Заголовок:{" "}
          <input
            className="form-control"
            value={title}
            onChange={onTitleChange}
          />
        </form>

        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          wrapperClassName="editor__wrapper"
          editorClassName="editor__text-area"
        />
        <Button text="Добавить запись" type="blue" onClick={onSubmit} />
        <Button
          text="Отмена"
          type="red"
          onClick={() => {
            setEditorState(EditorState.createEmpty());
            console.log("Redirected");
          }}
          to="/"
          style={{ marginLeft: "10px" }}
        />
      </div>
    </Fragment>
  );
};

export default AddPost;
