var scores = {}; // To store scores for each question
var overallScore = 0;
function getDiagnosis(questionId) {
    // Get the selected response (yes or no)
    var response = document.querySelector('input[name="' + questionId + '"]:checked');
    
    // Get the corresponding diagnosis paragraph element
    var diagnosisElement = document.getElementById(questionId + 'Diagnosis');

    // Analyze the response and provide a detailed diagnosis
    var diagnosis = '';


    if (response) {
        response = response.value.toLowerCase();

    switch (questionId) {
        case 'menstrualCycle':
            if (response === 'yes') {
                scores[questionId] = 10;
                diagnosis = "Having regular menstrual cycles is a positive sign for your uterine health. Continue to track your cycles for any changes.";
            } else if (response === 'no') {
                scores[questionId] = 0;
                diagnosis = " Menstrual irregularities can be caused by factors like hormonal imbalances, stress, diet, and underlying medical conditions. Managing regular cycles may involve a balanced diet, stress reduction, and consulting a healthcare professional for guidance and treatment if needed.";
            }
            break;
        case 'pelvicPain':
            if (response === 'yes') {
                scores[questionId] = 0;
                diagnosis = "Pelvic pain or discomfort in a person can be caused by various factors like menstrual cramps, infections, or muscle strain. For pelvic pain, consult a doctor, use pain relievers, apply heat/cold packs, follow prescribed treatments, consider physical therapy, manage stress and stay hydrated.";
            } else if (response === 'no') {
                scores[questionId] = 10;
                diagnosis = "Not experiencing pelvic pain is a positive sign, but it's essential to remain vigilant about your uterine health. Regular check-ups with a healthcare provider are advisable.";
            }
            break;
        case 'vaginalBleeding':
            if (response === 'yes') {
                scores[questionId] = 0;
                diagnosis = "Vaginal bleeding between periods or after menopause needs a doctor's evaluation. It can be due to hormonal changes, infections, growths, or cancer. Treatment varies based on the cause and may include medication, surgery, or other medical interventions. Seek prompt medical attention for proper care.";
            } else if (response === 'no') {
                scores[questionId] = 10;
                diagnosis = "The absence of vaginal bleeding between periods or post-menopause is encouraging. To safeguard uterine health, maintain regular check-ups with a healthcare professional as a proactive measure.";
            }
            break;
        case 'familyHistory':
            if (response === 'yes') {
                scores[questionId] = 0;
                diagnosis = "Having a family history of uterine conditions, such as fibroids or endometriosis, increases your risk. It's advisable to be proactive about your uterine health. consult a healthcare provider for a thorough evaluation. Causes may involve genetic factors. Care may include monitoring, medication, or surgical options based on diagnosis.";
            } else if (response === 'no') {
                scores[questionId] = 10;
                diagnosis = "Absence of family history is reassuring. To maintain uterine health, prioritize regular check-ups, a balanced diet, exercise, stress management, and avoiding tobacco/alcohol. Stay informed about potential risks and symptoms.";
            }
            break;
        case 'pelvicInfection':
            if (response === 'yes') {
                scores[questionId] = 0;
                diagnosis = "A history of pelvic infection or sexually transmitted infection (STI) requires attention. consult a healthcare provider for diagnosis and treatment. Causes may include bacterial or viral agents. Maintain uterine health through regular screenings, safe sexual practices, vaccination (if applicable), and overall health maintenance.";
            } else if (response === 'no') {
                scores[questionId] = 10;
                diagnosis = "While the absence of a pelvic infection or STI history is reassuring, prioritize uterine health with safe practices, regular check-ups, safe sex, vaccinations, and overall well-being to prevent future issues.";
            }
            break;
        case 'unusualOdors':
            if (response === 'yes') {
                scores[questionId] = 0;
                diagnosis = "Noticing unusual or strong odors during your periods can be a sign of infection , bacterial imbalances, infections, or diet. Maintain uterine health with regular check-ups, good hygiene, a balanced diet, and consulting a healthcare provider for any concerning symptoms.";
            } else if (response === 'no') {
                scores[questionId] = 10;
                diagnosis = "Absence of unusual period odors is reassuring. Maintain uterine health through good hygiene, regular check-ups, a balanced diet, staying hydrated, and promptly addressing any concerning symptoms for long-term well-being.";
            }
            break;
        case 'severePain':
            if (response === 'yes') {
                scores[questionId] = 0;
                diagnosis = "Experiencing severe pain or discomfort during your periods that disrupts your daily activities requires attention. Consult with a healthcare professional to identify the cause and explore treatment options.";
            } else if (response === 'no') {
                scores[questionId] = 10;
                diagnosis = "Not having severe pain during your periods is a positive sign. Still, it's important to monitor your symptoms and seek medical advice if they change.";
            }
            break;
        case 'irregularBleeding':
            if (response === 'yes') {
                scores[questionId] = 0;
                diagnosis = "If experiencing late periods, causes can include pregnancy, stress, hormonal imbalances, or underlying health issues. Maintain uterine health with regular check-ups, pregnancy tests if relevant, stress management, a balanced diet, and consult a healthcare provider for proper diagnosis and guidance.";
            } else if (response === 'no') {
                scores[questionId] = 10;
                diagnosis = "The regularity of your periods is reassuring. To maintain consistency, prioritize stress management, a balanced diet, and regular check-ups for overall uterine health and peace of mind.";
            }
            break;
        case 'lowerAbdomenDiscomfort':
            if (response === 'yes') {
                scores[questionId] = 0;
                diagnosis = "Experiencing lower abdomen pain or discomfort outside of your menstrual cycle causes can include ovarian cysts, endometriosis, or digestive issues. Maintain uterine health with regular check-ups, pain management, a healthy diet, exercise, and consult a healthcare provider for diagnosis and tailored care.";
            } else if (response === 'no') {
                scores[questionId] = 10;
                diagnosis = "Absence of abdominal discomfort between periods is reassuring. Stay vigilant for any changes, prioritize regular check-ups, maintain a balanced diet, exercise, and consult a healthcare provider promptly if needed for sustained well-being.";
            }
            break;
        case 'hormonalIssues':
            if (response === 'yes') {
                scores[questionId] = 0;
                diagnosis = "Having hormonal issues can impact your uterine health. potential causes include PCOS, thyroid problems, or menopause. Maintain uterine health with regular check-ups, hormone therapy if prescribed, a balanced diet, exercise, and stress management. Consult a healthcare provider for proper diagnosis and personalized care.";
            } else if (response === 'no') {
                scores[questionId] = 10;
                diagnosis = "The absence of hormonal issues is reassuring. To maintain this, prioritize overall health through regular check-ups, a balanced lifestyle, stress management, and seek medical advice as needed for continued well-being.";
            }
            break;
        default:
            diagnosis = "Invalid question.";
            break;
    }   } else {
        diagnosis = "Please select a response.";
    }

    // Display the diagnosis in the corresponding paragraph element
    diagnosisElement.textContent = diagnosis;
}



function calculateQuestionScore(questionId) {
    // Get the selected response (yes or no)
    var response = document.querySelector('input[name="' + questionId + '"]:checked');

    if (response) {
        response = response.value.toLowerCase();
        switch (questionId) {
            case 'menstrualCycle':
                if (response === 'yes') {
                    scores[questionId] = 10; // Assign a score of 10 for a 'Yes' response
                } else if (response === 'no') {
                    scores[questionId] = 0; // Assign a score of 0 for a 'No' response
                }
                break;
            case 'pelvicPain':
                    if (response === 'yes') {
                        scores[questionId] = 0;
                    } else if (response === 'no') {
                        scores[questionId] = 10;
                     }
                    break;
            case 'vaginalBleeding':
                    if (response === 'yes') {
                        scores[questionId] = 0;
                        } else if (response === 'no') {
                        scores[questionId] = 10;
                         }
                    break;
            case 'familyHistory':
                    if (response === 'yes') {
                        scores[questionId] = 0;
                         } else if (response === 'no') {
                        scores[questionId] = 10;
                         }
                    break;
            case 'pelvicInfection':
                    if (response === 'yes') {
                        scores[questionId] = 0;
                         } else if (response === 'no') {
                        scores[questionId] = 10;
                        }
                    break;
                case 'unusualOdors':
                    if (response === 'yes') {
                        scores[questionId] = 0;
                          } else if (response === 'no') {
                        scores[questionId] = 10;
                         }
                    break;
                case 'severePain':
                    if (response === 'yes') {
                        scores[questionId] = 0;
                         } else if (response === 'no') {
                        scores[questionId] = 10;
                          }
                    break;
                case 'irregularBleeding':
                    if (response === 'yes') {
                        scores[questionId] = 0;
                         } else if (response === 'no') {
                        scores[questionId] = 10;
                         }
                    break;
                case 'lowerAbdomenDiscomfort':
                    if (response === 'yes') {
                        scores[questionId] = 0;
                         } else if (response === 'no') {
                        scores[questionId] = 10;
                         }
                    break;
                case 'hormonalIssues':
                    if (response === 'yes') {
                        scores[questionId] = 0;
                        } else if (response === 'no') {
                        scores[questionId] = 10;
                        }
                    break;


            default:
                break;
        }
    }
}




function calculateOverallScore() {
    calculateQuestionScore('menstrualCycle');
    calculateQuestionScore('pelvicPain');
    calculateQuestionScore('vaginalBleeding');
    calculateQuestionScore('familyHistory');
    calculateQuestionScore('pelvicInfection');
    calculateQuestionScore('unusualOdors');
    calculateQuestionScore('severePain');
    calculateQuestionScore('irregularBleeding');
    calculateQuestionScore('lowerAbdomenDiscomfort');
    calculateQuestionScore('hormonalIssues');

    // Calculate the overall score based on scores for each question
    overallScore = 0;
    for (var question in scores) {
        overallScore += scores[question];
    }

    // Display the overall score
    var overallScoreElement = document.getElementById('overallScore');
    overallScoreElement.textContent = "Overall Uterus Health Score: " + overallScore + " out of 100";
}