import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfileType} from "../Profile";
import {addPostNameActionCreator, updateTextAreaChangeActionCreator} from "../../../redux/profilePageReducer";


const MyPosts = (props: ProfileType) => {

    let postsElements = props.posts
        .map( p => <Post message={p.message} count={p.count}/>);


    // Обработчик события после нажатия на кнопку SEND
    let addMessage = () => {
        props.dispatch(addPostNameActionCreator());
    }

    // Создаем переменную, которая позволяет получить доступ к состоянию <textarea>
    // let newMessageElement = React.createRef<HTMLTextAreaElement>();
    // Следит за изменениями в поле ввода texarea

    let onTextareaChange = (e: any) => {
        // Проверка на null необходима для TypeScript, т.е. если существует current тогда возьми current.value
        // let newMessage = newMessageElement.current && newMessageElement.current.value;
        let newMessage = e.target.value;
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
                        onChange={ onTextareaChange }
                        // значение, которое отобразиться в поле ввода
                        value={ props.newPostText }
                        // ref={ newMessageElement }
              />
                <button className={s.button}
                        // следит за нажатиями на клавишу
                        onClick={ addMessage }>SEND</button>
            </div>
            <div className={s.postsElements}>
                { postsElements }
            </div>
        </div>
    );
}
export default MyPosts;
