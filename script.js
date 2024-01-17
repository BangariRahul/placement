 // Sample arrays for profile data
 const names = [ "Pratyas Kumar",
 "Milind Vedi",
 "Gautam Pawar",
 "Pirjada Mohammedtanvir Jamilahemad",];
 const profilePhotos = ["WhatsApp Image 2023-07-04 at 8.43.43 PM.jpeg",
 "WhatsApp Image 2023-06-08 at 6.50.41 PM.jpeg",
 "WhatsApp Image 2023-07-05 at 11.40.27 AM.jpeg",
 "WhatsApp Image 2023-01-12 at 11.12.00 PM - Tanvir Pirjada.jpeg",];
 const companyLogos = ["Mountblue_Ventures",
 "Mountblue_Ventures",
 "Mountblue_Ventures",
 "Mountblue_Ventures",];

const titles = [
  'From Mechanical Engineer To Software Engineer',
  'Title for Another',
  'Title for Third'
];

function createCard(name, title, profilePhoto, companyLogo) {
  // Create card elements
  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-container';

  const cardBackground = document.createElement('div');
  cardBackground.className = 'card-background';
  const bgImage = document.createElement('img');
  bgImage.src = profilePhoto;
  bgImage.alt = 'Background';
  bgImage.className = 'card-bg-image';
  cardBackground.appendChild(bgImage);

  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';

  const profilePictureContainer = document.createElement('div');
  profilePictureContainer.className = 'profile-picture-container';
  const profilePicture = document.createElement('img');
  profilePicture.src = `/img/${profilePhoto}`;
  profilePicture.alt = 'Profile Picture';
  profilePicture.className = 'profile-picture';
  profilePictureContainer.appendChild(profilePicture);

  const nameElement = document.createElement('h2');
  nameElement.className = 'name';
  nameElement.textContent = name;

  const titleElement = document.createElement('p');
  titleElement.className = 'title';
  titleElement.textContent = title;

  const companyLogoContainer = document.createElement('div');
  companyLogoContainer.className = 'company-logo-container';
  const companyLogoImage = document.createElement('img');
  companyLogoImage.src = `/logo/${companyLogo}_logo.png`;
  companyLogoImage.alt = 'Company Logo';
  companyLogoImage.className = 'company-logo';
  companyLogoContainer.appendChild(companyLogoImage);

  // Append all elements to cardContent
  cardContent.appendChild(profilePictureContainer);
  cardContent.appendChild(nameElement);
  cardContent.appendChild(titleElement);
  cardContent.appendChild(companyLogoContainer);

  // Append cardContent to cardContainer
  cardContainer.appendChild(cardBackground);
  cardContainer.appendChild(cardContent);

  return cardContainer;
}

// Function to generate cards and append to the container
function generateCards(names) {
    const mainDiv = document.getElementById('main-div');
    const cardsContainer = document.getElementById('ca');

  for (let i = 0; i < names.length; i++) {
    const card = createCard(names[i], titles[i], profilePhotos[i], companyLogos[i]);
    cardsContainer.appendChild(card);
    mainDiv.appendChild(cardsContainer);
  }
}

// Call the function to generate cards
generateCards(names, titles, profilePhotos, companyLogos);
