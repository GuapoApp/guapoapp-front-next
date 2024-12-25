import Header4 from '../Header4'

import clsx from 'clsx'

/**
 * PROPS: 
 @param: title ==> The title of the dashboard
 @param: name ==> The name of the professional
 @param: squareColor ==> The color of the square
 @param: titleColor ==> The color of the title
 @param: nameColor ==> The color of the name 
 */

const DashboardTitleHeader = (props) => {
  const squareClasses = clsx({
    [props.squareColor]: props.squareColor,
    'w-1/5': true
  })

  return (
    <div className='flex flex-row w-full justify-end gap-5'>
      {/* Título */}
      <div className='flex flex-col gap-2'>
        <Header4 text={props.title} textColor={props.titleColor} />
        <Header4 text={props.name} textColor={props.nameColor} />
      </div>
      {/* Cuadro Café*/}
      <div className={`${squareClasses}`}></div>
    </div>
  )
}

export default DashboardTitleHeader
