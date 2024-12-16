import { clsx } from 'clsx'

const CurvedBackground = (props) => {
  const coloredDivClasses = clsx({
    [props.color]: props.color,
    'h-28': true,
    'z-50': true,
    relative: true
  })

  return (
    <div className={`${coloredDivClasses}`}>
      <div className='w-full h-16 bg-contrast-slateGray50 rounded-b-[100%] p-11'></div>
    </div>
  )
}

export default CurvedBackground
