export default function Dog({name, age, breed, deceased}){
    return(
        <section className="dog-card">
            <h2>{name} {deceased ? '👻' : '🐕'}</h2>
           <ul>
           <li>Age: {age}</li>
           <li>Breed: {breed}</li>
           </ul>
           
        </section>
    )
}