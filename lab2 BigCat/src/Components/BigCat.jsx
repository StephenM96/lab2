import Cats from "./Cats";

function BigCats(props) {
    const bigCats = [
        { 
            id: 1,
            name: 'Cheetah', 
            latinName: 'Acinonyx jubatus' ,
        },
        { 
            id: 2,
            name: 'Cougar', 
            latinName: 'Puma concolor' ,
        },
        { 
            id: 3,
            name: 'Jaguar', 
            latinName: 'Panthera onca' ,
        },
        { 
            id: 4,
            name: 'Leopard', 
            latinName: 'Panthera pardus' ,
        },
        { 
            id: 5,
            name: 'Lion', 
            latinName: 'Panthera leo' ,
        },
        { 
            id: 6,
            name: 'Snow leopard', 
            latinName: 'Panthera uncia' ,
        },
        { 
            id: 7,
            name: 'Tiger', 
            latinName: 'Panthera tigris' ,
        },
    ];

    const catItems = bigCats.map(cats => (
        <Cats
        key={cats.id}
        name={cats.name}
        latinName={cats.latinName}
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