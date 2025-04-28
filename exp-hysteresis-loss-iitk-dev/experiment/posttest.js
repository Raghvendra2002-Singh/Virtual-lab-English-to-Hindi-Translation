/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: " इस्पात की गेंद के त्रिज्या को उसके मान के दोगुना करने पर गेंद की अंतिम गति इस प्रकार हो जाती है: ",  ///// Write the question inside double quotes
      answers: {
        
          "a": "दोगुना",
          "b": "चार गुना",
          "c": "आठ गुना",
          "d": "सोलह गुना",
      },
          "correctAnswer": "b"
        
        
    },

    {
      "question": "गिरती हुई गेंद की सामग्री का घनत्व बढ़ाने पर उसकी अंतिम वेग (टर्मिनल वेलोसिटी) का क्या प्रभाव पड़ता है?",
      "answers": {
        "a": "बढ़ता है",
        "b": "घटता है",
        "c": "स्थिर रहता है",
        "d": "नहीं"
      },
      "correctAnswer": "a"
    },
                                     ///// To add more questions, copy the section below 
    									                  ///// this line


                                        {
                                          "question": "1. एक चुंबकीय सामग्री का हिस्टेरेसिस लूप 5 cm² क्षेत्रफल का है, जिसमें दिए गए पैमाने के अनुसार 1 cm = 2 AT और 1 cm = 50 mWb है। 50 Hz पर कुल हिस्टेरेसिस हानि है:",
                                          "answers": {
                                            "a": "15 W",
                                            "b": "20 W",
                                            "c": "25 W",
                                            "d": "30 W"
                                          },
                                          "explanations": {
                                            "a": "सही! लूप के क्षेत्रफल (5 cm²) को वास्तविक ऊर्जा में परिवर्तित किया जाना चाहिए, जिसके लिए पैमाना कारकों का उपयोग किया जाता है: ऊर्जा = क्षेत्र × H के लिए पैमाना × B के लिए पैमाना। फिर 50 Hz की आवृत्ति का उपयोग करके कुल हिस्टेरेसिस हानि का पता लगाया जाता है: हिस्टेरेसिस हानि = ऊर्जा × आवृत्ति। अधिक विवरण के लिए <a href='https://www.electrical4u.com/hysteresis-loss/'>यहां</a> देखें।",
                                            "b": "गलत, यह दिए गए पैमाने और आवृत्ति का उपयोग करके की गई गणना से मेल नहीं खाता है।",
                                            "c": "गलत, यह दी गई जानकारी के आधार पर हानि को अधिक अनुमानित करता है।",
                                            "d": "गलत, यह दी गई जानकारी के आधार पर हानि को कम अनुमानित करता है।"
                                          },
                                          "correctAnswer": "a",
                                          "difficulty": "beginner"
                                        },
                                        {
                                          "question": "2. हिस्टेरेसिस हानि दिया गया है:",
                                          "answers": {
                                            "a": "We = K B2maxf^2 t^2 W",
                                            "b": "Wh = η Bm^1.6 f V  W",
                                            "c": "Wcu = (I1^2 R1 + I2^2 R2) W",
                                            "d": "Wcu = (I1^2 R1) W"
                                          },
                                          "explanations": {
                                            "a": "गलत, यह सूत्र एडी करंट हानि को गणना करने के लिए उपयोग किया जाता है, हिस्टेरेसिस हानि के लिए नहीं।",
                                            "b": "सही! हिस्टेरेसिस हानि Wh = η Bm^1.6 f V द्वारा दी जाती है, जहां η एक सामग्री स्थिरांक है, Bm अधिकतम फ्लक्स घनत्व है, f आवृत्ति है, और V आयतन है। अधिक जानकारी के लिए <a href='https://testbook.com/question-answer/hysteresis-loss-is-given-by--5ed63043f60d5d695842acb9'>यहां</a> देखें।",
                                            "c": "गलत, यह सूत्र ट्रांसफॉर्मर या विद्युत मशीन में कॉपर हानियों का प्रतिनिधित्व करता है।",
                                            "d": "गलत, यह कॉपर हानियों का अपूर्ण प्रतिनिधित्व है और हिस्टेरेसिस हानि से संबंधित नहीं है।"
                                          },
                                          "correctAnswer": "b",
                                          "difficulty": "beginner"
                                        },
                                        {
                                          "question": "3. कौन सा कारक हिस्टेरेसिस हानि (Ph) को प्रभावित नहीं करता है?",
                                          "answers": {
                                            "a": "परिवर्तित चुंबकीय क्षेत्र की आवृत्ति (f)",
                                            "b": "सामग्री का आयतन (V)",
                                            "c": "सामग्री का प्रतिरोधकता",
                                            "d": "अधिकतम फ्लक्स घनत्व (Bm)"
                                          },
                                          "explanations": {
                                            "a": "गलत, उच्च आवृत्ति के साथ हिस्टेरेसिस हानि बढ़ती है।",
                                            "b": "गलत, बड़ा आयतन अधिक हानि का कारण बनता है।",
                                            "c": "सही! प्रतिरोधकता एडी करंट हानियों को प्रभावित करती है, हिस्टेरेसिस हानि को नहीं।",
                                            "d": "गलत, अधिकतम फ्लक्स घनत्व प्रति चक्र ऊर्जा को प्रभावित करता है।"
                                          },
                                          "correctAnswer": "c",
                                          "difficulty": "intermediate"
                                        },
                                        {
                                          "question": "4. कौन सी सामग्री गुण हिस्टेरेसिस लूप के आकार को प्रभावित करती है?",
                                          "answers": {
                                            "a": "विद्युत चालकता",
                                            "b": "चुंबकीय पारगम्यता",
                                            "c": "क्यूरी तापमान",
                                            "d": "कोएर्सिविटी"
                                          },
                                          "explanations": {
                                            "a": "गलत, चालकता एडी करंट को प्रभावित करती है, हिस्टेरेसिस को नहीं।",
                                            "b": "गलत, चुंबकीय पारगम्यता ढलान को प्रभावित करती है, लेकिन लूप के आकार को नहीं।",
                                            "c": "गलत, क्यूरी तापमान चुंबकीय स्थिति को निर्धारित करता है, लेकिन लूप के आकार को नहीं।",
                                            "d": "सही! कोएर्सिविटी लूप की चौड़ाई और विमाग्निकीकरण के खिलाफ प्रतिरोध को परिभाषित करती है।"
                                          },
                                          "correctAnswer": "d",
                                          "difficulty": "intermediate"
                                        },
                                        {
                                          "question": "5. एक चुंबकीय सामग्री जिसका हिस्टेरेसिस लूप क्षेत्रफल 2.5 J/m³ है, को 60 Hz की आवृत्ति पर परिवर्तित चुंबकीय क्षेत्र के अधीन किया गया है। यदि सामग्री का आयतन 0.01 m³ है, तो कुल हिस्टेरेसिस हानि प्रति सेकंड क्या होगी?",
                                          "answers": {
                                            "a": "1.5 W",
                                            "b": "2.0 W",
                                            "c": "1.0 W",
                                            "d": "2.5 W"
                                          },
                                          "explanations": {
                                            "a": "गलत, यह कुल हानि को कम अनुमानित करता है क्योंकि इसमें लूप क्षेत्र और आवृत्ति का योगदान नहीं है।",
                                            "b": "गलत, गणना की गई हानि दिए गए मानकों से मेल नहीं खाती है।",
                                            "c": "गलत, यह दी गई जानकारी के आधार पर हानि को कम अनुमानित करता है।",
                                            "d": "सही! हिस्टेरेसिस हानि को निम्नलिखित सूत्र का उपयोग करके गणना किया जाता है: कुल हिस्टेरेसिस हानि = क्षेत्र × आयतन × आवृत्ति। दिए गए मानों को प्रतिस्थापित करने पर: कुल हानि = 2.5 J/m³ × 0.01 m³ × 60 Hz = 2.5 W। अधिक विवरण के लिए <a href='https://www.electrical4u.com/hysteresis-loss/'>यहां</a> देखें।"
                                          },
                                          "correctAnswer": "d",
                                          "difficulty": "hard"
                                        }
                                                            


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////