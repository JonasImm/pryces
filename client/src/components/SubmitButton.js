import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function SubmitButton({ title }) {
  return <Submit value={title} type="submit" />;
}

export default SubmitButton;
SubmitButton.propTypes = {
  title: PropTypes.string,
};

const Submit = styled.input`
  width: 100%;
  height: 3rem;
  background-color: var(--bg-color-highlight);
  border-radius: 30px;
  border: none;
  color: var(--font-color-menu);
  font-size: 1.7rem;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  :active {
    background-color: var(--bg-color-dark-highlight);
  }
`;
