 
// Lazy load icons
import { FiFileText, FiShield, FiUsers } from "react-icons/fi";
import { FaFireExtinguisher } from "react-icons/fa";
import { TbBuildingFactory } from "react-icons/tb";
import { MdAutorenew } from "react-icons/md";


const FactoryLicenseGrid = () => {
  const services = [
    {
      title: "Factory Licence Application",
      desc: "Full Support for obtaining the factory licence from the Factories Act.",
      icon: <FiFileText className="text-purple-600 text-2xl" />,
    },
    {
      title: "Labour Law Compliance",
      desc: "Make sure that your industrial space follows labour guidelines and safety requirements.",
      icon: <FiShield className="text-purple-600 text-2xl" />,
    },
    {
      title: "Fire & Safety Approvals",
      desc: "Securing fire and safety NOCs for obtaining licences and renewals.",
      icon: <FaFireExtinguisher className="text-purple-600 text-2xl" />,
    },
    {
      title: "Pollution NOC",
      desc: "Get Trade, Pollution and Construction clearances on your factory set up.",
      icon: <TbBuildingFactory className="text-purple-600 text-2xl" />,
    },
    {
      title: "Liaison with Government",
      desc: "Coordinating with local departments for faster inspection, approval process.",
      icon: <FiUsers className="text-purple-600 text-2xl" />,
    },
    {
      title: "Renewals & Audit Support",
      desc: "Be comfortable with the annual renewals and regular audits of documentation related to continued compliance.",
      icon: <MdAutorenew className="text-purple-600 text-2xl" />,
    },
  ];

  return (
    <div className="py-16 px-4 bg-white" aria-label="Factory Licence Services Grid Section">
    

      {/* Content */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="md:text-4xl text-3xl font-semibold text-gray-900 mb-10">
          Factory Licence & Compliance Services
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-left"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm text-justify">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default  FactoryLicenseGrid
