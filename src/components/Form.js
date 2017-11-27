import React from 'react'
import './css/form.css'

const Form = ({ children }) => (
  <form>
    { children }
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
)

const FormItem = ({
  type,
  id,
  labelText,
  placeHolder
}) => {

  let label
  let Type

  if (labelText) {
    label = <label for={ id }>{ labelText }</label>
  }
  else {
    label = ''
  }

  if (type === 'textarea') {
    Type = 'textarea'
  }
  else {
    Type = 'input'
  }

  return (
    <div class="form-group">
      { label }
      <Type type={ type } id={ id } placeHolder={ placeHolder } class="form-control" />  
    </div>
  )
}

export { Form, FormItem }