import WordsListItem from 'components/WordsListItem/WordsListItem';
import React from 'react';
import css from './WordsList.module.css';

export default function WordsList({ words, number, handleDelete }) {
  // const newHandleDelete = id => () => handleDelete(id);
  return (
    <div>
      <div className={css.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>All</th>
              <th>NUMBER</th>
              <th>EN WORD</th>
              <th>UK WORD</th>
              <th>ACTIONS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {words.map((word, index) => {
              return (
                <WordsListItem
                  key={word.id}
                  word={word}
                  number={number + index + 1}
                  handleDelete={() => handleDelete(word.id)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
