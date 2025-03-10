export default function Country (country){
    const {name, flags} = country.country;
    // console.log(country);
    
    
    return(
        <div>
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="" />
        </div>
    )
}