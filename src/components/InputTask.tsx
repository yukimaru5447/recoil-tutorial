import React, { FC, useCallback } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { inputTitleState } from '../states/inputTitleState'

export const InputTask:FC = () => {

//   const inputTitle = useRecoilValue(inputTitleState);
//   const setInputTitle = useSetRecoilState(inputTitleState)
  const [inputTitle, setInputTitle] = useRecoilState(inputTitleState)

  const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value)
  }, [inputTitle])

  const handleClick = () => {
    console.log(inputTitle)
  }

  return (
    <div>
      <input type="text" onChange={onChange} />
      <button type="button" onClick={handleClick}>追加</button>
    </div>
  )
}
