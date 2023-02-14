const generatePrompt = (source, request)=>{
    let prompt, token, temp;
    if(source == "question_answer"){
        prompt = request;
        token = 275;
        temp = 0.7;
    }else if(source == "resource"){
        prompt = `Write a list of online resources with reference link on ${request}`;
        token = 512;
        temp = 0.4;
    }else if(source == "research"){
        prompt = `I'm doing a research on ${request}, write a list of recent research findings on ${request} with reference links`;
        token = 512;
        temp = 0.4;
    }else if(source == "study_note"){
        prompt = `I'm reading for ${request} exams write a list of important things I need to know on ${request}`;
        token = 300;
        temp = 0.4;
    }else if(source == "explain"){
        prompt = `I'm having difficulty understanding ${request}, give a detail explanation of ${request} with examples and illustrations`;
        token = 512;
        temp = 0.6;
    }else if(source == "essay"){
        prompt = `Write an engagin essay of atmost 5 paragraphs on ${request}`;
        token = 725;
        temp = 0.7;
    }

    return {prompt, token, temp};
}


module.exports = {generatePrompt};