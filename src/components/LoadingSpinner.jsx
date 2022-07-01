import './LoadingSpinner.css'
import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const LoadingSpinner = () => (
  <div>
    <FaSpinner className="spinner" icon='fa-solid fa-spinner' />
    Loading...
  </div>
)

export default LoadingSpinner
