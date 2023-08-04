import Link from 'next/link'
import useHook, { Props } from './hooks'
import { Button, MenuItem, Menu } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
export default function LinksMenu(props: Props) {
  const {
    buttonDom,
    isMenuOpen,
    menuList,
    menuTitle,
    handleMenuOpen,
    handleMenuClose,
  } = useHook(props)
  const { className } = props
  return (
    <div className={className}>
      <Button
        ref={buttonDom}
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleMenuOpen}
      >
        {menuTitle}
      </Button>
      <Menu
        anchorEl={buttonDom.current}
        open={isMenuOpen}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menuList.map((item) => {
          return (
            <MenuItem key={item.link}>
              <Link href={item.link} legacyBehavior>{item.title}</Link>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
