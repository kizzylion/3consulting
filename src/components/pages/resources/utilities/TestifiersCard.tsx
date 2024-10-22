interface Testifier {
  name: string;
  position: string;
  image: string;
  stars: string;
  quote: string;
}

interface TestifiersCardProps {
  testifiers: Testifier[];
  prevButton: React.ReactNode;
  nextButton: React.ReactNode;
}

const TestifiersCard: React.FC<TestifiersCardProps> = ({ testifiers }) => {
  return (
    <div className="testifiers-card embla__container flex ">
      {testifiers.map((testifier, index) => (
        <div
          key={index}
          className="testifier flex flex-col min-w-full h-fit my-auto px-1"
        >
          <div className="stars text-orange-600 text-xl mb-5">
            {testifier.stars}
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-5">
            {testifier.quote}
          </h2>
          <div className="testifier-action flex flex-col md:flex-row gap-6">
            <div className="testifier text-gray-500 flex items-center gap-3 w-full">
              <div className="avatar size-16 overflow-hidden rounded-full object-cover">
                <img
                  src={testifier.image}
                  alt={testifier.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="name-position ">
                <h4 className="text-lg font-bold text-gray-900">
                  _{testifier.name},
                </h4>
                <p className="text-gray-700">{testifier.position}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestifiersCard;
