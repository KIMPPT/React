import ThemeContext from '../context/Themecontext'

import { useContext } from 'react'

function Toolbar(){
    let text=useContext(ThemeContext)
    return <p>{text}</p>
}
export default Toolbar;