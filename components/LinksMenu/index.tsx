import Link from 'next/link'
import useHook, { Props } from './hooks'
import { Button, MenuItem, Menu } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
export default function LinksMenu(props: Props) {
  const {
    buttonDom,
    anchorEl,
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
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
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
