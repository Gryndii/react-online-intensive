//Core
import React, {Component} from 'react';

//Instruments
import Styles from './styles.m.css';

class Composer extends Component{
    render() {
        const {avatar, currentUserFirstName} = this.props;
        return(
            <section className={Styles.composer}>
                <img src={avatar} alt=""/>
                <form>
                    <textarea name="" id="" cols="30" rows="10" placeholder={`Whats on your mind, ${currentUserFirstName}?`}></textarea>
                    <input type="submit" value="Post"/>
                </form>
            </section>
        );
    }
}

export default Composer;
