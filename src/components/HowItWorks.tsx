
import { Upload, Music, Wallet, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Mix",
      description: "DJs upload their exclusive sets with artwork and metadata. Email sign-up makes it easy to get started.",
      color: "neon-blue"
    },
    {
      icon: Music,
      title: "Mint as NFT",
      description: "Convert your mix into a limited edition NFT on Zora Protocol. Set your edition size and price.",
      color: "neon-purple"
    },
    {
      icon: Wallet,
      title: "Fans Collect",
      description: "Music lovers discover and collect exclusive mixes, supporting artists directly while owning digital assets.",
      color: "neon-pink"
    },
    {
      icon: Users,
      title: "Earn Rewards",
      description: "NFT holders get exclusive perks, remix rights, early access, and share in ongoing royalties.",
      color: "neon-green"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It <span className="text-neon-purple neon-text">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From upload to ownership, experience the future of music collecting in four simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 bg-${step.color}/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-glow`}>
                  <step.icon className={`w-8 h-8 text-${step.color}`} />
                </div>
                <div className="text-4xl font-bold text-neon-blue mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
