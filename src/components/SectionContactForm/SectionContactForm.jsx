import ContactForm from '../ContactForm/ContactForm';
import img from '../../../src/assets/close-up-smiley-woman-with-phone.jpg';
import css from './SectionContactForm.module.css';
// import 'animate.css';

export default function SectionContactForm() {
  return (
    <div className={css.wrapForm}>
      <div className={css.adding}>
        <ContactForm />
      </div>

      <img className={css.img} src={img} alt="Phone in girl's hands" width="520" height="520" />
    </div>
  );
}
