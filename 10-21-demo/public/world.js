let world;
async function getWorld(){
    let response = await fetch("./world");
    world = await response.json();
    // document.querySelector("body").innerHTML = `<h1>${world.regions[0].name}</h1>`;
}

let people = {};

getWorld();

async function setup(){
    console.log("loaded!!!!");
    createCanvas(800,600);
    colorMode(HSB);

    await getWorld();

    for (let region of world.regions){
        console.log(region.name);
        for (let town of region.towns){
            console.log(town.name);
            for (let person of town.notable_people){
                people[person.name] = new Person(person);
            }
        }
    }

}
function draw(){
    background(5, 5, 100);
    // console.log(frameCount);
    for (let name in people){ //in not of, because im getting the keys
        let person = people[name];
        person.update();
    }


}