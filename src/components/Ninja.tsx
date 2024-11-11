import { GiNinjaHead, GiNinjaStar } from "react-icons/gi";
import { GiRunningNinja } from "react-icons/gi";
interface Chracter {
  name: string;
  age: number;
  image: string;
  skills: string[];
  powerLevel: number;
  background: { hometown: string; favoriteWeapon: string; allies: number[] };
  personality: { brave: boolean; leader: boolean; loyal: boolean };
  id: string;
}
interface NinjaProps {
  character: Chracter;
  color?: string;
  allies: Chracter[];
}
const Ninja = ({ character, color, allies }: NinjaProps) => {
  const { name, skills, powerLevel, background, personality } = character;
  const { hometown } = background;
  console.log(allies);
  //ternary operators
  // condition ? result if :codition ?result else if : result else
  return (
    <div
      className={`${color} hover:-translate-y-1 duration-200 shadow-md cursor-pointer group flex items-start  gap-4 rounded-2xl`}
    >
      <div
        className={` overflow-hidden group-hover:opacity-80 duration-200 w-[60%] h-full rounded-2xl flex gap-2 items-center flex-col`}
      >
        <img src={`/${character.image}`} className=" h-full w-full  object-cover " alt="" />
      </div>
      <div className="py-2 flex flex-col items-start gap-2">
        <h3 className=" text-2xl text-white">{name}</h3>
        <div className="flex flex-wrap gap-1 items-center">
          {skills?.map((skill, index) => (
            <span
              className=" hover:bg-slate-800 hover:text-white hover:border-slate-800  duration-200 text-xs py-1 px-2 text-gray-900 font-semibold bg-gray-50 rounded-full border border-gray-50"
              key={index}
            >
              {skill}
            </span>
          ))}
        </div>
        <div className=" flex items-center gap-2 bg-slate-800/40 p-1 rounded-lg">
          <p className=" flex items-center gap-2 font-semibold">
            Power Level <span className=" text-gray-100 ">{powerLevel}</span>
          </p>
          <div>{powerLevel > 8 ? <GiNinjaStar /> : powerLevel > 9 ? <GiRunningNinja /> : <GiNinjaHead />}</div>
        </div>
        <p className=" flex items-center gap-2 bg-yellow-600 p-1 text-xs rounded-lg font-semibold">
          Fav Weapon <span className=" text-gray-100 ">{hometown}</span>
        </p>
        <div className=" text-xs flex flex-col items-start font-semibold text-white">
          <p>Brave ? {personality.brave ? "ABSLOUTLEY " : "No"}</p>
          <p>Leader ? {personality.leader ? "ABSLOUTLEY " : "No"}</p>
          <p>Loyal ? {personality.loyal ? "ABSLOUTLEY " : "No"}</p>
        </div>
        <div className=" flex items-center gap-3">
          {allies?.map((ally) => (
            <div key={ally.id} className=" w-10 overflow-hidden h-10 rounded-full relative">
              <img className=" absolute inset-0 w-full  h-full object-cover" src={`/${ally.image}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ninja;
