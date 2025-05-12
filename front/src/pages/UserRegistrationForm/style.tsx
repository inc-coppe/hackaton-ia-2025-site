import styled from "styled-components";
import { Form as AntForm } from "antd";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #11034a;
  padding: 2rem;

  .ant-modal-content {
    border-radius: 1rem;
  }

  .ant-modal-confirm-title {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    color: #11034a;
  }

  .ant-modal-confirm-content {
    font-family: "Montserrat", sans-serif;
    margin-top: 1rem !important;
  }

  .ant-btn-primary {
    background-color: #3161e8;
    border: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    height: 2.5rem;

    &:hover {
      background-color: #2451d1;
    }
  }
`;

export const FormCard = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 1rem;
  padding: 2.5rem;
  margin: 2rem 0;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #11034a;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Form = styled(AntForm)`
  .ant-form-item-label label {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    color: #11034a;
  }

  .ant-input,
  .ant-select-selector,
  .ant-picker {
    border-radius: 0.5rem;
    border: 1px solid #d9d9d9;

    &:hover,
    &:focus {
      border-color: #3161e8;
      box-shadow: 0 0 0 2px rgba(49, 97, 232, 0.2);
    }
  }

  .ant-btn-primary {
    background-color: #3161e8;
    border-radius: 0.5rem;
    height: 3rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    border: none;

    &:hover {
      background-color: #2451d1;
    }
  }
`;

export const StepsContainer = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  max-width: 800px;

  // Make Steps text and icons white
  .ant-steps {
    .ant-steps-item-title {
      color: rgba(255, 255, 255, 0.85) !important;
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
    }

    .ant-steps-item-description {
      color: rgba(255, 255, 255, 0.65) !important;
      font-family: "Montserrat", sans-serif;
    }

    // Style for completed steps
    .ant-steps-item-finish {
      .ant-steps-item-icon {
        background-color: transparent;
        border-color: #ffffff;

        .ant-steps-icon {
          color: #ffffff;
        }
      }

      .ant-steps-item-tail::after {
        background-color: #ffffff !important;
      }
    }

    // Style for current step
    .ant-steps-item-process {
      .ant-steps-item-icon {
        background-color: #ffffff;
        border-color: #ffffff;

        .ant-steps-icon {
          color: #11034a;
        }
      }
    }

    // Style for waiting steps
    .ant-steps-item-wait {
      .ant-steps-item-icon {
        background-color: transparent;
        border-color: rgba(255, 255, 255, 0.45);

        .ant-steps-icon {
          color: rgba(255, 255, 255, 0.45);
        }
      }
    }

    // Style for the connecting line
    .ant-steps-item-tail::after {
      background-color: rgba(255, 255, 255, 0.45) !important;
    }
  }
`;

export const SocialInputContainer = styled.div`
  .ant-form-item {
    margin-bottom: 1rem;

    .anticon {
      color: #11034a;
    }

    .ant-input-prefix {
      margin-right: 8px;
    }
  }

  .ant-input {
    &:hover,
    &:focus {
      border-color: #3161e8;
      box-shadow: 0 0 0 2px rgba(49, 97, 232, 0.2);
    }
  }

  // GitHub specific styling
  .ant-form-item:has(input[name="github_profile"]) {
    .ant-input:focus {
      border-color: #24292e;
      box-shadow: 0 0 0 2px rgba(36, 41, 46, 0.2);
    }
  }

  // LinkedIn specific styling
  .ant-form-item:has(input[name="linkedin_profile"]) {
    .ant-input:focus {
      border-color: #0077b5;
      box-shadow: 0 0 0 2px rgba(0, 119, 181, 0.2);
    }
  }
`;
