import Cats from "./SingleCat";

function BigCats(props) {
    const bigCats = [
        { 
            id: 1,
            name: 'Cheetah', 
            latinName: 'Acinonyx jubatus' ,
            image:"https://images.pexels.com/photos/2274018/pexels-photo-2274018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        { 
            id: 2,
            name: 'Cougar', 
            latinName: 'Puma concolor' ,
            image:"https://images.pexels.com/photos/53001/cougar-mountain-lion-puma-concolor-big-cat-53001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        { 
            id: 3,
            name: 'Jaguar', 
            latinName: 'Panthera onca' ,
            image:"https://images.pexels.com/photos/235674/pexels-photo-235674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        { 
            id: 4,
            name: 'Leopard', 
            latinName: 'Panthera pardus' ,
            image:"https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        { 
            id: 5,
            name: 'Lion', 
            latinName: 'Panthera leo' ,
            image:"https://images.pexels.com/photos/1912176/pexels-photo-1912176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        { 
            id: 6,
            name: 'Snow leopard', 
            latinName: 'Panthera uncia' ,
            image:"https://images.pexels.com/photos/267074/pexels-photo-267074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        { 
            id: 7,
            name: 'Tiger', 
            latinName: 'Panthera tigris' ,
            image:"https://images.pexels.com/photos/2055100/pexels-photo-2055100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ];

    console.log(bigCats.image)

    const catItems = bigCats.map(cats => (
        <Cats
        key={cats.id}
        name={cats.name}
        latinName={cats.latinName}
        image={cats.image}
        />

    ))
    
    return(
        <div className="CastList componentBox">
            <ul>
                {catItems}
            </ul>
            </div>
    )
};

export default BigCats