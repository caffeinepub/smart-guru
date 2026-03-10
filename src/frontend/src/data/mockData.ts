export type Subject = {
  id: string;
  name: string;
  icon: string;
  color: string;
};

export type Chapter = {
  id: string;
  title: string;
  videoTitle: string;
  videoDescription: string;
  swadhyaya: { question: string; answer: string }[];
};

export type ClassData = {
  id: number;
  label: string;
  subjects: Subject[];
};

export type EntranceExam = {
  id: string;
  name: string;
  fullName: string;
  description: string;
  topics: string[];
  color: string;
  icon: string;
};

const baseSubjects: Subject[] = [
  {
    id: "maths",
    name: "Mathematics",
    icon: "📐",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "science",
    name: "Science",
    icon: "🔬",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "english",
    name: "English",
    icon: "📖",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "social",
    name: "Social Studies",
    icon: "🌍",
    color: "bg-orange-100 text-orange-700",
  },
  { id: "hindi", name: "Hindi", icon: "🇮🇳", color: "bg-red-100 text-red-700" },
];

const higherSubjects: Subject[] = [
  ...baseSubjects,
  {
    id: "sanskrit",
    name: "Sanskrit",
    icon: "🕉️",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: "computer",
    name: "Computer Science",
    icon: "💻",
    color: "bg-slate-100 text-slate-700",
  },
];

export const chaptersData: Record<string, Chapter[]> = {
  maths: [
    {
      id: "ch1",
      title: "Number Systems",
      videoTitle: "Understanding Number Systems",
      videoDescription:
        "Learn about natural numbers, whole numbers, integers, and rational numbers with real-world examples.",
      swadhyaya: [
        {
          question:
            "What is the difference between a rational and irrational number?",
          answer:
            "A rational number can be expressed as p/q where p and q are integers and q≠0. An irrational number cannot be expressed in this form. For example, √2 is irrational.",
        },
        {
          question: "Is every natural number a whole number?",
          answer:
            "Yes. Natural numbers are {1,2,3,...} and whole numbers are {0,1,2,3,...}. So every natural number is a whole number, but 0 is a whole number that is not a natural number.",
        },
        {
          question: "Express 0.333... as a fraction.",
          answer:
            "Let x = 0.333... Then 10x = 3.333... Subtracting: 9x = 3, so x = 1/3.",
        },
      ],
    },
    {
      id: "ch2",
      title: "Polynomials",
      videoTitle: "Introduction to Polynomials",
      videoDescription:
        "Understand polynomials, their degree, zeroes, and algebraic identities with practice problems.",
      swadhyaya: [
        {
          question: "What is the degree of the polynomial 3x³ + 2x² - x + 5?",
          answer:
            "The degree is 3, which is the highest power of the variable x.",
        },
        {
          question: "Find the zeroes of p(x) = x² - 5x + 6.",
          answer: "Factoring: (x-2)(x-3) = 0, so zeroes are x = 2 and x = 3.",
        },
        {
          question: "State the Remainder Theorem.",
          answer:
            "If a polynomial p(x) is divided by (x - a), the remainder is p(a).",
        },
      ],
    },
    {
      id: "ch3",
      title: "Coordinate Geometry",
      videoTitle: "Coordinate Geometry Basics",
      videoDescription:
        "Explore the Cartesian plane, plotting points, and the distance formula.",
      swadhyaya: [
        {
          question: "What are the coordinates of the origin?",
          answer: "The origin has coordinates (0, 0).",
        },
        {
          question: "Find the distance between (3, 4) and (0, 0).",
          answer: "Distance = √(3² + 4²) = √(9+16) = √25 = 5 units.",
        },
        {
          question: "In which quadrant does the point (-3, 5) lie?",
          answer:
            "The point (-3, 5) lies in the second quadrant (negative x, positive y).",
        },
      ],
    },
    {
      id: "ch4",
      title: "Linear Equations",
      videoTitle: "Solving Linear Equations in Two Variables",
      videoDescription:
        "Learn to solve systems of linear equations using substitution and elimination methods.",
      swadhyaya: [
        {
          question: "Solve: 2x + 3y = 12 and x - y = 1.",
          answer:
            "From the second equation: x = y+1. Substituting: 2(y+1)+3y=12 → 5y=10 → y=2, x=3.",
        },
        {
          question:
            "What is the graphical representation of a linear equation?",
          answer:
            "A linear equation in two variables represents a straight line on the coordinate plane.",
        },
        {
          question:
            "How many solutions does a consistent system of two linear equations have?",
          answer:
            "A consistent system has either exactly one solution (intersecting lines) or infinitely many solutions (coincident lines).",
        },
      ],
    },
    {
      id: "ch5",
      title: "Triangles",
      videoTitle: "Properties and Theorems of Triangles",
      videoDescription:
        "Study similarity, congruence, and important theorems like Pythagoras and Basic Proportionality Theorem.",
      swadhyaya: [
        {
          question: "State the Pythagoras Theorem.",
          answer:
            "In a right-angled triangle, the square of the hypotenuse equals the sum of squares of the other two sides: c² = a² + b².",
        },
        {
          question: "What are the criteria for similarity of triangles?",
          answer:
            "AA (Angle-Angle), SSS (Side-Side-Side), and SAS (Side-Angle-Side) are the similarity criteria.",
        },
        {
          question: "If two triangles are congruent, are they similar too?",
          answer:
            "Yes, congruent triangles are always similar (with ratio 1:1), but similar triangles may not be congruent.",
        },
      ],
    },
  ],
  science: [
    {
      id: "ch1",
      title: "Matter in Our Surroundings",
      videoTitle: "States of Matter",
      videoDescription:
        "Explore the three states of matter — solid, liquid, and gas — and the changes between them.",
      swadhyaya: [
        {
          question:
            "What is the process of conversion of a solid directly into gas called?",
          answer:
            "Sublimation. For example, dry ice (solid CO₂) sublimes directly into gas.",
        },
        {
          question: "Why do gases fill the entire container?",
          answer:
            "Gas particles have very high kinetic energy and negligible intermolecular forces, so they move freely and fill any container.",
        },
        {
          question:
            "What happens to the kinetic energy of particles when matter is heated?",
          answer:
            "Kinetic energy increases when matter is heated, causing particles to move faster.",
        },
      ],
    },
    {
      id: "ch2",
      title: "Is Matter Around Us Pure?",
      videoTitle: "Mixtures and Pure Substances",
      videoDescription:
        "Learn about elements, compounds, and mixtures, and methods of separation.",
      swadhyaya: [
        {
          question: "What is the difference between a mixture and a compound?",
          answer:
            "A mixture contains substances combined in any proportion without chemical bonding. A compound is formed by chemical combination of elements in a fixed ratio.",
        },
        {
          question: "Name two methods to separate a mixture of salt and water.",
          answer:
            "Evaporation and distillation can be used to separate salt from water.",
        },
        {
          question: "Is air a pure substance or a mixture?",
          answer:
            "Air is a mixture, primarily of nitrogen (~78%), oxygen (~21%), and other gases.",
        },
      ],
    },
    {
      id: "ch3",
      title: "Atoms and Molecules",
      videoTitle: "Understanding Atoms and Molecules",
      videoDescription:
        "Discover Dalton's atomic theory, atomic masses, and how molecules form.",
      swadhyaya: [
        {
          question: "State Dalton's Atomic Theory.",
          answer:
            "All matter is made of indivisible atoms. Atoms of the same element are identical. Atoms combine in simple ratios to form compounds. Atoms cannot be created or destroyed.",
        },
        {
          question: "What is the molecular mass of water (H₂O)?",
          answer: "H = 1u × 2 = 2u, O = 16u. Molecular mass = 18u.",
        },
        {
          question: "Define Avogadro's number.",
          answer:
            "Avogadro's number is 6.022 × 10²³, the number of particles in one mole of any substance.",
        },
      ],
    },
    {
      id: "ch4",
      title: "Structure of the Atom",
      videoTitle: "Atomic Structure - Protons, Neutrons, and Electrons",
      videoDescription:
        "Understand the structure of the atom with Bohr's model and electron configurations.",
      swadhyaya: [
        {
          question: "What are isotopes?",
          answer:
            "Isotopes are atoms of the same element with the same atomic number but different mass numbers (different neutrons). E.g., Carbon-12 and Carbon-14.",
        },
        {
          question: "State Bohr's postulates for atomic model.",
          answer:
            "Electrons revolve in fixed circular orbits. Each orbit has a fixed energy. Electrons emit/absorb energy only when jumping between orbits.",
        },
        {
          question:
            "What is the maximum number of electrons in the third shell?",
          answer:
            "The maximum electrons in the nth shell = 2n². For n=3: 2×9 = 18 electrons.",
        },
      ],
    },
    {
      id: "ch5",
      title: "Cell — The Basic Unit of Life",
      videoTitle: "Cell Structure and Functions",
      videoDescription:
        "Explore prokaryotic and eukaryotic cells, organelles, and their functions.",
      swadhyaya: [
        {
          question:
            "What is the difference between a prokaryotic and eukaryotic cell?",
          answer:
            "Prokaryotic cells lack a defined nucleus and membrane-bound organelles (e.g., bacteria). Eukaryotic cells have a nucleus and membrane-bound organelles (e.g., plant, animal cells).",
        },
        {
          question: "Name the powerhouse of the cell.",
          answer:
            "Mitochondria is called the powerhouse of the cell because it produces ATP energy through cellular respiration.",
        },
        {
          question: "What is the function of the cell membrane?",
          answer:
            "The cell membrane controls the movement of substances in and out of the cell, maintaining the internal environment.",
        },
      ],
    },
  ],
  english: [
    {
      id: "ch1",
      title: "The Fun They Had",
      videoTitle: "The Fun They Had - Story Analysis",
      videoDescription:
        "Explore this futuristic story by Isaac Asimov about children discovering an old printed book.",
      swadhyaya: [
        {
          question: "What did Margie and Tommy find?",
          answer:
            "They found a real old book with actual paper pages and printed words.",
        },
        {
          question: "What was Margie's problem with her mechanical teacher?",
          answer:
            "Her mechanical teacher was giving her test after test in geography and she was doing poorly.",
        },
        {
          question:
            "What does the story suggest about the future of education?",
          answer:
            "The story suggests a future with personalized mechanical teachers at home, replacing traditional schools — which children would ironically miss.",
        },
      ],
    },
    {
      id: "ch2",
      title: "The Sound of Music",
      videoTitle: "The Sound of Music - Biography of Evelyn Glennie",
      videoDescription:
        "Learn about Evelyn Glennie, a deaf musician, and how she rose to be a percussionist.",
      swadhyaya: [
        {
          question: "How did Evelyn Glennie lose her hearing?",
          answer:
            "Evelyn gradually lost her hearing from the age of 8 due to gradual nerve damage.",
        },
        {
          question: "How does Evelyn hear music?",
          answer:
            "Evelyn feels music through vibrations in different parts of her body.",
        },
        {
          question: "What lesson does Evelyn's life teach us?",
          answer:
            "Determination and passion can overcome physical challenges. She became a world-famous percussionist despite being deaf.",
        },
      ],
    },
    {
      id: "ch3",
      title: "The Little Girl",
      videoTitle: "The Little Girl - Understanding Fear and Love",
      videoDescription:
        "A story about Kezia who is afraid of her father and gradually understands his love.",
      swadhyaya: [
        {
          question: "Why was Kezia afraid of her father?",
          answer:
            "Her father was strict, had a loud voice, and seemed harsh to her. She had little interaction with him and saw him as a figure of authority.",
        },
        {
          question: "What changed Kezia's perception of her father?",
          answer:
            "When she had a nightmare, her father came and comforted her, showing her his warmth and love.",
        },
        {
          question: "What does the story convey?",
          answer:
            "Parents' strict behavior often hides deep love and care. Children should try to understand their parents.",
        },
      ],
    },
    {
      id: "ch4",
      title: "A Truly Beautiful Mind",
      videoTitle: "Albert Einstein - A Truly Beautiful Mind",
      videoDescription:
        "Discover the life and genius of Albert Einstein, from his childhood to his world-changing discoveries.",
      swadhyaya: [
        {
          question: "Why was Einstein considered 'dull' as a child?",
          answer:
            "Einstein started speaking late and was shy and introversive, which led some teachers to consider him dull.",
        },
        {
          question: "What was the Special Theory of Relativity?",
          answer:
            "Einstein proposed that the laws of physics are the same for all non-accelerating observers, and the speed of light is constant. This led to E = mc².",
        },
        {
          question: "How did Einstein contribute to world peace?",
          answer:
            "Einstein signed a letter warning about nuclear weapons and advocated for peace and international cooperation throughout his life.",
        },
      ],
    },
    {
      id: "ch5",
      title: "The Snake and the Mirror",
      videoTitle: "The Snake and the Mirror - Humour in Horror",
      videoDescription:
        "A hilarious story of a doctor's encounter with a snake and his brush with death.",
      swadhyaya: [
        {
          question: "Who is the narrator of the story?",
          answer:
            "The narrator is a homeopathic doctor who recounts a frightening experience with a snake.",
        },
        {
          question: "What was the doctor's vanity?",
          answer:
            "The doctor was vain about his looks. He planned to grow a thin moustache and admired himself in the mirror.",
        },
        {
          question: "How did the doctor manage to escape the snake?",
          answer:
            "The snake left the doctor on its own, distracted by its own reflection in the mirror.",
        },
      ],
    },
  ],
  social: [
    {
      id: "ch1",
      title: "The French Revolution",
      videoTitle: "The French Revolution - Causes and Impact",
      videoDescription:
        "Understand the causes, events, and global impact of the French Revolution of 1789.",
      swadhyaya: [
        {
          question: "What were the main causes of the French Revolution?",
          answer:
            "Financial crisis, social inequality (Three Estates system), weak leadership of Louis XVI, Enlightenment ideas, and food shortages were key causes.",
        },
        {
          question:
            "What was the significance of the Declaration of Rights of Man?",
          answer:
            "It proclaimed liberty, equality, and fraternity as fundamental rights of all citizens, influencing democratic movements worldwide.",
        },
        {
          question: "Who were the Jacobins?",
          answer:
            "The Jacobins were a radical political club led by Robespierre that initiated the Reign of Terror, executing thousands they considered enemies of the revolution.",
        },
      ],
    },
    {
      id: "ch2",
      title: "Socialism in Europe and the Russian Revolution",
      videoTitle: "The Russian Revolution of 1917",
      videoDescription:
        "Explore the rise of socialism, Karl Marx's ideas, and the 1917 Bolshevik Revolution.",
      swadhyaya: [
        {
          question: "What were Karl Marx's main ideas?",
          answer:
            "Marx believed history is driven by class struggle. Workers (proletariat) were exploited by the capitalist class (bourgeoisie). He called for workers to overthrow capitalism and establish a classless society.",
        },
        {
          question: "Who led the Bolshevik Revolution?",
          answer:
            "Vladimir Lenin led the Bolshevik party and the October Revolution of 1917.",
        },
        {
          question: "What was the significance of the Russian Revolution?",
          answer:
            "It resulted in the world's first communist state (USSR), inspired socialist movements globally, and shaped 20th-century geopolitics.",
        },
      ],
    },
    {
      id: "ch3",
      title: "Nazism and the Rise of Hitler",
      videoTitle: "Rise of Hitler and Nazi Germany",
      videoDescription:
        "Examine how Adolf Hitler rose to power in Germany and the horrors of the Nazi regime.",
      swadhyaya: [
        {
          question: "What conditions led to Hitler's rise?",
          answer:
            "Germany's humiliation by the Treaty of Versailles, severe economic depression, high unemployment, and weak Weimar Republic created conditions for Hitler's rise.",
        },
        {
          question: "What was the Holocaust?",
          answer:
            "The Holocaust was the systematic genocide of six million Jews and millions of others (Roma, disabled, political opponents) by the Nazi regime.",
        },
        {
          question: "What was Hitler's foreign policy?",
          answer:
            "Hitler pursued aggressive expansion (Lebensraum - living space), remilitarization, annexation of Austria and Czechoslovakia, ultimately triggering World War II.",
        },
      ],
    },
    {
      id: "ch4",
      title: "Forest Society and Colonialism",
      videoTitle: "How Colonialism Changed Forests",
      videoDescription:
        "Study how British colonialism transformed forest societies and impacted indigenous communities.",
      swadhyaya: [
        {
          question: "Why did the British cut forests in India?",
          answer:
            "The British needed timber for railways, ships, and commercial agriculture. They also wanted to expand cultivation for revenue.",
        },
        {
          question: "What was the Baba Ramchandra movement?",
          answer:
            "Baba Ramchandra led a peasant movement in Awadh against colonial land policies and high rents in the early 20th century.",
        },
        {
          question: "How did forest communities resist colonial rule?",
          answer:
            "They organized revolts (like the Bastar uprising 1910), maintained traditional practices, and resisted government forest laws.",
        },
      ],
    },
    {
      id: "ch5",
      title: "Drainage System of India",
      videoTitle: "Rivers and Drainage Patterns of India",
      videoDescription:
        "Learn about the major rivers, drainage systems, and water bodies of India.",
      swadhyaya: [
        {
          question: "What is a drainage basin?",
          answer:
            "A drainage basin is an area drained by a river and its tributaries. For example, the Ganga basin covers the states of UP, Bihar, and West Bengal.",
        },
        {
          question: "Name the peninsular rivers that flow westward.",
          answer:
            "The Narmada and Tapi (Tapti) are the major peninsular rivers that flow westward into the Arabian Sea.",
        },
        {
          question: "What is the significance of the Ganga River?",
          answer:
            "The Ganga is the most sacred river in India. It supports agriculture, provides water to millions, and has immense cultural and religious significance.",
        },
      ],
    },
  ],
  hindi: [
    {
      id: "ch1",
      title: "दो बैलों की कथा",
      videoTitle: "दो बैलों की कथा - प्रेमचंद",
      videoDescription:
        "प्रेमचंद की यह कहानी दो बैलों हीरा और मोती के माध्यम से स्वतंत्रता और दोस्ती का संदेश देती है।",
      swadhyaya: [
        {
          question: "हीरा और मोती कौन थे?",
          answer: "हीरा और मोती किसान झूरी के दो बैल थे जो एक-दूसरे के गहरे दोस्त थे।",
        },
        {
          question: "गया बैलों के साथ कैसा व्यवहार करता था?",
          answer:
            "गया बैलों को खाना नहीं देता था और उनके साथ क्रूरता का व्यवहार करता था।",
        },
        {
          question: "इस कहानी का मुख्य संदेश क्या है?",
          answer:
            "यह कहानी स्वतंत्रता के प्रति प्रेम, सच्ची मित्रता, और अन्याय के विरुद्ध संघर्ष का संदेश देती है।",
        },
      ],
    },
    {
      id: "ch2",
      title: "ल्हासा की ओर",
      videoTitle: "ल्हासा की ओर - यात्रा वृत्तांत",
      videoDescription: "राहुल सांकृत्यायन की तिब्बत यात्रा का रोचक वर्णन।",
      swadhyaya: [
        {
          question: "लेखक तिब्बत किस वेश में गए?",
          answer: "लेखक ने एक भिखारी बौद्ध भिक्षु का वेश धारण किया।",
        },
        {
          question: "तिब्बत की सड़कों की क्या विशेषता थी?",
          answer: "तिब्बत में कोई पक्की सड़क नहीं थी और यात्रा पहाड़ी रास्तों से होती थी।",
        },
        {
          question: "इस यात्रा वृत्तांत से हमें क्या सीख मिलती है?",
          answer: "साहस, जिज्ञासा और अनुभव से जीवन समृद्ध होता है।",
        },
      ],
    },
    {
      id: "ch3",
      title: "उपभोक्तावाद की संस्कृति",
      videoTitle: "उपभोक्तावाद की संस्कृति - निबंध",
      videoDescription:
        "श्यामाचरण दुबे का यह निबंध आधुनिक उपभोक्तावादी संस्कृति पर विचार करता है।",
      swadhyaya: [
        {
          question: "उपभोक्तावाद क्या है?",
          answer:
            "उपभोक्तावाद एक ऐसी संस्कृति है जिसमें अधिक से अधिक वस्तुओं को खरीदना और उपभोग करना जीवन का लक्ष्य बन जाता है।",
        },
        {
          question: "विज्ञापन का उपभोक्तावाद में क्या योगदान है?",
          answer:
            "विज्ञापन कृत्रिम जरूरतें पैदा करते हैं और लोगों को अनावश्यक वस्तुएं खरीदने के लिए प्रेरित करते हैं।",
        },
        {
          question: "लेखक ने पश्चिमी संस्कृति के बारे में क्या कहा?",
          answer:
            "लेखक का मानना है कि पश्चिमी उपभोक्तावाद भारतीय परंपरागत मूल्यों को नष्ट कर रहा है।",
        },
      ],
    },
    {
      id: "ch4",
      title: "सांवले सपनों की याद",
      videoTitle: "सालिम अली की कहानी",
      videoDescription: "प्रसिद्ध पक्षी विशेषज्ञ सालिम अली के जीवन पर आधारित संस्मरण।",
      swadhyaya: [
        {
          question: "सालिम अली कौन थे?",
          answer:
            "सालिम अली भारत के प्रसिद्ध पक्षी विशेषज्ञ (Ornithologist) थे जिन्होंने पक्षियों पर व्यापक शोध किया।",
        },
        {
          question: "उनकी प्रकृति प्रेम की विशेषता क्या थी?",
          answer:
            "वे प्रकृति में पूरी तरह समा जाते थे। उन्हें पक्षियों की हर हलचल में रुचि थी।",
        },
        {
          question: "लेखक ने सालिम अली की तुलना किससे की?",
          answer:
            "लेखक ने सालिम अली की तुलना मृत्यु के आने पर भी काम में लगे रहने वाले संत से की।",
        },
      ],
    },
    {
      id: "ch5",
      title: "प्रेमचंद के फटे जूते",
      videoTitle: "प्रेमचंद के फटे जूते - व्यंग्य",
      videoDescription:
        "हरिशंकर परसाई का यह व्यंग्य साहित्यकार की सामाजिक स्थिति पर करारा कटाक्ष करता है।",
      swadhyaya: [
        {
          question: "फटे जूते किसके प्रतीक हैं?",
          answer:
            "फटे जूते ईमानदार साहित्यकार की आर्थिक तंगी और सामाजिक उपेक्षा के प्रतीक हैं।",
        },
        {
          question: "व्यंग्य किस बात पर है?",
          answer:
            "व्यंग्य उस समाज पर है जो साहित्यकारों का सम्मान तो करता है पर उनकी आर्थिक स्थिति सुधारने की जिम्मेदारी नहीं लेता।",
        },
        {
          question: "प्रेमचंद का व्यक्तित्व कैसा था?",
          answer:
            "प्रेमचंद सादगीपसंद, ईमानदार और समाजसेवी थे। उन्होंने कभी अपने सिद्धांतों से समझौता नहीं किया।",
        },
      ],
    },
  ],
  sanskrit: [
    {
      id: "ch1",
      title: "सुभाषितानि",
      videoTitle: "संस्कृत सुभाषित - नीतिपरक श्लोक",
      videoDescription: "जीवन के लिए उपयोगी नीतिपरक श्लोकों का अर्थ और व्याख्या सीखें।",
      swadhyaya: [
        {
          question: "विद्या का सबसे बड़ा गुण क्या है?",
          answer:
            "विद्या सभी धनों में सर्वश्रेष्ठ है क्योंकि इसे न चुराया जा सकता है और न बाँटने से घटती है।",
        },
        {
          question: "सज्जन पुरुष की क्या विशेषता है?",
          answer:
            "सज्जन पुरुष दूसरों के दुख से दुखी होता है और दूसरों की खुशी से प्रसन्न होता है।",
        },
        {
          question: "श्रम का क्या महत्व बताया गया है?",
          answer:
            "श्रम ही सफलता की कुंजी है। बिना परिश्रम के कोई भी लक्ष्य प्राप्त नहीं होता।",
        },
      ],
    },
    {
      id: "ch2",
      title: "शुक-शावकस्य वार्ता",
      videoTitle: "तोते के बच्चे की कहानी",
      videoDescription: "एक रोचक संस्कृत कहानी जो प्रेम और करुणा का संदेश देती है।",
      swadhyaya: [
        {
          question: "कहानी का मुख्य पात्र कौन है?",
          answer: "कहानी का मुख्य पात्र एक छोटा तोते का बच्चा है।",
        },
        {
          question: "कहानी का संदेश क्या है?",
          answer: "करुणा और दया सभी प्राणियों के प्रति दिखानी चाहिए।",
        },
        {
          question: "कहानी में प्रकृति का क्या महत्व दिखाया गया है?",
          answer:
            "प्रकृति में सभी प्राणी एक-दूसरे पर निर्भर हैं और हमें उनकी रक्षा करनी चाहिए।",
        },
      ],
    },
    {
      id: "ch3",
      title: "व्याकरण - संज्ञा और सर्वनाम",
      videoTitle: "संस्कृत व्याकरण - संज्ञा",
      videoDescription: "संस्कृत में संज्ञा और सर्वनाम के प्रकार और उनका प्रयोग सीखें।",
      swadhyaya: [
        {
          question: "संज्ञा किसे कहते हैं?",
          answer: "किसी व्यक्ति, स्थान, वस्तु या भाव के नाम को संज्ञा कहते हैं।",
        },
        {
          question: "संस्कृत में विभक्तियाँ कितनी होती हैं?",
          answer: "संस्कृत में आठ विभक्तियाँ (कारक) होती हैं।",
        },
        {
          question: "तत् शब्द का प्रथमा बहुवचन क्या है?",
          answer: "ते (पुल्लिंग), ताः (स्त्रीलिंग), तानि (नपुंसकलिंग)।",
        },
      ],
    },
    {
      id: "ch4",
      title: "कालिदास - अभिज्ञानशाकुन्तलम्",
      videoTitle: "कालिदास और शकुन्तला",
      videoDescription:
        "महाकवि कालिदास के प्रसिद्ध नाटक अभिज्ञानशाकुन्तलम् का परिचय और मुख्य अंश।",
      swadhyaya: [
        {
          question: "कालिदास का समय कब माना जाता है?",
          answer: "कालिदास का समय लगभग चौथी-पाँचवीं शताब्दी ईसवी माना जाता है।",
        },
        {
          question: "शकुन्तला नाटक की मुख्य कथा क्या है?",
          answer:
            "राजा दुष्यन्त और शकुन्तला के प्रेम, विवाह, विस्मरण और पुनर्मिलन की कहानी।",
        },
        {
          question: "कालिदास की भाषाशैली की विशेषता क्या है?",
          answer: "कालिदास की भाषा सरल, मधुर और प्रकृति चित्रण में अनुपम है।",
        },
      ],
    },
    {
      id: "ch5",
      title: "संस्कृत में पत्र लेखन",
      videoTitle: "संस्कृत में पत्र कैसे लिखें",
      videoDescription: "औपचारिक और अनौपचारिक पत्रों का संस्कृत में लेखन सीखें।",
      swadhyaya: [
        {
          question: "संस्कृत पत्र की शुरुआत कैसे होती है?",
          answer: "'श्री [नाम] महोदयः/महोदया' से औपचारिक पत्र शुरू होता है।",
        },
        {
          question: "मित्र को पत्र में सम्बोधन कैसे करते हैं?",
          answer: "मित्र को 'प्रिय मित्र' या 'चिरंजीव' से सम्बोधित किया जाता है।",
        },
        {
          question: "पत्र का समापन कैसे होता है?",
          answer: "'तव/भवदीयः' और अपना नाम लिखकर पत्र समाप्त किया जाता है।",
        },
      ],
    },
  ],
  computer: [
    {
      id: "ch1",
      title: "Introduction to Computers",
      videoTitle: "What is a Computer? - History and Evolution",
      videoDescription:
        "Learn about the history of computers from Abacus to modern computers, and understand the basic components.",
      swadhyaya: [
        {
          question: "What are the four basic functions of a computer?",
          answer:
            "Input, Processing, Output, and Storage are the four basic functions of a computer.",
        },
        {
          question: "What is the difference between hardware and software?",
          answer:
            "Hardware refers to the physical components (keyboard, monitor, CPU). Software refers to programs and instructions that run on hardware.",
        },
        {
          question: "What is RAM and ROM?",
          answer:
            "RAM (Random Access Memory) is volatile temporary memory. ROM (Read Only Memory) is non-volatile permanent memory containing boot instructions.",
        },
      ],
    },
    {
      id: "ch2",
      title: "Introduction to Python",
      videoTitle: "Python Programming - Getting Started",
      videoDescription:
        "Begin your programming journey with Python — variables, data types, and your first program.",
      swadhyaya: [
        {
          question: "What is a variable in Python?",
          answer:
            "A variable is a named container to store data. In Python, you don't need to declare a type: x = 5 or name = 'Alice'.",
        },
        {
          question: "What are Python's basic data types?",
          answer:
            "int (integers), float (decimals), str (strings), bool (True/False), and list/tuple/dict (collections).",
        },
        {
          question: "Write a Python program to print 'Hello, World!'.",
          answer: "print('Hello, World!')",
        },
      ],
    },
    {
      id: "ch3",
      title: "Database Management",
      videoTitle: "Introduction to DBMS and SQL",
      videoDescription:
        "Understand relational databases, tables, and basic SQL queries.",
      swadhyaya: [
        {
          question: "What is a DBMS?",
          answer:
            "A Database Management System (DBMS) is software that manages and organizes data in a structured way, allowing efficient retrieval and manipulation.",
        },
        {
          question: "What is the difference between DDL and DML?",
          answer:
            "DDL (Data Definition Language) defines structure: CREATE, DROP, ALTER. DML (Data Manipulation Language) manipulates data: SELECT, INSERT, UPDATE, DELETE.",
        },
        {
          question:
            "Write a SQL query to select all records from a table 'students'.",
          answer: "SELECT * FROM students;",
        },
      ],
    },
    {
      id: "ch4",
      title: "Networking Basics",
      videoTitle: "Computer Networks - Types and Protocols",
      videoDescription:
        "Learn about LAN, WAN, the Internet, IP addresses, and networking protocols.",
      swadhyaya: [
        {
          question: "What is the difference between LAN and WAN?",
          answer:
            "LAN (Local Area Network) connects devices in a small area (home, office). WAN (Wide Area Network) connects devices over large geographic distances (the Internet is a WAN).",
        },
        {
          question: "What is an IP address?",
          answer:
            "An IP (Internet Protocol) address is a unique numerical label assigned to each device on a network, used for identification and location addressing.",
        },
        {
          question: "What is the TCP/IP model?",
          answer:
            "TCP/IP is a set of protocols for internet communication. It has 4 layers: Application, Transport, Internet, and Network Access.",
        },
      ],
    },
    {
      id: "ch5",
      title: "Cybersecurity Fundamentals",
      videoTitle: "Staying Safe Online - Cybersecurity Basics",
      videoDescription:
        "Understand common cyber threats, safe practices, and how to protect your digital life.",
      swadhyaya: [
        {
          question: "What is phishing?",
          answer:
            "Phishing is a cyber attack where fraudulent emails or websites trick users into revealing sensitive information like passwords or credit card numbers.",
        },
        {
          question: "What is a firewall?",
          answer:
            "A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on security rules.",
        },
        {
          question: "What makes a strong password?",
          answer:
            "A strong password should be at least 12 characters, include uppercase/lowercase letters, numbers, and special characters, and should not contain personal information.",
        },
      ],
    },
  ],
};

export const getSubjectsForClass = (classId: number): Subject[] => {
  if (classId >= 8) return higherSubjects;
  return baseSubjects;
};

export const getChaptersForSubject = (subjectId: string): Chapter[] => {
  return chaptersData[subjectId] || chaptersData.maths;
};

export const classes: ClassData[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  label: `Class ${i + 1}`,
  subjects: i + 1 >= 8 ? higherSubjects : baseSubjects,
}));

export const entranceExams: EntranceExam[] = [
  {
    id: "jee",
    name: "JEE",
    fullName: "Joint Entrance Examination",
    description:
      "Gateway to IITs, NITs, and top engineering colleges. Tests Physics, Chemistry, and Mathematics.",
    color: "from-blue-500 to-blue-700",
    icon: "⚙️",
    topics: [
      "Physics: Mechanics & Kinematics",
      "Physics: Electromagnetism",
      "Physics: Optics & Modern Physics",
      "Chemistry: Organic Chemistry",
      "Chemistry: Inorganic Chemistry",
      "Chemistry: Physical Chemistry",
      "Mathematics: Calculus & Integration",
      "Mathematics: Coordinate Geometry",
      "Mathematics: Algebra & Trigonometry",
      "Previous Year Papers & Mock Tests",
    ],
  },
  {
    id: "neet",
    name: "NEET",
    fullName: "National Eligibility cum Entrance Test",
    description:
      "Mandatory entrance exam for MBBS, BDS, and other medical courses in India.",
    color: "from-green-500 to-green-700",
    icon: "🏥",
    topics: [
      "Biology: Cell Biology & Genetics",
      "Biology: Human Physiology",
      "Biology: Plant Kingdom",
      "Biology: Ecology & Environment",
      "Chemistry: Biomolecules",
      "Chemistry: Organic Reactions",
      "Physics: Mechanics for Biology Students",
      "Physics: Modern Physics",
      "NCERT-Based Revision",
      "Mock Tests & Previous Papers",
    ],
  },
  {
    id: "upsc",
    name: "UPSC",
    fullName: "Union Public Service Commission",
    description:
      "India's most prestigious exam for IAS, IPS, IFS, and other civil services.",
    color: "from-amber-500 to-amber-700",
    icon: "🏛️",
    topics: [
      "Indian History: Ancient & Medieval",
      "Indian History: Modern & Freedom Struggle",
      "Indian Polity & Constitution",
      "Indian Economy & Budget",
      "Geography: Physical & Human",
      "Environment & Ecology",
      "Science & Technology",
      "Current Affairs & International Relations",
      "Ethics, Integrity & Aptitude",
      "Essay Writing & Interview Prep",
    ],
  },
  {
    id: "ssc",
    name: "SSC",
    fullName: "Staff Selection Commission",
    description:
      "Recruitment exam for various central government posts including CGL, CHSL, and MTS.",
    color: "from-purple-500 to-purple-700",
    icon: "📋",
    topics: [
      "Quantitative Aptitude",
      "General Intelligence & Reasoning",
      "English Language & Comprehension",
      "General Knowledge & Awareness",
      "Data Interpretation",
      "Computer Awareness",
      "Current Events",
      "Speed & Accuracy Practice",
      "SSC CGL Tier I & II Strategy",
      "Mock Tests & Answer Analysis",
    ],
  },
  {
    id: "cat",
    name: "CAT",
    fullName: "Common Admission Test",
    description:
      "Premier management entrance exam for admission to IIMs and top B-schools in India.",
    color: "from-rose-500 to-rose-700",
    icon: "📊",
    topics: [
      "Verbal Ability & Reading Comprehension",
      "Para Jumbles & Para Summary",
      "Logical Reasoning",
      "Data Interpretation",
      "Quantitative Ability: Arithmetic",
      "Quantitative Ability: Geometry & Algebra",
      "Number Systems & Modern Math",
      "Data Sufficiency",
      "IIM Interview Preparation",
      "Full-Length CAT Mock Tests",
    ],
  },
];
