function Cats(props) {
const {id, name, latinName} = props;
return(
    <li>
        <h3>{name}</h3> <span>({latinName})</span>
    </li>
)
}

export default Cats