var playerName = window.prompt("What is your robots name");
var playerHealth = 100;
var playerAttack = 10;

//you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Subtract the value of 'playerAttack' form the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message tot he console so ew know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // Subtract the value of 'enemyAttack' from the variable of 'playerHealth' and use that result to update the value in the 'playerhealth' variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message tot he console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
};

fight();