import React from "react";

export default function Box(props) {
    // const [color , setColor] = React.useState(props.on)

    const styles = {
        backgroundColor : props.on ? "#222222" : "transparent"
    }
    // function handleClick() {
    //     setColor(pervColor => !pervColor)
    // }

    return (
        <div style={styles} onClick={() => props.Toggle(props.id)} className="box" ></div>
    )
}