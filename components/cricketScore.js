import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './cricketScoreStyle';

export const CricketScore = () => {
    const [score, setScore] = useState(120)
    const [finalScore, setFinalScore] = useState(159)
    const [over, setOver] = useState(16)
    const [ball, setBall] = useState(0)
    const [out, setOut] = useState(7)
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [currentScore, setCurrentScore] = useState(1)
    const [playerScores, setPlayerScores] = useState([
        { playerName: 'Kirat Boli', score: 10 },
        { playerName: 'N.S Nodhi', score: 0 },
        { playerName: 'R Rumrah', score: 0 },
        { playerName: 'Shashi Henra', score: 0 }
    ]);

    const players = [
        { playerName: 'Kirat Boli', probabilities: [5, 30, 25, 10, 15, 1, 9, 5] },
        { playerName: 'N.S Nodhi', probabilities: [10, 40, 20, 5, 10, 1, 4, 10] },
        { playerName: 'R Rumrah', probabilities: [20, 30, 15, 5, 5, 1, 4, 20] },
        { playerName: 'Shashi Henra', probabilities: [3, 25, 5, 0, 5, 1, 4, 30] }
    ];

    const handleBowl = () => {
        if (over < 20) {
            if (ball < 5) {
                setBall(ball + 1);
            } else {
                setBall(0);
                setOver(over + 1);
            }
        }
        if (out === 10) {
            Alert.alert('Bengaluru lost the match')
            return;
        }
        if (over === 20) {
            Alert.alert('Bengaluru lost the match')
            return;
        }

        if (score >= 160) {
            Alert.alert(`WOW Bengaluru Won the match with ${10 - out} wicket.`)
            return;

        } else if (score <= finalScore || out < 10 || over < 20) {
            const randomNum = Math.floor(Math.random() * 100) + 1;
            const currentPlayer = players[currentPlayerIndex];
            let runsScored = 0;

            let cumulativeProbability = 0;
            for (let i = 0; i < currentPlayer.probabilities.length; i++) {
                cumulativeProbability += currentPlayer.probabilities[i];
                if (randomNum <= cumulativeProbability) {
                    if (i === 7) {
                        setOut(out + 1);
                        setCurrentPlayerIndex((currentPlayerIndex + 1) % 4);
                        break;
                    } else {
                        runsScored = i + 1;
                        setScore(score + runsScored);
                        break;
                    }
                }
            }
            if (runsScored === 0) {
                setCurrentScore('Out')
                setOut(out + 1);
                const updatedPlayerScores = [...playerScores];
                updatedPlayerScores[currentPlayerIndex].score += runsScored;
                setPlayerScores(updatedPlayerScores);
                setCurrentPlayerIndex((currentPlayerIndex + 1) % 4);
            } else {
                setCurrentScore(runsScored)
                setScore(score + runsScored);
                const updatedPlayerScores = [...playerScores];
                updatedPlayerScores[currentPlayerIndex].score += runsScored;
                setPlayerScores(updatedPlayerScores);
            }
            if (runsScored % 2 !== 0&& runsScored<6) {
                [playerScores[currentPlayerIndex].playerName, playerScores[(currentPlayerIndex + 1) % 4].playerName] = [playerScores[(currentPlayerIndex + 1) % 4].playerName, playerScores[currentPlayerIndex].playerName];
                [playerScores[currentPlayerIndex].score, playerScores[(currentPlayerIndex + 1) % 4].score] = [playerScores[(currentPlayerIndex + 1) % 4].score, playerScores[currentPlayerIndex].score]
                setCurrentScore(runsScored)
            }
            if (runsScored === 7) {
                setCurrentScore(0)
                setScore(score + 0);
                const updatedPlayerScores = [...playerScores];
                updatedPlayerScores[currentPlayerIndex].score += 0;
                setPlayerScores(updatedPlayerScores);
            }
            return;

        } else if (score == finalScore && out < 10 && over === 20) {
            Alert.alert('Match draw')
            return;
        }
        else if (score < finalScore || out === 10 || over === 20) {
            Alert.alert('Bengaluru lost the match')
            return;
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.header}>T20 Cricket Score Board</Text>
            <Text style={[styles.header, { fontSize: 18 }]}>Chennai ({finalScore}-9) VS Bengaluru ({score} - {out})</Text>
            <View style={styles.mainwrap}>
                <View>
                    <View style={styles.scorestyleWrap}>
                        <Text style={styles.scorestyle}>
                            Score:
                        </Text>
                        <Text style={styles.scorestyle}>
                            {score} - {out}
                        </Text>
                    </View>
                    <View style={styles.scorestyleWrap}>
                        <Text style={styles.scorestyle}>
                            Overs:
                        </Text>
                        {ball === 0 ?
                            (<Text style={styles.scorestyle}>{over}</Text>) :
                            (<Text style={styles.scorestyle}>{over}.{ball}</Text>)}

                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.currentScore}>{currentScore}</Text>
                    <Text style={styles.scorestyle}>Runs</Text>
                </View>

            </View>
            <View style={styles.playerBox}>
                <Text style={[styles.scorestyle, { marginTop: 10, alignSelf: 'center' }]}>
                    {playerScores[currentPlayerIndex].playerName} ({playerScores[currentPlayerIndex].score}) *
                </Text>
                <Text style={[styles.scorestyle, { marginBottom: 10, alignSelf: 'center' }]}>
                    {playerScores[(currentPlayerIndex + 1) % 4].playerName} ({playerScores[(currentPlayerIndex + 1) % 4].score})
                </Text>
            </View>
            <TouchableOpacity
                style={styles.touchStyle}
                onPress={handleBowl}>
                <Text style={styles.bowl}>Bowl</Text>
            </TouchableOpacity>
        </View>
    )
}


