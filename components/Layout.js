import React, {useState} from 'react'
import Nav from "./nav/Nav"
import Loader from './loader/loader'

const Layout = ({page, children}) => {
  const [loading, setLoading] = useState(false)

  const toogleLoading = () => {
    console.log("works");
    setLoading(!loading)
    setTimeout(() => {
      setLoading(!loading)
    }, 2000);
  }
  return (
    <div>
      <Nav page={page} loading = {toogleLoading} />
      <div style={{paddingLeft: '70px'}}>
        {children}
      </div>
     
    </div>
  )
}

export default Layout
