import { useState } from 'react'


const Unicafe = () => {

    const anectodes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array(anectodes.length).fill(0))

    const handleNextClick = () => {
        const randomIndex = Math.floor(Math.random() * anectodes.length)
        setSelected(randomIndex)
    }

    const handleVoteClick = () => {
        const updatedVotes = [...votes]
        updatedVotes[selected] += 1
        setVotes(updatedVotes)
    }

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const Statistics = (props) => {

        if (props.all === 0) {
                return <p>No feedback given</p>
            }

        return (
            <div>
                <table>
                <tbody>
                    <tr>
                        <td>good</td>
                        <td>{good}</td>
                    </tr>
                    <tr>
                        <td>neutral</td>
                        <td>{neutral}</td>
                    </tr>
                    <tr>
                        <td>bad</td>
                        <td>{bad}</td>
                    </tr>
                    <tr>
                        <td>all</td>
                        <td>{good + neutral + bad}</td>
                    </tr>
                    <tr>
                        <td>average</td>
                        <td>{(good - bad) / (good + neutral + bad)}</td>
                    </tr>
                    <tr>
                        <td>positive</td>
                        <td>{(good / (good + neutral + bad)) * 100 + ' %'}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }

    

    const handleGoodClick = () => {
        const updatedGood = good + 1
        setGood(updatedGood)
    }

    const handleNeutralClick = () => {
        const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)
    }

    const handleBadClick = () => {
        const updatedBad = bad + 1
        setBad(updatedBad)
    }

    const maxVotes = Math.max(...votes)
    const mostVotedIndex = votes.indexOf(maxVotes)

    return (
        <div>
            <h1>give feedback</h1>

            <button onClick={handleGoodClick}>good</button>
            <button onClick={handleNeutralClick}>neutral</button>
            <button onClick={handleBadClick}>bad</button>

            <h2>statistics</h2>

            <Statistics good={good} neutral={neutral} bad={bad} all={good + neutral + bad} />
            <h2>Anecdotes of the day</h2>
            <p>{anectodes[selected]}</p>
            <p>{votes[selected]}</p>
            <button onClick={handleNextClick}>Next Anecdote</button> 
            <button onClick={handleVoteClick}>Vote</button>
            {maxVotes > 0 && (
                <div>
                    <h2>Anecdote with most votes</h2>
                    <p>{anectodes[mostVotedIndex]}</p>
                    <p>{votes[mostVotedIndex]} votes</p>
                </div>
            )}
        </div>
    )
}

export default Unicafe