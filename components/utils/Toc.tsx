import { useEffect, useRef, useState } from 'react'

export default function Toc() {
  const [headList, setHeadList] = useState(Array<any>())
  const [activeIndex, setActiveIndex] = useState(0)
  // 是否隐藏toc组件
  const [hideToc, setHideToc] = useState(false)
  // 记录组件的位置
  const [tocPosition, setTocPostion] = useState({ left: 0, top: 0 })

  // 相对于父组件的基础偏移值，用于判断实际滚动距离。
  const baseOffset = useRef(0)
  useEffect(() => {
    const currentTitleList = Array<any>()
    const currentHeadNodeList = document.querySelectorAll('h1,h2,h3,h4,h5,h6')
    currentHeadNodeList.forEach(
      (head: any, index: number, parrent: NodeListOf<Element>) => {
        const mark = `heading-${index}`
        const prop = 'data-headid'
        head.setAttribute(prop, mark)

        currentTitleList.push({
          title: head.innerText,
          node: head,
          prop: prop,
          mark: mark,
          tagName: head.tagName,
          offsetTop: head.offsetTop,
        })
      }
    )
    setHeadList(currentTitleList)
    // console.log(headList)
    baseOffset.current = currentTitleList[0].node.offsetTop

    // 页面距离清零到第一个标题的位置
    // const baseTop = currentTitleList[0].node.offsetTop
    // const baseTop = headList[0].childNodes
    // 添加滚动条事件

    return () => {
      // cleanup
    }
  }, [])

  useEffect(() => {
    function handleScrollToc() {
      //   可视区域高度
      //  let clientHeight = document.documentElement.clientHeight;
      // 滚动内容高度,即页面所有内容的高度
      // let scrollHeight =document.documentElement.scrollHeight
      // 滚动条已滚动的高度
      const scrollTop = document.documentElement.scrollTop
      headList.forEach((head: any, index: number) => {
        if (scrollTop < head.offsetTop - baseOffset.current) {
          return
        } else {
          setActiveIndex(index)
        }
      })
    }
    window.addEventListener('scroll', handleScrollToc)
    return () => {}
  }, [headList])
  // 添加拖拽组件位置的监听
  useEffect(() => {
    //   组件生成时，从localStorage获取过去使用的位置
    const jsonstr = localStorage.getItem('tocposition')
    let startPostion = { left: 20, top: 50 }
    if (jsonstr) {
      startPostion = JSON.parse(jsonstr)
    }
    setTocPostion(startPostion)
    return () => {
      //   cleanup
    }
  }, [])
  // 设置各级标题的样式
  const headStyle: { [key: string]: any } = {
    H1: 'text-md',
    H2: 'pl-2',
    H3: 'pl-4',
    H4: 'pl-5',
    H5: 'pl-5',
    H6: 'pl-5',
  }

  return (
    <div style={tocPosition} className="bg-pink-50 fixed shadow rounded">
      <div
        className="absolute"
        onClick={() => {
          setHideToc(!hideToc)
        }}
      >
        {/* prettier-ignore */}
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3262" width="22" height="22"><path d="M91.89 238.457c-29.899 0-54.133 24.239-54.133 54.134 0 29.899 24.234 54.137 54.133 54.137s54.138-24.238 54.138-54.137c0-29.896-24.239-54.134-54.138-54.134z" fill="#E5594F" p-id="3263"></path><path d="M91.89 462.463c-29.899 0-54.133 24.239-54.133 54.139 0 29.895 24.234 54.133 54.133 54.133s54.138-24.238 54.138-54.133c0-29.9-24.239-54.139-54.138-54.139z" fill="#C45FA0" p-id="3264"></path><path d="M91.89 686.475c-29.899 0-54.133 24.237-54.133 54.133 0 29.899 24.234 54.138 54.133 54.138s54.138-24.238 54.138-54.138c0-29.896-24.239-54.133-54.138-54.133z" fill="#F39A2B" p-id="3265"></path><path d="M941.26 234.723H328.964c-28.867 0-52.263 23.4-52.263 52.268v3.734c0 28.868 23.396 52.269 52.263 52.269H941.26c28.869 0 52.269-23.401 52.269-52.269v-3.734c-0.001-28.868-23.4-52.268-52.269-52.268z" fill="#F0D043" p-id="3266"></path><path d="M941.26 682.74H328.964c-28.867 0-52.263 23.399-52.263 52.268v3.734c0 28.863 23.396 52.269 52.263 52.269H941.26c28.869 0 52.269-23.405 52.269-52.269v-3.734c-0.001-28.868-23.4-52.268-52.269-52.268z" fill="#4A5699" p-id="3267"></path><path d="M709.781 458.729H328.964c-28.867 0-52.263 23.4-52.263 52.269v3.734c0 28.873 23.396 52.269 52.263 52.269h380.817c28.866 0 52.271-23.396 52.271-52.269v-3.734c0.001-28.869-23.405-52.269-52.271-52.269z" fill="#E5594F" p-id="3268"></path></svg>
      </div>
      <ul className={'w-80 flex flex-col' + (hideToc ? ' hidden' : '')}>
        <li
          draggable="true"
          className="font-bold border-b-2 border-gray-300 pl-7 select-none cursor-move"
        >
          目录
        </li>
        {headList.map((head, index) => {
          return (
            <li
              className={
                (activeIndex === index
                  ? 'text-blue-400 border-l-2 border-red-500'
                  : '') + ' pl-2 truncate'
              }
              key={head.mark}
              onClick={() => {
                head.node.scrollIntoView(true)
              }}
            >
              <a
                className={
                  'hover:underline hover:bg-gray-200 ' + headStyle[head.tagName]
                }
                title={head.title}
              >
                {head.title}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
