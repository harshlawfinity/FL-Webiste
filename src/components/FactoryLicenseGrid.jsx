 
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
      desc: "Securing fire and safety NOCs for obtaining licences and renewals with extended support from our experienced fire NOC consultant will make sure you get faster approval and compliance. Therefore, a fire safety certificate is a mandatory approval that confirms the factory premises to meet the required fire prevention and standards of safety as per the required guidelines.",
      icon: <FaFireExtinguisher className="text-purple-600 text-2xl" />,
    },
    {
      title: "Pollution NOC",
      desc: "Get Trade, Construction, and pollution clearance certificate on your factory set up. We can also help companies acquire an online pollution certificate for factory setup to comply with environmental regulations.",
      icon: <TbBuildingFactory className="text-purple-600 text-2xl" />,
    },
    {
      title: "Liaison with Government",
      desc: "Coordinating with local departments for faster inspection, or say, you get help in getting your pollution control certificate for clinic faster. This eases the entire process of pollution approval happen without any reason.",
      icon: <FiUsers className="text-purple-600 text-2xl" />,
    },
    {
      title: "Renewals & Audit Support",
      desc: "Be comfortable with the annual renewals and regular audits of documentation related to continued compliance. Therefore, it is important that you remain comfortable, and you know about the annual renewals and the process of regular audits that are related and help with continued compliance. This includes services such as fire certificate renewal and other statutory approvals as well.",
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
