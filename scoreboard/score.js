var time;
var countDown;

function INIT_time(){
    
    time= new Date();
}

class Team{
    
    constructor(tName, tPoint= 0){
        
        this.tName= tName;
        this.tPoint= tPoint;
    }
    
    display(){

        // team Name
        var teamNameA= TeamA.tName;
        var teamNameB= TeamB.tName;
        document.getElementsByClassName("hName")[0].innerHTML= teamNameA;
        document.getElementsByClassName("aName")[0].innerHTML= teamNameB;
        // team Point
        var teamPointA= TeamA.tPoint;
        var teamPointB= TeamB.tPoint;
        document.getElementsByClassName("hPoint")[0].innerHTML= teamPointA;
        document.getElementsByClassName("aPoint")[0].innerHTML= teamPointB;

    }

    m_tName(role= "Admin"){
        
        var tName= window.prompt("Input the New Name:");
        var now= new Date();
        console.log((now.getTime()- time.getTime())/ 1000+ "s >>> " + role + " Modify " + this.tName + " to " + tName);
        var elements = document.getElementsByClassName(this.tName);
        for (var i = 0; i < elements.length; i++) {
            
            elements[i].classList.add(tName);
            elements[i].classList.remove(this.tName);
        }
        this.tName= tName;
        this.display();
    }
    
    m_tPoint(){
        
        var now= new Date();
        console.log((now.getTime()- time.getTime())/ 1000+ "s >>> " + role + " Modify " + this.tName + "Point from "+this.tPoint + " to " + this.tPoint);
        this.tPoint= tPoint;
        this.display();
    }
    
    addPoint(tNumber, tAddingPoint) {
        
        var now= new Date();
        this.tPoint+= tAddingPoint;
        console.log((now.getTime()- time.getTime())/ 1000+ "s >>> " + tNumber + " Scored " + tAddingPoint);
        this.display();
    }
    
    minusPoint(role= "Admin", tMinusPoint){
        
        var now= new Date();
        this.tPoint-= tMinusPoint;
        console.log((now.getTime()- time.getTime())/ 1000+ "s >>> " + role + " Modify " + tMinusPoint);
        this.display();
    }
}

var TeamA = new Team("Team A", 0);
var TeamB = new Team("Team B", 0);

TeamA.display();
