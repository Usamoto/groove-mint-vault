
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Music, Users, Headphones } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-neon-gradient bg-clip-text text-transparent animate-pulse-neon">
            The DJ's Vault
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Where music lovers don't just listen—they <span className="text-neon-blue neon-text">invest</span>, 
            <span className="text-neon-purple neon-text"> own</span>, and 
            <span className="text-neon-pink neon-text"> shape the journey</span>
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Mint exclusive DJ sets as NFTs. Collect rare mixes. Support your favorite artists. 
            Built on Zora Protocol with email-first onboarding—no crypto experience needed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400"
            />
            <Button className="bg-neon-gradient hover:opacity-90 text-black font-semibold">
              Join Waitlist
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                <Music className="w-8 h-8 text-neon-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mint & Collect</h3>
              <p className="text-gray-400">Upload your sets as limited edition NFTs or collect exclusive mixes from top DJs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                <Users className="w-8 h-8 text-neon-purple" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community Rewards</h3>
              <p className="text-gray-400">Exclusive perks, early access, remix rights, and royalties for NFT holders</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                <Headphones className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Direct Support</h3>
              <p className="text-gray-400">Support DJs directly while owning a piece of electronic music history</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
