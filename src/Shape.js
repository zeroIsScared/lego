
const Shape = ({ place=[0,0], children}) => {

    const comonCss = {
        position: "absolute",
        top: `${place[0]}px`,
        left: `${place[1]}px`
    }

    return (
        <div style={comonCss}>
            {children}
        </div>
    )
}

export default Shape;