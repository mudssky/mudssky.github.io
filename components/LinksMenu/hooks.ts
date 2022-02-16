interface MenuItem {
  title: string
  link: string
}
export interface Props {
  menuList: MenuItem[]
}

export default function useHook(props: Props) {
  const { menuList } = props
  return {
    menuList,
  }
}
