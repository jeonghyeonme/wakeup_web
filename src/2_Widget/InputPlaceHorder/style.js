import styled from "styled-components";

const STYLE = {
  PlaceholderContainer: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
  `,

  PlaceholderText: styled.p`
    position: absolute;
    width: 100%;
    padding: 12px;
    pointer-events: none;
    transition: all 0.3s ease-in-out;
    font-size: ${({ $active }) => ($active ? "10px" : "16px")};
    color: ${({ $active }) => ($active ? "#3498db" : "#aaa")};
    font-weight: 500;
    letter-spacing: 0.5px;
    top: ${({ $active }) => ($active ? "5px" : "50%")};
    transform: translateY(-50%);
  `,

  PlaceholderInput: styled.input`
    width: 100%;
    height: 55px;
    border: none;
    outline: none;
    border-radius: 12px;
    padding: 10px;
    font-size: ${({ $active }) => ($active ? "14px" : "17px")};
    background: #f7f9fc;
    color: #333;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease-in-out;
    &:focus {
      background: #ffffff;
      box-shadow: 0 4px 15px rgba(52, 152, 219, 0.2);
    }
    &::placeholder {
      color: transparent;
    }
  `,

  InputWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

export default STYLE;
