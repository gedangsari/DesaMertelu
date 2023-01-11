import Logo from './Logo';
import React from 'react';
import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react';
import { IoMenuOutline as MenuIcon } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <NavBarContainer {...props}>
      <Link href='/#home'>
        <Logo color='white' display={['none', 'block', 'block', 'block']} />
      </Link>
      {/* <NavLinks />
      <NavMenu /> */}
    </NavBarContainer>
  );
};

const NavItem = ({ children, to = '/', ...rest }) => {
  return (
    <Link href={to}>
      <Text fontSize='md' fontWeight='medium' textColor='white' display='block' {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const NavLinks = () => {
  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align='center'
        justify='flex-end'
        direction='row'
      >
        <NavItem to='/#home'>Beranda</NavItem>
        <NavItem to='/#overview'>Sekilas</NavItem>
        <NavItem to='/#route'>Rute </NavItem>
        <NavItem to='/#contact'>Kontak</NavItem>
      </Stack>
    </Box>
  );
};

const NavMenuItem = ({ children, to = '/', ...rest }) => {
  return (
    <Link href={to}>
      <MenuItem fontSize='xs' fontWeight='medium' {...rest}>
        {children}
      </MenuItem>
    </Link>
  );
};

const NavMenu = () => {
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
    >
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<MenuIcon color='white' />}
          variant='outline'
          _hover={{ bg: 'transparent' }}
          _expanded={{ bg: 'transparent' }}
        />
        <MenuList>
          <NavMenuItem to='/#home'>Beranda</NavMenuItem>
          <NavMenuItem to='/#overview'>Sekilas</NavMenuItem>
          <NavMenuItem to='/#route'>Rute </NavMenuItem>
          <NavMenuItem to='/#contact'>Kontak</NavMenuItem>
        </MenuList>
      </Menu>
    </Box>
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
      mb={8}
      p={8}
      bg='transparent'
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;