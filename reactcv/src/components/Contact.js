import React from 'react';
import ReactDOM from 'react-dom';

import Card from '../skillcards/card';
import CardList from '../skillcards/cardlist';
import SkillCards from '../skillcards/skillcards';

const Contact = () => (
    <div className="body">
        <div className="contact">
            <div className="skill-cards-section-1"> 
      	        <SkillCards />
            </div>
        </div> 
    </div>
);

export default Contact;