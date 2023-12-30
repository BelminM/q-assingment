import { render, fireEvent, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar component', () => {
  it('renders the component', () => {
    render(<SearchBar onSearch={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Search by user name');
    const buttonElement = screen.getByText('Search');

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onSearch with the correct search term when the button is clicked', () => {
    const onSearchMock = jest.fn();
    render(<SearchBar onSearch={onSearchMock} />);
    const inputElement = screen.getByPlaceholderText('Search by user name');
    const buttonElement = screen.getByText('Search');

    fireEvent.change(inputElement, { target: { value: 'test' } });
    fireEvent.click(buttonElement);

    expect(onSearchMock).toHaveBeenCalledWith('test');
  });

  it('calls onSearch with the correct search term when Enter key is pressed', () => {
    const onSearchMock = jest.fn();
    render(<SearchBar onSearch={onSearchMock} />);
    const inputElement = screen.getByPlaceholderText('Search by user name');

    fireEvent.change(inputElement, { target: { value: 'test' } });
    fireEvent.keyDown(inputElement, { key: 'Enter' });

    expect(onSearchMock).toHaveBeenCalledWith('test');
  });
});
