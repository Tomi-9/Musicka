export default function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between text-center pr-2 pl-6 rounded">
      <h2 className="text-3xl text-zinc-200">Musicka</h2>
      <div className="flex gap-1 py-3">
        <button className="text-md font-semibold hover:font-bold rounded m-4">Sign up</button>
        <button className="text-md font-bold bg-sky-600 hover:bg-sky-700 rounded-full px-8 hover:scale-105 transition">Log in</button>
      </div>
    </div>
  );
}