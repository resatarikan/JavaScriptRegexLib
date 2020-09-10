//Regular expressions generally used at validations.

function extractEmails (text)
{
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

result = extractEmails(document.body.innerHTML)
console.log(result)
