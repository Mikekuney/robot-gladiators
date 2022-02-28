var playerName = window.prompt("What is your robots name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

var fight = function(enemyNames) {
    // repeat and execute as long as the enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // if player choses to fight, then fight the enemy
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // Subtract the value of 'playerAttack' form the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
            enemyHealth = enemyHealth - playerAttack;
            // Log a resulting message tot he console so ew know that it worked.
            console.log(
                playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
            );

            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyNames + " has died!");
            
                // award player money for winning
                playerMoney = playerMoney + 20;

                // leave while() loop since enemy is dead
                break;
            } else {
                window.alert(enemyNames + " still has " + enemyHealth + " health left.")
            }

            // Subtract the value of 'enemyAttack' from the variable of 'playerHealth' and use that result to update the value in the 'playerhealth' variable.
            playerHealth = playerHealth - enemyAttack;
            // Log a resulting message to the console so we know that it worked.
            console.log(
                enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
                
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }

        // if no (false),  ask question again by running fight() again 
        } else {
            window.alert("You need to choose a valid option Try again!");
            fight(pickedEnemyName)
            break;
        }
    }
}

var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));

        // picked new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
        
        // reset enemyHealth before starting new fight
        enemyHealth = 50;

        // use debugger to pause script from running and check whats going on at the moment in the code
        // debugger;

        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter is the
        fight(pickedEnemyName)
        }
        // if we're not the last enemy in the array
        if (playerHealth > 0 && i < enemyNames.length - 1) {
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            //if yes, take them to the store() function
            if (storeConfirm) {
            shop();
            }
        }

        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    // after the loop ends, player is either out of health or enemies to fight, so run the endgame function
    endGame();
    // play again
    startGame();
};

// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) { 
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    
    if (playAgainConfirm) {
        //restart Game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}
    //window.alert("The game has now ended. Let's see how you did!")
var shop = function() {
    var shopOptionPrompt = window.prompt("What would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please confirm one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    switch (shopOptionPrompt) {
        case "REFILL": // new case
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                //increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                }
            else {
                window.alert("You don't have enough money!");
            }

            break;
        case "UPGRADE": // new case
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                
                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;
        case "LEAVE": // new case
        case "leave":
            window.alert("Leaving the store.");

            //do nothing, so function will end
            break;
        default:
            window.alert("you did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};
    // start the game when the page loads
startGame();
