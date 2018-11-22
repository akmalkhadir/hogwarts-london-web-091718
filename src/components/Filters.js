import React from 'react'
import { Menu, MenuItem, Checkbox } from 'semantic-ui-react'

const Filters = (props) => {
  return (
    <Menu>
      <MenuItem>
        <Checkbox value='greased' label='Greased Hogs?' />
      </MenuItem>
      <MenuItem >
        <Checkbox toggle value='name' label='Sort by Name' />
      </MenuItem>
      <MenuItem >
        <Checkbox toggle value='weight' label='Sort by Weight' />
      </MenuItem>
    </Menu>
  )
}

export default Filters
