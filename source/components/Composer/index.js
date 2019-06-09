//Core
import React, {Component} from 'react';

//Instruments
import avatar from 'theme/assets/lisa';
import Styles from './styles.m.css';

class Composer extends Component{
    render() {
        return(
            <section className={Styles.composer}>
                <img src={avatar} alt=""/>
                <form>
                    <textarea name="" id="" cols="30" rows="10" placeholder="What`s on your mind, Lisa?"></textarea>
                    <input type="submit" value="Post"/>
                </form>
            </section>
        );
    }
}

export default Composer;
