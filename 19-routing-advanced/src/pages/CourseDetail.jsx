import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
    const params = useParams()
  return (
    <div> {params.CourseId} CourseDetail</div>
  )
}

export default CourseDetail