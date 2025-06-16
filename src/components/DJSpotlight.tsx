
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Music, Headphones } from "lucide-react";

const DJSpotlight = () => {
  const djs = [
    {
      id: 1,
      name: "DJ Neon",
      specialty: "Tech House",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=center",
      followers: "25.6K",
      totalMints: 45,
      avgPrice: "0.12 ETH",
      bio: "Pioneer of underground tech house with 10+ years spinning at Berlin's top clubs."
    },
    {
      id: 2,
      name: "ElectroVibe",
      specialty: "Synthwave",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      followers: "18.2K",
      totalMints: 32,
      avgPrice: "0.15 ETH",
      bio: "Creating nostalgic synthwave journeys that transport listeners to neon-lit futures."
    },
    {
      id: 3,
      name: "DJ Pulse",
      specialty: "Drum & Bass",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center",
      followers: "42.1K",
      totalMints: 67,
      avgPrice: "0.08 ETH",
      bio: "High-energy drum & bass producer known for explosive festival performances worldwide."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-neon-green neon-text">Artists</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the DJs revolutionizing music ownership through NFTs and building direct connections with their fans
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {djs.map((dj) => (
            <Card key={dj.id} className="bg-gray-900/50 border-gray-700 overflow-hidden hover:border-neon-green/50 transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={dj.image} 
                  alt={dj.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-neon-gradient text-black font-semibold">
                    {dj.specialty}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{dj.name}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{dj.bio}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-neon-blue mr-1" />
                    </div>
                    <div className="text-lg font-semibold text-white">{dj.followers}</div>
                    <div className="text-xs text-gray-400">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Music className="w-4 h-4 text-neon-purple mr-1" />
                    </div>
                    <div className="text-lg font-semibold text-white">{dj.totalMints}</div>
                    <div className="text-xs text-gray-400">NFTs Minted</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Headphones className="w-4 h-4 text-neon-pink mr-1" />
                    </div>
                    <div className="text-lg font-semibold text-white">{dj.avgPrice}</div>
                    <div className="text-xs text-gray-400">Avg Price</div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1 bg-neon-gradient hover:opacity-90 text-black font-semibold">
                    Follow
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 text-neon-green border-neon-green hover:bg-neon-green hover:text-black">
                    View Mixes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="text-neon-green border-neon-green hover:bg-neon-green hover:text-black">
            Become a Featured DJ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DJSpotlight;
