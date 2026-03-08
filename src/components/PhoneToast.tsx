import { Phone } from "lucide-react";

const PhoneToast = () => {
  return (
    <a 
      href="tel:0605310199"
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
    >
      <Phone className="w-5 h-5" />
      <span className="font-semibold text-sm md:text-base">06 05 31 01 99</span>
    </a>
  );
};

export default PhoneToast;
