import Itemnum from './Itemnum'
import States from './States'
import Clear from './Clear'

const Footer = ({itemsLeft, setActive, setAll, setCompleted, clear, changeActive, changeCompleted}) => {
  return (
    <div className='footer'>
      <Itemnum itemsLeft={itemsLeft}/>
      <States setActive={setActive} setAll={setAll} setCompleted={setCompleted}/>
      <Clear clear={clear}/>
    </div>
  )
}

export default Footer
