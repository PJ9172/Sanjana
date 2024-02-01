const students = [{
    rollNo: 6,       
    name: "Sanjana Hodbe",
    age: 19,
    gender: "Female",
    favItCompany: "Persistent systems Limited",   
    githubUrl: "https://api.github.com/users/SH3422",   
    mailId: "sanjanahodbe@gmail.com",
    birthDate: "06-03-2004",
    avatar :"https://avatars.githubusercontent.com/u/147395950?v=4" ,
    profile:" https://github.com/shara762"
  },
  
  
     {
    rollNo: 5,       
    name: "Ashwini Yadav",
    age: 21,
    gender: "Female",
    favItCompany: "Tech Mahindra India",   
    githubUrl: "https://api.github.com/users/ashwini6777",   
    mailId: "ashwiniyadav3703@gmail.com",
    birthDate: "29-01-2003",
    avatar :"https://avatars.githubusercontent.com/u/147252354?v=4" ,
    profile:" https://github.com/ashwini677"
    
  },
 
   {
    rollNo: 4,       
    name: "Prajwal Jagtap",
    age: 19,
    gender: "Male",
    favItCompany: "Wipro India",   
    githubUrl: "https://api.github.com/users/PJ9172",   
    mailId: "rohitjagtap5000@gmail.com",
    birthDate: "22-06-2004",
    avatar :"https://avatars.githubusercontent.com/u/147252354?v=4" ,
  profile:" https://github.com/shara762"
  },
  
   {
    rollNo: 3,       
    name: "Mosin Balsing",
    age: 19,
    gender: "Male",
    favItCompany: "Wipro India",   
    githubUrl: "https://api.github.com/users/Mosin-M-B",   
    mailId: "mosinbalsing@gmail.com",
    birthDate: "13-03-2004",
    avatar :"https://avatars.githubusercontent.com/u/119176708?v=4",
    profile:" https://github.com/Mosin-M-B"
  
  },
  {
   
    rollNo: 2,       
    name: "Farzana Shaikh",
    age: 21,
    gender: "female",
    favItCompany: "Talentica software ",   
    githubUrl: "https://api.github.com/users/Fara776",   
    mailId: "farashaikh564@gmail.com",
    birthDate: "14-01-2003",
    avatar :"https://avatars.githubusercontent.com/u/145984007?v=4" ,
profile:" https://github.com/Fara-776"
      },
  {
  
  
    rollNo: 1,       
    name: "Sharifa Shaikh",
    age: 21,
    gender: "female",
    favItCompany: "Cognizant",   
    githubUrl: "https://api.github.com/users/shara762",   
    mailId: "shaikhsharifa762@gmail.com",
    birthDate: "14-01-2003",
    avatar :"https://avatars.githubusercontent.com/u/145984673?v=4" ,
    profile:" https://github.com/shara762"
   
  }
  
  ];

var studentdiv = document.getElementById("studentdiv");



students.forEach(student => {
  var card = document.createElement("div");
  card.style.border = "1px solid black"; 
  card.style.width = "300px";
  card.style.margin = "20px"; 
  card.style.borderRadius =" 10px";
  card.style.backgroundColor ="Lightgrey";

  var Img = document.createElement("img");
  Img.src = student.avatar;
  Img.style.width = "170px"; 
  Img.style.height = "170px"; 
  Img.style.borderRadius ="60%";
  Img.style.marginTop=" 10px"; 
  Img.style.border ="1px solid grey ";
  Img.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.4)"; 
  
  
  card.appendChild(Img);

  card.innerHTML += `
    <h2>${student.name}</h2>
    <p>Roll No: ${student.rollNo}</p>
    <p>Age: ${student.age}</p>
    <p>Gender: ${student.gender}</p>
    <p>Favorite IT Company: ${student.favItCompany}</p>
    <p>Email: ${student.mailId}</p>
    <p>Birth Date: ${student.birthDate}</p>

    <a href="${student.profile}">profile</a>
   
  `;
 
  
  studentdiv.appendChild(card);
});

