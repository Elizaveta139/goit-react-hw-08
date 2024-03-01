import css from './Home.module.css';
import img from '../../assets/img-home-page-3.jpg';
import imgBeigeBackground from '../../assets/background.jpg';

export default function Home() {
  return (
    <div className={css.wrap}>
      <div className={css.wrapText}>
        <h1 className={css.title}>Phone Book</h1>
        <img
          className={css.imgBackground}
          src={imgBeigeBackground}
          alt="Group-friends-with-smartphones-outside"
          width="350"
          height="350"
        />
        <p className={css.text}>
          Welcome to a place where every number and every name turns into a story, a memory or an
          opportunity for a new acquaintance. Here you can store your contacts and find the numbers
          you need in a few clicks.
        </p>
        <p className={css.text}>
          `Phone Book` is not just a tool, it is your faithful companion in the digital world. We
          are sure that every person whose number is now stored here is another piece of the puzzle
          of your life.
        </p>
      </div>
      <img
        className={css.img}
        src={img}
        alt="Group-friends-with-smartphones-outside"
        width="550"
        height="550"
      />
    </div>
  );
}
