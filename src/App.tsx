import React, { useEffect, useState } from 'react';
import './App.scss';
import { CommentList } from './components/CommentList/CommentList';
import { CommentForm } from './components/CommentForm/CommentForm';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { getCommentTextFromLocalStorage, setCommentTextToLocalStorage} from './utils/lacalStorage';
import { addComment, getComments } from './slices/comments';
import { Warning } from './components/Warning/Warning';


function App() {
  const { comments, hasError } = useAppSelector((state) => state.comments);
  const [textareaValue, setTextareaValue] = useState(getCommentTextFromLocalStorage() || '');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getComments())
  }, []);


  const handleTextareaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setTextareaValue(event.target.value);
    setCommentTextToLocalStorage(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!textareaValue) {
      return;
    }

    dispatch(addComment(textareaValue))
    setTextareaValue('');
    setCommentTextToLocalStorage('');
  };


  return (
    <div className="App">
      {hasError && <Warning title='OOPs!! Server error! Try again!' />}

      <div className='App__comment-list'>
        <CommentList comments={comments} />
      </div>

      <div className='App__comment-form'>
        <CommentForm
          textareaValue={textareaValue}
          handleTextareaChange={handleTextareaChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
