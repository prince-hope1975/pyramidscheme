import React, {useState,useEffect} from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from '@mui/material/Drawer'
import List from './List';

const ToolBar = () => {
    const [open, setOpen] = useState(false)
    useEffect(() => {
      setOpen(false)
    }, [])
    const updateOpen = () =>{
        setOpen(!open)
    }
  return (
    <AppBar position="fixed" color="transparent">
      <Toolbar>
        <Typography variant="h6">
     
            <MenuIcon onClick={updateOpen}/>
          <Drawer
            variant="temporary"
            anchor="bottom"
            open={open}
            onClose={updateOpen}
            
          >
              <List></List>
          </Drawer>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default ToolBar