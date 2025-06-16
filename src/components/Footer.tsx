
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Music, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-neon-gradient rounded-full flex items-center justify-center">
                <Music className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">The DJ's Vault</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The first Web3 platform where DJs mint exclusive sets as NFTs and fans own a piece of electronic music history.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input 
                type="email" 
                placeholder="Get early access" 
                className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-neon-gradient hover:opacity-90 text-black font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-neon-blue transition-colors">Discover Mixes</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Featured DJs</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Marketplace</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-neon-blue transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">For Artists</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">For Collectors</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2024 The DJ's Vault. All rights reserved. Built on Zora Protocol.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors">
              <Users className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
              <Music className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
