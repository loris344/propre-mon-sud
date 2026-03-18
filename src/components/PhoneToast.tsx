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
      aria-label="Appeler le 07 67 13 54 58"
      onClick={() => gtag_report_conversion()}
      className="fixed bottom-3 left-3 z-50 flex items-center gap-2 rounded-full bg-primary px-2.5 py-2 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15">
        <Phone className="h-4 w-4" />
      </div>

      <span className="whitespace-nowrap text-[13px] font-semibold leading-none sm:text-sm">
        07 67 13 54 58
      </span>

      <div className="flex shrink-0 items-center rounded-full bg-primary-foreground/15 px-1.5 py-1">
        <div className="flex -space-x-2.5">
          {teamMembers.map((member) => (
            <img
              key={member.alt}
              src={member.src}
              alt={member.alt}
              className="h-7 w-7 rounded-full object-cover object-top ring-2 ring-primary"
            />
          ))}
        </div>
      </div>
    </a>
  );
};

export default PhoneToast;
