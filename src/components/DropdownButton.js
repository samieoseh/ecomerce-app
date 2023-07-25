import React from 'react';
import styled from 'styled-components';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

/**
 * DropdownButton Component
 *
 * This is a custom dropdown button component that wraps the `react-dropdown` library
 * and applies custom styling using `styled-components`.
 *
 * @param {Array} options - The array of options for the dropdown.
 * @param {string} defaultValue - The default value to be displayed in the dropdown.
 * @param {string} placeholder - The placeholder text to be displayed when no option is selected.
 *
 * @returns {JSX.Element} - A styled dropdown button element.
 */
const DropdownButton = ({ options, defaultValue, placeholder }) => {
  // Render the custom styled dropdown button with provided options, default value, and placeholder.
  return (
    <StyledDropdown
      options={options}
      value={defaultValue}
      placeholder={placeholder}
    />
  );
};

// Export the DropdownButton component as the default export.
export default DropdownButton;

/**
 * StyledDropdown Component
 *
 * This is a styled component that applies custom styles to the `Dropdown` component
 * from the `react-dropdown` library. The styles defined here customize the appearance
 * of the dropdown button and placeholder text.
 */
const StyledDropdown = styled(Dropdown)`
  /* Styles for the dropdown button */
  .Dropdown-control {
    background-color: transparent;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
  }

  /* Styles for the placeholder text */
  .Dropdown-placeholder {
    color: #fff;
    font-family: 'Roboto', sans-serif;
    padding: 0 20px;
    font-size: 14px;
  }
`;
