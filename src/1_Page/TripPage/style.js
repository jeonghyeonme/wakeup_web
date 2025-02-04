import styled from "styled-components";

const STYLE = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    min-height: 100%;
  `,

  CardList: styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 400px;
    max-height: 650px;
    overflow-y: auto;
  `,
};
export default STYLE;
