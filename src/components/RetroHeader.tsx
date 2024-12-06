import React from "react";
import { Menu, X } from "lucide-react";
import styled from "styled-components";
import { IoLogoGameControllerA } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { CiMap } from "react-icons/ci";
import { FaMap, FaNewspaper } from "react-icons/fa";
const ListItem = styled.li`
  gap: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export function RetroHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-black border-b-4 border-[#00ff00] px-4 py-2">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-[#00ff00] font-bold text-2xl tracking-wider font-['Press_Start_2P']">
          VALORANT
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#00ff00]"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-[#00ff00]">
            <ListItem>
              <IoLogoGameControllerA size={30} />
              <a href="#" className="hover:text-white transition-colors">
                GAME
              </a>
            </ListItem>
            <ListItem>
              <IoPersonSharp size={20} />
              <a href="#" className="hover:text-white transition-colors">
                AGENTS
              </a>
            </ListItem>
            <ListItem>
              <FaMap />
              <a href="#" className="hover:text-white transition-colors">
                MAPS
              </a>
            </ListItem>
            <ListItem>
              <FaNewspaper />
              <a href="#" className="hover:text-white transition-colors">
                NEWS
              </a>
            </ListItem>
          </ul>
        </div>
      </nav>
    </header>
  );
}
