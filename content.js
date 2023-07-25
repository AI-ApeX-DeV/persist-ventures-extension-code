  // code by syed sharukhali farookali naziyabegum for persist ventures internship
  chrome.runtime.onMessage.addListener(function (message,sender,sendResponse){
    if(message.action ==="fill_form"){
        const openAiApiKey="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";
        const formData=getFormDataFromSomewhere();
        let url = "https://api.openai.com/v1/engines/davinci-codex/completions";
        const prompt="fill in the form with the following information:"+JSON.stringify(formData);
        axios.post(url,{
            prompt:prompt,
            max_tokens:100,
            temperature:0.7
        },{
            headers:{
                'Authorization': `Bearer ${openAiApiKey}`,
            }
        }).then(response=>{
            const filledForm=response.data.choices[0].text;
        }).catch(error=>{
            console.error("error while calling OpenAi API:",error);
        });
        
    }
});
  // code by syed sharukhali farookali naziyabegum for persist ventures internship