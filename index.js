document.addEventListener("DOMContentLoaded", function() {
    // JSON DATA
    const charactersData = {
      "characters": [
        {
          "id": 1,
          "name": "Mr. Cute",
          "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
          "votes": 0
        },
        {
          "id": 2,
          "name": "Mx. Monkey",
          "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
          "votes": 0
        },
        {
          "id": 3,
          "name": "Ms. Zebra",
          "image": "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
          "votes": 0
        },
        {
          "id": 4,
          "name": "Dr. Lion",
          "image": "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
          "votes": 0
        },
        {
          "id": 5,
          "name": "Mme. Panda",
          "image": "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
          "votes": 0
        }
      ]
    };
  
    // Firstly obtain the characterList container element
    const characterList = document.getElementById("characterList");
  
    // Loop  the characters and create elements for display
    charactersData.characters.forEach(character => {
      // Make a div element for each character
      const characterDiv = document.createElement("div");
  
      // Make an image element then set the source
      const characterImage = document.createElement("img");
      characterImage.src = character.image;
  
      // Make a heading element and then its text content
      const characterName = document.createElement("h3");
      characterName.textContent = character.name;
  
      // Attach the heading and image elements to the character div
      characterDiv.appendChild(characterImage);
      characterDiv.appendChild(characterName);
  
      // Attach the character div to the characterList container
      characterList.appendChild(characterDiv);
    });
  });
