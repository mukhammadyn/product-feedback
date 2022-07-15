import { useEffect } from "react";
import { useState } from "react";
import { sortFeedback } from "@store/feedback.slice";
import {
  SortSelectCurrentType,
  SortSelectCurrentTypeInner,
  SortSelectHeader,
  SortSelectItem,
  SortSelectList,
  SortSelectWrapper,
} from "./sort-select.style";
import { useDispatch } from "react-redux";

export const SortSelect = () => {

  const sortList = [
    {
      name: 'Most Upvotes',
      id: 1
    },
    {
      name: 'Least Upvotes',
      id: 2
    },
    {
      name: 'Most Comments',
      id: 3
    },
    {
      name: 'Least Comments',
      id: 4
    },
  ]

  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(sortList[0])

  const close = (e) => {
    if(!e.target.closest('button')) {
      setOpen(false)
    }
  }

  const handleSortSelectClick = () => {
    setOpen(!open)
  }

  const handleSelectListClick = (e) => {
    const element = e.target
    setActive({
      name: element.textContent,
      id: element.id,
    })

    dispatch(sortFeedback(+element.id))
    
    setOpen(false)
  }

  useEffect(() => {
    if(open) {
      window.addEventListener('click', close)
    }
    return () => window.removeEventListener('click', close)
  }, [open])

  return (
    <SortSelectWrapper>
      <SortSelectHeader>
        <SortSelectCurrentType onClick={handleSortSelectClick}>
          <SortSelectCurrentTypeInner open={open}>
            <span>Sort by : </span>{active.name}
          </SortSelectCurrentTypeInner>
        </SortSelectCurrentType>
      </SortSelectHeader>
      {
        open && <SortSelectList onClick={handleSelectListClick}>
          {
            sortList.map(item => <SortSelectItem key={item.id} id={item.id} isSelected={item.id === +active.id}>{item.name}</SortSelectItem>)
          }
      </SortSelectList>
      }
    </SortSelectWrapper>
  );
};
