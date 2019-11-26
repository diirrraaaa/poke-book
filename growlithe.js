
const url = `https://pokeapi.co/api/v2/pokemon/growlithe/`;
 fetch(url)
   .then(res => res.json())
   .then(pokemon => {
     let attack = pokemon.stats[2].base_stat
     let atk = pokemon.stats[4].base_stat
     let id = pokemon.id
     let Speed = pokemon.stats[0].base_stat
     let hp = pokemon.stats[5].base_stat
     let def = pokemon.stats[3].base_stat
     let specDef = pokemon.stats[1].base_stat
	 let height = pokemon.height
	 let weight = pokemon.weight
	 let anti = pokemon.abilities[0].ability.name
	 let adap = pokemon.abilities[1].ability.name
	 let run = pokemon.abilities[2].ability.name
	 let spec = pokemon.species.name
     let pikachu = new Pokemon(attack,id,Speed,hp,atk,def,specDef,height,weight,anti,adap,run,spec)
     pikachu.display()
     Nadira = new Trainer()
     Nadira.add(pikachu)
     console.log(pokemon);
   });
   class Pokemon{
     constructor(attack,id,Speed,hp,atk,def,specDef,height,weight,anti,adap,run,spec){
       this.attack = attack
       this.id = id
       this.Speed = Speed
       this.hp = hp
       this.atk = atk
       this.def = def
       this.specDef = specDef
	   this.height = height
	   this.weight = weight
	   this.anti = anti
	   this.adap = adap
	   this.run = run
	   this.spec = spec
     }
     display(){
       let docAtk = document.getElementById('special-attack')
       docAtk.innerText = this.attack
       let docId = document.getElementById('id')
       docId.innerText = this.id
       let Speed = document.getElementById('speed')
       Speed.innerText = this.Speed
       let hp = document.getElementById('hp')
       hp.innerText = this.hp
       let atk = document.getElementById('attack')
       atk.innerText = this.atk
       let def = document.getElementById('defense')
       def.innerText = this.def
       let specDef = document.getElementById('special-defense')
	   specDef.innerText = this.specDef
	   let height = document.getElementById('height')
       height.innerText = this.height
	   let weight = document.getElementById('weight')
	   weight.innerText = this.weight
	   let anti = document.getElementById('abilities')
	   anti.innerText = this.anti
	   let adap = document.getElementById('abilities')
	   adap.innerText = this.adap
	   let run = document.getElementById('abilities')
	   run.innerText = this.run
	   let spec = document.getElementById('species')
	   spec.innerText = this.spec
	   
     }
   }
   class Trainer {
     constructor() {
       this.pokemon = []
     }
     add(pokemon){
       this.pokemon.push(pokemon)
     }
     all(){
       return this.pokemon
     }
     get(name){
       for(let i = 0; i <= this.pokemon.length; i++){
         return this.pokemon[i]
       }
     }
   }
