// Import required modules and components
import React from 'react';
import styled from "styled-components";
import DropdownButton from './DropdownButton';

// AdBar component renders the top bar of the advertisement section
function AdBar() {
  return (
    <Container>
      {/* Support link */}
      <a href='#'>Support</a>

      {/* Discount message */}
      <p>
        Get 20% Discount for new users <span>|</span><span>Sign up now</span>
      </p>

      {/* Right menu containing the language and region dropdowns */}
      <RightMenu>
        {/* Language dropdown */}
        <Wrap>
          <DropdownButton options={['ENG', 'FR', 'DE']} defaultValue="ENG" placeholder="Select a language" />
        </Wrap>

        {/* Region dropdown */}
        <Wrap>
          <DropdownButton options={['AFR', 'EU', 'SA', 'NA', 'AR']} defaultValue="AFR" placeholder="Select a region" />
        </Wrap>
      </RightMenu>
    </Container>
  )
}

// Export the AdBar component as the default export
export default AdBar;

// Styled components for the AdBar component

// Container styles the main div that wraps the entire AdBar component
const Container = styled.div`
  min-height: 10px;
  width: 100%;
  background-color: #6F2DA8; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px 0;

  // Style for the support link
  a {
    margin-left: 8vw;
    color: rgb(249, 249, 249);
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
  }

  // Style for the discount message
  p {
    color: rgb(249, 249, 249);
    font-size: 12px;
    font-family: 'Roboto', sans-serif;

    // Style for the first span inside the discount message
    span:first-child {
      color: #fff;
      padding: 0 3px;
      font-family: 'Roboto', sans-serif;
    }

    // Style for the second span inside the discount message
    span:last-child {
      color: #fff;
      font-family: 'Roboto', sans-serif;
      cursor: pointer;
      font-size: 12px;
    }
  }
`

// RightMenu styles the div containing the language and region dropdowns
const RightMenu = styled.div`
  display: flex;
  margin-right: 8vw;
`

// Wrap styles each individual dropdown in the RightMenu
const Wrap = styled.div`
  display: flex;
  align-items: center;

  // Style for text within the dropdown
  p {
    color: rgb(249, 249, 249);
    font-size: 12px;
    padding: 0px 5px;
    font-family: 'Roboto', sans-serif;
  }
`
