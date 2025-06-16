
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Users, Headphones, Wallet } from "lucide-react";

const CollectorBenefits = () => {
  const benefits = [
    {
      icon: Music,
      title: "Exclusive Access",
      description: "Get early access to new releases, unreleased tracks, and limited edition drops before anyone else.",
      perks: ["24h early access", "Unreleased demos", "Behind-the-scenes content"],
      color: "neon-blue"
    },
    {
      icon: Headphones,
      title: "Remix Rights",
      description: "Licensed to create and share remixes of tracks you own. Participate in official remix competitions.",
      perks: ["Remix licensing", "Competition entries", "Collaboration opportunities"],
      color: "neon-purple"
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Join exclusive Discord channels, attend virtual listening parties, and connect with other collectors.",
      perks: ["Private Discord", "Virtual events", "Collector meetups"],
      color: "neon-pink"
    },
    {
      icon: Wallet,
      title: "Revenue Sharing",
      description: "Earn ongoing royalties when your NFTs are resold. Benefit from the long-term success of artists.",
      perks: ["Resale royalties", "Revenue sharing", "Value appreciation"],
      color: "neon-green"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Collector <span className="text-neon-pink neon-text">Benefits</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Own exclusive music NFTs and unlock a world of perks, rewards, and community access
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300 group overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-${benefit.color}/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:animate-glow`}>
                    <benefit.icon className={`w-6 h-6 text-${benefit.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{benefit.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {benefit.perks.map((perk, perkIndex) => (
                        <Badge key={perkIndex} variant="outline" className="text-xs border-gray-600 text-gray-300">
                          {perk}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">The More You Collect, The More You Earn</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Build your collection and unlock tier-based rewards. Diamond collectors get access to exclusive artist collaborations, 
              VIP events, and higher royalty percentages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectorBenefits;
