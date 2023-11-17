import Shape from "./Shape.js";

const Hexagone = ({color, size, ...props}) => {

    const topTriangleCss = {
        border: `${color} solid ${size/2}px`,
        borderTopColor: 'transparent',        
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: `${size/3}px`     
    }

const bottomTriangleCss = {
    border: `${color} solid ${size/2}px`,
        borderBottomColor: 'transparent',        
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomWidth:  0,
        borderTopWidth: `${size/3}px`  
}

const squareCss = {
    backgroundColor: color,
    width: `${size}px`,
    height: `${size/2}px`
}

    return (
        <Shape {...props}>
            <div style={topTriangleCss}></div>
            <div style={squareCss}></div>
            <div style={bottomTriangleCss}></div>
        </Shape>
    )
}


export default Hexagone;