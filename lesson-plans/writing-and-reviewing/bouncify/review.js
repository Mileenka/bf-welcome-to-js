'use strict';

/* ===== CODE REVIEW =====

  PROGRAM NAME: Bouncify Text

  BEHAVIOR:
    TITLE: Bouncify the text
    DESCRIPTION: The program takes user input and converts every other letter to uppercase or lowercase, while ignoring other characters.
    USER STORY: As a user, I want to see a bouncified version of the text I enter.
    TEST CASES:
      - has only letters:
        - 'a' -> 'A'
        - 'Hello' -> 'HeLlO'
        - 'HELLO' -> 'HeLlO'
        - 'cheese' -> 'ChEeSe'
      - has spaces and letters:
        - 'good bye' -> 'GoOd ByE'
        - ' row a boat ' -> ' RoW a BoAt '
      - has everything:
        - '12 Good Byes!' -> '12 GoOd ByEs!'
        - 'h1! Hoe gaat het?' -> 'H1! hOe GaAt HeT?'
        - '0 . x . 0' -> '0 . X . 0'

  CODE IS FORMATTED: Yes

  LABELED GOALS: Not applicable

  COMMENTS: The code could benefit from more comments to explain the logic and steps involved in bouncifying the text.

  VARIABLES: The code uses the following variables:
    - `input`: Stores the user input text
    - `bouncified`: Stores the bouncified version of the text
    - `isLetter`: Determines if a character is a letter or not

  LOGS: The program logs the bouncified text using `console.log`.

  THE LOGIC IS CLEAR: Yes

*/
