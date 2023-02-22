import Button from './Button'
const Header = ({title, onChange, darkMode}) => {

    return (

    <header id='header' className='header dark'>
        <h1 onClick={() => window.location.reload(false)} className='title dark'> {title} </h1>
        <Button darkMode={darkMode} onClick={onChange}
        />
    
    </header>

    )
}



Header.defaultProps = {
    title: 'TODO',
}

// const changeColor = () => {
//     console.log('nuts')
// } 

// const changeLight = () => {
//     console.log('Deez')
// } 


// const darkMode = (Button) => {
    
// }

export default Header
