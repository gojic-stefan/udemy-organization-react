export default function CoreConcept({ image, title, description }) {
    //Pass the properties instead of the props parameter in the function, then use the values without PROPS parameter!!!
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}