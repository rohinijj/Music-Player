const params = new URLSearchParams(window.location.search);
const type = params.get("type"); 
const title = document.getElementById("category-title");
const grid = document.getElementById("category-grid");

const data = {
  director: [
    { name: "Anirudh Ravichander", image: "./assets/m1.jpg" },
    { name: "A.R. Rahman", image: "assets/m2.jpg" },
    { name: "G.V. Prakash Kumar", image: "assets/m3.jpg" },
    { name: "Hiphop Tamizha", image: "assets/m4.jpg" },
    { name: "Yuvan Shankar Raja", image: "assets/m5.jpg" },
    { name: "Harris Jayaraj", image: "assets/m6.jpg" },
    { name: "Vijay Antony", image: "assets/m7.jpg" },
    { name: "Sam C.S.", image: "assets/m8.jpg" }
  ],
  singer: [
  { name: "Sid Sriram", image: "assets/s1.jpg" },
  { name: "Shreya Ghoshal", image: "assets/s2.jpg" },
  { name: "Anirudh Ravichander", image: "assets/s3.jpg" },
  { name: "Chinmayi", image: "assets/s7.jpg" },
  { name: "Jonita Gandhi", image: "assets/s8.jpg" },
  { name: "Karthik", image: "assets/s10.jpg" },
  { name: "Shwetha Mohan", image: "assets/s12.jpg" },
  { name: "Anuradha Sriram", image: "assets/s16.jpg" }
],

movie: [
  { name: "Jailer", image: "assets/mo1.jpg" },
  { name: "Leo", image: "assets/mo2.jpg" },
  { name: "Vikram", image: "assets/mo3.jpg" },
  { name: "Master", image: "assets/mo4.jpg" },
  { name: "Kaththi", image: "assets/mo5.jpg" },
   { name: "Varanam Aayiram", image: "assets/mo6.jpg" }, 
  { name: "Kaithi", image: "assets/mo7.jpg" },
  { name: "Bigil", image: "assets/mo8.jpg" },
  { name: "Varisu", image: "assets/mo9.jpg" },
  { name: "Thunivu", image: "assets/mo10.jpg" },
  { name: "Thiruchitrambalam", image: "assets/mo11.jpg" },
  { name: "Retro", image: "assets/mo12.jpg" },
  { name: "Maanaadu", image: "assets/mo13.jpg" },
  { name: "Asuran", image: "assets/mo14.jpg" },
  { name: "Theri", image: "assets/mo15.jpg" },
  { name: "Mersal", image: "assets/mo16.jpg" },
  { name: "Soorarai Pottru", image: "assets/mo17.jpg" },
  { name: "24", image: "assets/mo18.jpg" },
  { name: "Singam", image: "assets/mo19.jpg" },
  { name: "Ayan", image: "assets/mo20.jpg" }
],
actor: [
  { name: "Suriya", image: "assets/a1.jpg" },
  { name: "Ajith Kumar", image: "assets/a2.jpg" },
  { name: "Vijay Sethupathi", image: "assets/a3.jpg" },
  { name: "Dhanush", image: "assets/a4.jpg" },
  { name: "Vijay", image: "assets/a5.jpg" },
  { name: "Rajinikanth", image: "assets/a6.jpg" },
  { name: "Karthi", image: "assets/a11.jpg" },
  { name: "Silambarasan (STR)", image: "assets/a12.jpg" }
]


};

title.textContent = `Select a ${type.charAt(0).toUpperCase() + type.slice(1)}`;

data[type].forEach(item => {
  const card = document.createElement("a");
  card.className = "grid-card";
  card.href = `player.html?filter=${type}&value=${encodeURIComponent(item.name)}`;
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" />
    <h2>${item.name}</h2>
  `;
  grid.appendChild(card);
});
