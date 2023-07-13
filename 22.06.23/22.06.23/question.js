const questions = [
    {
        index: 2,
        question: 'How Familiar are you with the Keto Diet?',
        amount: '(Select one only)',
        answers: [
            'Not Familiar At All',
            'I Know The Basics',
            "I'm A Doctor Or Physician And Need A Plan",
        ],
        type: 'oneOfMany',
    },
    {
        index: 3,
        question: 'How Keto Works...',
        answers: [
            'Quick Tips',
            'The Keto Diet is a low carb, high fat, moderate protein diet. When you eat according to this plan, your metabolism switches to burning stored body fat for energy.',
            'The keto diet has been shown to reduce and stabilize blood sugar, help immunity and promote weight loss. The keto diet works for many people who have not had success losing weight in the past.',
            'Clinical Benefits Of The Keto Diet',
            'img/Component 4.svg',
            'Weight Loss And Anti-Aging',
            '- Harvard 2018 Study, Cell Metab 2017',
            'Boost Immune Response',
            '- Science Immunology Yale 2019 Study ',
            'Help Regulate Blood Sugar',
            '- London 2005 Study',
            'Reduce Cholesterol And Triglycerides',
            '- Clinical Cardiology 2004 Study',
            'Improve Mood, Wellbeing & Quality Of Life',
            '- Neuroscience 2018 Study ',
            'Reduced Blood Pressure',
            '- Archives of Internal Medicine 2010 Study',
            'Got It, Next',
        ],
        type: 'manual',

    },
    {
        index: 4,
        question: 'Which meats would you like to be included in your meal plan?',
        amount: '(Select as many as you like)',
        answers: [
            ['Chicken', 'img/chicken.svg'],
            ['Pork', 'img/pork.svg'],
            ['Beef', 'img/beef.svg'],
            ['Fish', 'img/fish.svg'],
            ['Bacon', 'img/bacon.svg'],
            ['No Meat', 'img/nomeat.svg'],
        ],
        type: 'manyOfMany',
    },
    {
        index: 5,
        question: 'Which vegetables would you like to be included in your meal plan?',
        amount: '(Select as many as you like)',
        answers: [
            ['Broccoli', 'img/broccoli.svg'],
            ['Mushrooms', 'img/mushrooms.svg'],
            ['Zucchini', 'img/zucchini.svg'],
            ['Cauliflower', 'img/cauliflower.svg'],
            ['Asparagus', 'img/asparagus.svg'],
            ['Avocado', 'img/avocado.svg'],
        ],
        type: 'manyOfMany',
    },
    {
        index: 6,
        question: 'Would you like to AVOID any of the following?',
        amount: '(Select as many as you like)',
        answers: [
            ['Egg', 'img/egg.svg'],
            ['Nuts', 'img/nuts.svg'],
            ['Cheese', 'img/cheese.svg'],
            ['Butter', 'img/butter.svg'],
            ['Coconut', 'img/coconut.svg'],
            ['Tofu', 'img/tofu.svg'],
        ],
        type: 'manyOfMany',
    },
    {
        index: 7,
        question: "What's your level of daily activity?",
        amount: '(Select one only)',
        answers: [
            ['INACTIVE', 'Very little daily activity'],
            ['LIGHT', 'Desk job with occasional walks'],
            ['MODERATE', 'Active day job or regular exercise'],
            ['HEAVY', 'Intense daily activity or exercise'],
        ],
        type: 'oneOfMore',
    },
    {
        index: 8,
        question: "Which time of the day do you feel most tired?",
        amount: '(Important)',
        answers: [
            'Early Morning',
            'After Lunch',
            'After Dinner',
            'Not Until Bed Time',
        ],
        type: 'oneOfMany',
    },
    {
        index: 9,
        question: "How often do you experience digestive upsets?",
        desc: "E.g: bloating, cramps, constipation, diarrhea Your digestion plays an important role in converting food into energy.",
        amount: '(Select one only)',
        answers: [
            'Never',
            'A Couple Times Per Month',
            'Twice A Week Or More',
            'Daily',
        ],
        type: 'oneOfMany',
    },
    {
        index: 10,
        question: "How often do you have uncontrollable cravings for specific foods?",
        desc: "Your level of cravings tell us a lot about your metabolic health, and will help decode what your body is trying to tell you.",
        amount: '(Select one only)',
        answers: [
            'Once A Month Or Less',
            'On A Weekly Basis',
            'A Few Times Per Week / Daily',
        ],
        type: 'oneOfMany',
    },
    {
        index: 11,
        question: "Which type of foods do you crave the most?",
        desc: "This will give us information about which 'fat burning foods' your body might respond to best.",
        amount: '(Select one only)',
        answers: [
            'Carbs E.g. Bread, Pasta, Rice, Fried Foods',
            'Sweets E.g. Candy, Chocolate, Ice Cream, Cake',
            'Red Meat E.g. Burgers Or A Steak',
            'No Cravings',
        ],
        type: 'oneOfMany',
    },
    {
        index: 12,
        question: "Are you affected by the following?",
        amount: '(Select one only)',
        answers: [
            'Excessive Thirst',
            'Frequent Urination',
            'Blurry Vision',
            'None',
        ],
        type: 'oneOfMany',
    },
    {
        index: 13,
        question: "Do you experience any of the following problems?",
        amount: '(Select one only)',
        answers: [
            'Swollen Legs, Ankles, Or Feet',
            'Skin Rashes Or Flare Ups',
            'Depression Or Feeling Isolated',
            'None',
        ],
        type: 'oneOfMany',
    },
    {
        index: 14,
        question: "Experienced any of the following changes recently?",
        amount: '(Select one only)',
        answers: [
            'Childbirth',
            'Major Gain In Weight (25 lbs or more)',
            'Major Loss In Weight (25 lbs or more)',
            'Menopause',
            'None Of The Above',
        ],
        type: 'oneOfMany',
    },
    {
        index: 15,
        question: "What are your goals for this meal plan?",
        amount: '(Select as many as you like)',
        answers: [
            'MORE ENERGY',
            'BETTER SLEEP',
            'BECOME LEAN & TONED',
            'INCREASE STRENGTH',
            'IMPROVE DIGESTION',
            'IMPROVE METABOLISM',
            'BURN FAT FOR ENERGY',
            'HELP IMPROVE CHRONIC CONDITIONS',
            'GET INTO KETOSIS QUICKLY',
        ],
        type: 'manyOfMore',
    },
    {
        index: 16,
        question: "How much weigh you can lose for good?",
        amount: "Enter your email & Find Out ",
        type:"form",
    },
]

