import Logo from './Logo';
import React from 'react';
import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react';
import { IoMenuOutline as MenuIcon } from 'react-icons/io5';
import { Link } from 'react-router-dom';

// Navigation bar
const NavBar = (props) => {
  return (
    <NavBarContainer {...props}>
      <Link to='/'>
        <Logo />
      </Link>
      <NavLinks />
      <NavMenu baseColor={props.color} />
    </NavBarContainer>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as='nav'
      position='absolute'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      py={8}
      pl={8}
      pr={[8, 8, 20, 28]}
      bg='transparent'
      {...props}
    >
      {children}
    </Flex>
  );
};

// Navigation links
const NavLinks = () => {
  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={20}
        align='center'
        justify='flex-end'
        direction='row'
      >
        <NavItem to='/about'>About Us</NavItem>
        <NavItem to='/home'>Pariwisata</NavItem>
        <NavItem to='/umkm'>UMKM</NavItem>
      </Stack>
    </Box>
  );
};

const NavItem = ({ children, to = '/' }) => {
  return (
    <Link to={to}>
      <Text
        fontSize='md'
        fontWeight='bold'
        display='block'
        textTransform='uppercase'
      >
        {children}
      </Text>
    </Link>
  );
};


// Navigation menu
const NavMenu = (props) => {
  return (
    <Box display={{ base: 'block', md: 'none' }}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Navigation menu'
          icon={<MenuIcon />}
          colorScheme={props.baseColor === 'white' ? 'whiteAlpha' : 'blackAlpha'}
        />

        <MenuList>
          <NavMenuItem to='/about'>About Us</NavMenuItem>
          <NavMenuItem to='/home'>Pariwisata</NavMenuItem>
          <NavMenuItem to='/umkm'>UMKM</NavMenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

const NavMenuItem = ({ children, to = '/' }) => {
  return (
    <Link to={to}>
      <MenuItem
        textColor='black'
        fontSize='xs'
        fontWeight='bold'
        textTransform='uppercase'
      >
        {children}
      </MenuItem>
    </Link>
  );
};

export default NavBar;