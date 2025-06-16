
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Users } from "lucide-react";

const FeaturedMixes = () => {
  const mixes = [
    {
      id: 1,
      title: "Midnight Frequencies",
      artist: "DJ Neon",
      price: "0.1 ETH",
      edition: "10/25",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=center",
      genre: "Tech House",
      duration: "62 min",
      owners: 15
    },
    {
      id: 2,
      title: "Cyber Dreams",
      artist: "ElectroVibe",
      price: "0.15 ETH",
      edition: "5/15",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
      genre: "Synthwave",
      duration: "45 min",
      owners: 8
    },
    {
      id: 3,
      title: "Bass Underground",
      artist: "DJ Pulse",
      price: "0.08 ETH",
      edition: "20/50",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop&crop=center",
      genre: "Drum & Bass",
      duration: "75 min",
      owners: 32
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-neon-blue neon-text">Collections</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover exclusive DJ sets minted as limited edition NFTs by top electronic music artists
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mixes.map((mix) => (
            <Card key={mix.id} className="bg-gray-900/50 border-gray-700 overflow-hidden hover:border-neon-blue/50 transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={mix.image} 
                  alt={mix.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-neon-gradient text-black font-semibold">
                    {mix.genre}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-black/50 text-white border-gray-600">
                    {mix.edition}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-2">
                      <Music className="w-4 h-4" />
                      <span className="text-sm">{mix.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{mix.owners}</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{mix.title}</h3>
                <p className="text-neon-blue mb-4">by {mix.artist}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{mix.price}</span>
                  <Button size="sm" className="bg-neon-gradient hover:opacity-90 text-black font-semibold">
                    Collect Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="text-neon-blue border-neon-blue hover:bg-neon-blue hover:text-black">
            Explore All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMixes;
