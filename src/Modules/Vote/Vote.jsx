import { Component } from 'react';

import Button from '../../Shared/Button/Button';

import styles from './vote.module.scss';

class Vote extends Component {

    state = {
        cats: 0,
        dogs: 0,
    };

    onVote(animal) {
        this.setState(prevState => {
            return { [animal]: prevState[animal] + 1 };
        })
    };

    getTotalVotes() {
        const { cats, dogs } = this.state;
        return (cats + dogs);
    };
    
    getPercentage(animal) {
        const totalVotes = this.getTotalVotes();
        if (!totalVotes) {
            return 0;
        }
        const votes = this.state[animal];
        return (Math.round(votes / totalVotes * 100));
    }

    render() {
        const dogs = this.getPercentage("dogs");
        const cats = this.getPercentage("cats");
        const total = this.getTotalVotes();

        return (
            <div className={styles.vote}>
                <div className={styles.block}>
                    <h2>Please, leave your vote</h2>
                    <Button onClick={() => this.onVote('cats')} type={"button"}>Cats</Button>
                    <Button onClick={() => this.onVote('dogs')} type={"button"}>Dogs</Button>
                </div>
                <div className={styles.block}>
                    <h2>Voting results</h2>
                    <p>Total: {total}</p>
                    <p>Cats: {cats}%</p>
                    <p>Dogs: {dogs}%</p>
                </div>
            </div>
        );
  }
}

export default Vote;