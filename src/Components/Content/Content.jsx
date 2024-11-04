import s from './Content.module.scss'

const Content = () => {
    return (
        <div className={s.mainBlock}>
            <h1 className={s.header1}>Crypto Charts</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi commodi corporis cum dolor esse
                fugiat ipsa libero magni, mollitia natus necessitatibus nesciunt nisi provident, quisquam,
                quod repellendus sequi sit!</p>
        </div>
    );
};

export default Content;