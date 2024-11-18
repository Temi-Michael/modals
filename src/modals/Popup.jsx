
export default function Popup(props) {
    return (props.trigger) ? (
        <div>
            {props.children}
        </div>
    ) : "";
}