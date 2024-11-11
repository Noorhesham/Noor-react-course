import Heading from "./Heading";
import Ninja from "./Ninja";

const data = [
  {
    name: "Cole",
    age: 16,
    id: 12,
    image: "cole.webp",
    color: "bg-black",
    powerLevel: 8,
    skills: ["Spinjitzu", "Super Strength", "Earth Element"],
    background: {
      hometown: "Shintaro",
      favoriteWeapon: "Scythe of Quakes",
      allies: [10, 3],
    },
    personality: { brave: true, leader: false, loyal: true },
  },
  {
    name: "Wu Sensi",
    age: 16,
    id: 10,
    image: "Wu_cover.webp",
    color: "bg-yellow-600",
    powerLevel: 8,
    skills: ["Spinjitzu", "Super Strength", "Master of spenjustsu"],
    background: {
      hometown: "Shintaro",
      favoriteWeapon: "Scythe of Quakes",
      allies: [1, 3],
    },
    personality: { brave: true, leader: false, loyal: true },
  },
  {
    name: "Jay",
    age: 17,
    id: 3,
    image: "jay.jpg",
    color: "bg-blue-600",
    powerLevel: 7,
    skills: ["Spinjitzu", "Lightning Element", "Speed"],
    background: {
      hometown: "Birchwood Forest",
      favoriteWeapon: "Nunchucks of Lightning",
      allies: [2, 12],
    },
    personality: { brave: true, leader: false, loyal: false },
  },
  {
    name: "Lloyd",
    age: 18,
    id: 1,
    image: "lloyd.webp",
    color: "bg-green-600",
    powerLevel: 10,
    skills: ["Spinjitzu", "Green Energy", "Leadership"],
    background: {
      hometown: "Ninjago City",
      favoriteWeapon: "Sword of Sanctuary",
      allies: [5, 2],
    },
    personality: { brave: true, leader: true, loyal: true },
  },
  {
    name: "Kai",
    id: 2,
    age: 19,
    image: "kai.webp",
    color: "bg-red-600",
    powerLevel: 9,
    skills: ["Spinjitzu", "Fire Element", "Swordsmanship"],
    background: {
      hometown: "Ignacia",
      favoriteWeapon: "Sword of Fire",
      allies: [1, 5],
    },
    personality: { brave: true, leader: false, loyal: true },
  },
  {
    name: "Zane",
    age: 18,
    id: 5,
    image: "zane.webp",
    color: "bg-gray-600",
    powerLevel: 9,
    skills: ["Spinjitzu", "Ice Element", "Cyber Intelligence"],
    background: {
      hometown: "Birchwood Forest",
      favoriteWeapon: "Shurikens of Ice",
      allies: [3, 2],
    },
    personality: { brave: true, leader: false, loyal: true },
  },
];
const Ninjas = () => {
  return (
    <>
      <Heading text="THIS IS THE WHOLE LEGO WORLD" />
      <div className="grid  gap-5 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {data.map((character) => (
          <Ninja
            key={character.id}
            color={character.color}
            allies={data?.filter((ninja) => character.background.allies.includes(ninja.id))}
            character={character}
          />
        ))}
      </div>
    </>
  );
};

export default Ninjas;
