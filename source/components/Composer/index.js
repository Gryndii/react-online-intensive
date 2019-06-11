//Core
import React, {Component} from 'react';

//Components
import {Consumer} from 'components/HOC/withProfile';

//Instruments
import Styles from './styles.m.css';

class Composer extends Component{
    render() {
        return(
            <Consumer>
                {(context) => (
                    <section className={Styles.composer}>
                        <img src={context.avatar} alt=""/>
                        <form>
                            <textarea name="" id="" cols="30" rows="10" placeholder={`Whats on your mind, ${context.currentUserFirstName}?`}></textarea>
                            <input type="submit" value="Post"/>
                        </form>
                    </section>
                )}
            </Consumer>
        );
    }
}

export default Composer;
