import Itemnum from './Itemnum'
import States from './States'
import Clear from './Clear'

const Footer = ({itemsLeft}) => {
  return (
    <div className='footer'>
      <Itemnum itemsLeft={itemsLeft}/>
      <States />
      <Clear />
    </div>
  )
}

export default Footer
