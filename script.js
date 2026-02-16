// Quiz Data
const quizData = {
    mathematics: {
        easy: [
            { q: "What is 7 + 5?", opts: ["10", "11", "12", "13"], ans: 2 },
            { q: "Which of these is a negative integer?", opts: ["5", "-3", "0", "2"], ans: 1 },
            { q: "What is 1/2 as a decimal?", opts: ["0.2", "0.25", "0.5", "0.75"], ans: 2 },
            { q: "Solve: 3 × 4", opts: ["7", "12", "9", "14"], ans: 1 },
            { q: "What is the perimeter of a square with side 5 cm?", opts: ["10 cm", "15 cm", "20 cm", "25 cm"], ans: 2 },
            { q: "How many degrees are in a right angle?", opts: ["45°", "90°", "180°", "360°"], ans: 1 },
            { q: "What is the area of a rectangle with length 6 and width 4?", opts: ["10", "20", "24", "26"], ans: 2 },
            { q: "What is 25% of 100?", opts: ["20", "25", "50", "75"], ans: 1 },
            { q: "Which number is a prime number?", opts: ["4", "6", "9", "7"], ans: 3 },
            { q: "What is the next number in the pattern: 2, 4, 6, ?", opts: ["7", "8", "10", "12"], ans: 1 },
            { q: "What is the mean of 2, 4, 6?", opts: ["3", "4", "5", "6"], ans: 1 },
            { q: "Solve: x + 3 = 7", opts: ["2", "3", "4", "5"], ans: 2 },
            { q: "What is 0.1 + 0.2?", opts: ["0.2", "0.3", "0.4", "0.5"], ans: 1 },
            { q: "How many sides does a triangle have?", opts: ["2", "3", "4", "5"], ans: 1 },
            { q: "What is the probability of getting heads when flipping a fair coin?", opts: ["0", "1/4", "1/2", "1"], ans: 2 },
            { q: "What is 9 squared?", opts: ["18", "27", "81", "72"], ans: 2 },
            { q: "Which coordinate represents the origin?", opts: ["(1,0)", "(0,1)", "(0,0)", "(1,1)"], ans: 2 },
            { q: "What is 3/4 as a percentage?", opts: ["50%", "75%", "25%", "100%"], ans: 1 },
            { q: "Simplify: 10 ÷ 2", opts: ["2", "3", "5", "8"], ans: 2 },
            { q: "How many faces does a cube have?", opts: ["4", "6", "8", "12"], ans: 1 }
        ],
        medium: [
            { q: "Solve: 2x = 14", opts: ["5", "6", "7", "8"], ans: 2 },
            { q: "What is the area of a circle with radius 7? (Use π = 22/7)", opts: ["144", "154", "164", "174"], ans: 1 },
            { q: "Simplify: 3/5 + 2/5", opts: ["1", "5/10", "6/10", "5/5"], ans: 3 },
            { q: "What is the volume of a cube with side 4 cm?", opts: ["16", "32", "64", "48"], ans: 2 },
            { q: "If sin 30° = ?", opts: ["1", "1/2", "√3/2", "0"], ans: 1 },
            { q: "Find the median of 3, 7, 9, 11, 15", opts: ["7", "9", "11", "10"], ans: 1 },
            { q: "Solve: 5x - 5 = 20", opts: ["4", "5", "6", "7"], ans: 1 },
            { q: "What is 15% of 200?", opts: ["25", "30", "35", "40"], ans: 1 },
            { q: "What is the slope of a horizontal line?", opts: ["0", "1", "Undefined", "-1"], ans: 0 },
            { q: "Find the perimeter of a circle with diameter 14 (π=22/7)", opts: ["22", "44", "88", "66"], ans: 1 },
            { q: "Solve inequality: x - 4 > 6", opts: ["x > 10", "x < 10", "x = 10", "x ≥ 10"], ans: 0 },
            { q: "What is the next term: 3, 9, 27, ?", opts: ["54", "72", "81", "90"], ans: 2 },
            { q: "If a die is rolled, what is the probability of getting 4?", opts: ["1/4", "1/3", "1/6", "1/2"], ans: 2 },
            { q: "Simplify: (x + 2)(x + 3)", opts: ["x² + 5x + 6", "x² + 6x + 5", "x² + 5x + 5", "x² + 6x + 6"], ans: 0 },
            { q: "What is the sum of interior angles of a triangle?", opts: ["90°", "180°", "270°", "360°"], ans: 1 },
            { q: "Convert 0.75 to fraction", opts: ["1/2", "2/3", "3/4", "4/5"], ans: 2 },
            { q: "Find the mean of 10, 20, 30, 40", opts: ["20", "25", "30", "35"], ans: 1 },
            { q: "Distance between (0,0) and (3,4)?", opts: ["5", "6", "7", "4"], ans: 0 },
            { q: "What is tan 45°?", opts: ["0", "1", "√3", "1/2"], ans: 1 },
            { q: "If 5 pens cost $10, what is cost of 1 pen?", opts: ["$1", "$2", "$3", "$4"], ans: 1 }
        ],
        hard: [
            { q: "Solve: 2x² - 8 = 0", opts: ["±2", "±4", "2", "4"], ans: 0 },
            { q: "What is the derivative of x²?", opts: ["x", "2x", "x²", "2"], ans: 1 },
            { q: "Find the volume of a cylinder with radius 3 and height 7 (π=22/7)", opts: ["198", "207", "189", "216"], ans: 0 },
            { q: "If cos θ = 1/2, θ equals?", opts: ["30°", "45°", "60°", "90°"], ans: 2 },
            { q: "Solve: log₁₀ 1000", opts: ["2", "3", "4", "10"], ans: 1 },
            { q: "What is the sum of first 10 natural numbers?", opts: ["45", "50", "55", "60"], ans: 2 },
            { q: "Equation of line with slope 2 and intercept 3?", opts: ["y=2x+3", "y=3x+2", "y=2x-3", "y=3x-2"], ans: 0 },
            { q: "Find standard deviation of 2,2,2,2", opts: ["0", "1", "2", "4"], ans: 0 },
            { q: "Area of sector with angle 90° and radius 14 (π=22/7)?", opts: ["154", "308", "616", "462"], ans: 0 },
            { q: "If A={1,2,3} and B={2,3,4}, A∩B equals?", opts: ["{1,4}", "{2,3}", "{1,2,3,4}", "{ }"], ans: 1 },
            { q: "Solve: 3x + 2y = 12 when x=2", opts: ["y=2", "y=3", "y=4", "y=5"], ans: 1 },
            { q: "Find nth term of sequence 2,5,8,11,...", opts: ["3n-1", "3n+2", "2n+1", "3n-2"], ans: 0 },
            { q: "Probability of getting two heads when tossing two coins?", opts: ["1/2", "1/3", "1/4", "1/8"], ans: 2 },
            { q: "What is 5! ?", opts: ["60", "100", "120", "720"], ans: 2 },
            { q: "Solve inequality: 2x + 3 ≤ 7", opts: ["x ≤ 2", "x ≥ 2", "x < 2", "x > 2"], ans: 0 },
            { q: "Distance formula is based on which theorem?", opts: ["Pythagoras", "Euclid", "Newton", "Archimedes"], ans: 0 },
            { q: "Find roots of x² - 5x + 6", opts: ["2 and 3", "1 and 6", "-2 and -3", "3 and 6"], ans: 0 },
            { q: "Surface area of cube with side 5?", opts: ["100", "125", "150", "200"], ans: 2 },
            { q: "Mean of grouped data is calculated using?", opts: ["Midpoint", "Median", "Mode", "Range"], ans: 0 },
            { q: "If tan θ = √3, θ equals?", opts: ["30°", "45°", "60°", "90°"], ans: 2 }
        ]
    },
    english: {
        easy: [
            { q: "Choose the correct past tense of 'go'.", opts: ["goed", "went", "gone", "going"], ans: 1 },
            { q: "Which word is a noun?", opts: ["run", "happy", "school", "quickly"], ans: 2 },
            { q: "Select the correct plural form of 'child'.", opts: ["childs", "children", "childes", "childrens"], ans: 1 },
            { q: "Which word is a synonym of 'big'?", opts: ["tiny", "large", "short", "thin"], ans: 1 },
            { q: "Choose the correct sentence.", opts: ["She have a book.", "She has a book.", "She having a book.", "She hads a book."], ans: 1 },
            { q: "Which punctuation ends a question?", opts: [".", "!", ",", "?"], ans: 3 },
            { q: "Identify the adjective in the sentence: 'The red car is fast.'", opts: ["car", "red", "is", "fast"], ans: 1 },
            { q: "Which word is an antonym of 'happy'?", opts: ["sad", "glad", "joyful", "smile"], ans: 0 },
            { q: "Choose the correct homophone: 'I want to ___ to the market.'", opts: ["go", "no", "know", "now"], ans: 0 },
            { q: "What is the main idea of a paragraph?", opts: ["A small detail", "The title", "The central point", "The last sentence"], ans: 2 },
            { q: "Which sentence is in present continuous tense?", opts: ["She eats rice.", "She is eating rice.", "She ate rice.", "She will eat rice."], ans: 1 },
            { q: "Select the correct spelling.", opts: ["becouse", "because", "becaus", "becoze"], ans: 1 },
            { q: "Which word is a verb?", opts: ["dance", "blue", "table", "slow"], ans: 0 },
            { q: "Choose the correct capitalization.", opts: ["monday", "Monday", "mONday", "MONDAY"], ans: 1 },
            { q: "What is a sentence?", opts: ["A group of random words", "A single word", "A complete thought", "A question only"], ans: 2 },
            { q: "Which is an example of an idiom?", opts: ["Break the ice", "Cold water", "Hot sun", "Blue sky"], ans: 0 },
            { q: "Choose the correct article: '___ apple is red.'", opts: ["A", "An", "The", "No article"], ans: 1 },
            { q: "Which word shows action?", opts: ["jump", "red", "soft", "quiet"], ans: 0 },
            { q: "What is the opposite of 'before'?", opts: ["after", "during", "while", "since"], ans: 0 },
            { q: "Choose the correct sentence structure.", opts: ["Running fast the boy.", "The boy running fast.", "The boy is running fast.", "Boy the fast running."], ans: 2 }
        ],
        medium: [
            { q: "Identify the subject in: 'The teacher explained the lesson.'", opts: ["teacher", "explained", "lesson", "the"], ans: 0 },
            { q: "Choose the correct form: 'If I ___ rich, I would travel.'", opts: ["am", "was", "were", "be"], ans: 2 },
            { q: "Which word is a synonym of 'difficult'?", opts: ["easy", "hard", "simple", "clear"], ans: 1 },
            { q: "Select the correct sentence.", opts: ["They was late.", "They were late.", "They is late.", "They be late."], ans: 1 },
            { q: "What is the purpose of a topic sentence?", opts: ["To end a story", "To state the main idea", "To ask a question", "To give examples only"], ans: 1 },
            { q: "Choose the correct punctuation: 'Wow___ that is amazing!'", opts: [".", ",", "!", "?"], ans: 2 },
            { q: "Identify the adverb in: 'She sings beautifully.'", opts: ["She", "sings", "beautifully", "song"], ans: 2 },
            { q: "Which sentence uses future tense?", opts: ["He plays football.", "He played football.", "He will play football.", "He is playing football."], ans: 2 },
            { q: "What literary device compares two things using 'like' or 'as'?", opts: ["Metaphor", "Simile", "Alliteration", "Hyperbole"], ans: 1 },
            { q: "Choose the correct homophone: 'Their house is over ___.'", opts: ["there", "their", "they're", "thier"], ans: 0 },
            { q: "What is the climax in a story?", opts: ["Beginning", "Most exciting point", "Ending", "Title"], ans: 1 },
            { q: "Select the correct plural: 'analysis'", opts: ["analysises", "analysis", "analyses", "analys"], ans: 2 },
            { q: "Which sentence is grammatically correct?", opts: ["Each of the boys have a pen.", "Each of the boys has a pen.", "Each of the boys have pens.", "Each boys has a pen."], ans: 1 },
            { q: "What is an antonym for 'ancient'?", opts: ["old", "modern", "historic", "past"], ans: 1 },
            { q: "Choose the correct indirect speech: He said, 'I am tired.'", opts: ["He said he is tired.", "He said he was tired.", "He says he was tired.", "He said I was tired."], ans: 1 },
            { q: "Identify the conjunction in: 'I stayed home because it rained.'", opts: ["stayed", "home", "because", "rained"], ans: 2 },
            { q: "Which word is spelled correctly?", opts: ["seperate", "separate", "seperete", "seperat"], ans: 1 },
            { q: "What is the tone of a text?", opts: ["Length", "Writer's attitude", "Number of words", "Font size"], ans: 1 },
            { q: "Choose the correct prefix meaning 'not':", opts: ["un-", "re-", "pre-", "mis-"], ans: 0 },
            { q: "Which sentence contains a metaphor?", opts: ["He runs like a cheetah.", "He is a cheetah on the field.", "He runs very fast.", "He runs daily."], ans: 1 }
        ],
        hard: [
            { q: "Identify the gerund in: 'Swimming is good exercise.'", opts: ["Swimming", "is", "good", "exercise"], ans: 0 },
            { q: "Choose the correct form: 'Neither of the answers ___ correct.'", opts: ["are", "were", "is", "be"], ans: 2 },
            { q: "What is dramatic irony?", opts: ["When the character knows more than the audience", "When the audience knows more than the character", "When events repeat", "When a story is funny"], ans: 1 },
            { q: "Select the correct parallel structure.", opts: ["She likes reading, to swim, and biking.", "She likes reading, swimming, and biking.", "She likes to read, swimming, and biking.", "She likes reading, swim, and to bike."], ans: 1 },
            { q: "Which sentence uses the subjunctive mood?", opts: ["I was there.", "If I were you, I would apologize.", "She is happy.", "They went home."], ans: 1 },
            { q: "What is the function of a thesis statement?", opts: ["To summarize the essay", "To introduce characters", "To state the main argument", "To give examples only"], ans: 2 },
            { q: "Identify the oxymoron.", opts: ["Deafening silence", "Bright sun", "Cold ice", "Dark night"], ans: 0 },
            { q: "Choose the correct usage.", opts: ["Whom is calling?", "Who is calling?", "Who are calling?", "Whose is calling?"], ans: 1 },
            { q: "What is an example of alliteration?", opts: ["Peter Piper picked peppers.", "The sun is bright.", "She sings softly.", "It is raining."], ans: 0 },
            { q: "Select the correct sentence.", opts: ["Hardly had he arrived when the show started.", "Hardly he had arrived when the show started.", "He hardly had arrived when the show started.", "Had hardly he arrived when the show started."], ans: 0 },
            { q: "Which word is an abstract noun?", opts: ["Freedom", "Chair", "Dog", "Bottle"], ans: 0 },
            { q: "Choose the correct reported speech: She said, 'I will come.'", opts: ["She said she will come.", "She said she would come.", "She says she would come.", "She said I would come."], ans: 1 },
            { q: "Identify the infinitive phrase.", opts: ["to win the race", "winning the race", "won the race", "wins the race"], ans: 0 },
            { q: "What is the effect of imagery in poetry?", opts: ["To confuse readers", "To create vivid pictures", "To shorten the poem", "To add dialogue"], ans: 1 },
            { q: "Choose the correct sentence with proper punctuation.", opts: ["Its a beautiful day.", "It's a beautiful day.", "Its' a beautiful day.", "Its a beautiful day!"], ans: 1 },
            { q: "Which literary device gives human qualities to objects?", opts: ["Personification", "Hyperbole", "Irony", "Allusion"], ans: 0 },
            { q: "Select the correct conditional sentence.", opts: ["If she studies, she would pass.", "If she studied, she would pass.", "If she studies, she would passed.", "If she study, she would pass."], ans: 1 },
            { q: "What is the meaning of the idiom 'spill the beans'?", opts: ["Cook food", "Reveal a secret", "Make a mess", "Plant seeds"], ans: 1 },
            { q: "Identify the appositive in: 'My brother, a doctor, lives abroad.'", opts: ["My brother", "a doctor", "lives abroad", "abroad"], ans: 1 },
            { q: "Choose the correct sentence with subject-verb agreement.", opts: ["The list of items are on the desk.", "The list of items is on the desk.", "The list of items were on the desk.", "The list of items be on the desk."], ans: 1 }
        ]
    },
    basic_Science: {
        easy: [
            { q: "Which part of a plant makes food?", opts: ["Root", "Stem", "Leaf", "Flower"], ans: 2 },
            { q: "Which organ pumps blood around the body?", opts: ["Lungs", "Heart", "Brain", "Stomach"], ans: 1 },
            { q: "Water changes into ice at what temperature?", opts: ["0°C", "50°C", "100°C", "10°C"], ans: 0 },
            { q: "Which sense organ is used for hearing?", opts: ["Eye", "Ear", "Nose", "Tongue"], ans: 1 },
            { q: "Which material is attracted to a magnet?", opts: ["Plastic", "Wood", "Iron", "Paper"], ans: 2 },
            { q: "What form of energy comes from the Sun?", opts: ["Sound", "Light", "Magnetic", "Nuclear"], ans: 1 },
            { q: "Which gas do humans need to breathe in?", opts: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"], ans: 2 },
            { q: "Which simple machine is used to lift a car?", opts: ["Lever", "Pulley", "Jack", "Wheel"], ans: 2 },
            { q: "Animals that eat only plants are called?", opts: ["Carnivores", "Herbivores", "Omnivores", "Insects"], ans: 1 },
            { q: "Which state of matter has a fixed shape?", opts: ["Solid", "Liquid", "Gas", "Air"], ans: 0 },
            { q: "What should you do first for a small cut?", opts: ["Ignore it", "Wash it with clean water", "Put sand on it", "Tie it tightly"], ans: 1 },
            { q: "Which force pulls objects toward the Earth?", opts: ["Magnetism", "Friction", "Gravity", "Push"], ans: 2 },
            { q: "Which part of the body helps you think?", opts: ["Heart", "Brain", "Lungs", "Kidney"], ans: 1 },
            { q: "Which animal lives both on land and in water?", opts: ["Dog", "Frog", "Cat", "Cow"], ans: 1 },
            { q: "Boiling water changes into what?", opts: ["Ice", "Steam", "Oil", "Dust"], ans: 1 },
            { q: "Which simple machine is a seesaw?", opts: ["Lever", "Pulley", "Screw", "Wedge"], ans: 0 },
            { q: "What do plants need to grow?", opts: ["Plastic", "Sunlight", "Stone", "Metal"], ans: 1 },
            { q: "Which property describes how heavy something is?", opts: ["Color", "Mass", "Shape", "Taste"], ans: 1 },
            { q: "Which organ helps us breathe?", opts: ["Heart", "Liver", "Lungs", "Brain"], ans: 2 },
            { q: "Air is mostly made of which gas?", opts: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"], ans: 1 }
        ],
        medium: [
            { q: "What is the process by which plants make their food?", opts: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"], ans: 1 },
            { q: "Which blood vessels carry blood away from the heart?", opts: ["Veins", "Capillaries", "Arteries", "Nerves"], ans: 2 },
            { q: "Which material is a good conductor of electricity?", opts: ["Rubber", "Copper", "Wood", "Glass"], ans: 1 },
            { q: "Energy stored in food is called?", opts: ["Heat energy", "Light energy", "Chemical energy", "Sound energy"], ans: 2 },
            { q: "Which layer of the Earth contains living things?", opts: ["Core", "Mantle", "Biosphere", "Crust only"], ans: 2 },
            { q: "What type of motion is a swinging pendulum?", opts: ["Circular motion", "Rotational motion", "Oscillatory motion", "Linear motion"], ans: 2 },
            { q: "Which organ filters waste from the blood?", opts: ["Heart", "Liver", "Kidney", "Lungs"], ans: 2 },
            { q: "Evaporation is the change from?", opts: ["Gas to liquid", "Liquid to gas", "Solid to liquid", "Gas to solid"], ans: 1 },
            { q: "Which simple machine is used to draw water from a well?", opts: ["Pulley", "Lever", "Wedge", "Inclined plane"], ans: 0 },
            { q: "Which part of a flower becomes the fruit?", opts: ["Petal", "Ovary", "Stamen", "Sepal"], ans: 1 },
            { q: "Which force slows down moving objects?", opts: ["Gravity", "Magnetism", "Friction", "Push"], ans: 2 },
            { q: "What is the main source of fresh water for humans?", opts: ["Oceans", "Rivers and lakes", "Clouds", "Deserts"], ans: 1 },
            { q: "Which animal is a carnivore?", opts: ["Cow", "Goat", "Lion", "Sheep"], ans: 2 },
            { q: "What is the boiling point of water at sea level?", opts: ["50°C", "90°C", "100°C", "120°C"], ans: 2 },
            { q: "Which gas is released during photosynthesis?", opts: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], ans: 1 },
            { q: "What should you do if someone faints?", opts: ["Shake them hard", "Pour water on them immediately", "Lay them flat and loosen tight clothes", "Ignore them"], ans: 2 },
            { q: "Which type of energy is produced by vibrating objects?", opts: ["Light energy", "Sound energy", "Heat energy", "Electrical energy"], ans: 1 },
            { q: "Which part of the digestive system absorbs nutrients?", opts: ["Stomach", "Small intestine", "Large intestine", "Esophagus"], ans: 1 },
            { q: "What is the main cause of air pollution?", opts: ["Trees", "Factory smoke", "Rain", "Soil"], ans: 1 },
            { q: "Which simple machine is a ramp?", opts: ["Lever", "Inclined plane", "Pulley", "Wheel and axle"], ans: 1 }
        ],
        hard: [
            { q: "Which process releases energy from food in cells?", opts: ["Photosynthesis", "Respiration", "Transpiration", "Excretion"], ans: 1 },
            { q: "What is the function of red blood cells?", opts: ["Fight infection", "Carry oxygen", "Clot blood", "Digest food"], ans: 1 },
            { q: "Which property measures resistance to scratching?", opts: ["Density", "Hardness", "Mass", "Volume"], ans: 1 },
            { q: "Which law explains that for every action there is an equal and opposite reaction?", opts: ["Newton’s First Law", "Newton’s Second Law", "Newton’s Third Law", "Law of Gravity"], ans: 2 },
            { q: "What is the role of chlorophyll in plants?", opts: ["Absorb sunlight", "Store water", "Protect roots", "Attract insects"], ans: 0 },
            { q: "Which part of the brain controls balance?", opts: ["Cerebrum", "Cerebellum", "Medulla", "Spinal cord"], ans: 1 },
            { q: "What is the term for animals that regulate their body temperature internally?", opts: ["Cold-blooded", "Warm-blooded", "Herbivores", "Vertebrates"], ans: 1 },
            { q: "Which environmental factor can lead to soil erosion?", opts: ["Planting trees", "Heavy rainfall", "Recycling", "Composting"], ans: 1 },
            { q: "Which state of matter has particles that move freely and fill any container?", opts: ["Solid", "Liquid", "Gas", "Plasma only"], ans: 2 },
            { q: "What type of energy transformation occurs in a light bulb?", opts: ["Light to heat", "Electrical to light", "Sound to light", "Heat to electrical"], ans: 1 },
            { q: "Which organ system removes liquid waste from the body?", opts: ["Digestive system", "Respiratory system", "Urinary system", "Nervous system"], ans: 2 },
            { q: "What is mechanical advantage in simple machines?", opts: ["Speed increase", "Force multiplication", "Energy loss", "Heat production"], ans: 1 },
            { q: "Which blood component helps in clotting?", opts: ["Plasma", "Red cells", "Platelets", "White cells"], ans: 2 },
            { q: "What is the main greenhouse gas responsible for global warming?", opts: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"], ans: 1 },
            { q: "Which organ produces bile?", opts: ["Pancreas", "Liver", "Stomach", "Kidney"], ans: 1 },
            { q: "What is the SI unit of force?", opts: ["Joule", "Newton", "Watt", "Pascal"], ans: 1 },
            { q: "Which process changes a solid directly into gas?", opts: ["Condensation", "Freezing", "Sublimation", "Melting"], ans: 2 },
            { q: "Which part of the eye controls the amount of light entering?", opts: ["Retina", "Cornea", "Pupil", "Lens"], ans: 2 },
            { q: "What should you do first in case of severe bleeding?", opts: ["Wash with soap", "Apply direct pressure", "Give food", "Ignore it"], ans: 1 },
            { q: "Which ecosystem has the highest biodiversity?", opts: ["Desert", "Tundra", "Rainforest", "Savanna"], ans: 2 }
        ]
    },
    Basic_Technology: {
        easy: [
            { q: "Which tool is used to drive nails into wood?", opts: ["Hammer", "Spanner", "Saw", "Pliers"], ans: 0 },
            { q: "A wheel and axle is an example of what?", opts: ["Machine", "Engine", "Tool box", "Battery"], ans: 0 },
            { q: "Which energy source comes from the Sun?", opts: ["Coal", "Solar", "Petrol", "Diesel"], ans: 1 },
            { q: "What is used to tighten or loosen bolts?", opts: ["Screwdriver", "Spanner", "Chisel", "File"], ans: 1 },
            { q: "A simple electric circuit needs a battery, bulb, and what else?", opts: ["Water", "Wire", "Paper", "Sand"], ans: 1 },
            { q: "Which device is used to send emails?", opts: ["Radio", "Television", "Computer", "Fan"], ans: 2 },
            { q: "Which transport moves on rails?", opts: ["Car", "Bicycle", "Train", "Boat"], ans: 2 },
            { q: "What should you wear to protect your eyes in a workshop?", opts: ["Gloves", "Helmet", "Goggles", "Apron"], ans: 2 },
            { q: "Which of these is a renewable energy source?", opts: ["Coal", "Wind", "Petrol", "Gasoline"], ans: 1 },
            { q: "Which part of a computer shows images?", opts: ["Keyboard", "Mouse", "Monitor", "CPU case"], ans: 2 },
            { q: "A pulley helps to do what?", opts: ["Cut wood", "Lift heavy loads", "Measure length", "Store water"], ans: 1 },
            { q: "Which tool is used to cut wood?", opts: ["Saw", "Hammer", "Spade", "Brush"], ans: 0 },
            { q: "What powers a torchlight?", opts: ["Battery", "Water", "Oil", "Sand"], ans: 0 },
            { q: "Which office machine is used to print documents?", opts: ["Scanner", "Printer", "Router", "Projector"], ans: 1 },
            { q: "Which fuel is used in many cars?", opts: ["Coal", "Petrol", "Wood", "Paper"], ans: 1 },
            { q: "Which device is used for voice communication over distance?", opts: ["Telephone", "Hammer", "Fan", "Cupboard"], ans: 0 },
            { q: "A lever helps to?", opts: ["Increase force", "Produce light", "Store data", "Cool air"], ans: 0 },
            { q: "Which safety rule is correct in a workshop?", opts: ["Run around", "Play with tools", "Follow instructions", "Touch hot metal"], ans: 2 },
            { q: "Which part of a computer is used to type?", opts: ["Mouse", "Keyboard", "Speaker", "Camera"], ans: 1 },
            { q: "Which energy source is non-renewable?", opts: ["Solar", "Wind", "Coal", "Hydro"], ans: 2 }
        ],
        medium: [
            { q: "Which electronic component controls the flow of current?", opts: ["Resistor", "Bulb", "Switch", "Battery"], ans: 2 },
            { q: "What type of energy is stored in a battery?", opts: ["Mechanical", "Chemical", "Sound", "Heat"], ans: 1 },
            { q: "Which manufacturing process involves melting metal into molds?", opts: ["Casting", "Welding", "Filing", "Drilling"], ans: 0 },
            { q: "What is the function of a router in networking?", opts: ["Print documents", "Store files", "Connect networks", "Scan images"], ans: 2 },
            { q: "Which tool is used to measure electrical current?", opts: ["Thermometer", "Ammeter", "Barometer", "Speedometer"], ans: 1 },
            { q: "Which transportation system uses water routes?", opts: ["Air transport", "Road transport", "Rail transport", "Water transport"], ans: 3 },
            { q: "What does IT stand for?", opts: ["Information Technology", "Internet Tools", "Internal Transfer", "Input Terminal"], ans: 0 },
            { q: "Which device converts electrical energy to mechanical energy?", opts: ["Motor", "Battery", "Switch", "Wire"], ans: 0 },
            { q: "Which safety device protects against electric shock?", opts: ["Fuse", "Bulb", "Cable", "Socket"], ans: 0 },
            { q: "Which renewable source uses moving air?", opts: ["Hydro", "Solar", "Wind", "Coal"], ans: 2 },
            { q: "What is the purpose of lubrication in machines?", opts: ["Increase friction", "Reduce friction", "Produce heat", "Stop movement"], ans: 1 },
            { q: "Which tool is best for shaping metal surfaces?", opts: ["File", "Hammer", "Brush", "Rope"], ans: 0 },
            { q: "Which device stores digital data permanently?", opts: ["RAM", "Hard drive", "Monitor", "Keyboard"], ans: 1 },
            { q: "Which process joins metals using heat?", opts: ["Casting", "Welding", "Painting", "Polishing"], ans: 1 },
            { q: "Which communication technology uses satellites?", opts: ["Landline", "Satellite TV", "Post office", "Notice board"], ans: 1 },
            { q: "Which component provides power in a simple circuit?", opts: ["Switch", "Resistor", "Battery", "Wire"], ans: 2 },
            { q: "Which transport is fastest over long distances?", opts: ["Bicycle", "Ship", "Airplane", "Truck"], ans: 2 },
            { q: "Which office device converts paper documents into digital form?", opts: ["Printer", "Scanner", "Router", "Speaker"], ans: 1 },
            { q: "Which simple machine is found in a screwdriver?", opts: ["Pulley", "Wheel and axle", "Lever", "Inclined plane"], ans: 1 },
            { q: "Which non-renewable energy source is formed from dead plants and animals?", opts: ["Solar", "Wind", "Fossil fuel", "Hydro"], ans: 2 }
        ],
        hard: [
            { q: "Which law explains the relationship between voltage, current, and resistance?", opts: ["Newton’s Law", "Ohm’s Law", "Faraday’s Law", "Hooke’s Law"], ans: 1 },
            { q: "What is the main function of a transistor?", opts: ["Store data", "Amplify or switch signals", "Generate heat", "Measure voltage"], ans: 1 },
            { q: "Which manufacturing method removes material to shape a product?", opts: ["Casting", "Molding", "Machining", "Assembling"], ans: 2 },
            { q: "What type of energy conversion occurs in a generator?", opts: ["Electrical to chemical", "Mechanical to electrical", "Heat to sound", "Light to heat"], ans: 1 },
            { q: "Which network topology connects all devices to a central hub?", opts: ["Ring", "Bus", "Star", "Mesh"], ans: 2 },
            { q: "Which safety practice reduces fire risk in workshops?", opts: ["Overloading sockets", "Proper wiring", "Spilling fuel", "Blocking exits"], ans: 1 },
            { q: "Which device converts digital signals to analog for transmission?", opts: ["Router", "Modem", "Switch", "Scanner"], ans: 1 },
            { q: "What is the function of a fuse in a circuit?", opts: ["Increase voltage", "Store energy", "Protect against overload", "Amplify signal"], ans: 2 },
            { q: "Which renewable source uses flowing water to generate power?", opts: ["Solar", "Wind", "Hydroelectric", "Coal"], ans: 2 },
            { q: "Which component temporarily stores data while a computer is running?", opts: ["Hard drive", "RAM", "ROM", "Flash drive"], ans: 1 },
            { q: "Which transportation system relies on internal combustion engines?", opts: ["Electric train", "Sailboat", "Petrol car", "Bicycle"], ans: 2 },
            { q: "What is ergonomics concerned with?", opts: ["Machine speed", "Worker comfort and safety", "Fuel cost", "Color design only"], ans: 1 },
            { q: "Which process permanently joins materials without melting them?", opts: ["Welding", "Casting", "Adhesive bonding", "Drilling"], ans: 2 },
            { q: "Which unit measures electrical resistance?", opts: ["Volt", "Ampere", "Ohm", "Watt"], ans: 2 },
            { q: "Which device is essential for video conferencing?", opts: ["Webcam", "Hammer", "Drill", "Spanner"], ans: 0 },
            { q: "What type of software controls computer hardware?", opts: ["Application software", "System software", "Game software", "Utility only"], ans: 1 },
            { q: "Which energy resource is obtained from uranium?", opts: ["Solar", "Nuclear", "Wind", "Hydro"], ans: 1 },
            { q: "Which tool is most appropriate for measuring small electrical resistance accurately?", opts: ["Voltmeter", "Ammeter", "Ohmmeter", "Thermometer"], ans: 2 },
            { q: "Which modern communication technology uses fiber-optic cables?", opts: ["Telegraph", "Fiber internet", "Smoke signals", "Notice board"], ans: 1 },
            { q: "Which principle allows a lever to multiply force?", opts: ["Magnetism", "Mechanical advantage", "Friction", "Evaporation"], ans: 1 }
        ]
    },
    islamic_Studies: {
        easy: [
            { q: "What is the first pillar of Islam?", opts: ["Zakat", "Salah", "Shahada", "Sawm"], ans: 2 },
            { q: "Which Prophet built the Kaaba?", opts: ["Prophet Muhammad", "Prophet Ibrahim", "Prophet Musa", "Prophet Isa"], ans: 1 },
            { q: "How many times do Muslims pray daily?", opts: ["3", "5", "7", "4"], ans: 1 },
            { q: "What is the holy book of Islam?", opts: ["Bible", "Qur’an", "Torah", "Vedas"], ans: 1 },
            { q: "During which month do Muslims fast?", opts: ["Muharram", "Ramadan", "Shawwal", "Rabi' al-awwal"], ans: 1 },
            { q: "Which pillar of Islam involves giving charity?", opts: ["Sawm", "Hajj", "Zakat", "Shahada"], ans: 2 },
            { q: "What is the term for faith in Arabic?", opts: ["Iman", "Salah", "Tawheed", "Shirk"], ans: 0 },
            { q: "Where do Muslims go for Friday congregational prayer?", opts: ["Home", "Market", "Mosque", "School"], ans: 2 },
            { q: "Which Prophet was swallowed by a big fish?", opts: ["Yunus", "Musa", "Ibrahim", "Nuh"], ans: 0 },
            { q: "What is the term for the pilgrimage to Mecca?", opts: ["Sawm", "Hajj", "Umrah", "Zakat"], ans: 1 },
            { q: "Which pillar involves testifying that there is no god but Allah?", opts: ["Salah", "Shahada", "Zakat", "Sawm"], ans: 1 },
            { q: "Who is the last Prophet in Islam?", opts: ["Prophet Isa", "Prophet Musa", "Prophet Muhammad", "Prophet Ibrahim"], ans: 2 },
            { q: "What is the Arabic term for fasting?", opts: ["Salah", "Sawm", "Zakat", "Hajj"], ans: 1 },
            { q: "Which angel brought revelation to Prophet Muhammad?", opts: ["Israafeel", "Jibreel", "Meekaaeel", "Israaeel"], ans: 1 },
            { q: "Giving to the poor is called?", opts: ["Salah", "Sawm", "Sadaqah", "Shahada"], ans: 2 },
            { q: "What is the term for belief in destiny?", opts: ["At-Tawheed", "Al-Eemaanu Bil-Qadar", "Shirk", "Fiqh"], ans: 1 },
            { q: "Which Prophet was tested by ALLAAH with long lasting sickness?", opts: ["Ayyub", "Yunus", "Nuh", "Ibrahim"], ans: 0 },
            { q: "What is the direction Muslims face during prayer?", opts: ["Medina", "Jerusalem", "Mecca", "Cairo"], ans: 2 },
            { q: "Which pillar requires traveling to Mecca if able?", opts: ["Sawm", "Hajj", "Zakat", "Salah"], ans: 1 },
            { q: "Belief in all the prophets is part of?", opts: ["Pillars of Iman", "Pillars of Islam", "Fiqh", "Shariah"], ans: 0 }
        ],
        medium: [
            { q: "Which Prophet was known for building the Canoe/Ark?", opts: ["Nuh", "Musa", "Ibrahim", "Isa"], ans: 0 },
            { q: "Which Arabic term refers to the pilgrimage to Makkah?", opts: ["Sawm", "Hajj", "Zakat", "Sadaqah"], ans: 1 },
            { q: "Which city is the center of Hajj pilgrimage?", opts: ["Medina", "Mecca", "Jerusalem", "Baghdad"], ans: 1 },
            { q: "What does the term 'Fiqh' refer to?", opts: ["Understanding of Islamic law", "Recitation of Qur’an", "Fasting rules", "Daily prayers"], ans: 0 },
            { q: "Which Surah starts with 'Iqra' (Read)?", opts: ["Al-Fatiha", "Al-'Alaq", "Al-Baqarah", "Yasin"], ans: 1 },
            { q: "Belief in Allah's books includes all except?", opts: ["Qur’an", "Injeel", "Torah", "Dictionary"], ans: 3 },
            { q: "How many Rakat are in Fajr prayer?", opts: ["2", "4", "3", "6"], ans: 0 },
            { q: "Which Prophet split the sea by Allah's command?", opts: ["Musa", "Ibrahim", "Nuh", "Yunus"], ans: 0 },
            { q: "Which angel is responsible for taking souls?", opts: ["Jibreel", "Meekaaeel", "Israafeel", "Israaeel"], ans: 3 },
            { q: "During which month was the Qur’an first revealed?", opts: ["Muharram", "Ramadan", "Shawwal", "Dhul-Hijjah"], ans: 1 },
            { q: "The term 'Tawheed' refers to?", opts: ["Oneness of Allah", "Prayer", "Charity", "Prophethood"], ans: 0 },
            { q: "Which Prophet confront the tyrant King Namrood?", opts: ["Ibrahim", "Musa", "Nuh", "Isa"], ans: 0 },
            { q: "The night journey of Prophet Muhammad is called?", opts: ["Isra and Mi’raj", "Hijra", "Hajj", "Sawm"], ans: 0 },
            { q: "Which pillar is considered the foundation of Islam?", opts: ["Salah", "Shahada", "Sawm", "Hajj"], ans: 1 },
            { q: "Belief in the Day of Judgment is part of?", opts: ["Pillars of Islam", "Pillars of Iman", "Fiqh", "Shariah"], ans: 1 },
            { q: "Known as Umm al-Qur’an (Mother of the Qur’an), which Surah holds this title?", opts: ["Al-Baqarah", "Yasin", "Al-Fatiha", "Al-Ikhlas"], ans: 2 },
            { q: "Which act breaks the fast in Ramadan?", opts: ["Sleeping", "Eating deliberately", "Drinking water at night", "Praying"], ans: 1 },
            { q: "Which Prophet received the Taorah?", opts: ["Musa", "Ibrahim", "Isa", "Nuh"], ans: 0 },
            { q: "The Kaaba is located in?", opts: ["Medina", "Mecca", "Jerusalem", "Baghdad"], ans: 1 },
            { q: "The last revelation of the Qur’an was completed in?", opts: ["Mecca", "Medina", "Ta’if", "Yathrib"], ans: 1 }
        ],
        hard: [
            { q: "Which Prophet was known as 'Khalilullah' (Friend of Allah)?", opts: ["Ibrahim", "Musa", "Nuh", "Isa"], ans: 0 },
            { q: "Which angel will blow the trumpet on the Day of Judgment?", opts: ["Israafeel", "Jibreel", "Meekaaeel", "Israaeel"], ans: 0 },
            { q: "Which companion of Prophet Muhammad was known as 'Siddiq'?", opts: ["Abu Bakr", "Umar", "Uthman", "Ali"], ans: 0 },
            { q: "Which Surah is the longest in the Qur’an?", opts: ["Al-Baqarah", "Yasin", "Al-Fatiha", "An-Nisa"], ans: 0 },
            { q: "Which Prophet was thrown into the fire but saved by Allah?", opts: ["Ibrahim", "Musa", "Nuh", "Yunus"], ans: 0 },
            { q: "Zakat is obligatory on wealth exceeding?", opts: ["Nisab", "Sadaqah", "Fidyah", "Waqf"], ans: 0 },
            { q: "Which battle was the first major victory for Muslims?", opts: ["Badr", "Uhud", "Khandaq", "Tabuk"], ans: 0 },
            { q: "Which Caliph compiled the Qur’an in one book?", opts: ["Abu Bakr", "Umar", "Uthman", "Ali"], ans: 2 },
            { q: "Belief in all Prophets does NOT include?", opts: ["Muhammad", "Isa", "Krishna", "Musa"], ans: 2 },
            { q: "During Hajj, pilgrims perform which ritual at Mina?", opts: ["Tawaf", "Ramy al-Jamarat", "Sa’i", "Wuquf"], ans: 1 },
            { q: "The Hijrah marks the migration to?", opts: ["Mecca", "Medina", "Ta’if", "Jerusalem"], ans: 1 },
            { q: "Which Surah mentions 'Ayat al-Kursi'?", opts: ["Al-Baqarah", "Al-Fatiha", "Yasin", "Al-Ikhlas"], ans: 0 },
            { q: "Which Prophet was swallowed by a big fish as a test of patience?", opts: ["Yunus", "Ibrahim", "Musa", "Nuh"], ans: 0 },
            { q: "Which Islamic era followed the death of Prophet Muhammad?", opts: ["Rashidun Caliphate", "Umayyad", "Abbasid", "Ottoman"], ans: 0 },
            { q: "Belief in Qadar includes?", opts: ["Fate and destiny", "Charity", "Prayer", "Pilgrimage"], ans: 0 },
            { q: "Which pillar of Islam requires abstaining from food, drink, and bad deeds from dawn to sunset during Ramadan?", opts: ["Salah", "Sawm", "Hajj", "Zakat"], ans: 1 },
            { q: "The Farewell Pilgrimage was performed in which year of Hijrah?", opts: ["9 AH", "10 AH", "8 AH", "11 AH"], ans: 0 },
            { q: "Which Prophet is associated with the building of the Ark?", opts: ["Nuh", "Musa", "Ibrahim", "Yunus"], ans: 0 },
            { q: "Which Surah contains stories of many Prophets?", opts: ["Al-An’am", "Al-Baqarah", "Hud", "Yasin"], ans: 2 },
            { q: "Belief in the unseen includes all EXCEPT?", opts: ["Angels", "Jinn", "ALLAAH", "Stars"], ans: 3 }
        ]
    },
    civic_Education: {
        easy: [
            { q: "What is the main purpose of government?", opts: ["To entertain citizens", "To maintain order and provide services", "To control the weather", "To run businesses"], ans: 1 },
            { q: "Which branch of government makes laws?", opts: ["Executive", "Judiciary", "Legislative", "Military"], ans: 2 },
            { q: "Voting in elections is a?", opts: ["Punishment", "Right and responsibility", "Game", "Holiday activity"], ans: 1 },
            { q: "Who enforces the laws?", opts: ["Teachers", "Executive branch", "Students", "Farmers"], ans: 1 },
            { q: "The national flag is a symbol of?", opts: ["Sports", "Identity and unity", "Weather", "Trade"], ans: 1 },
            { q: "Citizens should obey laws to?", opts: ["Avoid school", "Keep peace and order", "Earn money", "Travel abroad"], ans: 1 },
            { q: "Paying taxes helps the government to?", opts: ["Build public services", "Buy toys", "Close schools", "Stop elections"], ans: 0 },
            { q: "Freedom of speech means you can?", opts: ["Say anything without limits", "Express opinions responsibly", "Break laws", "Ignore others"], ans: 1 },
            { q: "The judiciary branch is responsible for?", opts: ["Making laws", "Enforcing laws", "Interpreting laws", "Writing textbooks"], ans: 2 },
            { q: "A good citizen participates in?", opts: ["Community activities", "Illegal acts", "Fights", "Rumors"], ans: 0 },
            { q: "Democracy means power belongs to?", opts: ["One king", "The army", "The people", "Judges"], ans: 2 },
            { q: "Respecting others' rights promotes?", opts: ["Conflict", "Peace", "Confusion", "Fear"], ans: 1 },
            { q: "Which is a responsibility of citizens?", opts: ["Breaking rules", "Serving on a jury", "Ignoring laws", "Avoiding taxes"], ans: 1 },
            { q: "National anthem is a?", opts: ["Law book", "Song symbolizing unity", "Court order", "Election result"], ans: 1 },
            { q: "Community development improves?", opts: ["Personal wealth only", "Public facilities and life quality", "Weather patterns", "Foreign trade only"], ans: 1 },
            { q: "Elections are held to?", opts: ["Choose leaders", "Start wars", "Close schools", "Raise taxes"], ans: 0 },
            { q: "Rule of law means?", opts: ["Only leaders follow laws", "Everyone is equal before the law", "Laws change daily", "Courts make money"], ans: 1 },
            { q: "Protecting the environment is a?", opts: ["Government job only", "Citizen responsibility", "Private hobby", "School subject only"], ans: 1 },
            { q: "Leadership requires?", opts: ["Dishonesty", "Responsibility and integrity", "Greed", "Fear"], ans: 1 },
            { q: "Peaceful conflict resolution involves?", opts: ["Violence", "Dialogue and compromise", "Ignoring issues", "Threats"], ans: 1 }
        ],
        medium: [
            { q: "Separation of powers prevents?", opts: ["Economic growth", "Abuse of power", "Voting", "Education reform"], ans: 1 },
            { q: "The executive branch is typically led by a?", opts: ["Chief Justice", "Speaker", "President or Prime Minister", "Governor only"], ans: 2 },
            { q: "A constitution primarily serves to?", opts: ["Entertain citizens", "Outline fundamental laws and principles", "Promote tourism", "Regulate sports"], ans: 1 },
            { q: "Civic participation includes?", opts: ["Avoiding meetings", "Engaging in public discussions", "Ignoring elections", "Spreading rumors"], ans: 1 },
            { q: "Checks and balances ensure?", opts: ["One branch dominates", "Power is shared and limited", "No elections occur", "Courts control all"], ans: 1 },
            { q: "Transparency in leadership builds?", opts: ["Corruption", "Public trust", "Fear", "Secrecy"], ans: 1 },
            { q: "Citizenship can be acquired by?", opts: ["Birth or naturalization", "Buying property only", "Traveling abroad", "Marriage only"], ans: 0 },
            { q: "Public hearings allow citizens to?", opts: ["Vote secretly", "Express opinions on issues", "Write laws alone", "Avoid taxes"], ans: 1 },
            { q: "Judicial review refers to?", opts: ["Reviewing school exams", "Courts examining constitutionality of laws", "Electing judges", "Writing new laws"], ans: 1 },
            { q: "A referendum allows citizens to?", opts: ["Appoint judges", "Vote directly on a policy issue", "Avoid elections", "Change currency"], ans: 1 },
            { q: "Environmental laws are designed to?", opts: ["Increase pollution", "Protect natural resources", "Stop farming", "Ban trade"], ans: 1 },
            { q: "Ethical leadership promotes?", opts: ["Personal gain", "Accountability and fairness", "Corruption", "Secrecy"], ans: 1 },
            { q: "The legislative branch debates bills before?", opts: ["Destroying them", "Voting to pass them", "Sending to police", "Ignoring them"], ans: 1 },
            { q: "Community service strengthens?", opts: ["Individual power", "Social bonds", "Government control", "Military force"], ans: 1 },
            { q: "Civil rights protect individuals from?", opts: ["Government abuse", "Education", "Healthcare", "Travel"], ans: 0 },
            { q: "Majority rule in democracy must respect?", opts: ["No one", "Minority rights", "Only leaders", "Foreigners"], ans: 1 },
            { q: "A fair election requires?", opts: ["Transparency and equal opportunity", "Secret counting only", "Military control", "Limited voters"], ans: 0 },
            { q: "Conflict mediation involves?", opts: ["Violence", "Neutral third-party assistance", "Ignoring disputes", "Punishment only"], ans: 1 },
            { q: "National identity is shaped by?", opts: ["Shared culture and history", "Weather", "Sports only", "Trade routes"], ans: 0 },
            { q: "Active citizenship improves?", opts: ["Community decision-making", "Personal secrecy", "Lawlessness", "Isolation"], ans: 0 }
        ],
        hard: [
            { q: "Constitutional supremacy implies that?", opts: ["Parliament is above the constitution", "The constitution is the highest law", "Judges rule without limits", "Citizens ignore laws"], ans: 1 },
            { q: "Pluralism in democracy refers to?", opts: ["Single-party dominance", "Multiple groups influencing policy", "Military rule", "No elections"], ans: 1 },
            { q: "Impeachment is a process to?", opts: ["Elect leaders", "Remove public officials for misconduct", "Pass budgets", "Create courts"], ans: 1 },
            { q: "Civic accountability requires leaders to?", opts: ["Act secretly", "Answer to the public for actions", "Ignore criticism", "Avoid media"], ans: 1 },
            { q: "Sustainable development balances?", opts: ["Profit and war", "Economic growth, social welfare, and environment", "Taxes and trade", "Cities and villages"], ans: 1 },
            { q: "An independent judiciary ensures?", opts: ["Political control", "Fair and impartial justice", "Executive dominance", "Legislative supremacy"], ans: 1 },
            { q: "Civil disobedience is characterized by?", opts: ["Violent protest", "Peaceful refusal to obey unjust laws", "Secret voting", "Military action"], ans: 1 },
            { q: "Federal systems divide power between?", opts: ["Courts and police", "National and regional governments", "Citizens and judges", "Military branches"], ans: 1 },
            { q: "Good governance includes?", opts: ["Corruption", "Transparency and rule of law", "Censorship", "Nepotism"], ans: 1 },
            { q: "A bill becomes law after?", opts: ["Public protest only", "Legislative approval and executive assent", "Judicial review first", "Media announcement"], ans: 1 },
            { q: "Civic virtue emphasizes?", opts: ["Self-interest", "Commitment to common good", "Isolation", "Private gain"], ans: 1 },
            { q: "Judicial precedent refers to?", opts: ["Old elections", "Past court decisions guiding future cases", "Legislative debates", "Executive orders"], ans: 1 },
            { q: "Participatory democracy encourages?", opts: ["Limited voting", "Direct citizen involvement", "Military leadership", "Single-party rule"], ans: 1 },
            { q: "Human rights are considered?", opts: ["Privileges for leaders", "Universal and inalienable", "Temporary laws", "Optional rules"], ans: 1 },
            { q: "Public policy is best described as?", opts: ["Private decisions", "Government plans and actions", "Court punishments", "Election speeches"], ans: 1 },
            { q: "Electoral integrity requires?", opts: ["Fraud", "Free and fair processes", "Limited candidates", "Secret campaigns"], ans: 1 },
            { q: "Decentralization transfers authority to?", opts: ["Central government only", "Local governments", "Military leaders", "Foreign states"], ans: 1 },
            { q: "Social contract theory suggests that?", opts: ["Citizens and government have mutual obligations", "Leaders rule absolutely", "Courts dominate politics", "Taxes are optional"], ans: 0 },
            { q: "Conflict transformation aims to?", opts: ["Win disputes", "Address root causes sustainably", "Punish opponents", "Ignore tensions"], ans: 1 },
            { q: "Environmental stewardship reflects?", opts: ["Exploiting resources freely", "Responsible management of natural resources", "Industrial secrecy", "Urban expansion only"], ans: 1 }
        ]
    },
    social_Studies: {
        easy: [
            { q: "What tool is used to find directions on a map?", opts: ["Thermometer", "Compass", "Barometer", "Scale"], ans: 1 },
            { q: "Which continent is known as the 'Dark Continent' in history?", opts: ["Asia", "Africa", "Europe", "Australia"], ans: 1 },
            { q: "Rainforests usually have what kind of climate?", opts: ["Cold and dry", "Hot and dry", "Hot and wet", "Cold and windy"], ans: 2 },
            { q: "A large area of flat land is called a?", opts: ["Mountain", "Plateau", "Plain", "Valley"], ans: 2 },
            { q: "Which ocean lies between Africa and Australia?", opts: ["Pacific", "Atlantic", "Indian", "Arctic"], ans: 2 },
            { q: "The Great Wall is located in which country?", opts: ["India", "China", "Japan", "Korea"], ans: 1 },
            { q: "People moving from one country to another is called?", opts: ["Trade", "Migration", "Tourism", "Transport"], ans: 1 },
            { q: "Which resource is used to make paper?", opts: ["Oil", "Wood", "Gold", "Coal"], ans: 1 },
            { q: "Buying and selling goods between countries is called?", opts: ["Migration", "Trade", "Education", "Farming"], ans: 1 },
            { q: "Which institution teaches children basic education?", opts: ["Hospital", "School", "Bank", "Court"], ans: 1 },
            { q: "A group of related people living together is called?", opts: ["Government", "Family", "Company", "Nation"], ans: 1 },
            { q: "Which natural resource provides energy for cars?", opts: ["Coal", "Petroleum", "Wind", "Sunlight"], ans: 1 },
            { q: "The equator divides the Earth into?", opts: ["East and West", "North and South", "Hot and Cold", "Land and Water"], ans: 1 },
            { q: "Which festival is celebrated by Muslims worldwide?", opts: ["Christmas", "Diwali", "Eid", "Hanukkah"], ans: 2 },
            { q: "Mount Everest is found in which mountain range?", opts: ["Andes", "Rockies", "Himalayas", "Alps"], ans: 2 },
            { q: "Which is an example of a renewable resource?", opts: ["Coal", "Oil", "Wind", "Gas"], ans: 2 },
            { q: "Citizens vote during?", opts: ["Harvest", "Elections", "Migration", "Trade fair"], ans: 1 },
            { q: "The study of maps is called?", opts: ["Geology", "Cartography", "Biology", "Meteorology"], ans: 1 },
            { q: "A country ruled by a king or queen is called?", opts: ["Republic", "Democracy", "Monarchy", "Dictatorship"], ans: 2 },
            { q: "Which continent is the smallest?", opts: ["Europe", "Australia", "South America", "Antarctica"], ans: 1 }
        ],
        medium: [
            { q: "Which river is important to ancient Egyptian civilization?", opts: ["Amazon", "Nile", "Yangtze", "Danube"], ans: 1 },
            { q: "A plateau is best described as?", opts: ["Low flat land", "High flat land", "Deep valley", "Coastal area"], ans: 1 },
            { q: "Industrialization mainly increases?", opts: ["Handicrafts", "Factory production", "Nomadic life", "Barter trade"], ans: 1 },
            { q: "Which factor most influences climate?", opts: ["Latitude", "Language", "Religion", "Currency"], ans: 0 },
            { q: "The United Nations was formed after which war?", opts: ["World War I", "World War II", "Cold War", "Civil War"], ans: 1 },
            { q: "Urbanization refers to?", opts: ["Growth of villages", "Movement to rural areas", "Growth of cities", "Decrease in trade"], ans: 2 },
            { q: "Which continent has the Sahara Desert?", opts: ["Asia", "Africa", "Australia", "Europe"], ans: 1 },
            { q: "Exports are goods that are?", opts: ["Bought from abroad", "Sold to other countries", "Destroyed", "Stored locally"], ans: 1 },
            { q: "Cultural traditions are passed through?", opts: ["Weather", "Generations", "Mountains", "Trade routes"], ans: 1 },
            { q: "Which is a push factor for migration?", opts: ["Job opportunities", "Peace", "War", "Good climate"], ans: 2 },
            { q: "Democracy allows citizens to?", opts: ["Choose leaders", "Avoid taxes", "Ignore laws", "Control courts"], ans: 0 },
            { q: "Which region is known for frequent earthquakes due to tectonic activity?", opts: ["Sahara", "Ring of Fire", "Amazon Basin", "Arctic Circle"], ans: 1 },
            { q: "A command economy is controlled by?", opts: ["Private businesses", "Government", "Farmers", "Traders"], ans: 1 },
            { q: "The Silk Road connected China mainly with?", opts: ["Africa", "Europe", "Australia", "America"], ans: 1 },
            { q: "Population density measures?", opts: ["Birth rate", "People per area", "Migration rate", "Trade volume"], ans: 1 },
            { q: "Which country is known for the Renaissance movement?", opts: ["France", "Italy", "Germany", "Spain"], ans: 1 },
            { q: "Deforestation mainly affects?", opts: ["Urban growth", "Climate and wildlife", "Currency value", "Trade laws"], ans: 1 },
            { q: "Globalization increases?", opts: ["Isolation", "International connections", "Local farming only", "Border closures"], ans: 1 },
            { q: "Primary economic activities include?", opts: ["Mining and farming", "Banking", "Teaching", "Transport"], ans: 0 },
            { q: "A referendum allows citizens to?", opts: ["Elect judges", "Vote directly on an issue", "Start trade", "Avoid taxes"], ans: 1 }
        ],
        hard: [
            { q: "Geopolitics studies the relationship between?", opts: ["Weather and farming", "Geography and political power", "Culture and music", "Trade and language"], ans: 1 },
            { q: "The demographic transition model explains changes in?", opts: ["Trade routes", "Population growth rates", "Mountain formation", "Industrial output"], ans: 1 },
            { q: "Mercantilism emphasized?", opts: ["Free trade", "Accumulation of gold and favorable balance of trade", "Agriculture only", "Urbanization"], ans: 1 },
            { q: "Cultural diffusion refers to?", opts: ["Loss of culture", "Spread of cultural traits", "Migration only", "Trade decline"], ans: 1 },
            { q: "The Cold War was mainly between?", opts: ["USA and China", "USA and USSR", "Germany and France", "India and Pakistan"], ans: 1 },
            { q: "Sustainable development aims to?", opts: ["Exploit resources quickly", "Meet present needs without harming future generations", "Stop trade", "Increase pollution"], ans: 1 },
            { q: "A federal system divides power between?", opts: ["Military and police", "Central and regional governments", "Courts only", "Banks and firms"], ans: 1 },
            { q: "The Bretton Woods institutions include the IMF and?", opts: ["WHO", "World Bank", "UNESCO", "NATO"], ans: 1 },
            { q: "Human Development Index measures?", opts: ["Only income", "Health, education, and income", "Trade balance", "Military strength"], ans: 1 },
            { q: "Colonialism primarily involved?", opts: ["Cultural exchange only", "Political and economic control of territories", "Trade agreements", "Urban planning"], ans: 1 },
            { q: "A trade embargo is?", opts: ["Free trade zone", "Ban on trade with a country", "Cultural festival", "Migration policy"], ans: 1 },
            { q: "Urban sprawl refers to?", opts: ["Dense city centers", "Expansion of cities into rural areas", "Village growth", "Population decline"], ans: 1 },
            { q: "The Green Revolution improved?", opts: ["Industrial trade", "Agricultural productivity", "Urban transport", "Mining output"], ans: 1 },
            { q: "A multicultural society is one that?", opts: ["Has one culture", "Includes diverse cultural groups", "Rejects traditions", "Limits migration"], ans: 1 },
            { q: "Resource depletion occurs when?", opts: ["Resources are overused", "Resources increase", "Trade expands", "Population declines"], ans: 0 },
            { q: "The European Union promotes?", opts: ["Isolation", "Economic and political cooperation", "War", "Colonization"], ans: 1 },
            { q: "Brain drain refers to?", opts: ["Loss of skilled workers through migration", "Health problems", "Population growth", "Industrial expansion"], ans: 0 },
            { q: "Climate change is largely driven by?", opts: ["Natural cycles only", "Greenhouse gas emissions", "Ocean tides", "Solar eclipses"], ans: 1 },
            { q: "Civic nationalism is based on?", opts: ["Ethnicity only", "Shared citizenship and values", "Language only", "Religion only"], ans: 1 },
            { q: "International sanctions are used to?", opts: ["Encourage tourism", "Influence a country's behavior", "Promote festivals", "Build schools"], ans: 1 }
        ]
    },
    biology: {
        easy: [
            { q: "What is the basic unit of life?", opts: ["Tissue", "Organ", "Cell", "Atom"], ans: 2 },
            { q: "Which organ pumps blood in the human body?", opts: ["Lungs", "Brain", "Heart", "Liver"], ans: 2 },
            { q: "What gas do plants take in for photosynthesis?", opts: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], ans: 1 },
            { q: "Which part of the cell contains genetic material?", opts: ["Nucleus", "Ribosome", "Cytoplasm", "Membrane"], ans: 0 },
            { q: "What is the process by which plants make food?", opts: ["Respiration", "Digestion", "Photosynthesis", "Transpiration"], ans: 2 },
            { q: "Which blood cells fight infections?", opts: ["Red blood cells", "White blood cells", "Platelets", "Plasma cells"], ans: 1 },
            { q: "What is the largest organ in the human body?", opts: ["Heart", "Skin", "Liver", "Lungs"], ans: 1 },
            { q: "Which microorganism causes the flu?", opts: ["Bacterium", "Virus", "Fungus", "Protozoan"], ans: 1 },
            { q: "What do herbivores mainly eat?", opts: ["Meat", "Plants", "Insects", "Fish"], ans: 1 },
            { q: "Which part of the plant absorbs water?", opts: ["Leaf", "Stem", "Flower", "Root"], ans: 3 },
            { q: "DNA stands for?", opts: ["Deoxyribonucleic Acid", "Dynamic Nucleic Acid", "Double Nitrogen Acid", "Deoxynitric Agent"], ans: 0 },
            { q: "What carries oxygen in the blood?", opts: ["Platelets", "Plasma", "Hemoglobin", "White cells"], ans: 2 },
            { q: "Which system controls body activities?", opts: ["Digestive system", "Nervous system", "Respiratory system", "Circulatory system"], ans: 1 },
            { q: "What is the main source of energy for Earth?", opts: ["Moon", "Wind", "Sun", "Stars"], ans: 2 },
            { q: "Which organ helps in breathing?", opts: ["Kidney", "Lungs", "Stomach", "Pancreas"], ans: 1 },
            { q: "What type of organism makes its own food?", opts: ["Consumer", "Producer", "Decomposer", "Predator"], ans: 1 },
            { q: "Which vitamin is produced when skin is exposed to sunlight?", opts: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], ans: 3 },
            { q: "What structure protects a plant cell?", opts: ["Cell wall", "Chloroplast", "Nucleus", "Mitochondria"], ans: 0 },
            { q: "Which disease is caused by bacteria?", opts: ["Malaria", "Tuberculosis", "Flu", "COVID-19"], ans: 1 },
            { q: "What is a food chain?", opts: ["A type of plant", "Energy flow between organisms", "Animal shelter", "Water cycle"], ans: 1 }
        ],
        medium: [
            { q: "Which organelle is known as the powerhouse of the cell?", opts: ["Nucleus", "Ribosome", "Mitochondrion", "Golgi apparatus"], ans: 2 },
            { q: "What is the function of ribosomes?", opts: ["Energy production", "Protein synthesis", "Waste removal", "Photosynthesis"], ans: 1 },
            { q: "Which blood vessel carries blood away from the heart?", opts: ["Vein", "Capillary", "Artery", "Valve"], ans: 2 },
            { q: "What is the role of chlorophyll?", opts: ["Absorb sunlight", "Store water", "Transport sugar", "Protect roots"], ans: 0 },
            { q: "Which genetic cross produces a 3:1 ratio?", opts: ["Test cross", "Monohybrid cross", "Dihybrid cross", "Back cross"], ans: 1 },
            { q: "What type of reproduction involves one parent?", opts: ["Sexual reproduction", "Binary fusion", "Asexual reproduction", "Pollination"], ans: 2 },
            { q: "Which kingdom includes bacteria?", opts: ["Protista", "Fungi", "Monera", "Plantae"], ans: 2 },
            { q: "What is the primary function of the large intestine?", opts: ["Digest proteins", "Absorb water", "Pump blood", "Produce enzymes"], ans: 1 },
            { q: "Which biome is characterized by low rainfall and extreme temperatures?", opts: ["Tundra", "Rainforest", "Desert", "Savanna"], ans: 2 },
            { q: "What molecule carries genetic instructions?", opts: ["RNA", "DNA", "Protein", "Lipid"], ans: 1 },
            { q: "Which process forms gametes in humans?", opts: ["Mitosis", "Binary fission", "Meiosis", "Budding"], ans: 2 },
            { q: "Which part of the brain controls balance?", opts: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"], ans: 1 },
            { q: "What is mutualism?", opts: ["One benefits, one harmed", "Both benefit", "Neither benefits", "One benefits, other unaffected"], ans: 1 },
            { q: "Which hormone regulates blood sugar?", opts: ["Adrenaline", "Insulin", "Estrogen", "Thyroxine"], ans: 1 },
            { q: "What is the main nitrogenous waste in humans?", opts: ["Ammonia", "Urea", "Uric acid", "Carbon dioxide"], ans: 1 },
            { q: "Which plant tissue transports water?", opts: ["Phloem", "Xylem", "Cambium", "Epidermis"], ans: 1 },
            { q: "What is the role of decomposers?", opts: ["Produce food", "Break down dead matter", "Hunt prey", "Store energy"], ans: 1 },
            { q: "Which pathogen causes malaria?", opts: ["Virus", "Bacterium", "Protozoan", "Fungus"], ans: 2 },
            { q: "Which stage of mitosis separates sister chromatids?", opts: ["Prophase", "Metaphase", "Anaphase", "Telophase"], ans: 2 },
            { q: "What is an adaptation?", opts: ["Random behavior", "Inherited survival trait", "Temporary change", "Learned skill"], ans: 1 }
        ],
        hard: [
            { q: "Which phase of the cell cycle involves DNA replication?", opts: ["G1 phase", "S phase", "G2 phase", "M phase"], ans: 1 },
            { q: "What is the function of tRNA in protein synthesis?", opts: ["Store DNA", "Carry amino acids", "Form ribosomes", "Break proteins"], ans: 1 },
            { q: "Which blood type is known as the universal donor?", opts: ["A", "B", "AB", "O negative"], ans: 3 },
            { q: "What is genetic drift?", opts: ["Gene mutation by radiation", "Random allele frequency change", "Migration of species", "Natural selection"], ans: 1 },
            { q: "Which structure regulates substances entering and leaving the cell?", opts: ["Cell wall", "Nucleus", "Cell membrane", "Cytoskeleton"], ans: 2 },
            { q: "Which enzyme unzips DNA during replication?", opts: ["Ligase", "Helicase", "Polymerase", "Amylase"], ans: 1 },
            { q: "What type of immunity results from vaccination?", opts: ["Passive natural", "Passive artificial", "Active artificial", "Active natural"], ans: 2 },
            { q: "Which ecological pyramid is always upright?", opts: ["Numbers", "Biomass", "Energy", "Population"], ans: 2 },
            { q: "Which hormone triggers ovulation?", opts: ["FSH", "LH", "Progesterone", "Testosterone"], ans: 1 },
            { q: "What is the Hardy-Weinberg principle used to measure?", opts: ["Mutation rate", "Population genetic equilibrium", "Speciation speed", "Ecosystem growth"], ans: 1 },
            { q: "Which organelle modifies and packages proteins?", opts: ["Golgi apparatus", "Lysosome", "Mitochondrion", "Vacuole"], ans: 0 },
            { q: "Which disease is caused by HIV?", opts: ["Tuberculosis", "AIDS", "Malaria", "Hepatitis"], ans: 1 },
            { q: "What is coevolution?", opts: ["Extinction event", "Species evolving independently", "Mutual evolutionary influence", "Migration pattern"], ans: 2 },
            { q: "Which type of RNA forms part of the ribosome?", opts: ["mRNA", "tRNA", "rRNA", "siRNA"], ans: 2 },
            { q: "What is the main function of stomata?", opts: ["Photosynthesis", "Gas exchange", "Water storage", "Support"], ans: 1 },
            { q: "Which process increases genetic variation during meiosis?", opts: ["Binary fission", "Crossing over", "Budding", "Cloning"], ans: 1 },
            { q: "Which biomolecule is the main component of cell membranes?", opts: ["Proteins", "Carbohydrates", "Lipids", "Nucleic acids"], ans: 2 },
            { q: "What is antibiotic resistance?", opts: ["Body rejects drugs", "Bacteria survive antibiotics", "Virus mutation", "Immune weakness"], ans: 1 },
            { q: "Which cycle describes movement of carbon through ecosystems?", opts: ["Nitrogen cycle", "Water cycle", "Carbon cycle", "Oxygen cycle"], ans: 2 },
            { q: "What mechanism drives evolution by favoring beneficial traits?", opts: ["Mutation", "Natural selection", "Genetic drift", "Gene flow"], ans: 1 }
        ]
    },
    chemistry: {
        easy: [
            { q: "Which state of matter has a fixed shape and fixed volume?", opts: ["Liquid", "Gas", "Solid", "Plasma"], ans: 2 },
            { q: "What is the chemical symbol for oxygen?", opts: ["Ox", "O", "Og", "Om"], ans: 1 },
            { q: "Which particle has a positive charge?", opts: ["Electron", "Neutron", "Proton", "Photon"], ans: 2 },
            { q: "What is water an example of?", opts: ["Element", "Mixture", "Compound", "Metal"], ans: 2 },
            { q: "Which tool is used to measure liquid volume in a lab?", opts: ["Thermometer", "Balance", "Graduated cylinder", "Bunsen burner"], ans: 2 },
            { q: "What happens to most substances when heated?", opts: ["They shrink", "They expand", "They disappear", "They freeze"], ans: 1 },
            { q: "Which of these is a metal?", opts: ["Oxygen", "Iron", "Carbon", "Sulfur"], ans: 1 },
            { q: "What is the pH of a neutral solution?", opts: ["0", "7", "10", "14"], ans: 1 },
            { q: "Which gas do humans breathe in for respiration?", opts: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"], ans: 2 },
            { q: "What is table salt chemically known as?", opts: ["Sodium chloride", "Potassium nitrate", "Calcium carbonate", "Magnesium sulfate"], ans: 0 },
            { q: "Which part of the atom has no charge?", opts: ["Proton", "Electron", "Neutron", "Nucleus"], ans: 2 },
            { q: "Which state of matter has no fixed shape or volume?", opts: ["Solid", "Liquid", "Gas", "Ice"], ans: 2 },
            { q: "What type of mixture is salt dissolved in water?", opts: ["Compound", "Solution", "Element", "Suspension"], ans: 1 },
            { q: "Which of these is an acid?", opts: ["Sodium hydroxide", "Hydrochloric acid", "Ammonia", "Calcium oxide"], ans: 1 },
            { q: "What safety equipment protects your eyes in a lab?", opts: ["Gloves", "Apron", "Goggles", "Helmet"], ans: 2 },
            { q: "Which element is needed for combustion?", opts: ["Helium", "Oxygen", "Nitrogen", "Argon"], ans: 1 },
            { q: "What is the center of an atom called?", opts: ["Shell", "Orbit", "Core", "Nucleus"], ans: 3 },
            { q: "Which of these is a non-metal?", opts: ["Copper", "Aluminum", "Chlorine", "Zinc"], ans: 2 },
            { q: "What does a catalyst do in a reaction?", opts: ["Stops it", "Speeds it up", "Changes products", "Gets used up"], ans: 1 },
            { q: "Which organic compound group contains only carbon and hydrogen?", opts: ["Alcohols", "Hydrocarbons", "Acids", "Salts"], ans: 1 }
        ],
        medium: [
            { q: "Which subatomic particle determines the atomic number?", opts: ["Neutron", "Electron", "Proton", "Isotope"], ans: 2 },
            { q: "What type of bond involves sharing electrons?", opts: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"], ans: 1 },
            { q: "Which periodic table group contains noble gases?", opts: ["Group 1", "Group 7", "Group 17", "Group 18"], ans: 3 },
            { q: "What is formed when an acid reacts with a base?", opts: ["Metal", "Salt and water", "Gas only", "Oxygen"], ans: 1 },
            { q: "Which factor generally increases solubility of solids in liquids?", opts: ["Lower temperature", "Higher pressure", "Stirring", "Cooling"], ans: 2 },
            { q: "What is the molar mass of an element based on?", opts: ["Number of neutrons", "Atomic mass", "Atomic radius", "Electron shells"], ans: 1 },
            { q: "Which hydrocarbon has only single bonds?", opts: ["Alkene", "Alkyne", "Alkane", "Alcohol"], ans: 2 },
            { q: "What is the chemical formula for methane?", opts: ["CH4", "C2H6", "CO2", "CH3OH"], ans: 0 },
            { q: "Which lab equipment measures mass?", opts: ["Beaker", "Balance", "Thermometer", "Pipette"], ans: 1 },
            { q: "What type of reaction is combustion?", opts: ["Decomposition", "Synthesis", "Oxidation", "Neutralization"], ans: 2 },
            { q: "Which element is located in Period 2?", opts: ["Sodium", "Calcium", "Carbon", "Iron"], ans: 2 },
            { q: "What charge do electrons carry?", opts: ["Positive", "Negative", "Neutral", "Variable"], ans: 1 },
            { q: "Which solution has a pH less than 7?", opts: ["Basic", "Neutral", "Acidic", "Salty"], ans: 2 },
            { q: "What is an isotope?", opts: ["Same protons, different neutrons", "Same neutrons, different protons", "Different element entirely", "Charged atom"], ans: 0 },
            { q: "Which metal is liquid at room temperature?", opts: ["Mercury", "Iron", "Copper", "Aluminum"], ans: 0 },
            { q: "What happens during a chemical reaction?", opts: ["Atoms are destroyed", "New substances form", "Mass disappears", "Only color changes"], ans: 1 },
            { q: "Which gas is commonly produced in acid-metal reactions?", opts: ["Oxygen", "Hydrogen", "Nitrogen", "Chlorine"], ans: 1 },
            { q: "What functional group defines alcohols?", opts: ["-COOH", "-OH", "-NH2", "-CHO"], ans: 1 },
            { q: "Which property is typical of non-metals?", opts: ["High conductivity", "Malleability", "Brittleness", "Shininess"], ans: 2 },
            { q: "What does the law of conservation of mass state?", opts: ["Mass increases", "Mass decreases", "Mass is conserved", "Mass changes form"], ans: 2 }
        ],
        hard: [
            { q: "Which quantum number describes the shape of an orbital?", opts: ["Principal", "Angular momentum", "Magnetic", "Spin"], ans: 1 },
            { q: "What type of hybridization occurs in methane?", opts: ["sp", "sp2", "sp3", "sp3d"], ans: 2 },
            { q: "Which intermolecular force is strongest?", opts: ["London dispersion", "Dipole-dipole", "Hydrogen bonding", "Van der Waals"], ans: 2 },
            { q: "What is the oxidation state of sulfur in H2SO4?", opts: ["+4", "+6", "-2", "+2"], ans: 1 },
            { q: "Which principle states that no two electrons share the same set of quantum numbers?", opts: ["Aufbau principle", "Pauli exclusion principle", "Hund's rule", "Octet rule"], ans: 1 },
            { q: "What is the pH of a 0.01 M HCl solution (approx)?", opts: ["1", "2", "7", "12"], ans: 1 },
            { q: "Which process converts a solid directly to gas?", opts: ["Condensation", "Deposition", "Sublimation", "Fusion"], ans: 2 },
            { q: "What is the empirical formula of C6H12O6?", opts: ["CH2O", "C2H4O2", "C3H6O3", "CHO"], ans: 0 },
            { q: "Which metal is most reactive among alkali metals?", opts: ["Lithium", "Sodium", "Potassium", "Cesium"], ans: 3 },
            { q: "What type of reaction involves electron transfer?", opts: ["Acid-base", "Redox", "Synthesis", "Decomposition"], ans: 1 },
            { q: "Which gas law relates pressure and volume inversely?", opts: ["Charles's Law", "Boyle's Law", "Avogadro's Law", "Ideal Gas Law"], ans: 1 },
            { q: "What is the geometry of a molecule with 4 bonding pairs and no lone pairs?", opts: ["Trigonal planar", "Tetrahedral", "Linear", "Octahedral"], ans: 1 },
            { q: "Which compound is an example of an ester?", opts: ["CH3COOH", "CH3CH2OH", "CH3COOCH3", "CH4"], ans: 2 },
            { q: "What does Le Chatelier's principle predict?", opts: ["Reaction speed", "Equilibrium shifts", "Bond energy", "Atomic radius"], ans: 1 },
            { q: "Which particle is emitted in beta decay?", opts: ["Proton", "Electron", "Neutron", "Alpha particle"], ans: 1 },
            { q: "What is the main component of natural gas?", opts: ["Ethane", "Propane", "Methane", "Butane"], ans: 2 },
            { q: "Which acid is considered a strong acid?", opts: ["Acetic acid", "Carbonic acid", "Hydrochloric acid", "Citric acid"], ans: 2 },
            { q: "What is the coordination number in NaCl crystal structure?", opts: ["4", "6", "8", "12"], ans: 1 },
            { q: "Which technique separates components based on boiling points?", opts: ["Filtration", "Chromatography", "Distillation", "Decanting"], ans: 2 },
            { q: "What is the bond angle in a trigonal planar molecule?", opts: ["90°", "109.5°", "120°", "180°"], ans: 2 }
        ]
    },
    physics: {
        easy: [
            { q: "What force pulls objects toward Earth?", opts: ["Magnetism", "Friction", "Gravity", "Electricity"], ans: 2 },
            { q: "Which type of energy does a moving object have?", opts: ["Potential energy", "Chemical energy", "Kinetic energy", "Heat energy"], ans: 2 },
            { q: "What is the unit of force?", opts: ["Joule", "Newton", "Watt", "Pascal"], ans: 1 },
            { q: "Which simple machine is a seesaw?", opts: ["Pulley", "Lever", "Wheel and axle", "Inclined plane"], ans: 1 },
            { q: "What happens to the speed of an object if no forces act on it?", opts: ["It stops", "It speeds up", "It stays constant", "It falls"], ans: 2 },
            { q: "Which form of energy is stored in a stretched rubber band?", opts: ["Kinetic", "Sound", "Elastic potential", "Light"], ans: 2 },
            { q: "What is used to measure temperature?", opts: ["Barometer", "Thermometer", "Voltmeter", "Ammeter"], ans: 1 },
            { q: "Which wave can travel through space?", opts: ["Sound wave", "Water wave", "Light wave", "Seismic wave"], ans: 2 },
            { q: "What is the push or pull on an object called?", opts: ["Energy", "Mass", "Force", "Power"], ans: 2 },
            { q: "Which material is attracted to a magnet?", opts: ["Plastic", "Wood", "Iron", "Glass"], ans: 2 },
            { q: "What type of mirror shows a clear reflection?", opts: ["Rough mirror", "Plane mirror", "Paper", "Rubber"], ans: 1 },
            { q: "What happens to sound in a vacuum?", opts: ["It speeds up", "It slows down", "It cannot travel", "It echoes"], ans: 2 },
            { q: "Which energy source gives us light and heat from the Sun?", opts: ["Nuclear energy", "Wind energy", "Solar energy", "Sound energy"], ans: 2 },
            { q: "What is the boiling point of water in Celsius at sea level?", opts: ["50°C", "100°C", "0°C", "212°C"], ans: 1 },
            { q: "Which quantity tells how heavy something feels due to gravity?", opts: ["Mass", "Volume", "Weight", "Density"], ans: 2 },
            { q: "What carries electric current in wires?", opts: ["Protons", "Neutrons", "Electrons", "Photons"], ans: 2 },
            { q: "Which simple machine helps lift a bucket from a well?", opts: ["Lever", "Pulley", "Wedge", "Screw"], ans: 1 },
            { q: "What is friction?", opts: ["A pulling force", "A pushing force", "A force that opposes motion", "Stored energy"], ans: 2 },
            { q: "Which property tells how tightly matter is packed?", opts: ["Speed", "Density", "Temperature", "Voltage"], ans: 1 },
            { q: "What is energy measured in?", opts: ["Watts", "Newtons", "Joules", "Amperes"], ans: 2 }
        ],
        medium: [
            { q: "Which Newton's law states that force equals mass times acceleration?", opts: ["First law", "Second law", "Third law", "Law of gravitation"], ans: 1 },
            { q: "What happens to pressure when the area decreases for the same force?", opts: ["It decreases", "It increases", "It stays same", "It becomes zero"], ans: 1 },
            { q: "Which wave property determines pitch of a sound?", opts: ["Amplitude", "Frequency", "Speed", "Wavelength"], ans: 1 },
            { q: "What is the formula for density?", opts: ["Mass × Volume", "Mass ÷ Volume", "Volume ÷ Mass", "Force ÷ Area"], ans: 1 },
            { q: "Which lens converges light rays?", opts: ["Concave lens", "Convex lens", "Plane mirror", "Flat glass"], ans: 1 },
            { q: "What type of heat transfer occurs in liquids and gases?", opts: ["Conduction", "Radiation", "Convection", "Reflection"], ans: 2 },
            { q: "What is the SI unit of electric current?", opts: ["Volt", "Ampere", "Ohm", "Watt"], ans: 1 },
            { q: "Which energy transformation occurs in a flashlight?", opts: ["Light to heat", "Chemical to light", "Sound to light", "Heat to motion"], ans: 1 },
            { q: "What is momentum equal to?", opts: ["Mass × velocity", "Force × time", "Mass ÷ velocity", "Velocity ÷ mass"], ans: 0 },
            { q: "Which color of light has the shortest wavelength?", opts: ["Red", "Green", "Blue", "Violet"], ans: 3 },
            { q: "What does a transformer change in an electric circuit?", opts: ["Current only", "Resistance only", "Voltage", "Frequency"], ans: 2 },
            { q: "Which simple machine is a ramp?", opts: ["Wedge", "Inclined plane", "Lever", "Pulley"], ans: 1 },
            { q: "What is the acceleration due to gravity on Earth (approx)?", opts: ["5 m/s²", "9.8 m/s²", "15 m/s²", "20 m/s²"], ans: 1 },
            { q: "What happens to kinetic energy when speed doubles?", opts: ["It doubles", "It triples", "It quadruples", "It halves"], ans: 2 },
            { q: "Which instrument measures atmospheric pressure?", opts: ["Thermometer", "Barometer", "Voltmeter", "Hygrometer"], ans: 1 },
            { q: "What type of mirror is used in car side mirrors?", opts: ["Plane", "Convex", "Concave", "Flat"], ans: 1 },
            { q: "Which law states that every action has an equal and opposite reaction?", opts: ["First law", "Second law", "Third law", "Ohm's law"], ans: 2 },
            { q: "What is electrical resistance measured in?", opts: ["Ohms", "Volts", "Amps", "Watts"], ans: 0 },
            { q: "Which factor increases gravitational force?", opts: ["Greater distance", "Smaller masses", "Larger masses", "Zero mass"], ans: 2 },
            { q: "What type of energy is stored in a raised object?", opts: ["Thermal", "Kinetic", "Gravitational potential", "Sound"], ans: 2 }
        ],
        hard: [
            { q: "What is the universal gravitational constant symbol?", opts: ["g", "G", "k", "R"], ans: 1 },
            { q: "Which equation represents Ohm's Law?", opts: ["V = IR", "P = IV", "F = ma", "E = mc²"], ans: 0 },
            { q: "What is the work done when force is applied at 90 degrees to motion?", opts: ["Maximum", "Half", "Zero", "Double"], ans: 2 },
            { q: "Which phenomenon explains bending of light in water?", opts: ["Reflection", "Diffraction", "Refraction", "Dispersion"], ans: 2 },
            { q: "What is the unit of power?", opts: ["Joule", "Newton", "Watt", "Pascal"], ans: 2 },
            { q: "Which wave type requires a medium to travel?", opts: ["Electromagnetic", "Light", "Mechanical", "Radio"], ans: 2 },
            { q: "What is the escape velocity dependent on?", opts: ["Color of object", "Mass and radius of planet", "Temperature", "Speed of light"], ans: 1 },
            { q: "Which law explains conservation of energy?", opts: ["Newton's first law", "Law of inertia", "First law of thermodynamics", "Coulomb's law"], ans: 2 },
            { q: "What is capacitance measured in?", opts: ["Farads", "Henrys", "Teslas", "Webers"], ans: 0 },
            { q: "Which quantity is a vector?", opts: ["Speed", "Distance", "Velocity", "Energy"], ans: 2 },
            { q: "What happens to pressure with increasing depth in a fluid?", opts: ["Decreases", "Remains constant", "Increases", "Becomes zero"], ans: 2 },
            { q: "Which optical defect is corrected by a concave lens?", opts: ["Hyperopia", "Myopia", "Astigmatism", "Presbyopia"], ans: 1 },
            { q: "What is the frequency of a wave with period 0.5 s?", opts: ["0.5 Hz", "1 Hz", "2 Hz", "4 Hz"], ans: 2 },
            { q: "Which field surrounds a moving electric charge?", opts: ["Gravitational field", "Magnetic field", "Thermal field", "Sound field"], ans: 1 },
            { q: "What is the SI unit of pressure?", opts: ["Pascal", "Newton", "Joule", "Watt"], ans: 0 },
            { q: "Which principle explains buoyant force?", opts: ["Pascal's principle", "Bernoulli's principle", "Archimedes' principle", "Hooke's law"], ans: 2 },
            { q: "What is the relationship between wavelength and frequency?", opts: ["Directly proportional", "Inversely proportional", "Equal", "Unrelated"], ans: 1 },
            { q: "Which quantity remains constant in uniform circular motion?", opts: ["Velocity", "Speed", "Acceleration", "Force direction"], ans: 1 },
            { q: "What type of energy is associated with random motion of particles?", opts: ["Kinetic", "Thermal", "Mechanical", "Nuclear"], ans: 1 },
            { q: "Which equation calculates gravitational force between two masses?", opts: ["F = ma", "F = Gm1m2/r2", "P = IV", "E = hf"], ans: 1 }
        ]
    },
}

// State
let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let selectedTopic = '';
let selectedDifficulty = 'medium';
let selectedAnswers = [];
let timeRemaining = 0;
let timerInterval = null;
let startTime = 0;

// Progress Bar Helper
function updateProgressBar(current, total) {
    const bar = document.getElementById('progressBarFill');
    if (bar && total > 0) {
        const percent = Math.max(0, Math.min(100, (current / total) * 100));
        bar.style.width = percent + '%';
    }
}

// Elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');

const numQuestionsInput = document.getElementById('numQuestions');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');
const topicBtns = document.querySelectorAll('.topic-btn');
const startBtn = document.getElementById('startbtn');
const nextBtn = document.getElementById('nextBtn');
const quitBtn = document.getElementById('quitBtn');
const restartBtn = document.getElementById('restartBtn');

// Event Listeners
topicBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        topicBtns.forEach(b => b.classList.remove('selected'))
        btn.classList.add('selected')
        selectedTopic = btn.dataset.topic
    });
});

difficultyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        difficultyBtns.forEach(b => b.classList.remove('selected'))
        btn.classList.add('selected')
        selectedDifficulty = btn.dataset.difficulty
    });
});

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
quitBtn.addEventListener('click', quitQuiz);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    if (!selectedTopic) {
        alert('Please Select a Topic')
        return;
    }

    const numQuestion = parseInt(numQuestionsInput.value)
    if (numQuestion < 5 || numQuestion > 20) {
        alert('Please enter a number between 5 and 20!');
        return;
    }

    // Get questions
    const topicQuestions = quizData[selectedTopic][selectedDifficulty];
    currentQuiz = [];
    while (currentQuiz.length < numQuestion && currentQuiz.length < topicQuestions.length) {
        const randomQuestion = topicQuestions[Math.floor(Math.random() * topicQuestions.length)];
        if (!currentQuiz.includes(randomQuestion)) {
            currentQuiz.push(randomQuestion);
        }
    }

    currentQuestion = 0;
    score = 0;
    selectedAnswers = new Array(currentQuiz.length).fill(null);
    startTime = Date.now();

    // Start timer
    timeRemaining = currentQuiz.length * 20; // 20 secs per question
    startTimer();

    showScreen('quiz');
    displayQuestion();
}

function startTimer() {
    const timerEl = document.getElementById('timer');
    timerInterval = setInterval(() => {
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timeRemaining <= 30) {
            timerEl.classList.add('warning');
        } else {
            timerEl.classList.remove('warning');
        }

        if (timeRemaining <= 0) {
            finishQuiz();
        }
    }, 1000);
}

function displayQuestion() {
    const question = currentQuiz[currentQuestion];

    document.getElementById('questionText').textContent = question.q;
    document.getElementById('currentQuestion').textContent = currentQuestion + 1;
    document.getElementById('totalQuestions').textContent = currentQuiz.length;
    updateProgressBar(currentQuestion + 1, currentQuiz.length);

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    // 🔀 Create a shuffled copy of options (without mutating original)
    const shuffledOptions = question.opts
        .map((option, index) => ({ option, originalIndex: index }))
        .sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(({ option, originalIndex }) => {
        const optionWrapper = document.createElement('label');
        optionWrapper.className = 'option';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.value = originalIndex;

        if (selectedAnswers[currentQuestion] === originalIndex) {
            radio.checked = true;
            optionWrapper.classList.add('selected');
        }

        radio.addEventListener('change', () => {
            selectedAnswers[currentQuestion] = originalIndex;
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });

            optionWrapper.classList.add('selected');
        });

        const textSpan = document.createElement('span');
        textSpan.textContent = option;

        optionWrapper.appendChild(radio);
        optionWrapper.appendChild(textSpan);

        optionsContainer.appendChild(optionWrapper);
    });

    nextBtn.textContent =
        currentQuestion === currentQuiz.length - 1
            ? 'Finish Quiz'
            : 'Next Question';
}


function nextQuestion() {
    if (selectedAnswers[currentQuestion] !== null) {
        if (currentQuestion < currentQuiz.length - 1) {
            currentQuestion++;
            displayQuestion();
        } else {
            finishQuiz();
        }
    } else {
        alert('Please select an answer!');
    }
}

function finishQuiz() {
    clearInterval(timerInterval);
    calculateScore();
    showScreen('results');
}

function calculateScore() {
    score = 0;
    selectedAnswers.forEach((answer, index) => {
        if (answer === currentQuiz[index].ans) {
            score++;
        }
    });

    const percentage = Math.round((score / currentQuiz.length) * 100);
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;

    let message = '';
    let passed = false;
    if (percentage === 100) {
        message = `🌟 Outstanding! You achieved a perfect score!<br>True mastery is the result of dedication and effort. Keep shining!`;
        passed = true;
    } else if (percentage >= 80) {
        message = `🎉 Excellent work!<br>You are on the path to greatness. Keep pushing your limits and aim for the stars!`;
        passed = true;
    } else if (percentage >= 60) {
        message = `👍 Good job!<br>Your hard work is paying off. Review your mistakes and come back even stronger!`;
        passed = true;
    } else if (percentage >= 40) {
        message = `📚 Not bad!<br>Every attempt is a step forward. Keep learning and success will follow!`;
    } else {
        message = `💪 Don't give up!<br>Failure is not the opposite of success, it's part of success. Review, retry, and you'll achieve your goals!`;
    }

    document.getElementById('finalScore').textContent = `${score}/${currentQuiz.length}`;
    document.getElementById('scoreMessage').innerHTML = message;
    document.getElementById('correctCount').textContent = score;
    document.getElementById('wrongCount').textContent = currentQuiz.length - score;
    document.getElementById('percentage').textContent = `${percentage}%`;
    document.getElementById('timeTaken').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('topicResult').textContent = selectedTopic.charAt(0).toUpperCase() + selectedTopic.slice(1);

    // Play sound and show effect
    setTimeout(() => {
        if (passed) {
            launchConfetti();
            const passSound = document.getElementById('passSound');
            if (passSound) {
                passSound.pause();
                passSound.currentTime = 0;
                passSound.volume = 1;
                passSound.play().catch(() => {});
            }
        } else if (percentage < 50) {
            if (typeof launchFailEffect === 'function') launchFailEffect();
            const failSound = document.getElementById('failSound');
            if (failSound) {
                failSound.pause();
                failSound.currentTime = 0;
                failSound.volume = 1;
                failSound.play().catch(() => {});
            }
        }
    }, 100);
}

function quitQuiz() {
    if (confirm('Are you sure you want to quit? Your progress will be lost.')) {
        clearInterval(timerInterval);
        restartQuiz();
    }
}

function restartQuiz() {
    currentQuiz = [];
    currentQuestion = 0;
    score = 0;
    selectedTopic = '';
    selectedDifficulty = 'medium';
    selectedAnswers = [];
    timeRemaining = 0;
    clearInterval(timerInterval);

    // Reset UI
    topicBtns.forEach(btn => btn.classList.remove('selected'));
    difficultyBtns.forEach(btn => btn.classList.remove('selected'));
    difficultyBtns[1].classList.add('selected');
    numQuestionsInput.value = '10';

    showScreen('start');
}

function showScreen(screen) {
    startScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultsScreen.classList.remove('active');

    if (screen === 'start') startScreen.classList.add('active');
    else if (screen === 'quiz') quizScreen.classList.add('active');
    else if (screen === 'results') resultsScreen.classList.add('active');

}

// Initialize
difficultyBtns[1].classList.add('selected');



function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = [];
    const colors = [  
    '#4F46E5', // Indigo  
    '#ffd000', // Soft Blue  
    '#8B5CF6', // Purple  
    '#FFD700', // Gold  
    '#F9FAFB', // Soft White  
];
    for (let i = 0; i < 150; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,  // random across top
            y: -20,                            // start above screen
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedX: (Math.random() - 0.5) * 2,  // small side movement
            speedY: Math.random() * 3 + 2,     // falling speed
            gravity: 0.05,
            rotation: Math.random() * 360
        });
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confettiPieces.forEach((piece, index) => {
            piece.speedY += piece.gravity;
            piece.x += piece.speedX;
            piece.y += piece.speedY;
            piece.rotation += 5;

            ctx.save();
            ctx.translate(piece.x, piece.y);
            ctx.rotate(piece.rotation * Math.PI / 180);
            ctx.fillStyle = piece.color;
            ctx.beginPath();
            ctx.arc(0, 0, piece.size / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            if (piece.y > canvas.height) {
                confettiPieces.splice(index, 1);
            }
        });

        if (confettiPieces.length > 0) {
            requestAnimationFrame(update);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    update();
}

const guidelineModal = document.getElementById('guidelineModal');
const confirmBtn = document.getElementById('confirmGuidelines');

confirmBtn.addEventListener('click', () => {
    guidelineModal.style.display = 'none';
});

const toggleReviewBtn = document.getElementById('toggleReviewBtn');
const quizReview = document.getElementById('quizReview');

toggleReviewBtn.addEventListener('click', () => {

    const isVisible = quizReview.style.display === 'block';

    if (quizReview.style.display === 'none') {
        renderQuizReview(); // Render each time user opens it
        quizReview.style.display = 'block';
    } else {
        quizReview.style.display = 'none';
    }

    quizReview.style.display = isVisible ? 'none' : 'block';
    toggleReviewBtn.textContent = isVisible ? '⬇ Show Question Review ⬇' : '⬆ Hide Question Review ⬆';
});


function renderQuizReview() {
    quizReview.innerHTML = ''; // Clear previous content

    currentQuiz.forEach((question, qIndex) => {
        const questionWrapper = document.createElement('div');
        questionWrapper.style.marginBottom = '15px';
        questionWrapper.style.padding = '8px';
        questionWrapper.style.borderRadius = '5px';
        questionWrapper.style.backgroundColor = '#f9f9f9'; // subtle background
        questionWrapper.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';

        const questionTitle = document.createElement('div');
        questionTitle.textContent = `${qIndex + 1}. ${question.q}`;
        questionTitle.style.fontWeight = '500';
        questionTitle.style.marginBottom = '6px';
        questionWrapper.appendChild(questionTitle);

        question.opts.forEach((option, oIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.textContent = option;
            optionDiv.style.padding = '4px 8px';
            optionDiv.style.borderRadius = '4px';
            optionDiv.style.marginBottom = '3px';
            optionDiv.style.fontSize = '0.95rem';
            optionDiv.style.transition = 'background 0.3s';

            const selected = selectedAnswers[qIndex];
            const correct = question.ans;

            if (oIndex === correct) {
                // correct answer, soft highlight
                optionDiv.style.backgroundColor = '#e0f2f1'; // soft greenish
                optionDiv.style.fontWeight = '500';
            }

            if (selected !== undefined && oIndex === selected && selected !== correct) {
                // user chose wrong, subtle highlight
                optionDiv.style.backgroundColor = '#fce4ec'; // soft pinkish
            }

            questionWrapper.appendChild(optionDiv);
        });

        quizReview.appendChild(questionWrapper);
    });
}
