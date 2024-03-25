function calculateDemeritPoints (speed){
    const speedlimit = 70;
    const kmperpoint = 5;
    const maxDemeritpoint = 12;
    let demeritPoints = 0;

    if(speed <=speedlimit){
        console.log("okay");
        return 0;
    } else {
        const points = Math.floor((speed -speedlimit)/kmperpint);
        if (points >=12) {
            console.log ("license suspended");
        }else {
            console.log ("points:" , points);
        }
    }
}
//example usage
calculateDemeritPoints(80); // output; points:2
calculateDemeritPoints(65); // output :ok 
calculateDemeritPoints(110); //output points: 8