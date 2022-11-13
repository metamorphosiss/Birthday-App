
const List = ({ people, cleanMode })=>{
    return(
        <>
        <h3> {people.length} birthdays today</h3>
       {people.map((person)=>{
        const { id,name,age,image } = person
        return (
           <article className='person' key={id}>
               <img src={image} alt= {name}/>
               {!cleanMode &&
                <div>
                    <h4>{name}</h4>
                    <p> {age} years</p>
                </div>}
        </article>
        )
       })}
        </>
    );
};
export default List




