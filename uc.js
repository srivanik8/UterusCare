function getDiagnosis(questionId) {
    // Get user's response for the specified question
    var response = document.getElementById(questionId).value.toLowerCase();
    
    // Get the corresponding diagnosis paragraph element
    var diagnosisElement = document.getElementById(questionId + 'Diagnosis');

    // Analyze the response and provide a detailed diagnosis
    var diagnosis = '';

    switch (questionId) {
        case 'menstrualCycle':
            if (response === 'yes') {
                diagnosis = "Having regular menstrual cycles is a positive sign for your uterine health. Continue to track your cycles for any changes.";
            } else if (response === 'no') {
                diagnosis = "Irregular menstrual cycles may indicate a hormonal imbalance or other uterine health issues. Consider tracking your cycles, maintaining a balanced diet, and consulting a healthcare professional for further evaluation.";
            }
            break;
        case 'pelvicPain':
            if (response === 'yes') {
                diagnosis = "Experiencing pelvic pain or discomfort can be indicative of various uterine health problems. It's crucial to schedule an appointment with a healthcare professional for a thorough evaluation.";
            } else if (response === 'no') {
                diagnosis = "Not experiencing pelvic pain is a positive sign, but it's essential to remain vigilant about your uterine health. Regular check-ups with a healthcare provider are advisable.";
            }
            break;
        case 'vaginalBleeding':
            if (response === 'yes') {
                diagnosis = "Experiencing vaginal bleeding between periods or after menopause can be concerning. It's essential to consult a healthcare professional for a thorough examination to identify the underlying cause.";
            } else if (response === 'no') {
                diagnosis = "Not experiencing vaginal bleeding between periods or after menopause is a positive sign. However, it's still important to stay vigilant about your uterine health and have regular check-ups.";
            }
            break;
        case 'familyHistory':
            if (response === 'yes') {
                diagnosis = "Having a family history of uterine conditions, such as fibroids or endometriosis, increases your risk. It's advisable to be proactive about your uterine health. Discuss your family history with a healthcare professional for guidance on preventive measures.";
            } else if (response === 'no') {
                diagnosis = "Not having a family history of uterine conditions is a positive sign. However, it's still important to maintain regular check-ups to monitor your uterine health.";
            }
            break;
        case 'pelvicInfection':
            if (response === 'yes') {
                diagnosis = "A history of pelvic infection or sexually transmitted infection (STI) requires attention. Seek treatment and follow up with your healthcare provider to prevent potential complications.";
            } else if (response === 'no') {
                diagnosis = "Not having a history of pelvic infection or STI is a positive sign. However, it's essential to maintain safe practices and regular check-ups for optimal uterine health.";
            }
            break;
        case 'unusualOdors':
            if (response === 'yes') {
                diagnosis = "Noticing unusual or strong odors during your periods can be a sign of infection or other issues. It's essential to consult a healthcare professional for an evaluation and appropriate treatment.";
            } else if (response === 'no') {
                diagnosis = "Not experiencing unusual odors during your periods is a positive sign. However, it's still important to maintain good hygiene and regular check-ups for uterine health.";
            }
            break;
        case 'severePain':
            if (response === 'yes') {
                diagnosis = "Experiencing severe pain or discomfort during your periods that disrupts your daily activities requires attention. Consult with a healthcare professional to identify the cause and explore treatment options.";
            } else if (response === 'no') {
                diagnosis = "Not having severe pain during your periods is a positive sign. Still, it's important to monitor your symptoms and seek medical advice if they change.";
            }
            break;
        case 'irregularBleeding':
            if (response === 'yes') {
                diagnosis = "Experiencing irregular bleeding between your periods can be a sign of hormonal issues or other uterine health problems. It's crucial to consult a healthcare professional for evaluation and guidance.";
            } else if (response === 'no') {
                diagnosis = "Not experiencing irregular bleeding between your periods is a positive sign. Continue to track your menstrual patterns for any changes and maintain regular check-ups.";
            }
            break;
        case 'lowerAbdomenDiscomfort':
            if (response === 'yes') {
                diagnosis = "Experiencing lower abdomen pain or discomfort outside of your menstrual cycle can have various causes. Consult with a healthcare professional for a thorough examination and personalized recommendations.";
            } else if (response === 'no') {
                diagnosis = "Not experiencing lower abdomen discomfort outside of your menstrual cycle is a positive sign. However, it's essential to remain attentive to any changes in your abdominal health and consult a healthcare provider if needed.";
            }
            break;
        case 'hormonalIssues':
            if (response === 'yes') {
                diagnosis = "Having hormonal issues can impact your uterine health. It's crucial to consult with a healthcare professional to address and manage these issues. They can recommend appropriate treatments and interventions.";
            } else if (response === 'no') {
                diagnosis = "Not having hormonal issues is a positive sign. However, it's important to stay vigilant about your overall health and have regular check-ups.";
            }
            break;
        default:
            diagnosis = "Invalid question.";
            break;
    }

    // Display the diagnosis in the corresponding paragraph element
    diagnosisElement.textContent = diagnosis;
}