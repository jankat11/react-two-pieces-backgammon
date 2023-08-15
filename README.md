# Backgammon 

The question "What would be the probability of the starting white player winning if backgammon were played with only two checkers" is being answered in a simulation prepared with the help of React.js.

Furthermore, the accuracy of the answer resulting from the simulation aligns with the Python simulation I developed below:
```python 
from random import randint

def isWhiteWon():
    whitePosition = 0
    blackPosition = 0
    while (blackPosition <= 24):
        whitePosition += randint(1, 6)
        if whitePosition > 24:
            break
        blackPosition += randint(1, 6)
    return (whitePosition - blackPosition) > 0

def main(): 
    whiteWonAmount = 0
    blackWonAmount = 0
    for _ in range(1000000):
        if isWhiteWon():
            whiteWonAmount += 1
        else: 
            blackWonAmount += 1
    ratio = whiteWonAmount / (whiteWonAmount + blackWonAmount)
    print(f"white won: %{ratio * 100}")

main() # white won: ~ %60.5

```

