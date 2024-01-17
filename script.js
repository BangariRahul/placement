 // Sample arrays for profile data
 const names = [ "Pratyas Kumar",
 "Milind Vedi",
 "Gautam Pawar",
 "Pirjada Mohammedtanvir Jamilahemad",];
 const profileImages = ["WhatsApp Image 2023-07-04 at 8.43.43 PM.jpeg",
 "WhatsApp Image 2023-06-08 at 6.50.41 PM.jpeg",
 "WhatsApp Image 2023-07-05 at 11.40.27 AM.jpeg",
 "WhatsApp Image 2023-01-12 at 11.12.00 PM - Tanvir Pirjada.jpeg",];
 const companyLogos = ["Mountblue Ventures",
 "Mountblue_Ventures",
 "Mountblue_Ventures",
 "Mountblue_Ventures",];

 // Function to create a profile card
// Function to create a profile card
function createProfileCard(name, profileImage, companyLogo) {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";
  
    cardContainer.innerHTML = `
      <div class="card-background">
        <img src="GEEKSTER.png" alt="Background" class="card-bg-image">
      </div>
      <div class="card-content">
        <div class="profile-picture-container">
          <img src="img/${profileImage}" alt="${name}" class="profile-picture">
        </div>
        <div class="furquan">
          <h2 class="name">${name}</h2>
          <p class="title">From Mechanical Engineer To Software Engineer</p>
        </div>
        <div class="company-logo-container">
          <img src="logo/${companyLogo}_logo.png" alt="Company Logo" class="company-logo">
        </div>
      </div>
    `;
  
    return cardContainer;
  }
  

 // Function to add profiles to the container
 function addProfilesToContainer() {
   const profileContainer = document.getElementById("profileContainer");

   // Loop through the arrays and create cards
   for (let i = 0; i < names.length; i++) {
     const profileCard = createProfileCard(names[i], profileImages[i], companyLogos[i]);
     profileContainer.appendChild(profileCard);
   }
 }

 // Call the function to add profiles to the container
 addProfilesToContainer();