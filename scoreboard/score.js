var time;

function INIT_time(){
    
    time= new Date();
}

class Team{
    
    constructor(tName, tPoint= 0){
        
        this.tName= tName;
        this.tPoint= tPoint;
    }
    
    m_tName(role= "Admin", tName){
        
        var now= new Date();
        console.log((now.getTime()- time.getTime()/ 1000)+ "s >>> " + role + " Modify " + this.tName + " to " + tName);
        this.tName= tName;
    }
    
    m_tPoint(){
        
        var now= new Date();
        console.log((now.getTime()- time.getTime())/ 1000+ "s >>> " + role + " Modify " + this.tName + "Point from "+this.tPoint + " to " + this.tPoint);
        this.tPoint= tPoint;
    }
    
    addPoint(tNumber, tAddingPoint) {
        
        var now= new Date();
        this.tPoint+= tAddingPoint;
        console.log((now.getTime()- time.getTime())/ 1000+ "s >>> " + tNumber + " Scored " + tAddingPoint);
    }
    
    minusPoint(role= "Admin", tMinusPoint){
        
        var now= new Date();
        this.tPoint-= tMinusPoint;
        console.log((now.getTime()- time.getTime())/ 1000+ "s >>> " + role + " Modify " + tMinusPoint);
    }
}

var TeamA = new Team("A", 0);
var TeamB = new Team("B", 0);
