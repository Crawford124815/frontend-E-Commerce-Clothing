import React from 'react'
import './CSS/About.css'
import owner_img from '../Components/Assets/placeholder.png'

const About = () => {
  return (
    <div className='about__container'>
        <div className="about__donate">
            <h2>Donation Box</h2>
            <h3>Every dollar donated goes to:(fill in later)</h3>
            <button>DONATE NOW</button>
        </div>
        <div className="about__past-donations">
            <h2>What Started The Idea</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus labore ullam perspiciatis ipsa nulla, pariatur voluptates itaque eos facere voluptatum ut! Deserunt amet eius nisi similique eum perspiciatis corrupti adipisci!</p>
        <div className="about__where--it-goes">
            <h2>Where It Goes</h2>
            <h3>Charaties and Churches</h3>
            <div className="about__charaties-list">
                <ul>
                    <li>Name: <span className='charaty__name'>placeholder</span>---- Amount: <span className='charaty__amount'>$Amount</span></li>
                    <li>Name: <span className='charaty__name'>placeholder</span>---- Amount: <span className='charaty__amount'>$Amount</span></li>
                    <li>Name: <span className='charaty__name'>placeholder</span>---- Amount: <span className='charaty__amount'>$Amount</span></li>
                    <li>Name: <span className='charaty__name'>placeholder</span>---- Amount: <span className='charaty__amount'>$Amount</span></li>
                    <li>Name: <span className='charaty__name'>placeholder</span>---- Amount: <span className='charaty__amount'>$Amount</span></li>
                    <li>Name: <span className='charaty__name'>placeholder</span>---- Amount: <span className='charaty__amount'>$Amount</span></li>
                    <li>Name: <span className='charaty__name'>placeholder</span>---- Amount: <span className='charaty__amount'>$Amount</span></li>
                </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About