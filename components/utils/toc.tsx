import { useEffect, useRef, useState } from 'react'

export default function Toc() {
  const [headList, setHeadList] = useState(Array<any>())
  const [activeIndex, setActiveIndex] = useState(0)
  // 是否隐藏toc组件
  const [hideToc, setHideToc] = useState(false)

  // 相对于父组件的基础偏移值，用于判断实际滚动距离。
  const baseOffset = useRef(0)

  const tocEl = useRef<HTMLDivElement>(null)

  const [collectTitleFlag, setCollectTitleFlag] = useState(false)
  // 收集标题相关信息
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
    // console.log(currentTitleList)
    return () => {
      // cleanup
    }
  }, [collectTitleFlag])

  // 添加滚动条监听事件
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
    let tocPosition = startPostion
    function moveAt(tocPosition: { left: number; top: number }) {
      tocEl.current!.style.left = tocPosition.left + 'px'
      tocEl.current!.style.top = tocPosition.top + 'px'
    }
    moveAt(tocPosition)

    if (tocEl.current) {
      // console.log(tocEl)

      const onMouseDown = function (event: MouseEvent) {
        // 按下鼠标时,我们可以记住鼠标按下的位置相对于拖动地节点左上角的距离
        const shiftX =
          event.clientX - (tocEl.current?.getBoundingClientRect().left || 0)
        const shiftY =
          event.clientY - (tocEl.current?.getBoundingClientRect().top || 0)

        // 按下鼠标后,添加移动事件和鼠标放下的事件
        function onMouseMove(event: MouseEvent) {
          // console.log(event.pageX, event.pageY, event.clientX, event.clientY)
          tocPosition = {
            left: event.clientX - shiftX,
            top: event.clientY - shiftY,
          }
          moveAt(tocPosition)
        }
        document.addEventListener('mousemove', onMouseMove)
        function onMouseUp(event: MouseEvent) {
          // 放下后移除事件
          document.removeEventListener('mousemove', onMouseMove)
          document.removeEventListener('mouseup', onMouseUp)
          localStorage.setItem('tocposition', JSON.stringify(tocPosition))
        }
        document.addEventListener('mouseup', onMouseUp)
      }
      tocEl.current.addEventListener('mousedown', onMouseDown)

      tocEl.current.ondragstart = function () {
        return false
      }
    }
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
    <div
      ref={tocEl}
      draggable="true"
      className="bg-pink-50 fixed shadow rounded w-1/5 transition-all"
      // 利用overflow hidden
      style={
        hideToc
          ? {
              width: '25px',
              height: '22px',
              overflow: 'hidden',
              // transition: 'height 1s',
            }
          : {
              minWidth: '10rem',
            }
      }
    >
      <div
        className="absolute"
        onClick={() => {
          setHideToc(!hideToc)
        }}
      >
        {/* prettier-ignore */}
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3262" width="22" height="22"><path d="M91.89 238.457c-29.899 0-54.133 24.239-54.133 54.134 0 29.899 24.234 54.137 54.133 54.137s54.138-24.238 54.138-54.137c0-29.896-24.239-54.134-54.138-54.134z" fill="#E5594F" p-id="3263"></path><path d="M91.89 462.463c-29.899 0-54.133 24.239-54.133 54.139 0 29.895 24.234 54.133 54.133 54.133s54.138-24.238 54.138-54.133c0-29.9-24.239-54.139-54.138-54.139z" fill="#C45FA0" p-id="3264"></path><path d="M91.89 686.475c-29.899 0-54.133 24.237-54.133 54.133 0 29.899 24.234 54.138 54.133 54.138s54.138-24.238 54.138-54.138c0-29.896-24.239-54.133-54.138-54.133z" fill="#F39A2B" p-id="3265"></path><path d="M941.26 234.723H328.964c-28.867 0-52.263 23.4-52.263 52.268v3.734c0 28.868 23.396 52.269 52.263 52.269H941.26c28.869 0 52.269-23.401 52.269-52.269v-3.734c-0.001-28.868-23.4-52.268-52.269-52.268z" fill="#F0D043" p-id="3266"></path><path d="M941.26 682.74H328.964c-28.867 0-52.263 23.399-52.263 52.268v3.734c0 28.863 23.396 52.269 52.263 52.269H941.26c28.869 0 52.269-23.405 52.269-52.269v-3.734c-0.001-28.868-23.4-52.268-52.269-52.268z" fill="#4A5699" p-id="3267"></path><path d="M709.781 458.729H328.964c-28.867 0-52.263 23.4-52.263 52.269v3.734c0 28.873 23.396 52.269 52.263 52.269h380.817c28.866 0 52.271-23.396 52.271-52.269v-3.734c0.001-28.869-23.405-52.269-52.271-52.269z" fill="#E5594F" p-id="3268"></path></svg>
        {/* 目录图标 */}
      </div>
      <div
        className={
          'absolute right-0 ' +
          (hideToc ? ' hidden ' : ' ') +
          (collectTitleFlag
            ? 'transition duration-500 transform -rotate-180'
            : 'transition duration-500 transform rotate-180')
        }
        onClick={() => {
          setCollectTitleFlag(!collectTitleFlag)
        }}
      >
        {/* prettier-ignore */}
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1196" width="22" height="22"><path d="M432.2304 103.2192c-9.216-6.5536-22.016-4.3008-28.5696 4.9152-6.5536 9.216-4.3008 22.016 4.9152 28.5696l59.0848 41.7792 3.2768 2.2528c-71.8848 9.9328-138.3424 42.8032-190.5664 95.0272-63.3856 63.3856-98.2016 147.5584-98.2016 237.1584 0 45.568 9.0112 89.7024 26.7264 131.3792 17.1008 40.1408 41.5744 76.1856 72.704 107.008 3.9936 3.9936 9.216 5.9392 14.4384 5.9392 5.3248 0 10.5472-2.048 14.5408-6.0416 7.9872-7.9872 7.8848-20.992-0.1024-28.9792-56.32-55.7056-87.2448-130.048-87.2448-209.2032 0-78.6432 30.6176-152.576 86.2208-208.1792 46.4896-46.4896 105.8816-75.5712 169.984-83.7632l-2.9696 3.072-52.4288 52.9408c-7.9872 7.9872-7.8848 20.992 0.1024 28.9792 3.9936 3.9936 9.216 5.9392 14.4384 5.9392 5.3248 0 10.5472-2.048 14.5408-6.0416l109.4656-110.4896-130.3552-92.2624zM841.9328 511.0784c0-45.568-9.0112-89.7024-26.7264-131.3792-17.1008-40.1408-41.5744-76.1856-72.704-107.008-3.9936-3.9936-9.216-5.9392-14.4384-5.9392-5.3248 0-10.5472 2.048-14.5408 6.0416-7.9872 7.9872-7.8848 20.992 0.1024 28.9792 56.32 55.7056 87.2448 130.048 87.2448 209.2032 0 78.6432-30.6176 152.576-86.2208 208.1792-46.4896 46.4896-105.8816 75.5712-169.984 83.7632l2.9696-3.072 52.4288-52.9408c7.9872-7.9872 7.8848-20.992-0.1024-28.9792-3.9936-3.9936-9.216-5.9392-14.4384-5.9392-5.3248 0-10.5472 2.048-14.5408 6.0416L461.6192 828.7232l130.1504 92.0576c9.216 6.5536 22.016 4.3008 28.5696-4.9152 6.5536-9.216 4.3008-22.016-4.9152-28.5696l-59.0848-41.7792-3.2768-2.2528c71.8848-9.9328 138.3424-42.8032 190.5664-95.0272 63.3856-63.3856 98.304-147.5584 98.304-237.1584z" p-id="1197"></path></svg>
        {/* 刷新图标 */}
      </div>
      <div
        // draggable="true"
        className="font-bold border-b-2 border-gray-300 pl-7 select-none cursor-move"
      >
        目录
      </div>
      <div
        className="overflow-auto"
        style={{
          maxHeight: '70vh',
        }}
      >
        <ul className={'flex flex-col'}>
          {headList.map((head, index) => {
            return (
              <li
                className={
                  (activeIndex === index
                    ? 'text-blue-400 border-l-2 border-red-500'
                    : '') + ' pl-2 text-xs font-sans truncate'
                }
                key={head.mark}
                onClick={() => {
                  head.node.scrollIntoView(true, { behavior: 'auto' })
                }}
                // behavior One of auto or smooth. Defaults to auto.
              >
                <a
                  className={
                    'hover:underline hover:bg-gray-200 ' +
                    headStyle[head.tagName]
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
    </div>
  )
}
