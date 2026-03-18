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
      className="fixed bottom-4 left-4 z-50 group"
    >
      {/* Floating avatars orbiting around the phone button */}
      <div className="relative w-14 h-14 md:w-16 md:h-16">
        {/* Main phone button */}
        <div className="absolute inset-0 rounded-full bg-primary shadow-[0_4px_20px_-2px_hsl(var(--primary)/0.5)] group-hover:shadow-[0_6px_28px_-2px_hsl(var(--primary)/0.6)] transition-all duration-300 group-hover:scale-105 flex items-center justify-center">
          <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
        </div>

        {/* Orbiting team photos */}
        {teamMembers.map((member, i) => {
          const angle = -30 + i * 55; // spread from top-right
          const rad = (angle * Math.PI) / 180;
          const radius = 32;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <img
              key={member.alt}
              src={member.src}
              alt={member.alt}
              className="absolute w-7 h-7 rounded-full border-2 border-primary object-cover object-top shadow-md animate-[float_4s_ease-in-out_infinite]"
              style={{
                top: `50%`,
                left: `50%`,
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          );
        })}

        {/* Online indicator */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background animate-pulse z-10" />
      </div>

      {/* Phone number on desktop */}
      <span className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-primary text-primary-foreground text-sm font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        07 67 13 54 58
      </span>
    </a>
  );
};

export default PhoneToast;
