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
      className="fixed bottom-4 left-4 z-50 flex items-center gap-3 bg-card text-card-foreground rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-[1.03] px-3 py-2.5 md:px-4 md:py-3 border border-border/50 group"
    >
      {/* Stacked team avatars */}
      <div className="flex -space-x-3">
        {teamMembers.map((member, i) => (
          <div
            key={member.alt}
            className="relative animate-[float_4s_ease-in-out_infinite]"
            style={{ animationDelay: `${i * 0.6}s` }}
          >
            <img
              src={member.src}
              alt={member.alt}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border-[2.5px] border-card object-cover object-top shadow-sm"
            />
            {i === 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-card animate-pulse" />
            )}
          </div>
        ))}
      </div>

      {/* Phone CTA */}
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
          <Phone className="w-4 h-4 md:w-[18px] md:h-[18px] text-primary-foreground" />
        </div>
        <div className="hidden md:flex flex-col leading-tight">
          <span className="text-xs text-muted-foreground font-medium">Appelez-nous</span>
          <span className="font-bold text-sm text-foreground">07 67 13 54 58</span>
        </div>
      </div>
    </a>
  );
};

export default PhoneToast;
