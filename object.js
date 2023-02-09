const servant= {
    name: "Emiya",
    age: 19,
    isSingle: true,
    master: "Rin Tohsaka",
    allies: ["Cu Culain", "Ereshkigal", "Ishtar", "Jeanne d'Arc"],
    appearance: [{
        tv: "Fate/Stay Night",
        year: 2006,
        genre: ["Super Power", "Action", "Fantasy"],
    }],
    role: function(){
        console.log("Archer class is really made of archers, huh...!")
    },
    ally: {
        fullName: "Artoria Pendragon",
        class: "Saber",
        weapon: "Excalibur",
    }
}

console.log(servant);
servant.role()