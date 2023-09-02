const content = document.getElementById('content')
const partyImgUrl = './static/party.jpg'

function createContent(typeOfPage = 'home') {
    content.innerHTML  = ''
    const backgroundDiv = document.createElement('div');
    const backgroundContent = document.createElement('div');
    switch (typeOfPage) {
        case 'home':
            
            const backgroundContent = document.createElement('div');

            backgroundDiv.classList.add('background', 'flex', 'calculated-height');
            backgroundDiv.setAttribute('style', `background-image:
            linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),
            url(${partyImgUrl});`)

            backgroundContent.innerHTML = `<div class="container flex-col">
                <div class="slogan text-center"><span class="accent-text">G</span>ood Time, <span class="accent-text">G</span>reat Taste</div>
                <button class="btn-cta" id='btn-redirect'>Take your order</button>
            </div>`;

            backgroundDiv.appendChild(backgroundContent);

            content.appendChild(backgroundDiv);

            const redirect = document.getElementById('btn-redirect');

            redirect.addEventListener('click', () => {
                createContent('menu')
            })
            break;
        case 'menu':
            backgroundDiv.classList.add('grid', 'calculated-height');

            let contentText = '';
            const mealImages = [
                {
                    imgSource: './static/meal1.png',
                    description: 'Happy Meal'
                },
                {
                    imgSource: './static/meal2.png',
                    description: 'Cheese Pounder '
                },
                {
                    imgSource: './static/meal3.png',
                    description: 'Triple Stack Meal'
                },
                {
                    imgSource: './static/meal4.png',
                    description: '8pcs Chicken Bucket'
                },
            ] 

            mealImages.forEach((img) => {
                const imageDiv = document.createElement('div')
                imageDiv.classList.add('menu-card', 'text-center')
                
                const image = document.createElement('img');
                image.src = img.imgSource;
                
                const description = document.createElement('h3');
                description.classList.add('img-desc')
                description.textContent = img.description;
                imageDiv.prepend(image)
                imageDiv.appendChild(description)
                backgroundDiv.appendChild(imageDiv)
            })

            content.appendChild(backgroundDiv);
            break;
        case 'about':
            content.innerHTML  = ''
            console.log('about')
            break;
        default:
            break;
    }
    
}


export { createContent }