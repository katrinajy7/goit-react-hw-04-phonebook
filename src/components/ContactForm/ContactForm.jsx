// import style from './ContactForm.module.css';
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   handleChange = event => {
//     /*     console.log(event.currentTarget);
//     console.log(event.currentTarget.name);
//     console.log(event.currentTarget.value); */
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//     //this.setState({ [event.currentTarget.name]: event.currentTarget.value });
//   };
//   /*   inputNameEvent = event => {
//     this.setState({ curName: event.currentTarget.value });
//   };
//   inputTelEvent = event => {
//     this.setState({ curTel: event.currentTarget.value });
//   }; */

//   handleSubmit = event => {
//     event.preventDefault();
//     let contactForAdd = { name: this.state.name, number: this.state.number };
//     //console.log(this.state);
//     this.props.onSubmitData(contactForAdd);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };
//   render() {
//     return (
//       <div className={style.contactform}>
//         <form type="submit" onSubmit={this.handleSubmit}>
//           <label>
//             Name
//             <input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//               required
//               onChange={this.handleChange}
//               value={this.state.name}
//             />
//           </label>
//           <label>
//             Number
//             <input
//               type="tel"
//               name="number"
//               pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
//               title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
//               required
//               onChange={this.handleChange}
//               value={this.state.number}
//             />
//           </label>

//           <button type="submit">Add contact</button>
//         </form>
//       </div>
//     );
//   }
// }

// ContactForm.propTypes = {
//   onSubmitData: PropTypes.func.isRequired,
// };
// export default ContactForm;


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  inputChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.formSubmit}>
        <label>
          <p className={css.title}>Name</p>
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={this.state.name}
            onChange={this.inputChange}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <p className={css.title}>Number</p>
          <input
            className={css.input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.inputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.btn}>Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
