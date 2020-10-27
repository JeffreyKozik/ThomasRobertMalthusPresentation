var Button = function(config){
    this.xPlace = config.xPlace;
    this.y = config.y;
    this.height = config.height;
    this.width = config.width;
    this.color = config.color;
    this.text = config.text;
    this.onClick = config.onClick;
};
Button.prototype.draw = function() {
    fill(this.color);
    rect(this.xPlace - 40, this.y - 20, this.width, this.height);
    fill(0,0,0);
    text(this.text, this.xPlace - 20, this.y + 5.5);
};
Button.prototype.isMouseInside = function(){
    return  mouseX > this.xPlace &&
            mouseX < (this.xPlace + this.width) &&
            mouseY > this.y &&
            mouseY < (this.y + this.height);
};
Button.prototype.handleKlick = function(){
    if(this.isMouseInside()){
        this.onClick();
    }
};

var x = 1;
var i = 1;
var j = 1;

var drawF = function(){
var foodSupply = 2*x;
var population = Math.pow(2, x);
var unprovidedForPeople = population - foodSupply;
var providedForPeople = population - unprovidedForPeople;
var providedForPeoplePercentage = providedForPeople / population;
var unprovidedForPeoplePercentage = unprovidedForPeople / population;
var proPopPer = providedForPeoplePercentage * 360;
var unproPopPer = unprovidedForPeoplePercentage * 360;

fill(0, 0, 255);
ellipse(200,200,400,400);
fill(255, 0, 0);
arc(200, 200, 400, 400, 0, proPopPer);

fill(255, 255, 255);
text("Year "+ round(25*x), 200, 200);
textSize(15);
text(providedForPeoplePercentage * 100, 200, 10);
};
var drawPeople = function(){
    fill(255, 255, 255);
    noStroke();
    rect(0,0, 200, 20);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    var u = Math.pow(2, i);
    var a = 0;
    var b = 0;


    for(var z = 0; z < u; z = z + 1){
        if((z % 16) === 0){
            a = a + 25;
            b = 0;
        }
        image(getImage("cute/CharacterBoy"), (25 * b), a - 25, 30, 60);
        b++;
    }
    fill(0,0,0);
        text("Year " + i * 25, 25, 10);
        text("Population " + u, 100, 10);

};
var drawFood = function(){
    fill(255, 255, 255);
    noStroke();
    rect(0,0, 200, 20);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    var k = 2 * j;
    var l = 0;
    var m = 0;


    for(var n = 0; n < k; n = n + 1){
        if((n % 16) === 0){
            l = l + 25;
            m = 0;
        }
        image(getImage("cute/TreeUgly"), (25 * m), l - 25, 30, 60);
        m++;
    }
    fill(0,0,0);
        text("Year " + j * 25, 25, 10);
        text("Food " + n, 100, 10);
};
var drawfp = function(){
     fill(255, 255, 255);
    noStroke();
    rect(0,0, 275, 20);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    var u = Math.pow(2, i);
    var a = 0;
    var b = 0;


    for(var z = 0; z < u; z = z + 1){
        if((z % 16) === 0){
            a = a + 25;
            b = 0;
        }
        image(getImage("creatures/OhNoes"), (25 * b), a + 25, 15, 30);
        b++;
    }
    fill(0,0,0);
        text("Year " + i * 25, 25, 10);
        text("Population " + u, 100, 10);
    var k = 2 * j;
    var l = 0;
    var m = 0;


    for(var n = 0; n < k; n = n + 1){
        if((n % 16) === 0){
            l = l + 25;
            m = 0;
        }
        stroke(255, 255, 255);
        fill(255, 255, 255);
        rect(25 * m, l + 25, 15, 30);
        image(getImage("creatures/Hopper-Cool"), (25 * m), l + 25, 15, 30);
        stroke(0, 0, 0);
        fill(0, 0, 0);
        m++;
    }
    fill(0,0,0);
        text("Year " + j * 25, 25, 10);
        text("Food " + n, 200, 10);
};
var drawRiches = function(){
    background(255, 0, 0);
    fill(0, 255, 0);
    image(getImage("cute/TreeUgly"), 200, 200, 30, 60);
    text("Costs $1", 200, 200);
    image(getImage("creatures/OhNoes"), 100, 100, 15, 30);
    text("$1", 100, 100);
    image(getImage("creatures/Hopper-Cool"), 300, 300, 15, 30);
    text("$10", 300, 300);
    image(getImage("creatures/OhNoes"), 100, 200, 15, 30);
    text("$1", 100, 200);
    image(getImage("cute/DoorTallClosed"), 300, 25, 75, 75);
    text("Government", 300, 25);


};

var yearNew = new Button({xPlace: 350, y: 10, height: 40, width: 75, text: "Year" , onClick: function(){
    i++;
    drawPeople();
}});
var yearAgainFood = new Button({xPlace: 340, y: 10, height: 40, width: 75, text: "Year", onClick: function(){
    j++;
    drawFood();
}});
var yearTogether = new Button({xPlace: 340, y: 10, height: 40, width: 75, text: "Year", onClick: function(){
    i++;
    j++;
    drawfp();
}});
var yearButton = new Button({xPlace: 350, y: 10, height: 40, width: 75, text: "Year" , onClick: function(){
    x++;
    drawF();
}});

var sceneEnd = function(){
x = 1;
background(255, 255, 255);
drawF();
yearButton.draw();
mousePressed = function(){
    yearButton.handleKlick();
};
};
var endButton = new Button({xPlace: 80, y: 45, height: 40, width: 75, text: "Next", onClick: function(){
    sceneEnd();
}});
var sceneAlmost = function(){
    endButton.draw();
    mousePressed = function(){
        endButton.handleKlick();
    };
};
var rich7 = new Button({xPlace: 80, y: 45, height: 40, width: 75, text: "Next", onClick: function(){
    background(255, 0, 0);
    fill(0, 255, 0);
    image(getImage("cute/TreeUgly"), 200, 200, 30, 60);
    text("Costs $2", 200, 200);
    image(getImage("creatures/OhNoes"), 100, 100, 15, 30);
    text("$0", 100, 100);
    image(getImage("creatures/Hopper-Cool"), 300, 300, 15, 30);
    text("$6", 300, 300);
    image(getImage("creatures/OhNoes"), 100, 200, 15, 30);
    text("$0", 100, 200);
    image(getImage("cute/DoorTallClosed"), 300, 25, 75, 75);
    text("Government", 300, 25);
    image(getImage("cute/Rock"), 50, 200);
    sceneAlmost();
}});
var sceneRich7 = function(){
    rich7.draw();
    mousePressed = function(){
        rich7.handleKlick();
    };
};
var rich6 = new Button({xPlace: 80, y: 45, height: 40, width: 75, text: "Next", onClick: function(){
    background(255, 0, 0);
    fill(0, 255, 0);
    image(getImage("cute/TreeUgly"), 200, 200, 30, 60);
    text("Costs $2", 200, 200);
    image(getImage("creatures/OhNoes"), 100, 100, 15, 30);
    text("$2 - 2", 100, 100);
    image(getImage("creatures/Hopper-Cool"), 300, 300, 15, 30);
    text("$8 - 2", 300, 300);
    image(getImage("creatures/OhNoes"), 100, 200, 15, 30);
    text("$2 - 2", 100, 200);
    image(getImage("cute/DoorTallClosed"), 300, 25, 75, 75);
    text("Government", 300, 25);
    sceneRich7();
}});
var sceneRich6 = function(){
    rich6.draw();
    mousePressed = function(){
        rich6.handleKlick();
    };
};
var rich5 = new Button({xPlace: 80, y: 45, height: 40, width: 75, text: "Next", onClick: function(){
    background(255, 0, 0);
    fill(0, 255, 0);
    image(getImage("cute/TreeUgly"), 200, 200, 30, 60);
    text("Costs $2", 200, 200);
    image(getImage("creatures/OhNoes"), 100, 100, 15, 30);
    text("$2", 100, 100);
    image(getImage("creatures/Hopper-Cool"), 300, 300, 15, 30);
    text("$8", 300, 300);
    image(getImage("creatures/OhNoes"), 100, 200, 15, 30);
    text("$2", 100, 200);
    image(getImage("cute/DoorTallClosed"), 300, 25, 75, 75);
    text("Government", 300, 25);
    sceneRich6();
}});
var sceneRich5 = function(){
    rich5.draw();
    mousePressed = function(){
        rich5.handleKlick();
    };
};
var rich4 = new Button({xPlace: 80, y: 45, height: 40, width: 75, text: "Next", onClick: function(){
    background(255, 0, 0);
    fill(0, 255, 0);
    image(getImage("cute/TreeUgly"), 200, 200, 30, 60);
    text("Costs $1 + 1", 200, 200);
    image(getImage("creatures/OhNoes"), 100, 100, 15, 30);
    text("$1 + 1", 100, 100);
    image(getImage("creatures/Hopper-Cool"), 300, 300, 15, 30);
    text("$10 - 2", 300, 300);
    image(getImage("creatures/OhNoes"), 100, 200, 15, 30);
    text("$1 + 1", 100, 200);
    image(getImage("cute/DoorTallClosed"), 300, 25, 75, 75);
    text("Government", 300, 25);
    sceneRich5();
}});
var sceneRich4 = function(){
    rich4.draw();
    mousePressed = function(){
        rich4.handleKlick();
    };
};
var sceneRich3 = function(){
    drawRiches();
    image(getImage("cute/GemBlue"), 50, 200);
    rich4.draw();
    mousePressed = function(){
        rich4.handleKlick();
    };
};
var rich3 = new Button({xPlace: 80, y: 45, height: 40, width: 75, text: "Next", onClick: function(){
    background(255, 0, 0);
    fill(0, 255, 0);
    image(getImage("cute/TreeUgly"), 200, 200, 30, 60);
    text("Costs $1", 200, 200);
    image(getImage("creatures/OhNoes"), 100, 100, 15, 30);
    text("$0", 100, 100);
    image(getImage("creatures/Hopper-Cool"), 300, 300, 15, 30);
    text("$9", 300, 300);
    image(getImage("creatures/OhNoes"), 100, 200, 15, 30);
    text("$0", 100, 200);
    image(getImage("cute/DoorTallClosed"), 300, 25, 75, 75);
    text("Government", 300, 25);
    sceneRich3();
}});
var sceneRich2 = function(){
    rich3.draw();
    mousePressed = function(){
        rich3.handleKlick();
    };
};
var rich2 = new Button({xPlace: 80, y: 45, height: 40, width: 75, text: "Next", onClick: function(){
    background(255, 0, 0);
    fill(0, 255, 0);
    image(getImage("cute/TreeUgly"), 200, 200, 30, 60);
    text("Costs $1", 200, 200);
    image(getImage("creatures/OhNoes"), 100, 100, 15, 30);
    text("$0", 100, 100);
    image(getImage("creatures/Hopper-Cool"), 300, 300, 15, 30);
    text("$9", 300, 300);
    image(getImage("creatures/OhNoes"), 100, 200, 15, 30);
    text("$0", 100, 200);
    image(getImage("cute/DoorTallClosed"), 300, 25, 75, 75);
    text("Government", 300, 25);
    sceneRich2();
}});
var sceneRich1 = function(){
    rich2.draw();
    mousePressed = function(){
        rich2.handleKlick();
    };
};
var rich1 = new Button({xPlace: 80, y: 45, height: 40, width: 75, text: "Next", onClick: function(){
    background(255, 0, 0);
     fill(0, 255, 0);
    image(getImage("cute/TreeUgly"), 200, 200, 30, 60);
    text("Costs $1", 200, 200);
    image(getImage("creatures/OhNoes"), 100, 100, 15, 30);
    text("$1 - 1", 100, 100);
    image(getImage("creatures/Hopper-Cool"), 300, 300, 15, 30);
    text("$10 - 1", 300, 300);
    image(getImage("creatures/OhNoes"), 100, 200, 15, 30);
    text("$1 - 1", 100, 200);
    image(getImage("cute/DoorTallClosed"), 300, 25, 75, 75);
    text("Government", 300, 25);
    sceneRich1();
    }});
var sceneRich0 = function(){
    drawRiches();
    rich1.draw();
    mousePressed = function(){
        rich1.handleKlick();
    };
};
var richNext = new Button({xPlace: 380, y: 360, height: 50, width: 50, text: "Next", onClick: function(){
    sceneRich0();
}});
var scenefp = function(){
    i = 0;
    j = 0;
    background(255, 255, 255);
    drawfp();
    richNext.draw();
    yearTogether.draw();
    mousePressed = function(){
        yearTogether.handleKlick();
        richNext.handleKlick();
    };
};
var togetherNext = new Button({xPlace: 250, y: 10, height: 40, width: 75, text: "Next", onClick: function(){
    scenefp();
}});
var sceneFood = function(){
    background(255, 255, 255);
    drawFood();
    yearAgainFood.draw();
    togetherNext.draw();
    mousePressed = function(){
        yearAgainFood.handleKlick();
        togetherNext.handleKlick();
    };
};
var nextButtonToFood = new Button({xPlace: 250, y: 10, height: 40, width: 70, text: "Next" , onClick: function(){
    sceneFood();
}});
var sceneNext = function(){
    background(255, 255, 255);
    drawPeople();



yearNew.draw();
nextButtonToFood.draw();

    mousePressed = function(){
        yearNew.handleKlick();
        nextButtonToFood.handleKlick();
    };

};
var nextButton = new Button({xPlace: 50, y: 10, height: 40, width: 75, text: "Next" , onClick: function(){
    sceneNext();
}});
var sceneGraph = function(){
background(255, 255, 255);
drawF();
yearButton.draw();
nextButton.draw();
mousePressed = function(){
    yearButton.handleKlick();
    nextButton.handleKlick();
};
yearButton.handleKlick();
nextButton.handleKlick();
};
var nextButtonTitle = new Button({xPlace: 340, y: 360, height: 40, width: 75, text: "Next", onClick: function(){
    sceneGraph();
}});
var sceneTitle = function(){
    textSize(37);
    background(0, 0, 0);
for(var q = 0; q <= 400; q = q + 1){
for(var o = 0; o <= 400; o = o + 50){
        strokeWeight(random(1, o - q));
        stroke(random(1, o), random(1,o), random(1,o));
        line((random(1, q)), random(1, o), random(1, q), random(1, o));
        stroke(random(1, q), random(1,q), random(1,q));
        line(random(1, o), random(1, q), random(1, o), random(1, q));

    }
}
fill(0, 0, 0);
rect(0, 170, 400, 30);
    fill(255, 255, 255);
    text("Thomas Robert Malthus", 0, 200);
    textSize(20);
    fill(0, 0, 0);
    stroke(0,0,0);
    strokeWeight(1);
    nextButtonTitle.draw();
    mousePressed = function(){
        nextButtonTitle.handleKlick();
    };

};

sceneTitle();
