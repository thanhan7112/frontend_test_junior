function Menus({ menu, title }: any) {
  return (
    <div className='py-5'>
      <h6 className='mb-4 text-[10px] sm:text-sm text-center sm:text-left sm:px-5 '>
        <span className='sm:hidden'>{title.xs}</span>
        <span className='hidden sm:block'>{title.sm}</span>
      </h6>
      <ul>
        {menu.map((val: any, index: number) => {
          const menuActive = val.isActive
            ? 'bg-blue-300 bg-opacity-10 px-3 border border-blue-100 py-2 rounded-md text-blue-400 flex'
            : 'px-3 py-2 flex'

          const textActive = val.isActive ? 'text-blue-500' : 'text-gray-700'

          return (
            <li key={index} className={`${menuActive} cursor-pointer mx-5`}>
              {val.icon}
              <div className={`ml-2 ${textActive} hidden sm:block`}>{val.name}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Menus
