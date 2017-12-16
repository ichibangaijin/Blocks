var testLevel = new Level();

testLevel.Initialize = function () {
    // set next level
    this.nextLevel = level1;
    
    // position player
    player.sprite.x = 0;
    player.sprite.y = 900;
    Camera.rotation = Math.PI;
    player.direction = 2;
    this.missionPrompt = "I\'m freeee! Free fall\'n!";
    InitializeLevel(this);
    gameSpeed = 2;
    
    this.goal = CreateGoal(0, -1000);
};

testLevel.Update = function () {
    UpdateLevel(this);
};

testLevel.CleanUp = function () {
    CleanUpLevel(this);
};