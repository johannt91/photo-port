import React from 'react';

const Nav = () => {
    const categories = [
        {
            name: "commercial",
            description: "Photo fo grocery stores, food trucks, and other commercial projects",
        },
        { 
            name: "portraits",
            description: "Portraits of people in my life"
        },
        {
            name: "food",
            description: "Delicious delicacies"
        },
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beatuy of nature",
        }
    ]

    function categorySelected(name) {
        console.log(`${name} clicked`);
    }

    return(
        <header>
            <h2>
                <a data-testid="link" href="/">
                <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className="mx-1" key={category.name}>
                            <span onClick={() => categorySelected(category.name)} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;