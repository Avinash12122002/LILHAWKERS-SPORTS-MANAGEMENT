"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApproachAndSystem from "@/components/ApproachAndSystem";
import PartnerShowcaseMarquee from "@/components/PartnerShowcaseMarquee";

// 6 Structured Stages across the entire lifespan
const sixStages = [
  {
    number: "01",
    name: "Foundation",
    ageRange: "Ages 3 – 6 Years",
    targetGroup: "Early Childhood & Pre-Primary",
    tagline: "Neuromuscular Foundations, Balance & Joyful Movement",
    gradient: "from-emerald-400 to-green-500",
    bgAccent: "rgba(16, 185, 129, 0.08)",
    borderAccent: "hover:border-emerald-500/50",
    overview:
      "At this formative stage, the focus is never on rigid rules or early specialization. We build balance, spatial orientation, gross motor skills, and confidence through joyful, structured play.",
    curriculumHighlights: [
      "Dynamic movement balance & unilateral hopping/jumping",
      "Hand-eye and foot-eye tracking with lightweight equipment",
      "Spatial awareness and body orientation drills",
      "Basic movement patterns (crawling, rolling, dodging, catching)",
      "Cooperative non-competitive group games fostering social confidence",
    ],
    evaluationMetrics: [
      "Gross Motor Quotient (GMQ)",
      "Dynamic Balance Stability",
      "Bilateral Coordination Score",
      "Joyful Session Engagement Rate",
    ],
  },
  {
    number: "02",
    name: "Development",
    ageRange: "Ages 7 – 12 Years",
    targetGroup: "Growing Kids & Primary",
    tagline: "Multi-Sport Exploration & Athletic Skill Acquisition",
    gradient: "from-teal-400 to-cyan-500",
    bgAccent: "rgba(20, 184, 166, 0.08)",
    borderAccent: "hover:border-teal-500/50",
    overview:
      "Children are exposed to multiple sports without premature single-sport lock-in. They develop versatile agility, team play, and fundamental mechanics across throwing, striking, catching, and running.",
    curriculumHighlights: [
      "Multi-sport rotational curriculum (Football, Basketball, Athletics, Rackets)",
      "Progressive athletic mechanics (Deceleration, lateral cutting, sprint posture)",
      "Fundamental technical skills (Passing accuracy, striking contact, dribbling)",
      "Fair play, tactical decision-making, and team communication",
      "Early functional mobility and active joint safety habits",
    ],
    evaluationMetrics: [
      "Multi-Sport Competence Index",
      "Agility T-Test & Reaction Time",
      "Teamwork & Tactical Comprehension",
      "Cardiovascular Recovery Index",
    ],
  },
  {
    number: "03",
    name: "Performance",
    ageRange: "Ages 13 – 20 Years",
    targetGroup: "Teens & Young Athletes",
    tagline: "Sport-Specific Conditioning & Competitive Representation",
    gradient: "from-cyan-400 to-sky-500",
    bgAccent: "rgba(6, 182, 212, 0.08)",
    borderAccent: "hover:border-cyan-500/50",
    overview:
      "For participants ready to advance into competitive athletic pathways. Training deepens into sport-specific strategy, energy system conditioning, strength fundamentals, and mental resilience.",
    curriculumHighlights: [
      "Specialized sport-specific technical drills & match scenarios",
      "Structured strength, power, and plyometric conditioning",
      "Game-reading tactics, positional awareness & pressure management",
      "Injury mitigation protocols (ACL/Hamstring injury prevention)",
      "Competitive match preparation and mental resilience coaching",
    ],
    evaluationMetrics: [
      "Sport-Specific Technical Efficiency",
      "VO2 Max & Anaerobic Threshold",
      "Explosive Vertical / Lateral Power",
      "Match Stress Performance Rating",
    ],
  },
  {
    number: "04",
    name: "Professional Mastery & Conditioning",
    ageRange: "Ages 20 – 35 Years",
    targetGroup: "Young Adults & Working Professionals",
    tagline: "High-Performance Functional Fitness & Recreational Leagues",
    gradient: "from-blue-500 to-indigo-500",
    bgAccent: "rgba(59, 130, 246, 0.08)",
    borderAccent: "hover:border-blue-500/50",
    overview:
      "Designed for adults who seek high-energy fitness, functional athletic conditioning, and active competitive team leagues (Badminton, Football, Basketball, Pickleball) alongside demanding careers.",
    curriculumHighlights: [
      "High-intensity functional conditioning & metabolic resistance circuits",
      "Adult recreational league play with structured refereeing & stats",
      "Postural correction for desk-bound professionals",
      "Core stability, rotational power, and sprint conditioning",
      "Active stress reduction and corporate fitness cohorts",
    ],
    evaluationMetrics: [
      "Functional Movement Screen (FMS)",
      "Body Composition & Lean Mass Index",
      "Resting Heart Rate & Recovery Rate",
      "League Play Activity Rating",
    ],
  },
  {
    number: "05",
    name: "Longevity & Mobility",
    ageRange: "Ages 35 – 60 Years",
    targetGroup: "Middle-Aged Adults & Prime Demographics",
    tagline: "Joint Health, Cardiovascular Stamina & Low-Impact Sports",
    gradient: "from-amber-400 to-orange-500",
    bgAccent: "rgba(245, 158, 11, 0.08)",
    borderAccent: "hover:border-amber-500/50",
    overview:
      "Focused on keeping adults agile, pain-free, and metabolically healthy. Emphasizes joint mobility, spine health, cardiovascular endurance, and low-impact competitive sports like Pickleball, Badminton, and Swimming.",
    curriculumHighlights: [
      "Joint preservation routines (Shoulder, hip, and lumbar mobility)",
      "Low-impact aerobic conditioning & zone-2 cardio training",
      "Pickleball, Badminton, and Masters swimming / cycling leagues",
      "Progressive resistance training to prevent sarcopenia and preserve bone density",
      "Metabolic health maintenance and active lifestyle protocols",
    ],
    evaluationMetrics: [
      "Joint Range of Motion (ROM) Score",
      "Bone Density / Strength Retention",
      "Cardiometabolic Risk Marker Tracking",
      "Pain-Free Movement Assessment",
    ],
  },
  {
    number: "06",
    name: "Vitality & Wellness",
    ageRange: "Ages 60+ Years",
    targetGroup: "Seniors & Golden Age Community",
    tagline: "Balance Restoration, Fall Prevention & Social Sports",
    gradient: "from-rose-400 to-pink-500",
    bgAccent: "rgba(244, 63, 94, 0.08)",
    borderAccent: "hover:border-rose-500/50",
    overview:
      "A scientifically calibrated program for seniors to preserve autonomy, restore equilibrium, prevent slips and falls, maintain muscle integrity, and enjoy social community sporting games.",
    curriculumHighlights: [
      "Dynamic equilibrium drills for fall prevention & vestibular balance",
      "Gentle resistance band conditioning & isometric stability",
      "Walking football, soft bocce, light table tennis & lawn sports",
      "Postural realignment, breathing mechanics, and circulation enhancement",
      "Inter-generational community sports days and social health circles",
    ],
    evaluationMetrics: [
      "Berg Balance Scale & Fall Risk Index",
      "Functional Gait Speed Assessment",
      "Grip Strength & Lower Body Power",
      "Social Health & Vitality Score",
    ],
  },
];

// Physical Profile Metadata
const physicalProfiles = [
  {
    id: "endomorph",
    title: "Higher Body Mass / Overweight (Endomorph)",
    icon: "⚖️",
    badge: "Joint-Friendly Metabolic",
    characteristics: "Higher body fat percentage, joint load sensitivity, lower initial stamina.",
  },
  {
    id: "ectomorph",
    title: "Slim & Lean / Underweight (Ectomorph)",
    icon: "🏃‍♂️",
    badge: "Strength & Power Focus",
    characteristics: "Fast metabolism, lower muscle mass, rapid fatigue during high-volume sets.",
  },
  {
    id: "mesomorph",
    title: "Athletic & High Stamina (Mesomorph)",
    icon: "⚡",
    badge: "Advanced Performance",
    characteristics: "Naturally athletic build, high work capacity, fast recovery rate.",
  },
  {
    id: "rehab",
    title: "Joint-Sensitive / Post-Injury Rehab",
    icon: "🩹",
    badge: "Therapeutic & Mobility",
    characteristics: "Recovering from ankle/knee strain, lower back stiffness, or postural misalignment.",
  },
  {
    id: "beginner",
    title: "Beginner / Deconditioned Participant",
    icon: "🌱",
    badge: "Confidence & Habit",
    characteristics: "Sedentary background, unfamiliar with sport mechanics, hesitant mindset.",
  },
];

// Comprehensive 6 Stages x 5 Somatotypes = 30 Unique Scientific Calibrations
const calibrationMatrix: Record<
  string,
  {
    intensity: string;
    sportsSelection: string;
    sportsManagerAction: string;
    expectedOutcome: string;
  }
> = {
  // STAGE 01 (Foundation: Ages 3-6)
  "01_endomorph": {
    intensity: "Low-impact sensory balance games with soft foam mat landings",
    sportsSelection: "Water play, animal crawls on foam mats, light balloon chasing, rolling drills",
    sportsManagerAction:
      "Eliminates high-impact jump landings on hard courts; uses sensory obstacle courses with soft foam mats to build agility without putting stress on developing joints.",
    expectedOutcome: "Gross motor coordination and balance development with zero joint strain.",
  },
  "01_ectomorph": {
    intensity: "Short, playful power bursts with frequent rest and hydration intervals",
    sportsSelection: "Small beanbag throwing, micro sprint tags, mini climbing frames, hanging bars",
    sportsManagerAction:
      "Focuses on upper-body hanging, climbing grip, and short energetic bursts rather than long continuous chasing games that cause early fatigue.",
    expectedOutcome: "Enhanced neuromuscular grip, spatial body awareness, and core posture.",
  },
  "01_mesomorph": {
    intensity: "Multi-directional agility obstacle courses with fast decision-making",
    sportsSelection: "Multi-ball catching, agility ladders, directional relay games, balance beam tasks",
    sportsManagerAction:
      "Introduces dynamic multi-task games (e.g., color-coded catching, dual-direction dodging) to channel natural energy into structured motor coordination.",
    expectedOutcome: "Rapid acceleration of bilateral agility and sports movement fluency.",
  },
  "01_rehab": {
    intensity: "Gentle corrective alignment and playful isometric balancing",
    sportsSelection: "Single-leg flamingo stands, soft foam beam walking, seated balloon volleyball",
    sportsManagerAction:
      "Isolates and reinforces ankle/knee proprioception through guided balance play; avoids sudden directional pivots on uneven surfaces.",
    expectedOutcome: "Restored gait symmetry and confident, fear-free movement exploration.",
  },
  "01_beginner": {
    intensity: "Ultra-low-barrier confidence games with positive reinforcement",
    sportsSelection: "Partner hand-clapping drills, big-ball rolling, joyful freeze dance, colorful ring toss",
    sportsManagerAction:
      "Pairs the child with an encouraging coach mentor; breaks movement instructions into single-step visual demonstrations to eliminate hesitation.",
    expectedOutcome: "Joyful enthusiasm for physical activity and total comfort in group sports.",
  },

  // STAGE 02 (Development: Ages 7-12)
  "02_endomorph": {
    intensity: "Zone-2 aerobic rotational play with high-cadence footwork",
    sportsSelection: "Youth Swimming, Pickleball, Modified Football on grass, Table Tennis, Cycling drills",
    sportsManagerAction:
      "Substitutes continuous concrete sprints with high-repetition multi-sport stations and grass agility drills; closely monitors hydration and active interval pacing.",
    expectedOutcome: "Significant reduction in body fat, improved aerobic capacity, and fluent multi-sport competency.",
  },
  "02_ectomorph": {
    intensity: "Explosive movement mechanics, sprint deceleration, and bodyweight strength",
    sportsSelection: "Athletics sprint starts, Basketball passing drills, Badminton power smashes, Gymnastic fundamentals",
    sportsManagerAction:
      "Limits exhausting endurance circuits; focuses on sprint mechanics, explosive jumps, core bracing, and post-session nutrition awareness.",
    expectedOutcome: "Noticeable gains in lean muscle mass, striking power, and athletic speed.",
  },
  "02_mesomorph": {
    intensity: "High-tempo competitive small-sided games and tactical decision drills",
    sportsSelection: "Full Multi-sport rotations (Football, Basketball, Athletics, Racket sports)",
    sportsManagerAction:
      "Challenges participant with smaller playing spaces, tactical defensive constraints, and leadership roles to develop game-intelligence alongside athleticism.",
    expectedOutcome: "Dominant multi-sport versatility, tactical vision, and superior match agility.",
  },
  "02_rehab": {
    intensity: "Proprioceptive stabilization, resistance bands, and linear mechanics",
    sportsSelection: "Controlled indoor swimming, linear sprint technique, resistance band footwork, soft-court racket play",
    sportsManagerAction:
      "Restricts full-contact match drills; replaces high-risk cutting angles with closed-chain linear agility drills and dynamic hip/ankle warmups.",
    expectedOutcome: "Safe transition back into regular school PE sports with zero re-injury risk.",
  },
  "02_beginner": {
    intensity: "Step-by-step fundamental sport skill acquisition",
    sportsSelection: "Mini-Tennis with low-compression balls, introductory football dribbling, soft basketball shooting",
    sportsManagerAction:
      "Uses progressive ball sizes and scaled court dimensions; focuses on effort over outcome to build sporting self-esteem and peer camaraderie.",
    expectedOutcome: "Mastery of essential sports mechanics and eager participation in school teams.",
  },

  // STAGE 03 (Performance: Ages 13-20)
  "03_endomorph": {
    intensity: "High-volume metabolic conditioning & power-to-weight optimization",
    sportsSelection: "Competitive Rowing, Water Polo, Judo/Wrestling, Shot Put/Discus, Defensive Football positions",
    sportsManagerAction:
      "Designs individualized power-to-weight training blocks, high-intensity interval training (HIIT) on non-impact equipment (Airdyne/Rowers), and tactical strength drills.",
    expectedOutcome: "Optimized body composition, high anaerobic power threshold, and competitive dominance.",
  },
  "03_ectomorph": {
    intensity: "Hypertrophy-specific resistance, explosive plyometrics & rotational torque",
    sportsSelection: "Middle-distance running, Cricket batting/bowling, Basketball guard play, Badminton singles",
    sportsManagerAction:
      "Prioritizes bar/cable velocity training, structural core stability, and periodized rest days to prevent overtraining syndrome in lean athletes.",
    expectedOutcome: "Enhanced functional lean mass, increased stroke/throw velocity, and sprint resilience.",
  },
  "03_mesomorph": {
    intensity: "Elite match-pace simulation, sport-specific energy systems & tactical mastery",
    sportsSelection: "High-level Tournament Football, Competitive Basketball, Track & Field, Tennis championship training",
    sportsManagerAction:
      "Implements GPS tracking/heart rate monitoring, match-intensity pressure scenarios, and sports psychology resilience protocols for tournament readiness.",
    expectedOutcome: "State/National level competitive representation and peak physical conditioning.",
  },
  "03_rehab": {
    intensity: "Biomechanical corrective drills, unilateral power restoration & eccentric loading",
    sportsSelection: "Controlled gym-based S&C, specialized turf mechanics, sport-specific non-contact drills",
    sportsManagerAction:
      "Administers Functional Movement Screen (FMS) and limb-symmetry testing before clearing the athlete for full competitive match contact.",
    expectedOutcome: "100% limb symmetry, full athletic confidence, and verified match fitness.",
  },
  "03_beginner": {
    intensity: "Accelerated athletic literacy and foundational conditioning",
    sportsSelection: "Club-level recreational leagues, Track fundamentals, Volleyball, Racket sports development",
    sportsManagerAction:
      "Provides structured individual coaching to fast-track technical gaps, teaching game tactics and strength training foundations in a supportive cohort.",
    expectedOutcome: "Swift integration into organized club/school competitive leagues.",
  },

  // STAGE 04 (Professional Mastery & Conditioning: Ages 20-35)
  "04_endomorph": {
    intensity: "High-density metabolic circuits & joint-sparing functional strength",
    sportsSelection: "Corporate Football Leagues, Pickleball tournaments, Functional Kettlebell circuits, Swimming sprints",
    sportsManagerAction:
      "Replaces heavy impact running with high-output rowing/sled intervals and structured evening league play; integrates metabolic heart-rate tracking.",
    expectedOutcome: "Rapid reduction in visceral fat, enhanced stamina for corporate work-life balance, and injury-free league play.",
  },
  "04_ectomorph": {
    intensity: "Functional athletic hypertrophy, postural realignment & core power",
    sportsSelection: "Corporate Badminton Leagues, Functional Strength training, Tennis, 5K/10K pacing groups",
    sportsManagerAction:
      "Prescribes progressive compound resistance protocols to counteract desk-bound postural slumping (anterior pelvic tilt / thoracic kyphosis).",
    expectedOutcome: "Lean athletic muscular development, robust spinal posture, and dynamic athletic power.",
  },
  "04_mesomorph": {
    intensity: "High-intensity athletic conditioning, competitive tournament leagues & speed stamina",
    sportsSelection: "Weekend Football/Cricket Leagues, Advanced CrossFit/Hyrox training, Squash, Basketball",
    sportsManagerAction:
      "Structures periodized training cycles with active recovery protocols to optimize athletic output alongside intense professional work commitments.",
    expectedOutcome: "Elite recreational athleticism, top-tier corporate tournament rankings, and peak mental focus.",
  },
  "04_rehab": {
    intensity: "Ergonomic mobility restoration, lumbar decompression & rotator cuff rehab",
    sportsSelection: "Pilates for Athletes, Hydrotherapy, Controlled Table Tennis, Gentle Racket Sports",
    sportsManagerAction:
      "Focuses on desk-worker ergonomic injuries (tech-neck, carpal tunnel, lower back tightness); prescribes targeted myofascial release and glute activation.",
    expectedOutcome: "Complete relief from workplace spinal stiffness and pain-free sports enjoyment.",
  },
  "04_beginner": {
    intensity: "Progressive work-to-rest fitness intervals & recreational social sport",
    sportsSelection: "Introductory Pickleball, Social Corporate Badminton, Functional Bootcamp circuits",
    sportsManagerAction:
      "Creates friendly, beginner-oriented corporate cohorts; focuses on building sustainable 3x/week workout habits with zero intimidation.",
    expectedOutcome: "Established lifelong fitness routine, reduced workplace stress, and social team bonding.",
  },

  // STAGE 05 (Longevity & Mobility: Ages 35-60)
  "05_endomorph": {
    intensity: "Low-impact zone-2 cardiovascular training & joint-sparing strength",
    sportsSelection: "Pickleball doubles, Masters Swimming, Aqua Jogging, Outdoor Cycling, Resistance machines",
    sportsManagerAction:
      "Protects knee and hip joints by eliminating high-impact jumps; implements heart-rate zone training to optimize metabolic and cardiovascular longevity.",
    expectedOutcome: "Cardiovascular risk reduction, optimal blood pressure maintenance, and flexible pain-free joints.",
  },
  "05_ectomorph": {
    intensity: "Bone-density loading & progressive resistance training against sarcopenia",
    sportsSelection: "Guided Weight Training, Badminton doubles, Golf swing mechanics, Brisk trail hiking",
    sportsManagerAction:
      "Prescribes moderate-load resistance training to stimulate bone mineral density and prevent age-related muscle loss (sarcopenia).",
    expectedOutcome: "Preserved skeletal strength, improved posture, and high daily vitality.",
  },
  "05_mesomorph": {
    intensity: "Smart athletic maintenance, rotational spine power & endurance preservation",
    sportsSelection: "Masters Tennis, Competitive Pickleball, Masters Swimming, Open-Age Football",
    sportsManagerAction:
      "Emphasizes extended dynamic warmups, tendon recovery protocols, and joint mobility to sustain high-level competitive performance well into middle age.",
    expectedOutcome: "Sustained high athletic performance with zero chronic overuse injuries.",
  },
  "05_rehab": {
    intensity: "Therapeutic joint restoration, closed-kinetic-chain drills & pelvic stability",
    sportsSelection: "Hydrotherapy pool exercises, Gentle Yoga/Mobility flows, Elliptical trainer, Soft bocce",
    sportsManagerAction:
      "Customizes movements around pre-existing arthritis, disk issues, or frozen shoulder; coordinates closely with medical/physio clearance.",
    expectedOutcome: "Significant reduction in chronic joint inflammation and restored functional range of motion.",
  },
  "05_beginner": {
    intensity: "Gentle low-intensity conditioning & functional daily movement skills",
    sportsSelection: "Walking groups, Beginner Pickleball, Gentle resistance bands, Low-impact mobility circuits",
    sportsManagerAction:
      "Builds cardiovascular stamina and balance step-by-step; ensures every movement feels comfortable, safe, and uplifting.",
    expectedOutcome: "Renewed physical confidence, boosted daily energy levels, and improved metabolic markers.",
  },

  // STAGE 06 (Vitality & Wellness: Ages 60+)
  "06_endomorph": {
    intensity: "Buoyancy-assisted cardio, gentle gait training & seated mobility",
    sportsSelection: "Aqua Aerobics, Warm-water walking, Seated Resistance Bands, Soft Bocce",
    sportsManagerAction:
      "Utilizes water resistance and seated exercise to maximize cardiovascular activity while completely unloading weight from knees, hips, and lower back.",
    expectedOutcome: "Improved circulation, weight management without joint pain, and enhanced mobility.",
  },
  "06_ectomorph": {
    intensity: "Isometric strength, core equilibrium & bone preservation",
    sportsSelection: "Chair yoga, Standing balance drills, Light dumbbell curls/presses, Lawn bowls",
    sportsManagerAction:
      "Focuses on maintaining grip strength, core stability, and leg power to ensure independent mobility and effortless sit-to-stand capability.",
    expectedOutcome: "Independent daily autonomy, preserved bone density, and fall resistance.",
  },
  "06_mesomorph": {
    intensity: "Active senior sports leagues & dynamic coordination games",
    sportsSelection: "Senior Table Tennis, Masters Swimming, Walking Football, Golf, Gentle Racket sports",
    sportsManagerAction:
      "Keeps senior athletes mentally sharp and physically agile with social, fast-paced hand-eye coordination sports tailored for senior longevity.",
    expectedOutcome: "High physical vitality, sharp cognitive-motor reflexes, and active community connection.",
  },
  "06_rehab": {
    intensity: "Vestibular balance restoration & clinical fall prevention protocols",
    sportsSelection: "Parallel bar balance walking, Proprioceptive foam mats, Gentle seated stretching",
    sportsManagerAction:
      "Performs weekly Berg Balance Scale assessments; prescribes vestibular and dynamic equilibrium drills to eliminate slip-and-fall risks.",
    expectedOutcome: "Dramatically reduced fall risk, restored gait confidence, and secure balance.",
  },
  "06_beginner": {
    intensity: "Joyful community movement & gentle social recreational games",
    sportsSelection: "Gentle morning walking circles, Soft balloon tennis, Light group stretching, Lawn croquet",
    sportsManagerAction:
      "Provides warm, compassionate coaching in welcoming group circles that foster social friendship, laughter, and daily active movement.",
    expectedOutcome: "Social connection, enhanced emotional well-being, and sustained mobility.",
  },
};

export default function ProgramsPage() {
  const [selectedStage, setSelectedStage] = useState(sixStages[0]);
  const [selectedProfile, setSelectedProfile] = useState(physicalProfiles[0]);

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-500/10 to-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-50 text-[var(--color-primary)] border border-emerald-200 mb-4">
              Comprehensive Sports Architecture
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[var(--font-heading)] text-slate-900 tracking-tight leading-[1.1]">
              Approach, System &amp; <br />
              <span className="gradient-text">6-Stage Programs</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore the complete Lilhawkers operating continuum: from our <strong>scientific progression methodology</strong> and <strong>7-step turnkey delivery system</strong> to our <strong>six lifespan age stages</strong> and <strong>adaptive body evaluation engine</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: Approach & 7-Step Delivery System */}
      <ApproachAndSystem />

      {/* 22-Card Partner Showcase Marquee (Above 6 Stages) */}
      <section className="py-14 border-y border-slate-200 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-primary)] font-bold block">
            Institutional Deployments &bull; North India
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-[var(--font-heading)] mt-0.5">
            Trusted Across Schools, Clubs, Training Centres &amp; Communities
          </h3>
        </div>

        <PartnerShowcaseMarquee />
      </section>

      {/* SECTION 2: 6 Lifespan Stages Matrix */}
      <section className="py-20 border-t border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-50 text-[var(--color-primary)] border border-emerald-200 mb-3">
              Lifespan Curriculum
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-[var(--font-heading)] text-slate-900">
              The Six-Stage Sports Development Matrix
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Explore how each stage is engineered for specific biomechanical, physiological, and cognitive development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sixStages.map((stage) => (
              <div
                key={stage.number}
                className="glass-card p-7 rounded-3xl border border-slate-200 flex flex-col justify-between transition-all duration-300 hover:border-[var(--color-primary)]/40 hover:shadow-xl group bg-white"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${stage.bgAccent}, transparent 75%), #ffffff`,
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-4xl font-black font-[var(--font-heading)] bg-gradient-to-br ${stage.gradient} bg-clip-text text-transparent`}
                    >
                      {stage.number}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                      {stage.ageRange}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-primary)] block mb-1">
                    {stage.targetGroup}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-[var(--font-heading)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    Stage {stage.number}: {stage.name}
                  </h3>
                  <p className="text-xs text-sky-700 font-semibold mb-4 leading-snug">
                    {stage.tagline}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {stage.overview}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900">
                      Curriculum Focus:
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {stage.curriculumHighlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0 mt-1.5" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Evaluated Weekly</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedStage(stage);
                      document.getElementById("evaluator")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-[var(--color-primary)] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                  >
                    Simulate Pathway →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Interactive Sports Manager Evaluation & Adaptive Calibration Engine */}
      <section id="evaluator" className="py-20 border-t border-slate-200 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-50 text-[var(--color-primary)] border border-emerald-200 mb-3">
              Adaptive Evaluation Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-[var(--font-heading)] text-slate-900">
              How Sports Managers Adapt Pathways to Individual Bodies
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              No two participants are identical. If a person in the Performance or Foundation stage is overweight, lean, joint-sensitive, or deconditioned, our sports managers dynamically calibrate drills, loading, and recovery metrics.
            </p>
          </div>

          <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-10 bg-slate-50/60">
            {/* Step 1: Choose Stage */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-primary)] block mb-2.5">
                1. Select Program Stage:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {sixStages.map((stg) => (
                  <button
                    key={stg.number}
                    type="button"
                    onClick={() => setSelectedStage(stg)}
                    className={`p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      selectedStage.number === stg.number
                        ? "bg-emerald-600 border-emerald-600 text-white shadow-md"
                        : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    <div>
                      <span className={`text-[10px] font-mono font-bold block ${selectedStage.number === stg.number ? "text-emerald-100" : "text-[var(--color-primary)]"}`}>
                        Stage {stg.number}
                      </span>
                      <span className={`text-xs sm:text-[13px] font-bold block font-[var(--font-heading)] mt-0.5 leading-snug ${selectedStage.number === stg.number ? "text-white" : "text-slate-900"}`}>
                        {stg.name}
                      </span>
                    </div>
                    <span className={`text-[9px] block mt-1.5 pt-1.5 border-t ${selectedStage.number === stg.number ? "text-emerald-100 border-emerald-500/50" : "text-slate-500 border-slate-100"}`}>
                      {stg.ageRange}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Physical Somatotype / Body Profile */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-sky-700 block mb-2.5">
                2. Select Physical Profile / Body Somatotype:
              </label>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                {physicalProfiles.map((prof) => (
                  <button
                    key={prof.id}
                    type="button"
                    onClick={() => setSelectedProfile(prof)}
                    className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                      selectedProfile.id === prof.id
                        ? "bg-sky-600 border-sky-600 text-white shadow-md"
                        : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    <div>
                      <div className="text-lg mb-1">{prof.icon}</div>
                      <span className={`text-[11px] sm:text-xs font-bold block font-[var(--font-heading)] leading-snug ${selectedProfile.id === prof.id ? "text-white" : "text-slate-900"}`}>
                        {prof.title}
                      </span>
                    </div>
                    <span className={`text-[8.5px] px-2 py-0.5 rounded-full border mt-2 inline-block font-bold ${selectedProfile.id === prof.id ? "bg-white/20 text-white border-white/30" : "bg-slate-100 text-slate-600 border-slate-200"}`}>
                      {prof.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Sports Manager Calibration Output Panel */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-primary)] block">
                    Dynamic Pathway Calibration Result
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-[var(--font-heading)] mt-0.5">
                    Stage {selectedStage.number} ({selectedStage.name}) &bull; {selectedProfile.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full font-bold border border-emerald-200">
                    Sports Manager Active Override
                  </span>
                </div>
              </div>

              {(() => {
                const activeCalibration =
                  calibrationMatrix[`${selectedStage.number}_${selectedProfile.id}`] || {
                    intensity: "Custom adaptive load based on participant readiness.",
                    sportsSelection: "Curated multi-sport curriculum.",
                    sportsManagerAction: "Sports manager conducts baseline assessment and individualizes drills.",
                    expectedOutcome: "Steady athletic and physiological progression.",
                  };

                return (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">
                          Targeted Intensity &amp; Load Adjustment
                        </span>
                        <p className="text-xs sm:text-sm text-slate-900 font-medium mt-1">
                          {activeCalibration.intensity}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">
                          Curriculum &amp; Sports Selection
                        </span>
                        <p className="text-xs sm:text-sm text-slate-900 font-medium mt-1">
                          {activeCalibration.sportsSelection}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                        <span className="text-[10px] uppercase tracking-wider text-emerald-800 font-bold block">
                          Sports Manager On-Ground Action
                        </span>
                        <p className="text-xs sm:text-sm text-emerald-950 font-medium mt-1 leading-relaxed">
                          {activeCalibration.sportsManagerAction}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200/80">
                        <span className="text-[10px] uppercase tracking-wider text-sky-800 font-bold block">
                          Projected Milestone Outcome
                        </span>
                        <p className="text-xs sm:text-sm text-sky-950 font-bold mt-1">
                          {activeCalibration.expectedOutcome}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Evaluation Metrics Matrix for this combination */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Customized Evaluation Indicators Tracked for this Profile:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedStage.evaluationMetrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center"
                    >
                      <span className="text-[10px] text-slate-500 uppercase block font-bold">
                        Metric {mIdx + 1}
                      </span>
                      <span className="text-xs font-bold text-slate-900 mt-1 block">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-slate-200 text-center relative bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-[var(--font-heading)] text-slate-900 mb-4">
            Implement This Structured Pathway in Your Organisation
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-8">
            Partner with Lilhawkers to bring complete curriculum design, coach training, and adaptive physical evaluations to your school, club, or community.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              <span>Book a Free Demo Session</span>
            </Link>
            <Link
              href="/partners"
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-800 text-sm font-bold border border-slate-200 shadow-xs transition-colors"
            >
              Explore Partners &amp; Why Us →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
