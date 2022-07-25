import {
  ImportanceBtn,
  ImportanceBtnInner,
  ImportanceCount,
} from "./importance.style";

export const Importance = ({
  count = 0,
  onClick,
  isUpvoted,
  small = false,
}) => {
  if (!small) {
    return (
      <ImportanceBtn onClick={onClick} isUpvoted={isUpvoted}>
        <ImportanceBtnInner>
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 6l4-4 4 4"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
          <ImportanceCount>{count}</ImportanceCount>
        </ImportanceBtnInner>
      </ImportanceBtn>
    );
  } else {
    return(
      <ImportanceBtn onClick={onClick} isUpvoted={isUpvoted} isSmall={small}>
        <ImportanceBtnInner>
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 6l4-4 4 4"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
          <ImportanceCount>{count}</ImportanceCount>
        </ImportanceBtnInner>
      </ImportanceBtn>
    )
  }
};
