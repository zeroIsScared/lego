import Shape from './Shape.js';

const Square = ({color, size, ...props}) => {

    const specificCss = {
        backgroundColor: color,
        width: `${size}px`,
        height: `${size}px`
    }

    return (
        <Shape {...props}>
        <div style={specificCss}></div>
        </Shape>
    )
}

export default Square;