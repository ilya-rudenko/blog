import React, { Fragment, useState } from "react";
import { Editor } from "@nick4fake/react-draft-wysiwyg";
import "@nick4fake/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { convertToRaw, EditorState } from "draft-js";
import uuid from "react-uuid";
import { useHistory } from "react-router-dom";

// scss
import "./AddPost.scss";

// components
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
// redux
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../../redux/actions/postsActions";
import { addAuthor } from "../../redux/actions/authorsActions";
import { addTitle } from "../../redux/actions/titlesActions";

const AddPost = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [authorName, setAuthorName] = useState("");
  const [title, setTitle] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const authors = useSelector((state) => state.authors);
  const titles = useSelector((state) => state.titles);

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
    const formattedTitle = title.trim();
    const formattedAuthorName = authorName.trim();

    if (formattedAuthorName === "") {
      alert("Имя автора не должно быть пустым");
      return;
    }
    if (formattedTitle === "") {
      alert("Заголовок не должен быть пустым");
      return;
    }
    if (titles.includes(formattedTitle)) {
      alert("Заголовок должен быть уникальным");
      return;
    }

    // console.log({ formattedTitle, formattedAuthorName });

    dispatch(
      addPost({
        id: uuid(),
        body: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        title,
        authorName: formattedAuthorName,
        date: Date.now(),
      })
    );

    dispatch(addTitle(formattedTitle));

    if (!authors.includes(formattedAuthorName)) {
      dispatch(addAuthor(formattedAuthorName));
    }

    history.push("/");
  };

  return (
    <Fragment>
      <Header title="Добавить запись" />
      <div className="content-wrapper">
        <form>
          <div className="form-text">Автор:</div>
          <input
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
          <div className="form-text">Заголовок:</div>
          <input value={title} onChange={onTitleChange} />
        </form>

        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          wrapperClassName="editor__wrapper"
          editorClassName="editor__text-area"
        />
        <Button text="Добавить запись" type="blue" onClick={onSubmit} />
      </div>
    </Fragment>
  );
};

export default AddPost;
