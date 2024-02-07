
    // Create Dino Constructor
    function Dino(species, weight, height, diet, where, when, fact){
        this.species = species
        this.weight = weight
        this.height = height
        this.diet = diet
        this.where = where
        this.when = when
        this.fact = fact
    }

    // Create Dino Objects


    // Create Human Object
    class Human {
        constructor(name, feet, inches, weight, diet) {
            this.name = name
            this.feet = feet
            this.inches = inches
            this.weight = weight
            this.diet = diet
        }
    }

    // Create Dino Compare Method: Compare Weight 
    Dino.prototype.compareWeight = function compareWeight(humanWeight) {
        const comparison = 
        this.weight == humanWeight
         ? `The ${this.species} and you weight the same.` : 
         this.weight > humanWeight
          ? `The ${this.species} is ${Math.round(this.weight / humanWeight)} times heavier than your weight.`
           : `The ${this.species} is ${Math.round(1 / (this.weight / humanWeight))} times lighter than your weight.`
        return comparison; 
    };

    // Create Dino Compare Method: Compare Diet 
    Dino.prototype.compareDiet = function compareDiet(humanDiet) {
        const comparison = 
        this.diet == humanDiet.toLowerCase()
         ? `The ${this.species} and you diet the same.` : 
         `The ${this.species} is a ${this.diet} and you're a ${humanDiet}.`
        return comparison; 
    };

    // Create Dino Compare Method: Compare Height 
    Dino.prototype.compareHeight = function compareHeight(humanHeight) {
        const comparison = 
        this.height == humanHeight
         ? `The ${this.species} and you height the same.` : 
         this.height > humanHeight
          ? `The ${this.species} is ${Math.round(this.height / humanHeight)} times taller than your height.`
           : `The ${this.species} is ${Math.round(1 / (this.height / humanHeight))} times shorter than your height.`
        return comparison; 
    };

    const dinos = [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ]

    const tilesArray = []
    

    // Use IIFE to get human data from form
    function getHumanDataFromUI() {
        const name = document.getElementById("name").value
        const feet = document.getElementById("feet").value
        const inches = document.getElementById("inches").value
        const weight = document.getElementById("weight").value
        const diet = document.getElementById("diet").value
        // Check all the fields is not empty
        if(name && feet && inches && weight && diet){
            dinos.forEach(function (dino) {
                tilesArray.push(new Dino(dino));
            });
            // Human should be in the centre square
            tilesArray.splice(4,0, new Human(name,feet,inches,weight,diet))
            // add all the titles to DOM
            renderUI()
        }else {
            // Warning Alert
           alert("All fields are required. Please input and try againt.") 
        }
    }

    function getFact(dino,human){
        let fact = ''
        if(dino.species == 'Pigeon'){
            return dino.fact
        } else {
            const randomChoice = Math.round(Math.random() * 4)
            switch (randomChoice) {
                case 0: 
                fact = `${dino.species} lived in ${dino.where}.`
                break
                case 1: 
                fact = dino.compareDiet(human.diet)
                break
                case 2: 
                fact = dino.compareHeight(human.height)
                break
                case 3: 
                fact = dino.compareWeight(human.weight)
                break
                case 4: 
                fact = `${dino.species} lived in ${dino.where} since ${dino.when}.`
                break
                default: 
                fact = `Dinosaurs are a diverse group of reptiles of the clade Dinosauria`
                break

            }
        }
        return fact
    }

    function createNewDivForDino(dino){
        const div = document.createElement('div')
        console.log(dino)
        console.log(dino.species)
        console.log(typeof dino.species === 'string')
        div.className = 'grid-item'
        div.innerHTML = 
        `<h3>${dino.species}</h3>
        <img src="images/${(dino.species.toLowerCase())}.png" alt="${dino.species}">
        <p>${getFact(dino, tilesArray[4])}</p>`
        return div
    }

    function createNewDivForHuman(human){
        const div = document.createElement('div')
        div.className = 'grid-item'
        div.innerHTML = 
        `<h3>${human.name}</h3>
        <img src="images/human.png">`
        return div
    }

    function renderUI(){
        let grid = document.getElementById("grid");
        let count = 0;
        tilesArray.forEach(element => {
            if(count == 4) {
                grid.appendChild(createNewDivForHuman(element))
            } else {
                grid.appendChild(createNewDivForDino(element))
            }
            count++
        }
        )
        // Show the 'Go Again' button
        document.getElementById('repeat-btn').style.display = 'block';
    }

    function reset() {
        document.getElementById('grid').innerHTML = '';
        document.getElementById('repeat-btn').style.display = 'none';
        document.querySelector('form').style.display = 'block';
    }

    document.getElementById("btn").addEventListener("click", getHumanDataFromUI)
    document.getElementById("repeat-btn").addEventListener("click", reset)

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
