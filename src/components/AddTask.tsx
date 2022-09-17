import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { addTitleState, addTitleStateLength } from '../states/addTitleState'

export const AddTask:FC = () => {

    // useRecoilValueで値だけを取得する
    const addTitle = useRecoilValue(addTitleState)
    const addTitleLength = useRecoilValue(addTitleStateLength)

  return (
    <div>
      <div>{addTitleLength}個のタスクがあります</div>
      <ul>
        {addTitle.map((task) => (
     <li key={task.id}> {task.title}</li>
        ))}
      </ul>
    </div>
  )
}
