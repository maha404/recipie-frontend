import CarrotIcon from '../assets/images/icon-whole-food-recipes.svg'

export default function IconButton() {
    return (
        <button className="icon-button">
            <img src={CarrotIcon} alt="icon" />
        </button>
    )
}