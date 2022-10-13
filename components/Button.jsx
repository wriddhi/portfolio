import React from 'react'
import styles from '../styles/Button.module.css'

const Button = (props) => {

  const { color, value, action } = props

  return(
    <button className={styles[color]} onClick={action}>
      {value}
    </button>
  )
}

export default Button