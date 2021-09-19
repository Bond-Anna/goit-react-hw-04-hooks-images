import { Component } from 'react';
import css from './searchbar.module.css';
export class Searchbar extends Component {
  state = {
    name: '',
  };

  handleOnChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.name);
    // this.setState({ name: '' });
  };
  render() {
    return (
      <header className={css.Searchbar} onSubmit={this.handleOnSubmit}>
        <form className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
        </form>
      </header>
    );
  }
}
