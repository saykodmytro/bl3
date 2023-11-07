import React, { Component } from 'react';
import css from './WordsListItem.module.css';
export default class WordsListItem extends Component {
  render() {
    const { ukWord, enWord } = this.props.word;

    return (
      <tr>
        <td>
          <input type="checkbox" name="selectAll" />
        </td>
        <td>#:{this.props.numberOfItem}</td>
        <td>{enWord}</td>
        <td>{ukWord}</td>
        <td>
          <button
            type="button"
            onClick={this.props.handleDelete}
            className={css.btnActions}
          >
            Delete
          </button>
        </td>
        <td>
          <button type="button" className={css.btnActions}>
            Edit
          </button>
        </td>
      </tr>
    );
  }
}
