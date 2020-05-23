import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {profilePageType} from "../../../redux/state";
import {ProfileType} from "../Profile";


const MyPosts = (props: ProfileType) => {

    // Создаем переменную, которая позволяет получить доступ к состоянию <textarea>
    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    let addMessage = () => {
        // Проверка рефа на null необходима для TypeScript, т.е. если существует current тогда возьми current.value
        let newMessage = newMessageElement.current && newMessageElement.current.value;
        props.addPost(newMessage || undefined);
        // Сделает строку поле ввода пустым, если нажата кнопка отправить сообщение
        // newMessageElement.current.value = "";
    }

    let postsElements = props.posts
        .map( p => <Post message={p.message} count={p.count}/>);

    return (
        <div className={s.myPosts}>
            <div>
                This is MyPost!
            </div>
            <div className={s.inputField}>
              <textarea className={s.textarea}
                        ref={newMessageElement}></textarea>
                <button className={s.button}
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