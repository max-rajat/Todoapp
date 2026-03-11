import './Button.css'

export function Button({ btnType, btnText,handler }) {
    if (btnType === 'success') {
        return (
            <button className='btn btn-success button' onClick={handler}>{btnText}</button>
        )
    }
    else if (btnType === 'danger') {
        return (
            <button className='btn btn-danger button' onClick={handler}>{btnText}</button>
        )
    }
    else {
        return (
            <button className='wait button'onClick={handler}>{btnText} </button>
        )
    }

}