import styled from 'styled-components';

const formItemVariables = {
  label: {
    width: '195px',
  },
  input: {
    rightOffset: '35px',
  },
};

export const StyledFormItem = styled.div`
  width: 100%;

  .MuiFormControlLabel-root {
    width: 100%;
    align-items: flex-start;
    margin: 0;

    &.MuiFormControlLabel-labelPlacementStart {
      justify-content: flex-end;
      align-items: center;

      & > div {
        width: auto;
      }

      .MuiFormControlLabel-label {
        min-width: initial;
      }
    }

    .MuiTypography-root {
      min-width: ${formItemVariables.label.width};
    }
  }

  .MuiFormGroup-row {
    .MuiFormControlLabel-root {
      width: initial;
      align-items: center;
      margin-bottom: 0;

      &.MuiFormControlLabel-labelPlacementStart {
        .MuiFormControlLabel-label {
          min-width: initial;
        }
      }

      .MuiTypography-root {
        min-width: initial;
      }
    }
  }
`;

export const StyledFormControlItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 5px;
  width: 100%;

  .MuiAutocomplete-listbox {
    width: 100%;

    li {
      padding: 0.2rem 0.4rem;
    }
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem;
`;

export const StyledLabel = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: 1rem;
`;
