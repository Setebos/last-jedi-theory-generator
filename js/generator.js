Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};

const titles = [
	"Epatez vos amis !",
	"Epoustouflez vos collègues !",
	"Devenez la nouvelle star de youtube !",
	"Brillez en soirée !",
];

const characters = [
	{name: "Rey", gender: 1},
	{name: "Kylo Ren", gender: 0},
	{name: "Luke", gender: 0},
	{name: "Leïa", gender: 1},
	{name: "Darth Vader", gender: 0},
	{name: "C3-PO", gender: 0},
	{name: "BB-8", gender: 0},
	{name: "R2-D2", gender: 0},
	{name: "Snoke", gender: 0},
	{name: "Général Hux", gender: 0},
	{name: "Poe Dameron", gender: 0},
	{name: "Finn", gender: 0},
	{name: "Phasma", gender: 1},
	{name: "Han Solo", gender: 0},
];

const actors = [
	"Mark Hamill",
	"Harrison Ford",
	"Daisy Ridley",
	"Adam Driver",
	"John Boyega",
	"Oscar Isaac",
	"Ian McDiarmid",
	"Ewan McGregor",
	"Anthony Daniels",
	"un producteur",
	"un scénariste",
	"une technicienne",
];

const places = [
	"au cinéma",
	"au café",
	"au bar",
	"au parc",
	"à la piscine",
];

const witnesses = [
	"J'ai",
	"Mon cousin a",
	"Le frère de ma voisine a",
	"Une source sûre a",
	"Le jardinier des studios, qui est un pote d'un collègue, a",
]

const introductions1 = [
	"entendu",
	"vu",
	"aperçu",
	"espionné",
];

const introductions2 = [
	"parler avec",
	"discuter avec",
	"en pleine conversation avec",
	"chuchoter quelque chose à",
];

const connexions = [
	"Et vous savez quoi ?",
	"Et tu ne devineras jamais ce qui s'est dit.",
	"Et tu sais quoi ?",
	"Et c'est incroyable !",
	"Et je n'en revenais pas !",
	"Et ça semble impossible, mais c'est vrai !",
	"Et ça parait absurde, mais c'est confirmé !",
	"Tu ne vas pas en revenir !",
	"Vous n'allez pas en croire vos oreilles !",
];

const informations = [
	{sentence: ["est le fils de", "est la fille de"]},
	{sentence: ["est le frère de", "est la soeur de"]},
	{sentence: ["va tuer", "va tuer"]},
	{sentence: ["va être tué par", "va être tuée par"]},
	{sentence: ["est le cousin germain de", "est la cousine germaine de"]},
	{sentence: ["est en fait le frère de", "est en fait la soeur de"]},
	{sentence: ["va basculer du côté obscur à cause de", "va basculer du côté obscur à cause de"]},
	{sentence: ["va découvrir qu'il est un jedi grâce à", "va découvrir qu'elle est une jedi grâce à"]},
];

$(document).ready(function () {
    createTheory();

    $("#refresh-theory").click(function () {
        createTheory();
    });
});

const createTheory = function(gender) {
	const title = titles.randomElement();

	const character1 = characters.randomElement();
	const character2 = characters.filter((value) => {
		return value.name != character1.name;
	}).randomElement();

	const actor1 = actors.randomElement();
	const actor2 = actors.filter((value) => {
		return value != actor1;
	}).randomElement();

	const place = places.randomElement();
	const witness = witnesses.randomElement();
	const introduction1 = introductions1.randomElement();
	const introduction2 = introductions2.randomElement();
	const connexion = connexions.randomElement();
	const information = informations.randomElement();

	const theory = `${witness} ${introduction1} ${actor1} ${introduction2} ${actor2}. ${connexion} ${character1.name} ${information.sentence[character1.gender]} ${character2.name} !`;

	$('#theory').html(theory);
	$('h2').html(title);
}