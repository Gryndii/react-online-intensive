import React, {Component} from 'react';
import avatar from 'theme/assets/lisa';

class Composer extends Component{
    render() {
        return(
            <section>
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
