import { Phone } from "lucide-react";

const teamMembers = [
  { src: "/images/loris-photo.png", alt: "Loris" },
  { src: "/images/team/paul.png", alt: "Paul" },
  { src: "/images/team/aymeric.png", alt: "Aymeric" },
];

const PhoneToast = () => {
  return (
    <a
      href="tel:0767135458"
      onClick={() => gtag_report_conversion()}
      className="fixed bottom-3 left-3 z-50 flex items-center gap-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 p-2 pr-3 md:pr-4 md:rounded-lg group"
    >
      {/* Stacked team avatars */}
      <div className="flex -space-x-2.5">
        {teamMembers.map((member, i) => (
          <img
            key={member.alt}
            src={member.src}
            alt={member.alt}
            className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-primary object-cover object-top animate-[subtle-bounce_3s_ease-in-out_infinite]"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </div>
      <Phone className="w-4 h-4 md:w-5 md:h-5" />
      <span className="hidden md:inline font-semibold text-sm">07 67 13 54 58</span>
    </a>
  );
};

export default PhoneToast;
