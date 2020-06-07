import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfileType} from "../Profile";
import {addPostActionCreator, updateTextAreaChangeActionCreator} from "../../../redux/state";



const MyPosts = (props: ProfileType) => {

    let postsElements = props.posts
        .map( p => <Post message={p.message} count={p.count}/>);

    // Создаем переменную, которая позволяет получить доступ к состоянию <textarea>
    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    // Обработчик события после нажатия на кнопку SEND
    let addMessage = () => {
        // Проверка на null необходима для TypeScript, т.е. если существует current тогда возьми current.value
        // let newMessage = newMessageElement.current && newMessageElement.current.value;
        props.dispatch(addPostActionCreator());
    }

    // Следит за изменениями в поле ввода texarea
    let onTextareaChange = () => {
        let newMessage = newMessageElement.current && newMessageElement.current.value;
        props.dispatch(updateTextAreaChangeActionCreator(newMessage));
    }

    return (
        <div className={s.myPosts}>
            <div>
                This is MyPost!
            </div>
            <div className={s.inputField}>
              <textarea className={s.textarea}
                        // следит за введенными значениями в поле
                        onChange={onTextareaChange}
                        // значение, которое отобразиться в поле ввода
                        value={props.newPostText}
                        ref={newMessageElement}/>
                <button className={s.button}
                        // следит за нажатиями на клавишу
                        onClick={addMessage}>SEND
                </button>
            </div>
            <div className={s.postsElements}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;
