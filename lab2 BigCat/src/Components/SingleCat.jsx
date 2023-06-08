function Cats(props) {
const {name, latinName, image} = props;
return(
    <li>
        <h3>{name}</h3> <span>({latinName})</span>
        <div>
        <img src={image} alt={name} 
        />
        </div>
    </li>
)
}

export default Cats