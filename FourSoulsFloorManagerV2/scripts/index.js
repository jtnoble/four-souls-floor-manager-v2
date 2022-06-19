//Floors currently in game
var floors = [
    "Basement/Cellar/Burning Basement", 
    "Caves/Flooded Caves/Catacombs", 
    "Downpour/Dross", 
    "Mines/Ashpit", 
    "Depths/Dank Depths/Necropolis",
    "Mausoleum/Gehenna",
    "Womb/Scarred Womb/Utero",
    "Cathedral/Sheol",
    "The Chest/Dark Room",
    "Void/Home",
    "???/Corpse"
]
//Globals
var button_container = document.getElementById('button-container');
var title_header = document.getElementById('main-header');
var background_img = document.getElementById('main-background-img');
var description = document.getElementById('description');
var reload_btn = document.getElementById('reloader-btn');

//Creates initial list of buttons from floors array
function CreateButtons(){
    var new_button;
    for(let i = 1; i <= floors.length; i++){
        new_button = document.createElement('button');
        new_button.innerHTML = floors[i-1];
        new_button.className = "buttons-created";
        new_button.style.gridColumnStart = i % 4;
        new_button.style.gridRowStart = Math.floor((i-1) / 4)+1;
        new_button.addEventListener('click', function(){
            DeleteButtons();
            ButtonsPage2(floors[i-1]);
        });
        button_container.appendChild(new_button);
    }
}

//Creates the second list of buttons based off of splitting the floors by "/"
function ButtonsPage2(floor_name){
    
    console.log(floor_name);
    floor_name = floor_name.split("/");
    console.log(floor_name);

    var new_button;
    for(let i = 1; i <= floor_name.length; i++){
        new_button = document.createElement('button');
        new_button.innerHTML = floor_name[i-1];
        new_button.className = "buttons-created";
        new_button.style.gridColumnStart = i % 4;
        new_button.style.gridRowStart = Math.floor((i-1) / 4)+1;
        new_button.addEventListener('click', function(){
            DeleteButtons();
            ChooseFloor(floor_name[i-1]);
        });
        button_container.appendChild(new_button);
    }
}

//Changes background, header, and adds text based on floor
function ChooseFloor(floor_name){
    var floor_description = "";
    var floor_img = "";
    switch(floor_name){
        case "Basement":
            floor_description = "You feel fine. Gain 1 penny at the start of your turn.";
            floor_img = "css/images/Basement.png"
            break;
        case "Cellar":
            floor_description = "You feel confident. Gain +1 attack on your first attack only.";
            floor_img = "css/images/Cellar.png";
            break;
        case "Burning Basement":
            floor_description = "You feel hot. You have +1 attack, and all enemies do +1 damage to you.";
            floor_img = "css/images/Burning_Basement.png";
            break;
        case "Caves":
            floor_description = "You feel spelunky. When you defeat a monster, +1 loot.";
            floor_img = "css/images/Caves.png";
            break;
        case "Flooded Caves":
            floor_description = "You feel soggy. You cannot do more than 1 damage at a time, and enemies cannot do more than 1 damage to you.";
            floor_img = "css/images/Flooded_Caves.png";
            break;
        case "Catacombs":
            floor_description = "You feel spooky. If you die here, pay no death penalties but end your turn.";
            floor_img = "css/images/Catacombs.png";
            break;
        case "Downpour":
            floor_description = "You feel sad. There is a beggar on this floor. During your turn, you may donate up to 3 pennies to him. After each penny, roll the 8 sided dice. If the result is 8, the beggar thanks you, and gives you 1 treasure. After 3 treasures have been claimed, the beggar disappears.";
            floor_img = "css/images/Downpour.png";
            break;
        case "Dross":
            floor_description = "You feel disgusting. Every time you roll a 1, poop yourself. When you poop yourself, you are protected from 1 point of the next damage you would take this floor.";
            floor_img = "css/images/Dross.png";
            break;
        case "Mines":
            floor_description = "You feel crafty. Using a bomb to finish an enemy drops a treasure.";
            floor_img = "css/images/Mines.png";
            break;
        case "Ashpit":
            floor_description = "You feel ashy. Each enemy deals +1 damage, but has a 50% chance to miss when damaging you [Roll the 6-sided die: 1-3 = Miss, 4-6 = Hit].";
            floor_img = "css/images/Ashpit.png";
            break;
        case "Depths":
            floor_description = "You feel cautious. You may choose to look at a room before exploring, but if you don't explore it, you may not explore any others.";
            floor_img = "css/images/Depths.png";
            break;
        case "Dank Depths":
            floor_description = "You feel dank. When you damage an enemy, heal for 1 HP.";
            floor_img = "css/images/Dank_Depths.png";
            break;
        case "Necropolis":
            floor_description = "You feel scared. Every enemy (including bosses) is revealed from the start, but they all have +1 HP.";
            floor_img = "css/images/Necropolis.png";
            break;
        case "Mausoleum":
            floor_description = "You feel sneaky. At the start of your turn, you may look at one players hand. If you do, swap a card in your hand with a random one from theirs.";
            floor_img = "css/images/Mausoleum.png";
            break;
        case "Gehenna":
            floor_description = "You feel demonic. During your turn, you may pay 1 HP to gain 3 pennies.";
            floor_img = "css/images/Gehenna.png";
            break;
        case "Womb":
            floor_description = "You feel unborn. Every time you defeat an enemy, you are fully healed.";
            floor_img = "css/images/Womb.png";
            break;
        case "Scarred Womb":
            floor_description = "You feel betrayed. If you defeat an enemy, discard 1 loot card.";
            floor_img = "css/images/Scarred_Womb.png";
            break;
        case "Utero":
            floor_description = "You feel whole. All players are healed at the end of every turn.";
            floor_img = "css/images/Utero.png";
            break;
        case "???":
            floor_description = "You feel REDACTED. This floor only has one room, which is guaranteed to be a boss. (2 bosses if an XL floor) Each player gains 1 treasure. Every player rolls the 8 sided dice, and whoever rolls highest gets to play this floor first.";
            floor_img = "css/images/Hush.png";
            break;
        case "Corpse":
            floor_description = "You feel undead. You can avoid death on this floor by discarding 3 loot cards, putting you at 1 HP.";
            floor_img = "css/images/Corpse.png";
            break;
        case "Cathedral":
            floor_description = "You feel holy. If you save another player from death, you and that player gain a permanent +1 max HP.";
            floor_img = "css/images/Cathedral.png";
            break;
        case "Sheol":
            floor_description = "You feel evil. If you take damage here, deal 1 damage to every face-up monster.";
            floor_img = "css/images/Sheol.png";
            break;
        case "The Chest":
            floor_description = "You feel rich. Every enemy drops 1 treasure and 5 coins.";
            floor_img = "css/images/The_Chest.png";
            break;
        case "Dark Room":
            floor_description = "You feel risky. When you defeat a monster, you can roll a die for double the rewards (including souls) if you roll less than 5, die with no rewards and the enemy respawns.";
            floor_img = "css/images/Dark_Room.png";
            break;
        case "Void":
            floor_description = "You feel corrupted. At the start of your turn, you may choose to use another players active items in addition to your own. If you choose that player, they cannot respond by using items or cards.";
            floor_img = "css/images/Void.png";
            break;
        case "Home":
            floor_description = "You feel safe. During your turn, no other players are allowed to play a loot card.";
            floor_img = "css/images/Home.png";
            break;
        default:
            floor_description = "";
            floor_img = "css/images/isaac_bg.png";
            break;
    }
    ChangeBgAndDesc(floor_name, floor_description, floor_img);
}

function ChangeBgAndDesc(floor_name, floor_description, floor_img){
    $(title_header).fadeOut('slow');
    $(description).fadeOut('slow');
    $(background_img).fadeOut('slow', function() {
        title_header.innerHTML = floor_name;
        description.innerHTML = floor_description;
        background_img.src = floor_img;
    });
    $(background_img).fadeIn();
    $(title_header).fadeIn();
    $(description).fadeIn();
}

//Deletes all buttons in button container
function DeleteButtons(){
    while (button_container.firstChild){
        button_container.removeChild(button_container.firstChild);
    }
}

//Resets main page by adding back the correct header, background, and calling CreateButtons
function ResetMainPage(){
    DeleteButtons();
    ChangeBgAndDesc("Four Souls", "", "css/images/isaac_bg.png");
    CreateButtons();
    button_container.style.animation = 'none';
    button_container.offsetHeight; /* trigger reflow */
    button_container.style.animation = null; 

    reload_btn.disabled = true;
    setTimeout(function(){
        reload_btn.disabled = false; 
    }, 3000);
    
}

CreateButtons();