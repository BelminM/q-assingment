import { FC, useState, ChangeEvent, KeyboardEvent } from 'react';

import c from './SearchBar.module.css'; // Import the CSS file

/**
 * Props for the SearchBar component.
 */
type SearchBarProps = {
  /**
   * Callback function triggered when the user performs a search.
  */
  onSearch: (searchTerm: string) => void;
};

/**
 * SearchBar component for user search functionality.
 */
export const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  /**
   * Handles the search action by calling the `onSearch` callback with the current search term.
   */
  const handleSearch = () => {
    onSearch(searchTerm);
  };

  /**
   * Handles the change event on the input field, updating the search term.
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  /**
   * Handles the key press event on the input field. Triggers search if the Enter key is pressed.
   */
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={c.root}>
      <input
        type="text"
        placeholder="Search by user name"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        className={c.input}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
