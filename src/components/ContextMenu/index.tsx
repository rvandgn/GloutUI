import useContextMenu from "hooks/utilities/useContextMenu";

export default function ContextMenu() {
    const { x, y, showContextMenu } = useContextMenu();
    return (
        <div className={`w-52 h-64 bg-primary container-limit absolute ${showContextMenu ? 'block' : 'hidden'}`} style={{ top: `${y}`, left: `${x}`}}>

        </div>
    )
}