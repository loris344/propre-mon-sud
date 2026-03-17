import { Phone } from "lucide-react";

const PhoneToast = () => {
  return (
    <a 
      href="tel:0767135458"
      onClick={() => gtag_report_conversion()}
      className="fixed bottom-3 left-3 z-50 flex items-center gap-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 p-3 md:px-4 md:py-3 md:rounded-lg"
    >
      <Phone className="w-5 h-5" />
      <span className="hidden md:inline font-semibold text-base">07 67 13 54 58</span>
    </a>
  );
};

export default PhoneToast;
