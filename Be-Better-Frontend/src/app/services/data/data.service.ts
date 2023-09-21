import { Injectable } from '@angular/core';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { ButtonShelfInfo } from 'src/app/lib/data/models/ui/buttonShelf';
import { UserChallenge } from 'src/app/lib/data/models/challenges/userChallenge';
import { ChallengeTemplateInfo } from 'src/app/lib/data/models/challenges/challengeTemplateInfo';
import { learnEntry } from 'src/app/lib/data/models/core/learnEntry';
import { GoalInfo } from 'src/app/lib/data/models/goals/goalInfo';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  tmpGoalEntry: GoalInfo = {
    goalID: '0798789ggjh',
    userID: '2222',
    goalFrequency: 'daily',
    goalType: 'default',
    goalTitle: 'Walk 10km straight',
    goalDescription: 'Description 66 area...',
    goalStatus: 'complete',
    dateAdded: '01/01/2023',
    goalStatCounts: { completedCount: 0, failedCount: 0 },
  };

  tmpGoalEntry2: GoalInfo = {
    goalID: '07dad8789ggjh',
    userID: '2222',
    goalFrequency: 'daily',
    goalType: 'default',
    goalTitle: 'Cycle to the shop',
    goalDescription: 'Description area...',
    goalStatus: 'incomplete',
    dateAdded: '01/01/2023',
    goalStatCounts: { completedCount: 0, failedCount: 0 },
  };

  tmpGoalEntry3: GoalInfo = {
    goalID: '0798789ggggjh',
    userID: '2222',
    goalFrequency: 'daily',
    goalType: 'default',
    goalTitle: 'Climb lions head',
    goalDescription: 'Description area...',
    goalStatus: 'incomplete',
    dateAdded: '01/01/2023',
    goalStatCounts: { completedCount: 0, failedCount: 0 },
  };

  learnContentEntries: learnEntry[] = [
    {
      entryName: 'depression',
      entryVideos: [
        {
          videoName: 'D to depression',
          videoURL: 'https://youtube.com',
        },
        {
          videoName: 'D tos as depression',
          videoURL: 'https://youtube.com',
        },
      ],
      entryLinks: [
        {
          linkName: 'Depression today',
          linkURL: 'https://host.florist',
        },
        {
          linkName: 'Depression goes hard today',
          linkURL: 'https://host.florist',
        },
        {
          linkName: 'Depression ',
          linkURL: 'https://host.florist',
        },
      ],
      entryOverview:
        "Depression is a common mental health condition that affects millions of people worldwide. It's not just feeling sad or down for a short period; it's a persistent, deep-seated feeling of sadness, hopelessness, and a loss of interest or pleasure in everyday activities. Depression can significantly impact a person's daily life, making even simple tasks seem overwhelming.",
      entryAbout: `Imagine life as a roller coaster, and depression as that never-ending, slow descent into the dark tunnel. It's like having a cloud of gloom follow you around, raining on your parade when you least expect it. Depression can make the sunniest days feel gray and lifeless.

But here's the twist - depression isn't just about feeling sad. It's a complex interplay of genetic, environmental, and psychological factors. It can strike anyone, regardless of age or background, and it doesn't discriminate. It's a bit like that uninvited guest at a party who just won't leave.

Yet, there's a silver lining. Depression is treatable, and there's a plethora of support and strategies available to help you kick that gloomy cloud to the curb. Remember, you're not alone in this roller coaster; there are plenty of fellow riders who have been where you are now.`,
      entryClinically: `Depression is like a glitch in your brain's chemical messaging system. Think of it as a disrupted Wi-Fi connection between neurons. In a healthy brain, neurotransmitters like serotonin and dopamine act as messengers, ensuring your mood remains stable and happy. In depression, this messaging system goes haywire.

Common symptoms include persistent sadness, a lack of interest in activities, changes in appetite or weight, sleep disturbances, and feelings of worthlessness or guilt. It's like having a stubborn cold that just won't go away, and it can lead to physical symptoms like fatigue and body aches.

But here's a relatable analogy: Picture depression as a heavy backpack. The longer you carry it, the heavier it feels. It's vital to seek professional help to lighten the load. Therapy and medications can help recalibrate those neurotransmitters, making your mental Wi-Fi run smoothly again.`,
      entryTips: `Reach Out: Don't suffer in silence. Reach out to friends, family, or a mental health professional. Talking about your feelings can be the first step toward healing.

        Self-Care: Treat yourself kindly. Engage in activities you enjoy, eat well, exercise, and prioritize sleep. Small daily habits can make a big difference.
        
        Set Realistic Goals: Break tasks into manageable steps. Achieving even small goals can boost your confidence and mood.
        
        Limit Stress: Identify and manage stressors in your life. Mindfulness, meditation, or yoga can help calm your mind.
        
        Medication and Therapy: If recommended by a professional, consider therapy or medication. They can be powerful tools in your recovery.
        
        Remember, seeking professional help is crucial. Depression is a formidable opponent, but with the right support and strategies, you can regain control and find your way back to the sunshine. You've got this!`,
      entryTitle: 'Depression',
    },
    {
      entryName: 'anxiety',
      entryVideos: [
        {
          videoName: 'D to anxiety',
          videoURL: 'https://youtube.com',
        },
        {
          videoName: 'D tos as anxiety',
          videoURL: 'https://youtube.com',
        },
      ],
      entryLinks: [
        {
          linkName: 'anxiety today',
          linkURL: 'https://host.florist',
        },
        {
          linkName: 'anxiety goes hard today',
          linkURL: 'https://host.florist',
        },
        {
          linkName: 'anxiety ',
          linkURL: 'https://host.florist',
        },
      ],
      entryOverview:
        "Anxiety is like that overzealous friend who never leaves your side, constantly whispering worries in your ear. It's a mental condition characterized by excessive unease, fear, and apprehension. While it's normal to feel anxious occasionally, when anxiety becomes a frequent and overwhelming presence, it can disrupt daily life.",
      entryAbout: `Imagine you're at a carnival, waiting in line for the most thrilling roller coaster. Now, imagine that feeling of nervous excitement, the racing heart, and the tingling sensation in your stomach. That's a bit like what people with anxiety experience, except it's not limited to roller coasters; it can happen anytime, anywhere.

        Anxiety is that nagging voice in your head that constantly second-guesses everything. It's worrying about things that haven't happened yet or might never happen at all. It's like carrying an umbrella on a sunny day, just in case it suddenly pours.
        
        But here's the quirky thing about anxiety – it often stems from our brain's ancient survival mechanisms gone a bit haywire. Our ancestors needed to be alert to potential dangers, and anxiety is like a modern-day version of that alertness. Sometimes, though, it's as if our brain's alarm system is a bit too sensitive.`,
      entryClinically: `Now, let's dive into the science of anxiety. It's all about a cocktail of chemicals in your brain, primarily neurotransmitters like serotonin and norepinephrine. Think of these as messengers in your brain. When they misbehave, it can lead to anxiety.

        Symptoms can vary from person to person, but they often include racing thoughts, restlessness, sweating, and a racing heart. It's like your brain's emergency broadcast system going off for no apparent reason.
        
        Imagine you're watching a suspenseful movie, and the tension keeps building, but there's no release. That's what anxiety can feel like – a never-ending cliffhanger with no resolution.`,
      entryTips: `Dealing with anxiety can be a real roller coaster, but here are some tips to help you navigate the twists and turns:

        Seek Professional Help: First and foremost, reach out to a mental health professional. They're like the ride operators who know the ins and outs of anxiety and can help you safely enjoy the journey.
        
        Deep Breathing: Try deep, slow breaths when you feel anxiety rising. It's like a calming pit stop during the roller coaster ride.
        
        Stay Active: Regular exercise can help reduce anxiety. Think of it as a fun detour that distracts your mind from worries.
        
        Mindfulness and Relaxation: Practice mindfulness and relaxation techniques. These are like safety harnesses that can keep you secure on the anxiety roller coaster.
        
        Limit Stimulants: Cut back on caffeine and sugar. These can be like turbo boosters for anxiety.
        
        Social Support: Share your feelings with friends and family. They can be your cheerleaders, offering emotional support along the way.
        
        Remember, dealing with anxiety is a journey, not a destination. It might take time, but with the right strategies and support, you can learn to enjoy the ride and make anxiety more of a sidekick than a dominating force in your life.`,
      entryTitle: 'ANXIETY',
    },
    {
      entryName: 'addiction',
      entryVideos: [
        {
          videoName: 'D to anxiety',
          videoURL: 'https://youtube.com',
        },
      ],
      entryLinks: [
        {
          linkName: 'anxiety today',
          linkURL: 'https://host.florist',
        },
      ],
      entryOverview: `Addiction is a complex and challenging mental condition that affects millions of people worldwide. It's often described as a compulsive need to engage in a behavior or consume a substance, despite harmful consequences. Addiction can take many forms, including substance addiction (like drugs or alcohol) and behavioral addictions (like gambling or gaming). It profoundly impacts an individual's life, relationships, and overall well-being.`,
      entryAbout: `Picture addiction as a cunning trickster who sneaks into your life when you're not looking. At first, it might seem like a harmless friend, offering you temporary relief or excitement. But over time, it becomes an unwelcome guest that refuses to leave. Addiction can start innocently enough, like having a casual drink with friends or scrolling through social media. But as it tightens its grip, it demands more of your time and energy, leaving you feeling trapped.

      Imagine being caught in a maze with no clear way out. That's what addiction can feel like—a confusing labyrinth of cravings and consequences. It doesn't discriminate; it can affect anyone. Yet, understanding addiction is the first step towards breaking free.`,
      entryClinically: `Addiction is like a hijacked brain. It interferes with our brain's reward system, making us crave the substance or behavior, even if it's harmful. Think of it as a misbehaving thermostat that keeps turning up the heat, no matter how hot the room already is.

      Symptoms can vary depending on the addiction, but common signs include cravings, loss of control, withdrawal symptoms, and neglecting other responsibilities. For example, someone addicted to alcohol might find themselves needing to drink more to get the same effect (tolerance) and experiencing physical discomfort when they try to stop (withdrawal).
      
      Consider it as a vicious cycle: the more you give in to the addiction, the stronger it becomes. But breaking free is possible. Seeking professional help, like therapy or support groups, is like getting a trusty guide through the maze. They provide strategies to rewire your brain and regain control.
      
      `,
      entryTips: `Seek Professional Help: The most important step is reaching out to a mental health professional who specializes in addiction. They can tailor a treatment plan to your specific needs.

      Build a Support Network: Share your journey with friends and family who can offer encouragement and accountability. You're not alone in this maze.
      
      Find Healthy Replacements: Replace addictive behaviors with healthier alternatives. Exercise, art, or mindfulness practices can help fill the void.
      
      Avoid Triggers: Identify and avoid situations, places, or people that trigger your cravings. It's like steering clear of tempting shortcuts in that confusing maze.
      
      Stay Persistent: Recovery can be challenging, with occasional setbacks. Don't get discouraged. Every step toward breaking free is a victory.
      
      Remember, addiction may be a formidable foe, but with the right support and strategies, you can navigate your way out of the maze and towards a healthier, addiction-free life.
 `,
      entryTitle: 'ADDICTION',
    },
    {
      entryName: 'bipolar',
      entryVideos: [
        {
          videoName: 'D to anxiety',
          videoURL: 'https://youtube.com',
        },
      ],
      entryLinks: [
        {
          linkName: 'anxiety today',
          linkURL: 'https://host.florist',
        },
      ],
      entryOverview: `Bipolar disorder, often referred to as manic-depressive illness, is a mental health condition characterized by extreme mood swings. People with bipolar disorder experience episodes of intense highs, known as mania or hypomania, and deep lows, known as depression. These mood shifts can be disruptive and challenging to manage, but with the right treatment and support, individuals with bipolar disorder can lead fulfilling lives.`,
      entryAbout: `Picture a roller coaster ride through the vast landscape of emotions, and you've got bipolar disorder! It's like having a ticket to the most unpredictable amusement park. One moment, you're soaring high above the clouds, feeling invincible, and the next, you're plunging into the depths of despair.

      But there's more to bipolar disorder than just mood swings; it's a complex dance between mania and depression. During manic episodes, you might become the life of the party, bursting with energy and ideas. But when depression takes hold, even getting out of bed can feel like an Olympic feat.
      
      While it's no walk in the park, understanding and managing bipolar disorder is possible. Treatment, therapy, and a support system are like the safety harness on that emotional roller coaster – they help keep you steady on the tracks.`,
      entryClinically: `Bipolar disorder is like having a seesaw in your brain. It involves two main mood swings:

      Mania: This is the "high" phase. Imagine your brain is a racecar with no brakes. Thoughts race, energy skyrockets, and risky behaviors may seem like great ideas. But, just like a car running out of fuel, this phase can crash hard into depression.
      
      Depression: Here, it's the opposite. Your brain feels stuck in quicksand, and even small tasks become Herculean efforts. Sleep disturbances, appetite changes, and a constant feeling of hopelessness are common.
      
      The tricky part? Between these two poles, there's a sweet spot called "euthymia," where mood is stable. But the seesaw can tip either way without warning.
      
      Treatment typically involves mood stabilizers, therapy, and lifestyle changes. Think of it like balancing on a tightrope with the help of a safety net – medication keeps you steady, therapy provides guidance, and lifestyle tweaks reduce stress.`,
      entryTips: `Seek Professional Help: Always consult a mental health professional for an accurate diagnosis and treatment plan tailored to your needs.

      Medication Management: Take prescribed medications consistently. These can help smooth out the emotional roller coaster.
      
      Therapy: Consider therapy, such as cognitive-behavioral therapy (CBT), to learn coping strategies and manage triggers.
      
      Lifestyle Matters: Maintain a stable routine, prioritize sleep, exercise regularly, and reduce stress through mindfulness techniques or hobbies.
      
      Support Network: Share your journey with trusted friends and family. Their understanding and support can be a lifeline.
      
      Track Your Mood: Use mood journals or apps to monitor your emotional shifts. This can help you and your healthcare provider make informed decisions.
      
      Remember, while living with bipolar disorder can be challenging, many individuals manage it successfully and lead fulfilling lives. Like a skilled tightrope walker, you can find balance and stability with the right support and treatment.`,
      entryTitle: 'BIPOLAR',
    },
    {
      entryName: 'adsdiction',
      entryVideos: [
        {
          videoName: 'D to anxiety',
          videoURL: 'https://youtube.com',
        },
      ],
      entryLinks: [
        {
          linkName: 'anxiety today',
          linkURL: 'https://host.florist',
        },
      ],
      entryOverview: ``,
      entryAbout: ``,
      entryClinically: ``,
      entryTips: ``,
      entryTitle: 'ADDICTION',
    },
    {
      entryName: 'eating',
      entryVideos: [
        {
          videoName: 'D to anxiety',
          videoURL: 'https://youtube.com',
        },
      ],
      entryLinks: [
        {
          linkName: 'anxiety today',
          linkURL: 'https://host.florist',
        },
      ],
      entryOverview: `Eating disorders are complex mental health conditions characterized by unhealthy eating behaviors and distorted body image perceptions. They often lead to serious physical and psychological consequences. These disorders affect people of all ages, genders, and backgrounds, and their prevalence has been steadily increasing in recent years.`,
      entryAbout: `Picture this: A world where pizza exists only to taunt you, where your reflection in the mirror plays tricks on your mind, and where every meal feels like an epic battle between your heart and your head. Welcome to the enigmatic realm of eating disorders.

      Eating disorders are like sneaky chameleons, disguising themselves as diets, health kicks, or the pursuit of that elusive "perfect" body. But beneath the surface, they're far more sinister, wreaking havoc on physical and emotional well-being.
      
      From the anorexic pursuit of skeletal beauty to the bulimic tug-of-war between binge and purge, and the lesser-known binge-eating disorder that turns meals into marathons, these conditions twist the relationship between food and our sense of self.`,
      entryClinically: `At their core, eating disorders are often about control, or rather, the illusion of it. Imagine your brain as a seesaw, with one side representing rational thoughts and the other, the emotional turmoil driving disordered eating behaviors.

      Anorexia nervosa, for instance, is like a seesaw stuck in the air, with rational thoughts barely lifting off the ground. People suffering from anorexia obsessively restrict food intake, driven by a distorted perception of their bodies as never thin enough. It's like trying to fill a sports car's gas tank with an eyedropper.
      
      Bulimia nervosa sends the seesaw wildly out of control. Bingeing is like loading up on fast food in a speeding car, while purging is the emergency brake, attempting to regain control but causing chaos instead.
      
      Binge-eating disorder is the seesaw bottoming out in despair, as emotions flood rational thought. People afflicted often use food as a coping mechanism, seeking solace in overeating.
      
      To help, it's crucial to address the emotional turmoil behind these behaviors, often through therapy, support groups, and nutritional counseling. Eating disorders aren't just about food; they're about reclaiming a sense of control over one's life.`,
      entryTips: `Seek Professional Help: Eating disorders are serious mental health conditions that require specialized treatment. Reach out to a therapist, counselor, or a healthcare provider who specializes in eating disorders.

      Involve Loved Ones: Encourage open communication with friends and family. They can be your pillars of support on your journey to recovery.
      
      Keep a Journal: Record your thoughts and feelings about food, body image, and emotions. It can help identify triggers and patterns that contribute to disordered eating.
      
      Practice Mindfulness: Mindfulness techniques can help you reconnect with your body and improve your relationship with food. Techniques like meditation and deep breathing can be beneficial.
      
      Build a Support System: Join support groups or connect with individuals who have experienced similar struggles. Sharing experiences and advice can be incredibly helpful.
      
      Remember, recovery from an eating disorder is a journey, not a destination. It's about healing the mind and body and finding a healthy balance in life. Professional guidance and a strong support system are your best allies in this battle.`,
      entryTitle: 'EATING DISORDERS',
    },
    {
      entryName: 'bekind',
      entryVideos: [
        {
          videoName: 'D to anxiety',
          videoURL: 'https://youtube.com',
        },
      ],
      entryLinks: [
        {
          linkName: 'anxiety today',
          linkURL: 'https://host.florist',
        },
      ],
      entryOverview: `Mental health is an essential aspect of our well-being, influencing how we think, feel, and interact with the world around us. It's as important as physical health, yet often carries a stigma that discourages open conversations. Understanding and promoting mental health is crucial for the well-being of individuals and society as a whole. One way to contribute positively to mental health is by being kind and supportive to those who suffer from mental illnesses.`,
      entryAbout: `Imagine a world where we all sported invisible backpacks filled with our emotions, anxieties, and struggles. Well, welcome to reality! Mental health encompasses the complex terrain of our inner lives, where conditions like depression, anxiety, bipolar disorder, and more can shape our daily experiences.

      Contrary to popular belief, mental health isn't just about "positive thinking" or "snapping out of it." It's about acknowledging that our minds, like our bodies, can get sick. But here's the fun twist: being kind and helping those facing mental health challenges isn't just a good deed; it's a win-win. When you lend an understanding ear or a comforting shoulder, you're not just supporting someone; you're nurturing a culture of empathy.`,
      entryClinically: `Mental health conditions are like sneaky ninjas that can infiltrate our minds. Picture your brain as a garden. Sometimes, weeds (like anxiety or depression) can take root and make it difficult for the beautiful flowers (your positive thoughts) to flourish.

      Symptoms can vary, but they often include persistent feelings of sadness, worry, or irritability. People might have trouble concentrating, experience changes in appetite or sleep patterns, or withdraw from activities they used to enjoy. Think of it as a storm cloud that refuses to budge.
      
      But here's the good news: there's help! Just as a gardener uses tools and expertise to tend to their garden, mental health professionals have techniques and therapies to help individuals reclaim their mental well-being. Encouragingly, you can be a gardener too! Being kind and understanding is like offering a helping hand to someone lost in a maze—they may find their way out sooner with your support.`,
      entryTips: `Be a Friend: Simply being there for someone can make a world of difference. Listen without judgment and let them know you care.

      Educate Yourself: Learn about mental health conditions to better understand what your loved ones might be going through. Knowledge is a powerful tool for empathy.
      
      Encourage Professional Help: While your support is invaluable, it's essential to encourage seeking professional help when needed. Therapists and psychiatrists have specialized knowledge and tools to address mental health conditions.
      
      Promote Open Conversations: Break the stigma surrounding mental health by openly discussing it. Share your experiences and encourage others to do the same. Let's make mental health conversations as common as discussing the weather.
      
      Self-Care: Don't forget to take care of your own mental health too. You can't pour from an empty cup, so make sure to practice self-compassion and seek help if you ever need it.
      
      Remember, being kind and compassionate toward those with mental health conditions not only supports their journey but also contributes to a world where everyone can flourish mentally and emotionally. So, let's embrace kindness, break down stigma, and make mental health a top priority for all!`,
      entryTitle: 'KINDNESS + RESPECT',
    },
  ];

  getLearnContentEntry = (entryName) => {
    for (let lce of this.learnContentEntries) {
      if (lce.entryName == entryName) {
        return lce;
      }
    }
    return null;
  };

  challengeTemplates: ChallengeTemplateInfo[] = [
    {
      challengeName:
        'Challenge inkdk dklk dklk dklklsklkdlklkd klk akldksl jgnjoneklnl f',
      challengeType: 'society',
      challengeTemplateID: '76895234faf797',
      challengeRules: ['rule 1', 'rule 2', 'rule 3'],
    },
    {
      challengeName:
        'Challenge inkdk dklk dklk dklklsklkdlklkd klk akldksl jgnjoneklnl f',
      challengeType: 'society',
      challengeTemplateID: '7689fsdf797',
      challengeRules: ['rule 1', 'rule 2', 'rule 3'],
    },
    {
      challengeName:
        'Challenge inkdk dklk dklk dklklsklkdlklkd klk akldksl jgnjoneklnl f',
      challengeType: 'society',
      challengeTemplateID: '7689gsd34797',
      challengeRules: ['rule 1', 'rule 2', 'rule 3'],
    },
    {
      challengeName:
        'Challenge inkdk dklk dklk dklklsklkdlklkd klk akldksl jgnjoneklnl f',
      challengeType: 'society',
      challengeTemplateID: '7689fdf2gh797',
      challengeRules: ['rule 1', 'rule 2', 'rule 3'],
    },
    {
      challengeName:
        'Challenge inkdk dklk dklk dklklsklkdlklkd klk akldksl jgnjoneklnl f',
      challengeType: 'society',
      challengeTemplateID: '768979441fa7',
      challengeRules: ['rule 1', 'rule 2', 'rule 3'],
    },
    {
      challengeName:
        'Challenge inkdk dklk dklk dklklsklkdlklkd klk akldksl jgnjoneklnl f',
      challengeType: 'environmental',
      challengeTemplateID: '7689797da34',
      challengeRules: ['rule 1', 'rule 2', 'rule 3'],
    },
    {
      challengeName:
        'Challenge inkdk dklk dklk dklklsklkdlklkd klk akldksl jgnjoneklnl f',
      challengeType: 'environmental',
      challengeTemplateID: '768324a9797',
      challengeRules: ['rule 1', 'rule 2', 'rule 3'],
    },
    {
      challengeName:
        'Challenge inkdk dklk dklk dklklsklkdlklkd klk akldksl jgnjoneklnl f',
      challengeType: 'environmental',
      challengeTemplateID: '76893r2797',
      challengeRules: ['rule 1', 'rule 2', 'rule 3'],
    },
    {
      challengeName:
        'Challenge inkdk dklk dklk dklklsklkdlklkd klk akldksl jgnjoneklnl f',
      challengeType: 'environmental',
      challengeTemplateID: '7689gfff797',
      challengeRules: ['rule 1', 'rule 2', 'rule 3'],
    },
    {
      challengeName:
        'Challenge inkdk dklk dklk dklklsklkdlklkd klk akldksl jgnjoneklnl f',
      challengeType: 'personal',
      challengeTemplateID: '7689431797',
      challengeRules: ['rule 1', 'rule 2', 'rule 3'],
    },
    {
      challengeName:
        'Challenge inkdk dklk dklk dklklsklkdlklkd klk akldksl jgnjoneklnl f',
      challengeType: 'personal',
      challengeTemplateID: '768fd9797',
      challengeRules: ['rule 1', 'rule 2', 'rule 3'],
    },
    {
      challengeName:
        'Challenge inkdk dklk dklk dklklsklkdlklkd klk akldksl jgnjoneklnl f',
      challengeType: 'personal',
      challengeTemplateID: '7689dad3797',
      challengeRules: ['rule 1', 'rule 2', 'rule 3'],
    },
  ];

  challengeButtons: ImageButton[] = [
    {
      link: '/',
      backgroundColour: 'black',
      borderColour: 'white',
      imageName: 'heart.png',
      buttonText: 'Current',
      buttonName: 'currentC',
    },
    {
      link: '/',
      backgroundColour: 'black',
      borderColour: 'white',
      imageName: 'start-challenge.png',
      buttonText: 'Start New',
      buttonName: 'startChallenge',
    },
    {
      link: '/',
      backgroundColour: 'black',
      borderColour: 'white',
      imageName: 'award.png',
      buttonText: 'My Goals',
      buttonName: 'myGoals',
    },
    {
      link: '/',
      backgroundColour: 'black',
      borderColour: 'white',
      imageName: 'goal-add.png',
      buttonText: 'New Goal',
      buttonName: 'addGoal',
    },
  ];

  challengeShelfInfo: ButtonShelfInfo = {
    shelfColour: '#FF748E',
    shelfName: 'challenges',
    shelfTitle: 'Challenges + Goals',
    buttons: this.challengeButtons,
  };

  myMindButtons: ImageButton[] = [
    {
      link: '/',
      backgroundColour: '#ca1372',
      borderColour: 'white',
      imageName: 'journal.png',
      buttonText: 'My Journal',
      buttonName: 'myJournal',
    },
    {
      link: '/',
      backgroundColour: '#ca1372',
      borderColour: 'white',
      imageName: 'my-body.png',
      buttonText: 'My Body',
      buttonName: 'myBody',
    },
    {
      link: '/',
      backgroundColour: '#ca1372',
      borderColour: 'white',
      imageName: 'tools.png',
      buttonText: 'Gratitude',
      buttonName: 'gratitude',
    },
    {
      link: '/',
      backgroundColour: '#ca1372',
      borderColour: 'white',
      imageName: 'learn.png',
      buttonText: 'Learn',
      buttonName: 'learn',
    },
  ];

  myMindShelfInfo: ButtonShelfInfo = {
    shelfColour: '#2c927f',
    shelfName: 'myMind',
    shelfTitle: 'Self Care + Growth',
    buttons: this.myMindButtons,
  };

  myWellbeingButtons: ImageButton[] = [
    {
      link: '/',
      backgroundColour: '#0F589A',
      borderColour: 'white',
      imageName: 'goals.png',
      buttonText: 'My Goals',
      buttonName: 'myGoals',
    },
    {
      link: '/',
      backgroundColour: '#0F589A',
      borderColour: '#f4f20b',
      imageName: 'guides.png',
      buttonText: 'Guides',
      buttonName: 'guides',
    },
    {
      link: '/',
      backgroundColour: '#0F589A',
      borderColour: 'white',
      imageName: 'my-body.png',
      buttonText: 'My Body',
      buttonName: 'myBody',
    },
    {
      link: '/',
      backgroundColour: '#0F589A',
      borderColour: 'white',
      imageName: 'excercise.png',
      buttonText: 'Excercise',
      buttonName: 'excercise',
    },
  ];

  myWellbeingShelfInfo: ButtonShelfInfo = {
    shelfColour: '#E19841',
    shelfTitle: 'My Wellbeing',
    shelfName: 'myWellbeing',
    buttons: this.myWellbeingButtons,
  };

  myFriendsProfileButtons: ImageButton[] = [
    {
      link: '/',
      backgroundColour: '#47AB8D',
      borderColour: 'white',
      imageName: 'friends.png',
      buttonText: 'My Friends',
      buttonName: 'myFriends',
    },
    {
      link: '/',
      backgroundColour: '#47AB8D',
      borderColour: 'white',
      imageName: 'add-friend.png',
      buttonText: 'Add Friend',
      buttonName: 'addFriend',
    },
    {
      link: '/',
      backgroundColour: '#47AB8D',
      borderColour: 'white',
      imageName: 'chellenge-friends.png',
      buttonText: 'Challenge',
      buttonName: 'challengeFriend',
    },
    {
      link: '/',
      backgroundColour: '#47AB8D',
      borderColour: 'white',
      imageName: 'profile.png',
      buttonText: 'My Profile',
      buttonName: 'myProfile',
    },
  ];

  myFriendsProfileShelfInfo: ButtonShelfInfo = {
    shelfColour: '#98518D',
    shelfName: 'friendsProfile',
    shelfTitle: 'Friends/Profile',
    buttons: this.myFriendsProfileButtons,
  };

  aboutAppButtons: ImageButton[] = [
    {
      link: '/',
      backgroundColour: '#a542c7',
      borderColour: 'white',
      imageName: 'friends.png',
      buttonText: 'Friends',
      buttonName: 'friends',
    },
    {
      link: '/',
      backgroundColour: '#a542c7',
      borderColour: 'white',
      imageName: 'add-friend.png',
      buttonText: 'Add Friend',
      buttonName: 'addFriend',
    },
    {
      link: '/',
      backgroundColour: '#a542c7',
      borderColour: 'white',
      imageName: 'profile.png',
      buttonText: 'My Profile',
      buttonName: 'myProfile',
    },
    {
      link: '/',
      backgroundColour: '#a542c7',
      borderColour: 'white',
      imageName: 'logout2.png',
      buttonText: 'Logout',
      buttonName: 'logout',
    },
  ];

  aboutAppShelfInfo: ButtonShelfInfo = {
    shelfColour: 'black',
    shelfName: 'aboutApp',
    shelfTitle: 'Profile + Extras',
    buttons: this.aboutAppButtons,
  };

  shelfButtons: ButtonShelfInfo[] = [
    this.challengeShelfInfo,
    this.myMindShelfInfo,
    this.aboutAppShelfInfo,
  ];

  userChallenges: UserChallenge[] = [
    {
      userID: '222',
      challengeName: 'Collect 5 pieces of litter and throw it away',
      challengeType: 'environmental',
      challengeID: 'ASAD43',
      challengeFrequency: 'once',
      startDate: Date.now().toString(),
      challengeStatus: 'in-progress',
      sharedChallenge: false,
      challengeRules: [
        'This is a rule',
        'Here is another rule',
        'One more rule',
      ],
    },
    {
      userID: '222',
      challengeName: 'Run 5km outside',
      challengeType: 'personal',
      challengeID: 'ASAD243',
      challengeFrequency: 'once',
      startDate: Date.now().toString(),
      challengeStatus: 'in-progress',
      sharedChallenge: false,
      challengeRules: [
        'This is a rule',
        'Here is another rule',
        'One more rule',
      ],
    },
    {
      userID: '222',
      challengeName: 'Call a friend you havent talked too in a long...',
      challengeType: 'society',
      challengeID: 'ASAD27843',
      challengeFrequency: 'once',
      startDate: Date.now().toString(),
      challengeStatus: 'in-progress',
      sharedChallenge: true,
      challengeRules: [
        'This is a rule',
        'Here is another rule',
        'One more rule',
      ],
    },
    {
      userID: '222',
      challengeName: 'Call a friend you havent talked too in a long...',
      challengeType: 'society',
      challengeID: 'A431SAD27843',
      challengeFrequency: 'once',
      startDate: Date.now().toString(),
      challengeStatus: 'in-progress',
      sharedChallenge: false,
      challengeRules: [
        'This is a rule',
        'Here is another rule',
        'One more rule',
      ],
    },
    {
      userID: '222',
      challengeName: 'Call a friend you havent talked too in a long...',
      challengeType: 'environmental',
      challengeID: 'ASA7476D27843',
      challengeFrequency: 'once',
      startDate: Date.now().toString(),
      challengeStatus: 'complete',
      sharedChallenge: true,
      challengeRules: [
        'This is a rule',
        'Here is another rule',
        'One more rule',
      ],
    },
    {
      userID: '222',
      challengeName: 'Share a meal with a stranger',
      challengeType: 'personal',
      challengeID: 'ASAD243',
      challengeFrequency: 'once',
      startDate: Date.now().toString(),
      challengeStatus: 'in-progress',
      sharedChallenge: false,
      challengeRules: [
        'This is a rule',
        'Here is another rule',
        'One more rule',
      ],
    },
    {
      userID: '222',
      challengeName: 'Introduce yourself to a neighbour',
      challengeType: 'society',
      challengeID: 'ASA2D24143',
      challengeFrequency: 'once',
      startDate: Date.now().toString(),
      challengeStatus: 'complete',
      sharedChallenge: false,
      challengeRules: [
        'This is a rule',
        'Here is another rule',
        'One more rule',
      ],
    },
  ];
}
