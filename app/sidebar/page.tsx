import Link from 'next/link';

const sidebars = [
  {id: '0', button: 'Home', icon: '' },
  {id: '1', button: 'Search', icon: '' },
  {id: '2', button: 'Playlists', icon: '' },
  {id: '3', button: 'Favourites', icon: '' },
];

export default function Sidebar() {
    return (
        <div>
     <div className='m-14'>
        <h1 className='text-cyan-400 text-3xl '>Clean SideBar</h1>
     </div>
     <div className="flex flex-col gap-6 ml-10">
        {sidebars.map(sidebar => (
            <div key={sidebar.id}>
            <h2>{sidebar.button}</h2>

      </div>
      ))}
     </div>
     </div>
    );
}

