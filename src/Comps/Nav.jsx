import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Navbar, Text, Avatar, Dropdown, Link } from "@nextui-org/react";
import { SiVite } from 'react-icons/si'
import { RiMoonClearFill, RiSunLine } from 'react-icons/ri'
import { createTheme } from "@nextui-org/react"
import { useState, useEffect } from 'react';
import { Link as Scroll } from 'react-scroll';


const Nav = () => {



  const [icon, setIcon] = useState(localStorage.Icon)

  const [theme, setTheme] = useState(localStorage.webTheme)

  const [ishidden, setHidden] = useState(true)

  const handleTheme = () => {
    theme == 'dark' ? setTheme('light') : setTheme('dark')  
    theme == 'dark' ? setIcon(<RiMoonClearFill />) : setIcon(<RiSunLine />)
    theme == 'dark' ? localStorage.setItem('webTheme', 'light') : localStorage.setItem('webTheme', 'dark')
  }
  const darkTheme = createTheme({
    type: `${theme}`,
  });

  useEffect(() => {
    
   setTheme(localStorage.webTheme)
    
   theme == 'dark' ? setIcon(<RiSunLine />) : setIcon(<RiMoonClearFill />)

  }, [])

  const navItems = [
    "Projects",
    "Accounts",
    "About",
  ]




  return (
    
    <div>
      <NextUIProvider theme={darkTheme}>
          <Navbar variant='floating' isBordered css={{position:'fixed', width:'100%'}}>
               <Navbar.Brand css={{"fontSize":"26px"}}>
                  <Navbar.Toggle showIn={'xs'} />
                  <Link  color={'inherit'} css={{'marginLeft':'$5'}}>
                    <SiVite/>
                  </Link>
               </Navbar.Brand>
               <Navbar.Content 
                enableCursorHighlight
                activeColor="primary"
                hideIn="xs"
                variant='highlight'>
                {navItems.map((index, key) => (
                  
                  <Navbar.Link css={{marginTop:'$8'}} color='inherit'>

                    <Scroll to={key} offset={-100} smooth={true} spy={true}>
                      {index}
                      </Scroll>
                    
                    </Navbar.Link>
                ))}

               </Navbar.Content>
             
              <Link color={'inherit'} css={{'fontSize':'26px'}}>
                <div onClick={handleTheme}>{icon}</div>
              </Link>
              <Navbar.Collapse showIn={'xs'}>
                {navItems.map((index,key) => (
                  <Navbar.CollapseItem>
                  <Scroll to={key} smooth={true} offset={-100} spy={true}>
                    {index}
                  </Scroll>
                  </Navbar.CollapseItem>
                ))}
              </Navbar.Collapse>
          </Navbar>
          

      </NextUIProvider>
    </div>
    
  )
}

export default Nav
