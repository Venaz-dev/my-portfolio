import React from 'react'
import Nav from "./nav/Nav"

const Layout = ({page, children}) => {
  return (
    <div>
      <Nav page={page}/>
      <div style={{paddingLeft: '70px'}}>
        {children}
      </div>
    </div>
  )
}

export default Layout
