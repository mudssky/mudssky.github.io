import { useEffect, useState } from 'react'

export default function Toc() {
  const [headList, setHeadList] = useState(Array<any>())
  useEffect(() => {
    const currentTitleList = Array<any>()
    const headList = document.querySelectorAll('h1,h2,h3,h4,h5,h6')
    headList.forEach((head: any, index: number) => {
      const mark = `heading-${index}`
      const prop = 'data-headid'
      head.setAttribute(prop, mark)
      currentTitleList.push({
        title: head.innerText,
        node: head,
        prop: prop,
        mark: mark,
        tagName: head.tagName,
      })
    })
    setHeadList(currentTitleList)
    console.log(headList)
    return () => {
      // cleanup
    }
  }, [])

  enum HeadStyle {
    'H1' = '',
  }

  return (
    <ul className="flex flex-col w-1/4 fixed left-2 top-8">
      {headList.map((head, index) => {
        return (
          <li
            key={head.mark}
            onClick={() => {
              head.node.scrollIntoView(true)
            }}
          >
            <a className={'hover:underline hover:bg-gray-200 '}>{head.title}</a>
          </li>
        )
      })}
    </ul>
  )
}
