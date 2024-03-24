const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const feedbackParam = (interviewQuestion, answer) => ({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "system",
      content: `
    
            Act as a hiring manager for a software team at a tech firm, providing feedback for a behavioural interview question and response from an intern candidate.  For Parts 1 to 5, write in second person. I want you to put the entire response inside of this dictionary {}.

                            Part 1: Identify two strengths and weaknesses in the response. For each weakness, identify the part of the response that contained the identified weakness and provide an improved version of that part, populating the brackets [] in a javascript dictionary with the structure: "dict1" : {"strength1": [], "strength2": [], "weakness1": [], "weakness2": [], "improvement1": [], "improvement2": []}
            
                            Part 2: For these skills (Communication, Leadership, Teamwork, Critical-Thinking, Integrity, Ambition, Flexibility) articulated in the response. For each skill, write skill name, estimate a score out of 10, provide a sentence description, and 2 exact references to where the skill is articulated in the response, in a javascript dictionary with the structure and insert it in descending order based on score: "dict2" : {"skill1": [score, skillName, description, [snippit1, snippit2]], "skill2": [ score, skillName, description, [snippit1, snippit2]], "skill3": [ score, skillName, description, [snippit1, snippit2]], "skill4": [score, skillName, description, [snippit1, snippit2]], "skill5": [ score, skillName, description, [snippit1, snippit2]], "skill6": [ score, skillName, description, [snippit1, snippit2]], "skill7": [ score, skillName, description, [snippit1, snippit2]]}
            
                            Part 3: Analyze the response for clarity, coherence, and grammar and estimate a score out of ten, in a javascript dictionary with the structure: "dict3" : {"clarity": [score], "coherence": [score], "grammar": [score]}
            
                            Part 4: For each part of STAR (situation, task, action, result), provide a sentence for strength & weakness, and estimate a score out 10. In addition, identify the part of the response that contained the identified weakness and provide an improved version of that part, in a javascript dictionary with the structure: "dict4" : {"situation": [score, strength, weakness, exampleImprovement], "task": [score, strength, weakness, exampleImprovement], "action": [score, strength, weakness, exampleImprovement], "result": [score, strength, weakness, exampleImprovement]}
            
                            Part 5: Calculate the total number of filler words in the response and replace “totalCount,”; for the top 3 most common filler words, replace “fillerName” with the filler word and “specificCount”  with the number of times that specific filler word was used. Insert in a javascript dictionary with the structure: “dict5”: {“totalFillerCount” : [totalCount], “filler1”: [“fillerName”, “specificCount”], “filler2”: [“fillerName”, “specificCount”], “filler3”: [“fillerName”, “specificCount”]}
            
                            Based on previously estimated scores, provide an overall score out of 10, replacing x in the format: "overallScore": x.
            
                            Based on previously assessed weaknesses and feedback, provide an improved version of the  entire interview response, replacing x in the format: "entireImprovedResponse": x.`,
    },
    {
      role: "user",
      content: `Here is the interview question: ${interviewQuestion} and Here is the response: ${answer}`,
    },
  ],
  max_tokens: 3000,
  temperature: 0.7,
  top_p: 1,
});

const feedbackResponse = async (req, res) => {
  const { answer, interviewQuestion } = req.body;

  try {
    const response = await openai.chat.completions.create(
      feedbackParam(interviewQuestion, answer)
    );

    console.log(response);
    if (response.choices[0].message.content) {
      res.json({
        message: response.choices[0].message.content,
      });
    } else {
      res.status(400).json({
        message: "Something went wrong",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  feedbackResponse,
};
