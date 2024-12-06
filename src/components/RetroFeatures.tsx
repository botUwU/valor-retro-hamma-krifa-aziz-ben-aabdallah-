import IconsProvider from "./IconsProvider";
export function RetroFeatures() {
  const features = [
    {
      title: "WEAPONS",
      description: "Choose your arsenal",
    },
    {
      title: "PRECISION",
      description: "Aim for victory",
    },
    {
      title: "MAPS",
      description: "Master the terrain",
    },
    {
      title: "AGENTS",
      description: "Select your fighter",
    },
  ];

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border-4 border-[#00ff00] p-6 text-center 
                                    hover:bg-[#00ff00] hover:text-black transition-all 
                                    duration-300 group"
          >
            <div className="text-[#00ff00] group-hover:text-black mb-4 flex justify-center">
              <IconsProvider index={index} />
            </div>
            <h3
              className="text-[#00ff00] group-hover:text-black text-xl font-bold mb-2 
                         font-['Press_Start_2P']"
            >
              {feature.title}
            </h3>
            <p className="text-[#00ff00] group-hover:text-black font-mono">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
