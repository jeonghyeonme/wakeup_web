import styled from "styled-components";

const STYLE = {
  ModalBackdrop: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 9;
  `,

  PickerOverlay: styled.div`
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
    width: 300px;
  `,

  PickerSection: styled.div`
    margin-bottom: 20px;
  `,

  SectionTitle: styled.div`
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
    color: #333;
  `,

  ScrollableList: styled.div`
    max-height: 150px;
    overflow-y: auto;
    border: 1px solid #e0e0e0;
    border-radius: 8px;

    /* 스크롤 스냅 설정 */
    scroll-snap-type: y mandatory;
    scrollbar-width: thin; /* Firefox용 스크롤바 설정 */
    -webkit-overflow-scrolling: touch; /* 모바일 부드러운 스크롤 */
  `,

  PickerItem: styled.div`
    padding: 10px 15px;
    border-bottom: 1px solid #e0e0e0;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center;
    font-size: 14px;
    color: #333;
    scroll-snap-align: start; /* 각 아이템을 스냅 포인트로 지정 */

    &:hover {
      background-color: #d4f4dd;
    }

    ${({ isSelected, theme }) =>
      isSelected &&
      `
      background-color:${theme.green};
      color: white;
      font-weight: bold;
    `}
  `,
};

export default STYLE;
