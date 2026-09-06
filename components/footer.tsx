import { SiX } from "react-icons/si";
import Link from 'next/link';

export default function Footer() {
	return (
    <footer>
        <div className="flex flex-col items-center gap-1">
            <span>© {new Date().getFullYear()} Musicka</span>
            <div className="flex items-center gap-3">
           <p>Built by {" "} 
            <span className="text-lg font-bold font-mono hover:text-lime-500">Tomy-9
               
            </span> {" "}
            
            </p>
             <Link
              href="https://x.com/Temuiy2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              aria-label="X (Twitter)"
            >
              <SiX className="w-4 h-4" />
            </Link>
            </div>
        </div>
    </footer>
    );
}

/*     */

