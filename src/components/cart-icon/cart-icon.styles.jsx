import styled from "styled-components";

//import ShoppingSvg from "../../assets/shopping-bag.svg";

// export const ShoppingIcon = styled(ShoppingSvg)`
//   width: 32px;
//   height: 32px;
// `;

export const IconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 8px;
`;
