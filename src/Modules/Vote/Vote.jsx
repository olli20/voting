import { Component } from 'react';

import styles from './vote.scss';

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

    getTotal() {
        const { cats, dogs } = this.state;
        return (cats + dogs);
    };
    
    getCatsPercentage() {
        const { cats, dogs } = this.state;
        if (cats === 0 && dogs === 0) {
            return 0;
        }
        return ((cats / (cats + dogs) * 100).toFixed(0));
    }

    getDogsPercentage() {
        const { cats, dogs } = this.state;
        if (cats === 0 && dogs === 0) {
            return 0;
        }
        return ((dogs / (cats + dogs) * 100).toFixed(0));
    }

    render() {
        const dogs = this.getDogsPercentage();
        const cats = this.getCatsPercentage();
        const total = this.getTotal();

        return (
            <>
                <div>
                    <h2>Please, leave your vote</h2>
                    <button onClick={() => this.onVote('cats')} type="button">Cats</button>
                    <button onClick={() => this.onVote('dogs')} type="button">Dogs</button>
                </div>
                <div>
                    <h2>Voting result</h2>
                    <p>Total: {total}</p>
                    <p>Cats: {cats}</p>
                    <p>Dogs: {dogs}</p>
                </div>
            </>
        );
  }
}

export default Vote;