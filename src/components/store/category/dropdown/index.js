import React from 'react';
import Select from 'react-select'

const options = [
  { value: 'price', label: 'price' },
  { value: 'size', label: 'size' },
  { value: 'A-Z', label: 'A-Z' },
  { value: 'newest', label: 'newest' }
]

const Dropdown = () => (
  <Select options={options} />
)

export default Dropdown;
