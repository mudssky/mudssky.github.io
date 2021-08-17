import Link from 'next/link'
// import Image from 'next/image'

export default function Header(props: any) {
  return (
    <div>
      <div
        className="m-auto flex justify-between border-b-2 border-gray-50 h-12"
        style={{
          maxWidth: '1200px',
        }}
      >
        <div
          className="w-16 flex items-center justify-center text-2xl text-blue-500"
          onClick={props.handleLogoClick}
        >
          <Link href="/">
            <a>Blog</a>
          </Link>
        </div>
        <div className="flex w-3/4 justify-end space-x-6">
          <div className="flex items-center text-2xl font-mono  border-b-2 border-opacity-0 border-green-500 hover:border-opacity-100">
            <Link href="/posts/test">
              <a>test</a>
            </Link>
          </div>
          <a
            href="https://github.com/mudssky"
            target="_blank"
            rel="noreferrer"
            className="flex text-lg items-center text-gray-600 font-sans font-semibold"
          >
            GitHub
            {/* prettier-ignore */}
            <span className="ml-1 mt-1"><svg className="fill-current text-gray-400"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"/></svg></span>
          </a>
        </div>
      </div>
    </div>
  )
}
