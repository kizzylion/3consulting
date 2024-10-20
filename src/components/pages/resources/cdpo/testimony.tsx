import testimonyImage from "@assets/groupImages1.png";
import testifier1 from "@assets/testifier1.png";
import testifier2 from "@assets/testifier2.png";

const testifiers = [
  {
    name: "_Mrs. Amina",
    position: "Student",
    image: testifier1,
    stars: "✭✭✭✭✭",
    quote:
      "I've learned so much about data protection regulation and implementation from this course. It's been a game-changer for me.",
  },
  {
    name: "_Mr. John",
    position: "Student",
    image: testifier2,
    stars: "✭✭✭✭✭",
    quote:
      "The course was very informative and practical. It helped me understand the importance of data protection and how to implement it in my organization.",
  },
];

const Testimony: React.FC = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-6 flex ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="Testimony-content flex flex-col h-fit my-auto">
            <div className="stars text-orange-600 text-xl mb-5">✭✭✭✭✭</div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-5">
              "I've learned so much about data protection regulation and
              implementation from this course. It's been a game-changer for me."
            </h2>
            <div className="testifier-action flex flex-col md:flex-row gap-6">
              <div className="testifier text-gray-500 flex items-center gap-3 w-full">
                <div className="avatar size-16">
                  <img src={testifier1} alt="testimony" />
                </div>
                <div className="name-position ">
                  <h4 className="text-lg font-bold text-gray-900">
                    _Mrs. Amina,
                  </h4>
                  <p className="text-gray-700">Student</p>
                </div>
              </div>
              <div className="action flex items-center w-full lg:w-auto justify-between">
                <button className="btn btn-primary flex items-center size-14   justify-center mr-6  border border-gray-300 rounded-full">
                  <i className="bi bi-arrow-left text-2xl text-gray-900"></i>
                </button>
                <button className="btn btn-primary flex items-center size-14 justify-center border border-gray-300 rounded-full">
                  <i className="bi bi-arrow-right text-2xl text-gray-900"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="image-content flex items-center justify-center">
            <img
              src={testimonyImage}
              alt="testimony"
              className="mx-auto my-auto"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
