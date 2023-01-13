// Code Keypad Component Here

function Keypad() {
    function inputed() {
        console.log('Entering password...')
    }
    return (
        <div>
            <input type='password' onChange={inputed}></input>
        </div>
    )
}

export default Keypad;