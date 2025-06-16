
import { Button } from "@/components/ui/button";
import { Wallet, Users, Music } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-neon-gradient rounded-full flex items-center justify-center">
            <Music className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-white">The DJ's Vault</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">Discover</a>
          <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">DJs</a>
          <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">Collections</a>
          <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">About</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="text-neon-blue border-neon-blue hover:bg-neon-blue hover:text-black">
            <Wallet className="w-4 h-4 mr-2" />
            Connect Wallet
          </Button>
          <Button size="sm" className="bg-neon-gradient hover:opacity-90">
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
