//Core
import React, {Component} from 'react';

//Components
import {withProfile} from 'components/HOC/withProfile';

//Instruments
import Styles from './styles.m.css';
import {func, string} from 'prop-types';

export class Composer extends Component{
    static propTypes = {
        _createPost: func.isRequired,
        avatar: string.isRequired,
        currentUserFirstName: string.isRequired,
    };

    state = {
        comment: '',
    };

    _getComment = (e) => {
        this.setState({
            comment: e.target.value,
        })
    };

    _submitComment = () => {
        const {comment} = this.state;

        if(!comment) return null;

        this.props._createPost(comment);

        this.setState({comment: ''});
    };

    _handleFormSubmit = (e) => {
        e.preventDefault();
        this._submitComment();
    };

    _submitOnEnter = (e) => {
        const isEnter = e.key === 'Enter';
        if(isEnter) {
            e.preventDefault();
            this._submitComment();
        }
    };

    render() {
        const {comment} = this.state;
        const {avatar, currentUserFirstName} = this.props;
        return(
            <section className={Styles.composer}>
                <img src={avatar} alt=""/>
                <form onSubmit={this._handleFormSubmit}>
                            <textarea name="" id="" cols="30" rows="10"
                                      placeholder={`Whats on your mind, ${currentUserFirstName}?`}
                                      onChange={this._getComment}
                                      onKeyDown={this._submitOnEnter}
                                      value={comment}
                            >
                            </textarea>
                    <input type="submit" value="Post"/>
                </form>
            </section>
        );
    }
}

export default withProfile(Composer);
