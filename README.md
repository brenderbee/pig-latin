
### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
|**The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels**|  User Input: "3" | Output: "3" |
|**The program adds "ay" to single-letter words beginning with a vowel**| User Input: "i" | Output: "iay" |
|**The program adds "ay" to single-letter words beginning with a vowel regardless of case**| User Input: "I" | Output: "Iay" |
|**The program adds "way" to multi-letter words beginning with a vowel**| User Input: "eat" | Output: "eatway" |
|**The program adds "way" to multi-letter words beginning with a vowel regardless of case**| User Input: "Eat" | Output: "Eatway" |
|**The program moves all of the first consecutive consonants to the end and adds "ay" for words beginning with one or more consonants**| User Input: "cream" | Output: "eamcray" |
|**The program moves all of the first consecutive consonants to the end and adds "ay" for words beginning with one or more consonants regardless of case**| User Input: "Cream" | Output: "eamCray" |
|**The program moves "qu" when present in the first consecutive consonants to the end and adds "ay"**| User Input: "queen" | Output: "eenquay" |
|**The program treats "y" as a consonant when words begin with "y"**| User Input: "year" | Output: "earyay" |
