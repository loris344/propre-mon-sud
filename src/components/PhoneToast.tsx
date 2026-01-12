import { Phone } from "lucide-react";

const PhoneToast = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:0605310199";
  };

  return (
    <div 
      onClick={handlePhoneClick}
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2 bg-blue-900 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition-all duration-300 hover:scale-105 cursor-pointer"
    >
      <Phone className="w-5 h-5" />
      <span className="font-semibold text-sm md:text-base">06 05 31 01 99</span>
    </div>
  );
};

export default PhoneToast;
