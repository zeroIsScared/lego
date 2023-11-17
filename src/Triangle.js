import Shape from "./Shape.js";

const Triangle = ({color, size, ...props}) => {

    const specificCss = {
            
        border: `${color} solid ${size/2}px`,
        borderTopColor: 'transparent',        
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: `${size}px`
    }

    return (
        <Shape {...props}>
            <div style={specificCss}></div>
        </Shape>
    )

}

export default Triangle;