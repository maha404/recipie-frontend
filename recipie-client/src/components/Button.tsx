
interface props {
    text: string,
    onClick: () => void, 
}

export default function Button({text, onClick}: props) {
    return (
        <button onClick={onClick} className="button">
            {text}
        </button>
    )
}