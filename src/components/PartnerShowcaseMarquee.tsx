"use client";

import Image from "next/image";

export interface PartnerCardData {
  id: number;
  category: "Private Schools" | "Sports Clubs" | "Sports Training Centres" | "Communities";
  categoryIcon: string;
  bannerGradient: string;
  badgeClass: string;
  partnerName: string;
  location: string;
  sport: string;
  image: string;
  quote: string;
  avatarInitials: string;
  avatarBg: string;
}

export const allPartnerCards: PartnerCardData[] = [
  // 01: Private School (GD Goenka)
  {
    id: 1,
    category: "Private Schools",
    categoryIcon: "🏫",
    bannerGradient: "from-emerald-600 to-green-700",
    badgeClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    partnerName: "G.D. Goenka International School",
    location: "Delhi NCR",
    sport: "Campus PE & Multi-Sport Programs",
    image: "/photos/GD Goenka.webp",
    quote: "Partnering with Lilhawkers brought structured age-appropriate sports periods, professional coach certification, and measurable athletic growth.",
    avatarInitials: "GD",
    avatarBg: "bg-emerald-600",
  },
  // 02: Sports Club (Elite Junior Football Club)
  {
    id: 2,
    category: "Sports Clubs",
    categoryIcon: "🏆",
    bannerGradient: "from-blue-600 to-indigo-700",
    badgeClass: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    partnerName: "Elite Junior Football Club",
    location: "Punjab",
    sport: "Turf Tactical Drills & Ball Mastery",
    image: "/photos/sportsclub.avif",
    quote: "Our academy players gained tremendous tactical stamina and technical ball mastery under the structured 6-stage coaching pathway.",
    avatarInitials: "EJ",
    avatarBg: "bg-blue-600",
  },
  // 03: Community (Palm Meadows Senior Citizens Forum)
  {
    id: 3,
    category: "Communities",
    categoryIcon: "🤝",
    bannerGradient: "from-purple-600 to-violet-700",
    badgeClass: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    partnerName: "Palm Meadows Senior Citizens Forum",
    location: "Gurugram, Haryana",
    sport: "Active Ageing & Park Mobility",
    image: "/photos/community1.jpg",
    quote: "The outdoor morning walks, social lawn games, and light agility circles brought 60+ senior residents together with daily enthusiasm.",
    avatarInitials: "PM",
    avatarBg: "bg-purple-600",
  },
  // 04: Sports Training Centre (SAI Training Centre Ludhiana)
  {
    id: 4,
    category: "Sports Training Centres",
    categoryIcon: "⚡",
    bannerGradient: "from-cyan-600 to-teal-700",
    badgeClass: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    partnerName: "SAI Sports Training Centre",
    location: "Ludhiana, Punjab",
    sport: "National Athlete Training Pathways",
    image: "/photos/sportscentre.avif",
    quote: "Standardizing age-calibrated physical literacy and biomechanical benchmarks prepared our junior athletes for elite performance trials.",
    avatarInitials: "SA",
    avatarBg: "bg-cyan-600",
  },
  // 05: Private School (Delhi Public School)
  {
    id: 5,
    category: "Private Schools",
    categoryIcon: "🏫",
    bannerGradient: "from-emerald-600 to-green-700",
    badgeClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    partnerName: "Delhi Public School (DPS)",
    location: "Delhi NCR",
    sport: "Sports Ground Optimization & PE",
    image: "/photos/delhi-public-school.webp",
    quote: "Optimizing our expansive sports grounds with progressive multi-sport skill modules elevated student physical fitness and inter-school match readiness.",
    avatarInitials: "DP",
    avatarBg: "bg-emerald-600",
  },
  // 06: Sports Club (United Football Championship Club)
  {
    id: 6,
    category: "Sports Clubs",
    categoryIcon: "🏆",
    bannerGradient: "from-blue-600 to-indigo-700",
    badgeClass: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    partnerName: "United Football Championship Club",
    location: "Delhi NCR",
    sport: "Turf League & Tournament Pathway",
    image: "/photos/sportsclub2.webp",
    quote: "Structured match conditioning and tournament strategy helped our club squad lift regional championship trophies with pride.",
    avatarInitials: "UF",
    avatarBg: "bg-blue-600",
  },
  // 07: Community (Greenfields Resident Society)
  {
    id: 7,
    category: "Communities",
    categoryIcon: "🤝",
    bannerGradient: "from-purple-600 to-violet-700",
    badgeClass: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    partnerName: "Greenfields Resident Society",
    location: "Chandigarh, Punjab",
    sport: "Tug of War & Active Lawn Games",
    image: "/photos/community2.jpg",
    quote: "Tug of war and inter-block team challenges brought enormous laughter, camaraderie, and active participation across all age groups.",
    avatarInitials: "GF",
    avatarBg: "bg-purple-600",
  },
  // 08: Private School (Ganga International School)
  {
    id: 8,
    category: "Private Schools",
    categoryIcon: "🏫",
    bannerGradient: "from-emerald-600 to-green-700",
    badgeClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    partnerName: "Ganga International School",
    location: "Delhi / Haryana",
    sport: "Age-Appropriate Junior Athletic Pathway",
    image: "/photos/ganga.jpg",
    quote: "Replacing ad-hoc sports periods with Lilhawkers standardized progression gave our school a top-tier sporting identity and parent praise.",
    avatarInitials: "GI",
    avatarBg: "bg-emerald-600",
  },
  // 09: Sports Club (Champions Box Cricket Club)
  {
    id: 9,
    category: "Sports Clubs",
    categoryIcon: "🏆",
    bannerGradient: "from-blue-600 to-indigo-700",
    badgeClass: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    partnerName: "Champions Box Cricket Club",
    location: "Rohtak, Haryana",
    sport: "Turf Box Cricket & Corporate Leagues",
    image: "/photos/sportsclub3.webp",
    quote: "Weekly floodlit box cricket tournaments and power hitting coaching brought 50+ teams together under an electric club atmosphere.",
    avatarInitials: "CB",
    avatarBg: "bg-blue-600",
  },
  // 10: Community (Vasant Kunj Golden Age Circle)
  {
    id: 10,
    category: "Communities",
    categoryIcon: "🤝",
    bannerGradient: "from-purple-600 to-violet-700",
    badgeClass: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    partnerName: "Vasant Kunj Golden Age Circle",
    location: "New Delhi, Delhi NCR",
    sport: "Senior Flexibility & Asana Drills",
    image: "/photos/community3.avif",
    quote: "Guided overhead stretching and balance routines helped our senior women improve shoulder flexibility and joint ease significantly.",
    avatarInitials: "VK",
    avatarBg: "bg-purple-600",
  },
  // 11: Sports Training Centre (SAI Sports Training Centre)
  {
    id: 11,
    category: "Sports Training Centres",
    categoryIcon: "⚡",
    bannerGradient: "from-cyan-600 to-teal-700",
    badgeClass: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    partnerName: "SAI Sports Training Centre",
    location: "North India Hub",
    sport: "Coach Certification & Athlete Evaluation",
    image: "/photos/sportscentre.jpeg",
    quote: "Turnkey trainer certification and structured athlete progression evaluation elevated coaching standards and athlete performance.",
    avatarInitials: "SA",
    avatarBg: "bg-cyan-600",
  },
  // 12: Private School (Holy Child School)
  {
    id: 12,
    category: "Private Schools",
    categoryIcon: "🏫",
    bannerGradient: "from-emerald-600 to-green-700",
    badgeClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    partnerName: "Holy Child Senior Secondary School",
    location: "Ghaziabad, NCR / UP",
    sport: "Primary Motor Foundations & Sports",
    image: "/photos/holy childs.jpeg",
    quote: "Every student from Grade 1 to 8 now develops core motor confidence, spatial balance, and fundamental sports literacy through structured drills.",
    avatarInitials: "HC",
    avatarBg: "bg-emerald-600",
  },
  // 13: Sports Club (Apex Racket & Padel Sports Club)
  {
    id: 13,
    category: "Sports Clubs",
    categoryIcon: "🏆",
    bannerGradient: "from-blue-600 to-indigo-700",
    badgeClass: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    partnerName: "Apex Racket & Padel Sports Club",
    location: "Jaipur, Rajasthan",
    sport: "Indoor Racket Sports & Tournaments",
    image: "/photos/sportsclub4.jpeg",
    quote: "Biomechanical stroke refinement and agile footwork drills took our club members to multiple championship finals with top honors.",
    avatarInitials: "AR",
    avatarBg: "bg-blue-600",
  },
  // 14: Community (Pink City Elders Club)
  {
    id: 14,
    category: "Communities",
    categoryIcon: "🤝",
    bannerGradient: "from-purple-600 to-violet-700",
    badgeClass: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    partnerName: "Pink City Elders Club",
    location: "Jaipur, Rajasthan",
    sport: "Cognitive-Motor & Mind Games",
    image: "/photos/community4.jpg",
    quote: "Combining traditional board games with finger dexterity drills keeps our seniors mentally sharp, socially connected, and joyful.",
    avatarInitials: "PC",
    avatarBg: "bg-purple-600",
  },
  // 15: Private School (Rockwoods High School)
  {
    id: 15,
    category: "Private Schools",
    categoryIcon: "🏫",
    bannerGradient: "from-emerald-600 to-green-700",
    badgeClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    partnerName: "Rockwoods High School",
    location: "Noida / Rajasthan",
    sport: "Campus Sports Infrastructure & Courts",
    image: "/photos/rockwoodwebp.webp",
    quote: "The turnkey basketball and multi-sport training modules elevated our campus athletic culture and championship tournament podium finishes.",
    avatarInitials: "RW",
    avatarBg: "bg-emerald-600",
  },
  // 16: Sports Club (Rohtak Turf Football Club)
  {
    id: 16,
    category: "Sports Clubs",
    categoryIcon: "🏆",
    bannerGradient: "from-blue-600 to-indigo-700",
    badgeClass: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    partnerName: "Rohtak Turf Football Club",
    location: "Amritsar / Rohtak",
    sport: "Night Turf Football Leagues",
    image: "/photos/sportsclub5.webp",
    quote: "Evening floodlit football matches and high-tempo small-sided games boosted player stamina and club registration numbers.",
    avatarInitials: "RT",
    avatarBg: "bg-blue-600",
  },
  // 17: Community (Panchkula Wellness Society)
  {
    id: 17,
    category: "Communities",
    categoryIcon: "🤝",
    bannerGradient: "from-purple-600 to-violet-700",
    badgeClass: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    partnerName: "Panchkula Wellness Society",
    location: "Panchkula, Haryana",
    sport: "Park Yoga & Breath Alignment",
    image: "/photos/community5.jpeg",
    quote: "Morning outdoor breathing, spine alignment, and meditative focus sessions gave our community members deep calm and posture relief.",
    avatarInitials: "PW",
    avatarBg: "bg-purple-600",
  },
  // 18: Private School (Saraswati Model School)
  {
    id: 18,
    category: "Private Schools",
    categoryIcon: "🏫",
    bannerGradient: "from-emerald-600 to-green-700",
    badgeClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    partnerName: "Saraswati Model School",
    location: "Delhi NCR",
    sport: "Multi-Sport Discovery & Agility Relays",
    image: "/photos/saraswati.png",
    quote: "The multi-sport exploration model prevented single-sport burnout and made every single student excited for their daily sports period.",
    avatarInitials: "SM",
    avatarBg: "bg-emerald-600",
  },
  // 19: Sports Club (Punjab Champions Football Club)
  {
    id: 19,
    category: "Sports Clubs",
    categoryIcon: "🏆",
    bannerGradient: "from-blue-600 to-indigo-700",
    badgeClass: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    partnerName: "Punjab Champions Football Club",
    location: "Punjab / UP",
    sport: "Championship Tournaments & Elite Squads",
    image: "/photos/sportsclub6.webp",
    quote: "Scientific recovery protocols and high-intensity match conditioning drove our team to a decisive championship victory.",
    avatarInitials: "PC",
    avatarBg: "bg-blue-600",
  },
  // 20: Community (Dwarka Open Gym Sports Society)
  {
    id: 20,
    category: "Communities",
    categoryIcon: "🤝",
    bannerGradient: "from-purple-600 to-violet-700",
    badgeClass: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    partnerName: "Dwarka Open Gym Sports Society",
    location: "Delhi NCR",
    sport: "Open-Gym Resistance & Joint Care",
    image: "/photos/community6.avif",
    quote: "Our open-gym equipment sessions with proper trainer guidance enabled seniors to build functional leg power and knee confidence.",
    avatarInitials: "DO",
    avatarBg: "bg-purple-600",
  },
  // 21: Private School (St. Margaret Public School)
  {
    id: 21,
    category: "Private Schools",
    categoryIcon: "🏫",
    bannerGradient: "from-emerald-600 to-green-700",
    badgeClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    partnerName: "St. Margaret Public School (SMPS)",
    location: "Delhi NCR",
    sport: "Early Motor Skill Foundation & Agility",
    image: "/photos/smps.webp",
    quote: "Early childhood motor skill foundation reduced postural clumsiness and built immense confidence in our primary students.",
    avatarInitials: "SM",
    avatarBg: "bg-emerald-600",
  },
  // 22: Private School (The Modern School)
  {
    id: 22,
    category: "Private Schools",
    categoryIcon: "🏫",
    bannerGradient: "from-emerald-600 to-green-700",
    badgeClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    partnerName: "The Modern School",
    location: "Delhi NCR / Haryana",
    sport: "Turnkey Curriculum & Trainer Management",
    image: "/photos/the modern schoolpng.png",
    quote: "Having Lilhawkers coaches handle curriculum delivery and trainer certification freed our school leadership to focus on academic excellence.",
    avatarInitials: "MS",
    avatarBg: "bg-emerald-600",
  },
];

function PartnerCard({ card }: { card: PartnerCardData }) {
  return (
    <div className="w-[245px] sm:w-[270px] shrink-0 rounded-xl overflow-hidden bg-[#111214] border border-white/10 shadow-xl hover:border-[var(--color-primary)]/40 transition-all duration-300 flex flex-col justify-between group">
      {/* Top Colored Banner Strip */}
      <div
        className={`bg-gradient-to-r ${card.bannerGradient} px-3 py-1.5 flex items-center justify-between shadow-sm`}
      >
        <div className="flex items-center gap-1.5">
          <span className="text-xs">{card.categoryIcon}</span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-white">
            {card.category}
          </span>
        </div>
        <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded bg-black/30 text-white backdrop-blur-sm truncate max-w-[110px]">
          {card.sport}
        </span>
      </div>

      {/* Real Sports Photo Banner */}
      <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-black/40">
        <Image
          src={card.image}
          alt={`${card.partnerName} - ${card.sport}`}
          fill
          sizes="(max-width: 640px) 245px, 270px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-transparent to-transparent opacity-80" />
      </div>

      {/* Card Content */}
      <div className="p-3 space-y-2 flex-1 flex flex-col justify-between">
        {/* Star Rating & Badge */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-0.5 text-amber-400 text-[10px]">
              {"★".repeat(5)}
            </div>
            <span className={`text-[8px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.2 rounded border ${card.badgeClass}`}>
              Verified Impact
            </span>
          </div>

          {/* Testimonial Quote */}
          <p className="text-[11px] text-zinc-300 italic leading-snug line-clamp-2">
            &ldquo;{card.quote}&rdquo;
          </p>
        </div>

        {/* Bottom Profile Footer */}
        <div className="pt-2 border-t border-white/10 flex items-center gap-2.5">
          <div
            className={`w-7 h-7 rounded-full ${card.avatarBg} text-white font-bold text-[10px] flex items-center justify-center shrink-0 shadow-sm border border-white/15`}
          >
            {card.avatarInitials}
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-bold text-white text-[11px] truncate group-hover:text-[var(--color-primary)] transition-colors">
              {card.partnerName}
            </h4>
            <span className="text-[9px] text-zinc-400 flex items-center gap-0.5 truncate">
              <span>📍</span>
              <span className="truncate">{card.location}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PartnerShowcaseMarquee() {
  // Split 22 cards into two alternating rows of 11 cards each
  const row1 = allPartnerCards.slice(0, 11);
  const row2 = allPartnerCards.slice(11, 22);

  return (
    <div className="relative w-full overflow-hidden py-4 space-y-4">
      {/* Left and Right Fade Gradient Masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[var(--color-dark)] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[var(--color-dark)] to-transparent z-20" />

      {/* Row 1: Scrolling Left (Cards 1 to 11 duplicated for seamless infinite loop) */}
      <div className="flex overflow-hidden group/marquee">
        <div className="animate-marquee-left flex gap-3.5 shrink-0 pr-3.5">
          {row1.map((card) => (
            <PartnerCard key={`r1-orig-${card.id}`} card={card} />
          ))}
        </div>
        <div className="animate-marquee-left flex gap-3.5 shrink-0 pr-3.5" aria-hidden="true">
          {row1.map((card) => (
            <PartnerCard key={`r1-dup-${card.id}`} card={card} />
          ))}
        </div>
      </div>

      {/* Row 2: Scrolling Right (Cards 12 to 22 duplicated for seamless infinite loop) */}
      <div className="flex overflow-hidden group/marquee">
        <div className="animate-marquee-right flex gap-3.5 shrink-0 pr-3.5">
          {row2.map((card) => (
            <PartnerCard key={`r2-orig-${card.id}`} card={card} />
          ))}
        </div>
        <div className="animate-marquee-right flex gap-3.5 shrink-0 pr-3.5" aria-hidden="true">
          {row2.map((card) => (
            <PartnerCard key={`r2-dup-${card.id}`} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
