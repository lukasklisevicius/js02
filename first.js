//  1.
const name  = 'Lukas';
let age = 26;
let hobis = 'programuoti';

console.log(`Mano vardas ${name}, man ${age}, mano hobis yra ${hobis}`);

// 2.
const gimimoMetai = 1994;
let ateitis = 2035;
console.log(`${ateitis} man bus ${ateitis - gimimoMetai} arba ${ateitis - gimimoMetai -1} metai/metų.`)

// 3.

const spindulys = 14;
const skersmuo = 2 * spindulys;
const plotas = Math.PI * spindulys * spindulys;

console.log(`Apskritimo skesmuo yra ${skersmuo}, plotas yra ${plotas}`);

// 4.
let temperatura = 25;

console.log(`${temperatura + String.fromCharCode(176)}C yra ${temperatura*2+30 + String.fromCharCode(176)}F`);

// 5.

const text = 'Mes kalbame mažai, jeigu nekalbame apie save.';
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.replace('apie save',''));
const arr = text.split(' ');
console.log(arr);
console.log(arr.indexOf('mažai,'));
arr[1] = 'šnekame';
console.log(arr);

// 6. 

const bam = "laBa8s rYta56s, lIEtuva";
console.log(bam.charAt(0).toUpperCase()+ bam.slice(1,16).replace(/\d+/g, '').toLowerCase()+ bam.charAt(16).toUpperCase()+ bam.slice(17).replace(/\d+/g, '').toLowerCase());

// 7.

const cars = ['mazda', 'opel', 'volvo', 'bmw', 'ford', 'gmc', 'honda', 'toyota', 'volkswagen', 'tesla'];
const last = cars.pop();
const first = cars.shift();
cars[4] = 'NEW';
const pets = ['dog', 'cat', 'rat'];
const newArr = cars.concat(pets);
const newArrString = newArr.join(', ');

// 8.

let mokinys = [
    {
    vardas: 'Martynas',
    pavarde: 'Lubys',
    amzius: 17,
    vidurkis: 4.5,
    stipendija: false
},
{
    vardas: 'Alina',
    pavarde: 'Alijeva',
    amzius: 16,
    vidurkis: 9,
    stipendija: true
},
{
    vardas: 'Kazimieras',
    pavarde: 'Bakštys',
    amzius: 17,
    vidurkis: 9.3,
    stipendija: true,
},
{
    vardas: 'Algimantas',
    pavarde: 'Peraitis',
    amzius: 16,
    vidurkis: 6.5,
    stipendija: true
},
{
    vardas: 'Kotryna',
    pavarde: 'Petraitytė',
    amzius: 16,
    vidurkis: 4,
    stipendija: false
}
];

// 9.

console.log(mokinys[1].amzius);
console.log(mokinys[3].vidurkis);
console.log(mokinys[0]);